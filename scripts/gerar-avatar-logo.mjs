/**
 * Gera o avatar redondo da marca a partir de `public/img/logo.png`.
 *
 * Uso: npm run avatar
 *
 * Por que existe: o logo original é uma arte larga (135x78 de conteúdo útil)
 * com fundo transparente e traço azul escuro. Sobre o fundo navy da página de
 * links ele sumiria, e recortado direto num círculo as pontas seriam cortadas.
 * Aqui o conteúdo é aparado, centralizado e apoiado num disco branco, do jeito
 * que uma foto de perfil funciona.
 */
import sharp from 'sharp'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const imgDir = resolve(here, '../public/img')

const SOURCE = `${imgDir}/logo.png`
const OUTPUT = `${imgDir}/logo-avatar.png`

/** Lado do arquivo final. 512 cobre telas 3x sem ficar pesado. */
const SIZE = 512

/**
 * Quanto da largura do disco a arte pode ocupar.
 *
 * Um retângulo inscrito num círculo cabe até `largura / diagonal` do diâmetro.
 * Para 135x78 isso dá 0,865. Usamos 0,78 para sobrar respiro nas laterais, que
 * é o que faz o avatar parecer equilibrado em vez de espremido.
 */
const CONTENT_RATIO = 0.78

const artwork = await sharp(SOURCE)
  .trim({ threshold: 10 })
  .resize({
    width: Math.round(SIZE * CONTENT_RATIO),
    fit: 'inside',
    withoutEnlargement: false,
  })
  .toBuffer()

const circle = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
     <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#ffffff" />
   </svg>`,
)

await sharp(circle)
  .composite([{ input: artwork, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT)

const { width, height, size } = await sharp(OUTPUT).metadata()
console.log(`logo-avatar.png gerado: ${width}x${height}, ${Math.round((size ?? 0) / 1024)} kB`)
