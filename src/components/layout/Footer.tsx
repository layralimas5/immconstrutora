import { Container } from '@/components/ui/Container'
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/ui/icons'
import { company, navLinks, services } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-ink text-navy-100">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt=""
              width={52}
              height={52}
              className="h-13 w-13 rounded-xl bg-white object-contain p-1"
            />
            <span className="text-lg font-extrabold text-white">IMM Construtora</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-100">
            {company.shortDescription}
          </p>
          <p className="mt-5 text-xs leading-relaxed text-white/60">
            {company.legalName}
            <br />
            CNPJ {company.taxId}
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#orcamento" className="transition-colors hover:text-white">
                Pedir orçamento
              </a>
            </li>
          </ul>
          <h2 className="mt-8 text-xs font-bold tracking-[0.2em] text-white uppercase">Serviços</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`} className="transition-colors hover:text-white">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
                {company.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={company.phone.href}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-5 w-5 shrink-0" />
                {company.phone.display}
              </a>
            </li>
            <li>
              <a
                href={company.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-5 w-5 shrink-0" />
                {company.instagram.handle}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0" />
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
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Todos os direitos reservados.
          </p>
          <p>Atendimento em Vila Velha, Vitória e Grande Vitória, ES.</p>
        </Container>
      </div>
    </footer>
  )
}
