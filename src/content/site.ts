export type NavLink = {
  readonly label: string
  readonly href: string
}

export type ServiceIcon = 'brush' | 'sparkle' | 'sander' | 'home'

export type Service = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly bullets: readonly string[]
  readonly icon: ServiceIcon
}

export type Differential = {
  readonly title: string
  readonly description: string
}

export type ProcessStep = {
  readonly step: string
  readonly title: string
  readonly description: string
}

export type GalleryItem = {
  readonly src: string
  readonly alt: string
  readonly caption: string
  readonly tag: string
}

export type FaqItem = {
  readonly question: string
  readonly answer: string
}

const RAW_PHONE = '5527997375452'

export const company = {
  name: 'IMM Reformas e Pinturas',
  legalName: '66.201.691 Isaac Machado Moraes',
  taxId: '66.201.691/0001-08',
  tagline: 'Sua obra, nossa missão.',
  shortDescription:
    'Pintura, reforma e acabamento de alto padrão em Vila Velha e Vitória, com mais de 20 anos de experiência.',
  yearsOfExperience: 20,
  areas: ['Vila Velha', 'Vitória', 'Serra', 'Cariacica'],
  region: 'Vila Velha e Vitória, ES',
  whatsapp: {
    raw: RAW_PHONE,
    display: '(27) 99737-5452',
    href: `https://wa.me/${RAW_PHONE}`,
  },
  phone: {
    display: '(27) 2912-2100',
    href: 'tel:+552729122100',
  },
  instagram: {
    handle: '@immreformas',
    href: 'https://instagram.com/immreformas',
  },
  siteUrl: 'https://immreformas.vercel.app',
  hours: 'Segunda a sexta, 8h às 18h. Sábado, 8h às 12h.',
} as const

export const defaultWhatsappMessage =
  'Olá! Vim pelo site e gostaria de um orçamento com a IMM Reformas.'

export const navLinks: readonly NavLink[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const trustPoints: readonly { readonly value: string; readonly label: string }[] = [
  { value: '+20 anos', label: 'de experiência em obra' },
  { value: 'Sem pó', label: 'lixamento mecanizado com aspiração' },
  { value: 'Prazo firme', label: 'cronograma combinado e cumprido' },
  { value: 'Orçamento grátis', label: 'visita técnica sem compromisso' },
]

export const services: readonly Service[] = [
  {
    id: 'pintura',
    title: 'Pintura residencial e comercial',
    description:
      'Pintura interna e externa com tintas de primeira linha, preparo correto da parede e acabamento que dura. É o nosso carro-chefe.',
    bullets: ['Pintura lisa e texturizada', 'Interna e externa', 'Fachadas e áreas comuns'],
    icon: 'brush',
  },
  {
    id: 'acabamento',
    title: 'Acabamento fino',
    description:
      'Massa corrida, correção de imperfeições e nivelamento da superfície. É a etapa que separa uma pintura comum de uma pintura de alto padrão.',
    bullets: ['Aplicação de massa corrida', 'Correção de trincas e furos', 'Preparo de superfície'],
    icon: 'sparkle',
  },
  {
    id: 'lixamento',
    title: 'Lixamento sem pó',
    description:
      'Lixadeiras mecanizadas com aspiração acoplada. Sua casa não vira canteiro de obras: o pó vai direto para o aspirador.',
    bullets: ['Aspiração acoplada', 'Superfície perfeitamente nivelada', 'Ambiente limpo o dia todo'],
    icon: 'sander',
  },
  {
    id: 'reformas',
    title: 'Reformas e manutenção',
    description:
      'Pequenas e médias reformas com equipe qualificada, do orçamento à entrega. Revitalizamos o ambiente sem surpresa no meio do caminho.',
    bullets: ['Revitalização de ambientes', 'Manutenção preventiva', 'Reparos e adequações'],
    icon: 'home',
  },
]

export const differentials: readonly Differential[] = [
  {
    title: 'Equipamento de ponta',
    description:
      'Lixadeiras mecanizadas com aspiração acoplada eliminam quase todo o pó da obra. Menos limpeza para você, mais qualidade no acabamento.',
  },
  {
    title: 'Acabamento superior',
    description:
      'O lixamento mecanizado deixa a superfície perfeitamente nivelada. É o que faz a luz refletir bonito na parede em vez de denunciar cada onda.',
  },
  {
    title: 'Equipe uniformizada',
    description:
      'Profissionais treinados, identificados e comprometidos com prazo e com a organização do ambiente. Você sabe quem está dentro da sua casa.',
  },
  {
    title: 'Obra organizada',
    description:
      'Proteção de móveis e piso, área de trabalho isolada e limpeza ao fim de cada dia. Reforma não precisa virar transtorno.',
  },
]

export const processSteps: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'Você chama no WhatsApp',
    description: 'Conta o que precisa e manda umas fotos do ambiente. A gente já entende o tamanho do serviço.',
  },
  {
    step: '02',
    title: 'Visita técnica gratuita',
    description: 'Vamos até o local medir, avaliar o estado da superfície e conversar sobre o que faz sentido para o seu caso.',
  },
  {
    step: '03',
    title: 'Orçamento claro',
    description: 'Você recebe o valor detalhado por etapa, com prazo e materiais definidos. Sem letra miúda, sem custo escondido.',
  },
  {
    step: '04',
    title: 'Execução e entrega limpa',
    description: 'Obra dentro do cronograma, ambiente protegido e entrega com tudo limpo e pronto para uso.',
  },
]

export const gallery: readonly GalleryItem[] = [
  {
    src: '/img/corredor.webp',
    alt: 'Corredor de prédio entregue pela IMM com pintura de alto padrão',
    caption: 'Paredes lisas e reflexo impecável da luz',
    tag: 'Obra entregue',
  },
  {
    src: '/img/pintura.webp',
    alt: 'Ambiente com piso coberto por lona durante o serviço da IMM',
    caption: 'Piso e ambiente protegidos do começo ao fim',
    tag: 'Obra organizada',
  },
  {
    src: '/img/parede.webp',
    alt: 'Profissional da IMM usando lixadeira mecanizada com aspiração acoplada',
    caption: 'Lixamento mecanizado, com o pó indo direto para o aspirador',
    tag: 'Lixamento sem pó',
  },
]

export const faq: readonly FaqItem[] = [
  {
    question: 'A IMM atende em quais cidades?',
    answer:
      'Atendemos Vila Velha e Vitória e também a região da Grande Vitória, como Serra e Cariacica. Se você está por perto, chame no WhatsApp que confirmamos o atendimento na sua região.',
  },
  {
    question: 'O orçamento é cobrado?',
    answer:
      'Não. A visita técnica e o orçamento são gratuitos e sem compromisso. Só depois que você aprovar o valor e o prazo é que a obra começa.',
  },
  {
    question: 'Como funciona o lixamento sem pó?',
    answer:
      'Usamos lixadeiras mecanizadas com aspiração acoplada: o pó é sugado no momento em que é gerado, em vez de se espalhar pela casa. O ambiente fica limpo durante a obra e o acabamento sai muito mais nivelado.',
  },
  {
    question: 'Vocês fornecem o material ou eu compro?',
    answer:
      'Dos dois jeitos. Podemos fornecer tudo, com tintas de primeira linha, ou trabalhar com o material que você já comprou. No orçamento deixamos claro o que está incluso.',
  },
  {
    question: 'Preciso desocupar o imóvel durante a obra?',
    answer:
      'Na maioria dos casos, não. Protegemos móveis e piso, isolamos a área de trabalho e organizamos o serviço por ambiente para você continuar usando a casa.',
  },
  {
    question: 'Quanto tempo demora uma pintura?',
    answer:
      'Depende do tamanho e do estado das paredes. Um apartamento comum costuma levar de alguns dias a duas semanas. O prazo exato entra no orçamento e a gente cumpre o que foi combinado.',
  },
]

export const quoteServiceOptions: readonly string[] = [
  'Pintura residencial',
  'Pintura comercial',
  'Fachada / área externa',
  'Acabamento e massa corrida',
  'Reforma completa',
  'Ainda não sei, preciso de orientação',
]
