import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { PlusIcon, WhatsAppIcon } from '@/components/ui/icons'
import { faq } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { trackEvent, trackWhatsAppClick } from '@/lib/analytics'

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

        <div>
          <div className="divide-y divide-line border-y border-line">
          {faq.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details
                className="group py-5"
                onToggle={(event) => {
                  if (event.currentTarget.open) {
                    trackEvent('faq_open', { question: item.question })
                  }
                }}
              >
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

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-card border border-line bg-surface p-7 text-center sm:text-left">
              <h3 className="text-lg font-extrabold text-ink">Ficou com outra dúvida?</h3>
              <p className="mt-2 text-[15px] text-ink-soft">
                Manda a pergunta no WhatsApp. Quem responde é quem executa a obra.
              </p>
              <LinkButton
                href={whatsappLink('Olá! Vim pelo site e fiquei com uma dúvida sobre o serviço.')}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-5 w-full sm:w-auto"
                onClick={() => trackWhatsAppClick('duvidas')}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Tirar dúvida no WhatsApp
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
