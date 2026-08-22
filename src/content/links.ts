import { company, gallery } from '@/content/site'

/**
 * Conteúdo da página de links da bio (`/links`).
 *
 * É a página que fica no link do Instagram. Só três coisas importam aqui:
 * pedir orçamento, mostrar trabalho entregue e conseguir avaliação no Google.
 */

export const linksPage = {
  title: 'Links da IMM',
  eyebrow: company.region,
  headline: 'Pintura e reforma com obra limpa e prazo cumprido',
  description:
    'Mais de 20 anos de obra em Vila Velha, Vitória, Serra e Cariacica. Orçamento e visita técnica sem custo.',
} as const

export const whatsappMessage =
  'Olá! Vim pelo link do Instagram e gostaria de um orçamento com a IMM Reformas.'

export type ProjectHighlight = {
  readonly src: string
  readonly alt: string
  readonly caption: string
  readonly tag: string
}

/**
 * Trabalhos em destaque. São os mesmos da galeria do site, na ordem que faz
 * sentido para quem chega pelo Instagram: resultado pronto antes de bastidor.
 */
const HIGHLIGHT_SOURCES = [
  '/img/garagem-piso-epoxi.webp',
  '/img/corredor.webp',
  '/img/escada-predio.webp',
  '/img/garagem-vagas-demarcadas.webp',
  '/img/salao-comercial.webp',
  '/img/parede.webp',
] as const

export const projectHighlights: readonly ProjectHighlight[] = HIGHLIGHT_SOURCES.map((src) => {
  const item = gallery.find((galleryItem) => galleryItem.src === src)
  if (!item) throw new Error(`Trabalho em destaque não encontrado na galeria: ${src}`)
  return item
})
