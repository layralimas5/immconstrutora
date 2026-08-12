import { useEffect } from 'react'
import { initAnalytics, trackEvent } from '@/lib/analytics'

/** Marcos de rolagem, em porcentagem da altura total do documento. */
const SCROLL_MILESTONES = [25, 50, 75, 90] as const

/** Seções observadas, na ordem em que aparecem. Espelha o App. */
const TRACKED_SECTIONS = [
  'inicio',
  'servicos',
  'diferenciais',
  'garantias',
  'processo',
  'trabalhos',
  'duvidas',
  'orcamento',
] as const

function watchScrollDepth(): () => void {
  const pending = new Set<number>(SCROLL_MILESTONES)
  let scheduled = false

  const measure = () => {
    scheduled = false
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    if (scrollable <= 0) return

    const percent = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100

    for (const milestone of [...pending]) {
      if (percent >= milestone) {
        pending.delete(milestone)
        trackEvent('scroll_depth', { percent: milestone })
      }
    }

    if (pending.size === 0) window.removeEventListener('scroll', onScroll)
  }

  const onScroll = () => {
    if (scheduled) return
    scheduled = true
    window.requestAnimationFrame(measure)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  measure()

  return () => window.removeEventListener('scroll', onScroll)
}

function watchSections(): () => void {
  if (!('IntersectionObserver' in window)) return () => {}

  const seen = new Set<string>()
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = entry.target.id
        if (!entry.isIntersecting || seen.has(id)) continue

        seen.add(id)
        observer.unobserve(entry.target)
        const order = TRACKED_SECTIONS.findIndex((section) => section === id) + 1
        trackEvent('section_view', { section: id, order })
      }
    },
    { threshold: 0.4 },
  )

  for (const id of TRACKED_SECTIONS) {
    const element = document.getElementById(id)
    if (element) observer.observe(element)
  }

  return () => observer.disconnect()
}

/**
 * Liga a medição da página: carrega o gtag, marca profundidade de rolagem e
 * registra a primeira vez que cada seção entra na tela. Junto com os cliques,
 * é o que mostra até onde o visitante acompanhou antes de sair.
 */
export function useFunnelTracking(): void {
  useEffect(() => {
    initAnalytics()

    const stopScroll = watchScrollDepth()
    const stopSections = watchSections()

    return () => {
      stopScroll()
      stopSections()
    }
  }, [])
}
