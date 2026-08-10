import { useId, useState, type FormEvent } from 'react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ActionButton, LinkButton } from '@/components/ui/Button'
import { PhoneIcon, WhatsAppIcon } from '@/components/ui/icons'
import { company, quoteServiceOptions } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'

type QuoteFields = {
  name: string
  phone: string
  city: string
  service: string
  details: string
}

type FieldErrors = Partial<Record<keyof QuoteFields, string>>

const emptyForm: QuoteFields = {
  name: '',
  phone: '',
  city: '',
  service: '',
  details: '',
}

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute/70 transition-colors focus:border-navy focus:outline-none'

function validate(values: QuoteFields): FieldErrors {
  const errors: FieldErrors = {}
  const digits = values.phone.replace(/\D/g, '')

  if (values.name.trim().length < 2) errors.name = 'Digite seu nome.'
  if (digits.length < 10) errors.phone = 'Digite um telefone com DDD.'
  if (values.city.trim().length < 2) errors.city = 'Digite sua cidade ou bairro.'
  if (!values.service) errors.service = 'Escolha o tipo de serviço.'

  return errors
}

function buildMessage(values: QuoteFields): string {
  const lines = [
    'Olá! Vim pelo site e quero um orçamento com a IMM.',
    '',
    `Nome: ${values.name.trim()}`,
    `Telefone: ${values.phone.trim()}`,
    `Cidade/bairro: ${values.city.trim()}`,
    `Serviço: ${values.service}`,
  ]

  if (values.details.trim()) lines.push(`Detalhes: ${values.details.trim()}`)

  return lines.join('\n')
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFields>(emptyForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)
  const formId = useId()

  const update = <K extends keyof QuoteFields>(field: K, value: QuoteFields[K]) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    window.open(whatsappLink(buildMessage(values)), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const fieldId = (field: string) => `${formId}-${field}`
  const errorId = (field: string) => `${formId}-${field}-erro`

  return (
    <Section id="orcamento" labelledBy="orcamento-titulo" className="bg-navy-ink">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-navy-100 uppercase">Orçamento</p>
          <h2
            id="orcamento-titulo"
            className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
          >
            Pronto para renovar o seu espaço?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100">
            Preencha os dados e a gente continua a conversa no WhatsApp. A visita técnica e o
            orçamento são gratuitos, sem compromisso.
          </p>

          <div className="mt-10 space-y-4">
            <LinkButton
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar direto no WhatsApp
            </LinkButton>

            <p className="flex items-center gap-3 text-sm text-navy-100">
              <PhoneIcon className="h-5 w-5" />
              Prefere ligar?{' '}
              <a href={company.phone.href} className="font-bold text-white underline-offset-4 hover:underline">
                {company.phone.display}
              </a>
            </p>
            <p className="text-sm text-white/60">{company.hours}</p>
          </div>
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-card bg-white p-7 shadow-lift sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor={fieldId('nome')} className="block text-sm font-bold text-ink">
                  Seu nome
                </label>
                <input
                  id={fieldId('nome')}
                  name="nome"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? errorId('nome') : undefined}
                  placeholder="Como podemos te chamar?"
                  className={`mt-2 ${inputClass}`}
                />
                {errors.name ? (
                  <p id={errorId('nome')} className="mt-2 text-sm font-semibold text-brand-red">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={fieldId('telefone')} className="block text-sm font-bold text-ink">
                  WhatsApp
                </label>
                <input
                  id={fieldId('telefone')}
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(event) => update('phone', event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? errorId('telefone') : undefined}
                  placeholder="(27) 99999-9999"
                  className={`mt-2 ${inputClass}`}
                />
                {errors.phone ? (
                  <p id={errorId('telefone')} className="mt-2 text-sm font-semibold text-brand-red">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={fieldId('cidade')} className="block text-sm font-bold text-ink">
                  Cidade ou bairro
                </label>
                <input
                  id={fieldId('cidade')}
                  name="cidade"
                  type="text"
                  autoComplete="address-level2"
                  value={values.city}
                  onChange={(event) => update('city', event.target.value)}
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? errorId('cidade') : undefined}
                  placeholder="Ex: Praia da Costa, Vila Velha"
                  className={`mt-2 ${inputClass}`}
                />
                {errors.city ? (
                  <p id={errorId('cidade')} className="mt-2 text-sm font-semibold text-brand-red">
                    {errors.city}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor={fieldId('servico')} className="block text-sm font-bold text-ink">
                  O que você precisa
                </label>
                <select
                  id={fieldId('servico')}
                  name="servico"
                  value={values.service}
                  onChange={(event) => update('service', event.target.value)}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? errorId('servico') : undefined}
                  className={`mt-2 ${inputClass}`}
                >
                  <option value="">Selecione uma opção</option>
                  {quoteServiceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <p id={errorId('servico')} className="mt-2 text-sm font-semibold text-brand-red">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor={fieldId('detalhes')} className="block text-sm font-bold text-ink">
                  Detalhes <span className="font-medium text-ink-mute">(opcional)</span>
                </label>
                <textarea
                  id={fieldId('detalhes')}
                  name="detalhes"
                  rows={4}
                  value={values.details}
                  onChange={(event) => update('details', event.target.value)}
                  placeholder="Tamanho do imóvel, quantos cômodos, prazo desejado..."
                  className={`mt-2 resize-y ${inputClass}`}
                />
              </div>
            </div>

            <ActionButton type="submit" size="lg" className="mt-7 w-full">
              <WhatsAppIcon className="h-5 w-5" />
              Enviar e falar no WhatsApp
            </ActionButton>

            <p aria-live="polite" className="mt-4 text-center text-sm text-ink-mute">
              {sent
                ? 'Tudo certo! Abrimos o WhatsApp com a sua mensagem pronta. Se não abriu, toque no botão verde.'
                : 'Seus dados vão direto para o WhatsApp da IMM. Não enviamos spam.'}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
