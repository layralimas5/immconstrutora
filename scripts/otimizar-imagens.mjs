/**
 * Converte as fotos de obra para WebP e joga em `public/img`.
 *
 * Uso: npm run img
 *
 * Para adicionar uma foto nova, coloque o arquivo em
 * `../marketing/fotos/` e acrescente uma entrada em JOBS. O nome de saída
 * precisa ser descritivo, porque ele aparece na URL e conta para SEO.
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const client = resolve(here, '../..')
const out = resolve(here, '../public/img')
const criativos = `${client}/marketing/campanhas/google-ads-2026-07-02/criativos`

/** @type {{src: string, name: string, width: number}[]} */
const JOBS = [
  { src: `${client}/marketing/fotos/banner-marca-imm.webp`, name: 'banner.webp', width: 1920 },
  {
    src: `${criativos}/WhatsApp Image 2026-07-02 at 14.31.23.jpeg`,
    name: 'preparo-parede.webp',
    width: 900,
  },
  {
    src: `${criativos}/WhatsApp Image 2026-07-02 at 14.32.09.jpeg`,
    name: 'pintura-rolo.webp',
    width: 900,
  },
  {
    src: `${criativos}/WhatsApp Image 2026-07-02 at 14.32.41.jpeg`,
    name: 'escada-predio.webp',
    width: 900,
  },
  {
    src: `${criativos}/WhatsApp Image 2026-07-02 at 14.33.19.jpeg`,
    name: 'salao-comercial.webp',
    width: 900,
  },
]

await mkdir(out, { recursive: true })

for (const job of JOBS) {
  try {
    const info = await sharp(job.src)
      .rotate()
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(resolve(out, job.name))

    console.log(`${job.name.padEnd(24)} ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
  } catch (error) {
    console.error(`falhou: ${job.name}`, error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
