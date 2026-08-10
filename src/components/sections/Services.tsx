import type { ComponentType, SVGProps } from 'react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import {
  ArrowRightIcon,
  BrushIcon,
  CheckIcon,
  HomeIcon,
  SanderIcon,
  SparkleIcon,
} from '@/components/ui/icons'
import { services, type ServiceIcon } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'

const iconByName: Record<ServiceIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  brush: BrushIcon,
  sparkle: SparkleIcon,
  sander: SanderIcon,
  home: HomeIcon,
}

export function Services() {
  return (
    <Section id="servicos" labelledBy="servicos-titulo" className="bg-white">
      <SectionHeading
        id="servicos-titulo"
        eyebrow="Nossos serviços"
        title="Soluções completas para a sua obra"
        description="Do preparo da superfície ao toque final, cuidamos de cada etapa. O resultado aparece na parede e na hora de conviver com a obra."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconByName[service.icon]

          return (
            <Reveal key={service.id} delay={index * 0.07}>
              <article
                id={service.id}
                className="group flex h-full flex-col rounded-card border border-line bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy-100 hover:shadow-lift"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 text-xl font-extrabold text-ink">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `Olá! Vim pelo site e gostaria de um orçamento de ${service.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 self-start pt-7 text-sm font-bold text-navy transition-colors hover:text-brand-red"
                >
                  Pedir orçamento deste serviço
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-col items-center gap-5 rounded-card border border-line bg-surface px-7 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-ink">Não achou o que precisa?</h3>
            <p className="mt-2 text-[15px] text-ink-soft">
              Conta o que você tem em mente. Avaliamos o caso e dizemos com sinceridade se é serviço
              para a gente.
            </p>
          </div>
          <LinkButton
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="shrink-0"
          >
            Falar com a IMM
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  )
}
