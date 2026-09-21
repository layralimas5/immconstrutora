import { company, defaultWhatsappMessage } from '@/content/site'

/**
 * Marca, na própria conversa, quem chegou pelo anúncio pago.
 *
 * O clique no WhatsApp sai do site e vira uma conversa fora do alcance de
 * qualquer tag. Sem essa marca não existe como separar, na caixa de entrada,
 * quem veio do Google Ads de quem veio do Instagram ou do boca a boca.
 */
const PAID_ORIGIN_SUFFIX = '\n\n(vim pelo anúncio do Google)'

/** Sobrevive à navegação interna e ao recarregamento sem os parâmetros. */
const PAID_ORIGIN_KEY = 'imm:paid-origin'

/** Todo clique vindo do Google Ads chega com `gclid` na URL de destino. */
function cameFromPaidAd(): boolean {
  if (typeof window === 'undefined') return false

  const params = new URLSearchParams(window.location.search)
  const isPaidEntry = params.has('gclid') || params.get('utm_source') === 'google-ads'

  try {
    if (isPaidEntry) window.sessionStorage.setItem(PAID_ORIGIN_KEY, '1')
    return isPaidEntry || window.sessionStorage.getItem(PAID_ORIGIN_KEY) === '1'
  } catch {
    /** Navegador com armazenamento bloqueado: resta a URL da visita atual. */
    return isPaidEntry
  }
}

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsappLink(message: string = defaultWhatsappMessage): string {
  const text = cameFromPaidAd() ? `${message}${PAID_ORIGIN_SUFFIX}` : message
  return `${company.whatsapp.href}?text=${encodeURIComponent(text)}`
}
