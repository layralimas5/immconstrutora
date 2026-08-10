import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { PlusIcon } from '@/components/ui/icons'
import { faq } from '@/content/site'

export function Faq() {
  return (
    <Section id="duvidas" labelledBy="duvidas-titulo" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          id="duvidas-titulo"
          eyebrow="Dúvidas frequentes"
          title="O que as pessoas costumam perguntar"
          description="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp que a gente responde."
        />

        <div className="divide-y divide-line border-y border-line">
          {faq.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{item.question}</h3>
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-transform duration-300 group-open:rotate-45 group-open:border-brand-red group-open:bg-brand-red group-open:text-white">
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pr-14 text-[15px] leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
