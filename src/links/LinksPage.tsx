import { useEffect } from 'react'
import { company } from '@/content/site'
import { linksPage, projectHighlights, whatsappMessage } from '@/content/links'
import { initAnalytics, trackEvent, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'
import { whatsappLink } from '@/lib/whatsapp'
import { Reveal } from '@/components/ui/Reveal'
import {
  ArrowRightIcon,
  GoogleIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
  WhatsAppIcon,
} from '@/components/ui/icons'

const cardBase =
  'flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.06] p-3 text-left transition-[background-color,border-color,transform] duration-200 hover:border-white/30 hover:bg-white/12 active:translate-y-px'

export function LinksPage() {
  useEffect(() => {
    initAnalytics()
    trackEvent('bio_page_view', { location: 'bio' })
  }, [])

  return (
    <div className="min-h-dvh bg-navy-ink text-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-sm flex-col px-4 pt-8 pb-10">
        <Identity />

        <main className="mt-6 flex flex-col gap-6">
          <PrimaryActions />
          <Projects />
          <ReviewCard />
          <SecondaryLinks />
        </main>

        <Footer />
      </div>
    </div>
  )
}

function Identity() {
  return (
    <header className="flex flex-col items-center text-center">
      <img
        src="/img/logo-avatar.png"
        alt={`Logo da ${company.name}`}
        width={512}
        height={512}
        className="h-20 w-20 rounded-full shadow-lift ring-2 ring-white/15"
      />

      <p className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/70 uppercase">
        <PinIcon className="h-3 w-3" />
        {linksPage.eyebrow}
      </p>

      <h1 className="mt-3 text-xl font-extrabold tracking-tight">{company.name}</h1>
      <p className="mt-2 text-sm text-white/75">{linksPage.headline}</p>
      <p className="mt-1.5 text-xs text-white/55">{linksPage.description}</p>
    </header>
  )
}

function PrimaryActions() {
  return (
    <Reveal className="flex flex-col gap-2.5">
      <a
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('bio')}
        className="flex h-13 items-center justify-center gap-2.5 rounded-xl bg-brand-red text-sm font-bold text-white shadow-[0_14px_32px_-14px_rgba(225,29,42,0.9)] transition-colors duration-200 hover:bg-brand-red-dark active:translate-y-px"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Pedir orçamento grátis
      </a>
      <p className="text-center text-[11px] text-white/50">
        Resposta no mesmo dia útil. Visita técnica sem custo e sem compromisso.
      </p>

      <a
        href="/"
        onClick={() => trackEvent('site_click', { location: 'bio' })}
        className={`${cardBase} mt-1`}
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-xs font-black">
          IMM
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold">Conhecer o site completo</span>
          <span className="block text-xs text-white/60">
            Serviços, garantias, trabalhos e dúvidas
          </span>
        </span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-white/50" />
      </a>
    </Reveal>
  )
}

function Projects() {
  return (
    <Reveal className="flex flex-col gap-3">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-sm font-bold">Alguns trabalhos entregues</h2>
        <a
          href="/#trabalhos"
          onClick={() => trackEvent('site_click', { location: 'bio', section: 'trabalhos' })}
          className="shrink-0 text-xs font-semibold text-white/70 underline underline-offset-4 hover:text-white"
        >
          Ver todos
        </a>
      </div>

      <ul
        className="-mx-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-4 pb-1.5"
        aria-label="Trabalhos entregues pela IMM"
      >
        {projectHighlights.map((project) => (
          <li key={project.src} className="w-40 shrink-0 snap-start">
            <figure className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.06]">
              <img
                src={project.src}
                alt={project.alt}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-28 w-full object-cover"
              />
              <figcaption className="p-2.5">
                <span className="text-[10px] font-bold tracking-wide text-brand-red uppercase">
                  {project.tag}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-white/75">
                  {project.caption}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function ReviewCard() {
  return (
    <Reveal>
      <section className="rounded-xl border border-white/15 bg-gradient-to-b from-white/12 to-white/[0.04] p-4 text-center">
        <GoogleIcon className="mx-auto h-6 w-6" />

        <h2 className="mt-2.5 text-sm font-bold">Já fizemos a sua obra?</h2>
        <p className="mt-1.5 text-xs text-white/70">
          Sua avaliação ajuda outra família da região a encontrar um pintor de confiança. Leva menos
          de um minuto e faz muita diferença pra gente.
        </p>

        <div
          className="mt-3 flex justify-center gap-0.5 text-amber-400"
          role="img"
          aria-label="Cinco estrelas"
        >
          {[0, 1, 2, 3, 4].map((star) => (
            <StarIcon key={star} className="h-4.5 w-4.5" />
          ))}
        </div>

        <a
          href={company.google.reviewHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('google_review_click', { location: 'bio' })}
          className="mt-3.5 flex h-11 items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-navy-ink transition-colors duration-200 hover:bg-white/90 active:translate-y-px"
        >
          Avaliar a IMM no Google
        </a>

        <p className="mt-2.5 text-[11px] text-white/50">
          Ainda não trabalhamos juntos? Chama no WhatsApp e peça seu orçamento.
        </p>
      </section>
    </Reveal>
  )
}

function SecondaryLinks() {
  return (
    <Reveal className="flex flex-col gap-2.5">
      <a
        href={company.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('instagram_click', { location: 'bio' })}
        className={cardBase}
      >
        <InstagramIcon className="h-4.5 w-4.5 shrink-0 text-white/70" />
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold">Instagram</span>
          <span className="block text-xs text-white/60">{company.instagram.handle}</span>
        </span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-white/50" />
      </a>

      <a href={company.phone.href} onClick={() => trackPhoneClick('bio')} className={cardBase}>
        <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-white/70" />
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold">Ligar para a IMM</span>
          <span className="block text-xs text-white/60">{company.phone.display}</span>
        </span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-white/50" />
      </a>

      <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3">
        <p className="flex items-center gap-2 text-sm font-bold">
          <PinIcon className="h-4 w-4 shrink-0 text-white/70" />
          Onde atendemos
        </p>
        <p className="mt-1 text-xs text-white/65">{company.areas.join(' · ')}</p>
        <p className="mt-0.5 text-xs text-white/45">{company.hours}</p>
      </div>
    </Reveal>
  )
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 pt-4 text-center text-[11px] text-white/45">
      <p>
        {company.name} · CNPJ {company.taxId}
      </p>
      <p className="mt-0.5">{company.tagline}</p>
      <p className="mt-2.5">
        Desenvolvido por{' '}
        <a
          href="https://limadigitalstudio.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-white/70"
        >
          Layra Lima
        </a>
      </p>
    </footer>
  )
}
