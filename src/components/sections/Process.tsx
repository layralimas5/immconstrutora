import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { processSteps } from '@/content/site'

export function Process() {
  return (
    <Section id="processo" labelledBy="processo-titulo" className="bg-surface">
      <SectionHeading
        id="processo-titulo"
        eyebrow="Como funciona"
        title="Do primeiro contato à entrega, sem surpresa"
        description="Você sabe exatamente o que vai acontecer em cada etapa, quanto custa e quando termina."
        align="center"
      />

      <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} as="li" delay={index * 0.08} className="group h-full">
            {/*
              O pulsar fica neste div, e não no Reveal: o Reveal é um elemento do
              framer-motion e já controla o transform na entrada em tela. O gatilho
              vem do `group` no <li>, então vale o card inteiro.
            */}
            <div className="h-full rounded-card border border-line bg-white p-7 shadow-soft transition-shadow duration-300 group-hover:animate-pulse-soft group-hover:shadow-lift motion-reduce:group-hover:animate-none">
              <span className="text-5xl font-black text-navy-400">{step.step}</span>
              <span aria-hidden="true" className="mt-4 block h-1.5 w-12 rounded-full bg-brand-red" />
              <h3 className="mt-5 text-lg font-extrabold text-ink">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
