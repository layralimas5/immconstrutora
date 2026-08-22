/**
 * Camada única de medição do site.
 *
 * Carrega o gtag.js sob demanda e só se houver ID configurado, então em
 * ambiente sem variável de ambiente nada é baixado e nada é enviado.
 *
 * Configuração (Netlify > Site configuration > Environment variables):
 * - VITE_GA4_ID              G-XXXXXXXXXX     comportamento e funil
 * - VITE_ADS_ID              AW-123456789     conta do Google Ads
 * - VITE_ADS_LEAD_LABEL      xxxxxxxxxxxxx    conversão do formulário
 * - VITE_ADS_WHATSAPP_LABEL  xxxxxxxxxxxxx    conversão do clique no WhatsApp
 */

const GA4_ID = import.meta.env.VITE_GA4_ID?.trim() ?? ''
const ADS_ID = import.meta.env.VITE_ADS_ID?.trim() ?? ''
const ADS_LEAD_LABEL = import.meta.env.VITE_ADS_LEAD_LABEL?.trim() ?? ''
const ADS_WHATSAPP_LABEL = import.meta.env.VITE_ADS_WHATSAPP_LABEL?.trim() ?? ''

export type EventParams = Readonly<Record<string, string | number | boolean>>

/** Cada ponto de saída da página. Usado para saber de onde vêm os cliques. */
export type ClickLocation =
  | 'header'
  | 'hero'
  | 'servico'
  | 'servicos_rodape'
  | 'garantias'
  | 'trabalhos'
  | 'duvidas'
  | 'orcamento'
  | 'formulario'
  | 'rodape'
  | 'botao_flutuante'
  /** Página de links da bio do Instagram (`/links`). */
  | 'bio'

let ready = false

/** Sem medição configurada, `window.gtag` não existe e a chamada vira no-op. */
function gtag(command: GtagCommand, ...args: readonly unknown[]): void {
  window.gtag?.(command, ...args)
}

/** Injeta o gtag.js uma única vez e registra as contas configuradas. */
export function initAnalytics(): void {
  if (ready) return

  const primaryId = GA4_ID || ADS_ID
  if (!primaryId) {
    if (import.meta.env.DEV) {
      console.info('[analytics] sem VITE_GA4_ID / VITE_ADS_ID: medição desligada.')
    }
    return
  }

  window.dataLayer = window.dataLayer ?? []
  /** Enfileira as chamadas até o gtag.js carregar e assumir o lugar deste shim. */
  window.gtag = (command: GtagCommand, ...args: readonly unknown[]) => {
    window.dataLayer?.push([command, ...args])
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`
  script.addEventListener('error', () => {
    console.warn('[analytics] não foi possível carregar o gtag.js.')
  })
  document.head.appendChild(script)

  window.gtag?.('js', new Date())
  if (GA4_ID) window.gtag?.('config', GA4_ID, { send_page_view: true })
  if (ADS_ID) window.gtag?.('config', ADS_ID)

  ready = true
}

/** Envia um evento para o GA4. */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (import.meta.env.DEV) console.debug('[analytics]', name, params)
  gtag('event', name, params)
}

/** Dispara uma conversão do Google Ads. Sem label configurado, não faz nada. */
function trackAdsConversion(label: string): void {
  if (!ADS_ID || !label) return
  gtag('event', 'conversion', { send_to: `${ADS_ID}/${label}` })
}

/**
 * Clique em qualquer saída para o WhatsApp.
 * Conta como micro conversão: é o gargalo real do funil desta página.
 */
export function trackWhatsAppClick(location: ClickLocation, service?: string): void {
  trackEvent('whatsapp_click', service ? { location, service } : { location })
  trackAdsConversion(ADS_WHATSAPP_LABEL)
}

/** Formulário de orçamento enviado com sucesso. É a conversão principal. */
export function trackLead(service: string, city: string): void {
  trackEvent('generate_lead', { location: 'formulario', service, city })
  trackAdsConversion(ADS_LEAD_LABEL)
}

export function trackPhoneClick(location: ClickLocation): void {
  trackEvent('phone_click', { location })
}
