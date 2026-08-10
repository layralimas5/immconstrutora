import type { ComponentType, SVGProps } from 'react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { BrushIcon, SparkleIcon, TeamIcon, ShieldIcon } from '@/components/ui/icons'
import { differentials } from '@/content/site'

const icons: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  BrushIcon,
  SparkleIcon,
  TeamIcon,
  ShieldIcon,
]

export function Differentials() {
  return (
    <Section id="diferenciais" labelledBy="diferenciais-titulo" className="bg-navy-ink">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            id="diferenciais-titulo"
            eyebrow="Por que a IMM"
            title="Qualidade que se vê, limpeza que se sente."
            description="Obra não precisa ser sinônimo de dor de cabeça e sujeira. Investimos em equipamento moderno e em processo para você conviver bem com o serviço enquanto ele acontece."
            tone="dark"
          />

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-card border border-white/10">
              <img
                src="/img/parede.webp"
                alt="Profissional da IMM lixando a parede com lixadeira mecanizada e aspiração acoplada"
                width={900}
                height={700}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {differentials.map((item, index) => {
            const Icon = icons[index] ?? ShieldIcon
            return (
              <Reveal
                key={item.title}
                as="li"
                delay={index * 0.07}
                className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-brand-red/50 hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-100">{item.description}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
