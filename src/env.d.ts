/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Measurement ID do Google Analytics 4. Ex: G-XXXXXXXXXX */
  readonly VITE_GA4_ID?: string
  /** ID de conversão do Google Ads. Ex: AW-123456789 */
  readonly VITE_ADS_ID?: string
  /** Label da conversão "orçamento enviado pelo formulário". */
  readonly VITE_ADS_LEAD_LABEL?: string
  /** Label da conversão "clique no WhatsApp". */
  readonly VITE_ADS_WHATSAPP_LABEL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

type GtagCommand = 'js' | 'config' | 'event' | 'set' | 'consent'

interface Window {
  dataLayer?: unknown[]
  gtag?: (command: GtagCommand, ...args: readonly unknown[]) => void
}
