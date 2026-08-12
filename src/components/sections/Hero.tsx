import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from '@/components/ui/icons'
import { hero } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { trackEvent, trackWhatsAppClick } from '@/lib/analytics'

export function Hero() {
  const [before, after] = hero.title.split(hero.titleHighlight)

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-navy-ink pt-20">
      {/*
        Foto de fundo decorativa: o alt fica vazio de propósito, porque a mesma
        obra aparece descrita na galeria. A camada escura por cima não é enfeite,
        é o que garante o contraste do texto sobre a foto.
      */}
      <img
        src="/img/hero-fundo.webp"
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-ink/85" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-ink to-transparent"
      />

      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-navy-100 uppercase">
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 text-3xl leading-[1.08] font-black text-white sm:text-5xl lg:text-6xl">
            {before}
            <span className="text-brand-red">{hero.titleHighlight}</span>
            {after}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
            {hero.description}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {hero.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                <CheckIcon className="h-4 w-4 text-brand-red" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackWhatsAppClick('hero')}
            >
              <WhatsAppIcon className="h-5 w-5" />
              {hero.primaryCta}
            </LinkButton>
            <LinkButton
              href="#trabalhos"
              variant="onDark"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('cta_click', { location: 'hero', target: 'trabalhos' })}
            >
              {hero.secondaryCta}
              <ArrowRightIcon className="h-4 w-4" />
            </LinkButton>
          </div>

          <p className="mt-6 text-sm text-white/70">{hero.reassurance}</p>
        </div>
      </Container>
    </section>
  )
}
