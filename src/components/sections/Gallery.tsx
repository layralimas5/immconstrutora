import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { CloseIcon, InstagramIcon } from '@/components/ui/icons'
import { company, gallery } from '@/content/site'
import { trackEvent } from '@/lib/analytics'

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()
  const activeItem = openIndex === null ? undefined : gallery[openIndex]

  const close = useCallback(() => setOpenIndex(null), [])

  useEffect(() => {
    if (openIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.length))
      if (event.key === 'ArrowLeft')
        setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [openIndex, close])

  return (
    <Section id="trabalhos" labelledBy="trabalhos-titulo" className="bg-white">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="trabalhos-titulo"
          eyebrow="Nosso trabalho"
          title="Resultados que falam por si"
          description="Confira o acabamento e a transformação dos ambientes que já entregamos."
        />
        <LinkButton
          href={company.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="shrink-0"
          onClick={() => trackEvent('instagram_click', { location: 'trabalhos' })}
        >
          <InstagramIcon className="h-4 w-4" />
          Ver mais no Instagram
        </LinkButton>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <Reveal key={item.src} as="li" delay={index * 0.07} className="h-full">
            <div className="h-full">
              <button
                type="button"
                onClick={() => {
                  setOpenIndex(index)
                  trackEvent('gallery_open', { image: item.tag })
                }}
                className="group relative block h-full w-full overflow-hidden rounded-card border border-line text-left"
                aria-label={`Ampliar imagem: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-ink/85 via-navy-ink/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase">
                    {item.tag}
                  </span>
                  <p className="mt-3 text-[15px] font-semibold text-white">{item.caption}</p>
                </div>
              </button>
            </div>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.caption}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-ink/97 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar imagem"
              className="absolute top-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy"
              autoFocus
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <figure onClick={(event) => event.stopPropagation()} className="max-w-3xl">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[75vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-navy-100">
                {activeItem.caption}
              </figcaption>
            </figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
