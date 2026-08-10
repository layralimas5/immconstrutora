import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  delay?: number | undefined
  className?: string | undefined
  /** Use 'li' quando o bloco for filho direto de uma <ul> ou <ol>. */
  as?: 'div' | 'li' | undefined
}

/** Fade + subida sutil quando o bloco entra na viewport. Respeita prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const Tag = as === 'li' ? 'li' : 'div'
  const MotionTag = as === 'li' ? motion.li : motion.div

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
