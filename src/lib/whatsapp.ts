import { company, defaultWhatsappMessage } from '@/content/site'

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsappLink(message: string = defaultWhatsappMessage): string {
  return `${company.whatsapp.href}?text=${encodeURIComponent(message)}`
}
