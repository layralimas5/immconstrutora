import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { CheckIcon, WhatsAppIcon } from '@/components/ui/icons'
import { guarantees } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { trackWhatsAppClick } from '@/lib/analytics'

/**
 * Quebra de objeção antes do orçamento. Só entra aqui compromisso verificável.
 * Enquanto não houver depoimento real de cliente, é este bloco que segura o
 * lugar da prova social.
 */
export function Guarantees() {
  return (
    <Section id="garantias" labelledBy="garantias-titulo" className="bg-white">
      <SectionHeading
        id="garantias-titulo"
        eyebrow="Sem risco para você"
        title="O que a IMM assume antes de a obra começar"
        description="Contratar reforma dá medo por bons motivos: obra que não acaba, valor que muda no meio e profissional que some. Estes são os compromissos que ficam por escrito no seu orçamento."
        align="center"
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {guarantees.map((item, index) => (
          <Reveal key={item.title} as="li" delay={index * 0.07} className="group h-full">
            {/* O pulsar vai neste div: o Reveal já controla o transform na entrada em tela. */}
            <div className="flex h-full gap-4 rounded-card border border-line bg-surface p-7 transition-shadow duration-300 group-hover:animate-pulse-soft group-hover:shadow-soft motion-reduce:group-hover:animate-none">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <div className="mt-12 text-center">
          <LinkButton
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            onClick={() => trackWhatsAppClick('garantias')}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar visita técnica grátis
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  )
}
