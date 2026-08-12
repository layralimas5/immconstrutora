/**
 * Tira a tarja preta dos frames do vídeo da garagem com piso epóxi. O vídeo veio
 * pelo WhatsApp em 9:16 com a imagem real no meio, então o frame cru traz uma
 * faixa preta em cima e embaixo.
 *
 * Uso: node scripts/preparar-fotos-galeria.mjs
 * Roda uma vez só; o resultado fica versionado em public/img.
 */
import sharp from 'sharp'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const out = resolve(here, '../public/img')
const criativos = resolve(here, '../../marketing/campanhas/google-ads-2026-07-02/criativos')

/** Acha a primeira e a última linha que não são tarja preta. */
async function detectLetterbox(input) {
  const image = sharp(input)
  const { width, height } = await image.metadata()
  const { data } = await image.clone().greyscale().raw().toBuffer({ resolveWithObject: true })

  const rowIsContent = (y) => {
    let sum = 0
    for (let x = 0; x < width; x += 4) sum += data[y * width + x]
    return sum / Math.ceil(width / 4) > 24
  }

  let top = 0
  while (top < height && !rowIsContent(top)) top += 1

  let bottom = height - 1
  while (bottom > top && !rowIsContent(bottom)) bottom -= 1

  return { left: 0, top, width, height: bottom - top + 1 }
}

const frames = [
  {
    src: resolve(
      'C:/Users/layra/AppData/Local/Temp/claude/c--Users-layra-OneDrive--rea-de-Trabalho-Empresas-Layra-Lima---Central/8d3844a4-a222-4e6c-9324-447787ad2462/scratchpad/frames/v1-08.jpg',
    ),
    name: 'garagem-piso-epoxi.webp',
  },
  {
    src: resolve(
      'C:/Users/layra/AppData/Local/Temp/claude/c--Users-layra-OneDrive--rea-de-Trabalho-Empresas-Layra-Lima---Central/8d3844a4-a222-4e6c-9324-447787ad2462/scratchpad/frames/v1-06.jpg',
    ),
    name: 'garagem-vagas-demarcadas.webp',
  },
]

for (const frame of frames) {
  const box = await detectLetterbox(frame.src)
  const info = await sharp(frame.src)
    .extract(box)
    .webp({ quality: 82 })
    .toFile(resolve(out, frame.name))
  console.log(`${frame.name.padEnd(30)} ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}

/**
 * Fundo do topo: o salão comercial, recortado em 16:9 na faixa das paredes.
 *
 * Escolhido por ser a foto de maior resolução real do acervo (1200px de
 * largura), então a ampliação até 1600 é pequena e a imagem não perde nitidez.
 * Entra atrás de uma camada escura de 85%, que é o que garante o contraste do
 * texto por cima.
 */
const fundo = await sharp(resolve(criativos, 'WhatsApp Image 2026-07-02 at 14.33.19.jpeg'))
  .extract({ left: 0, top: 430, width: 1200, height: 675 })
  .resize({ width: 1600, kernel: 'lanczos3' })
  .sharpen({ sigma: 0.7 })
  .webp({ quality: 78 })
  .toFile(resolve(out, 'hero-fundo.webp'))
console.log(
  `${'hero-fundo.webp'.padEnd(30)} ${fundo.width}x${fundo.height}  ${Math.round(fundo.size / 1024)} KB`,
)
