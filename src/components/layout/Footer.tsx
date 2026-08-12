import { Container } from '@/components/ui/Container'
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/ui/icons'
import { company, navLinks, services } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { trackEvent, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

const headingClass = 'text-xs font-bold tracking-[0.2em] text-white uppercase'
const linkClass = 'transition-colors hover:text-white'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-night text-navy-100">
      {/*
        Quatro colunas no desktop. Empilhar navegação e serviços na mesma coluna
        esticava o rodapé sem necessidade.
      */}
      <Container className="grid gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg bg-white object-contain p-1"
            />
            <span className="font-extrabold text-white">IMM Construtora</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{company.shortDescription}</p>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            {company.legalName}
            <br />
            CNPJ {company.taxId}
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className={headingClass}>Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#orcamento" className={linkClass}>
                Pedir orçamento
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Serviços">
          <h2 className={headingClass}>Serviços</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`} className={linkClass}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Contato</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('rodape')}
                className={`flex items-center gap-2.5 ${linkClass}`}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                {company.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={company.phone.href}
                onClick={() => trackPhoneClick('rodape')}
                className={`flex items-center gap-2.5 ${linkClass}`}
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {company.phone.display}
              </a>
            </li>
            <li>
              <a
                href={company.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('instagram_click', { location: 'rodape' })}
                className={`flex items-center gap-2.5 ${linkClass}`}
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                {company.instagram.handle}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {company.region}
                <br />
                <span className="text-white/60">{company.hours}</span>
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Atendimento em Vila Velha, Vitória e Grande Vitória, ES.
          </p>
          <a href="/politica-de-privacidade.html" className={`underline underline-offset-4 ${linkClass}`}>
            Política de privacidade
          </a>
        </Container>
      </div>
    </footer>
  )
}
