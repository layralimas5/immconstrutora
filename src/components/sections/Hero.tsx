import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { ArrowRightIcon, CheckIcon, PinIcon, WhatsAppIcon } from '@/components/ui/icons'
import { company } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'

const highlights = [
  'Lixamento sem pó',
  'Orçamento gratuito',
  'Prazo cumprido',
] as const

export function Hero() {
  const reduceMotion = useReducedMotion()
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Brilho azul de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-navy-600/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-brand-red/15 blur-[130px]"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.16em] text-navy-100 uppercase"
          >
            <PinIcon className="h-4 w-4" />
            {company.region}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-7 text-4xl leading-[1.05] font-black text-white sm:text-5xl lg:text-6xl"
          >
            Pintura e reforma com
            <span className="text-brand-red"> acabamento de alto padrão</span> e obra limpa.
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
            {company.tagline} Mais de {company.yearsOfExperience} anos transformando casas,
            apartamentos e empresas em Vila Velha e Vitória. Lixamento mecanizado sem pó, equipe
            uniformizada e prazo que a gente cumpre.
          </motion.p>

          <motion.ul {...rise(0.22)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                <CheckIcon className="h-4 w-4 text-brand-red" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar orçamento gratuito
            </LinkButton>
            <LinkButton href="#trabalhos" variant="onDark" size="lg" className="w-full sm:w-auto">
              Ver nossos trabalhos
              <ArrowRightIcon className="h-4 w-4" />
            </LinkButton>
          </motion.div>

          <motion.p {...rise(0.36)} className="mt-6 text-sm text-white/70">
            Resposta no mesmo dia útil. Sem compromisso.
          </motion.p>
        </div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
            <img
              src="/img/corredor.webp"
              alt="Corredor entregue pela IMM com pintura de alto padrão e paredes perfeitamente lisas"
              width={900}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-ink/90 to-transparent"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-6 py-5 shadow-lift sm:-left-8">
            <p className="text-3xl font-black text-navy">+{company.yearsOfExperience}</p>
            <p className="mt-1 text-xs font-bold tracking-[0.16em] text-ink-mute uppercase">
              anos de obra
            </p>
          </div>

          <div className="absolute -top-5 right-4 hidden rounded-full bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-lift sm:block">
            Obra sem pó
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
