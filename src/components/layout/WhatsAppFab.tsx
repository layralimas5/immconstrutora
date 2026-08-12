import { motion, useReducedMotion } from 'framer-motion'
import { WhatsAppIcon } from '@/components/ui/icons'
import { whatsappLink } from '@/lib/whatsapp'
import { trackWhatsAppClick } from '@/lib/analytics'
import { useScrolled } from '@/hooks/useScrolled'

export function WhatsAppFab() {
  const visible = useScrolled(600)
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a IMM no WhatsApp"
      onClick={() => trackWhatsAppClick('botao_flutuante')}
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6 sm:h-16 sm:w-16"
      initial={false}
      animate={
        reduceMotion
          ? { opacity: visible ? 1 : 0 }
          : { opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }
      }
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </motion.a>
  )
}
