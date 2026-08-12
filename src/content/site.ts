export type NavLink = {
  readonly label: string
  readonly href: string
}

export type ServiceIcon = 'brush' | 'sparkle' | 'sander' | 'home'

export type Service = {
  readonly id: string
  readonly title: string
  /** Termo que a pessoa digita no Google. Vira o subtítulo do card. */
  readonly searchTerm: string
  readonly description: string
  readonly bullets: readonly string[]
  readonly idealFor: string
  readonly icon: ServiceIcon
}

export type Differential = {
  readonly title: string
  readonly description: string
}

export type Guarantee = {
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

/** Bloco principal, logo abaixo do banner. É a primeira promessa que o visitante lê. */
export const hero = {
  eyebrow: 'Pintura e reforma em Vila Velha e Vitória',
  title: 'Sua casa pintada sem virar canteiro de obras',
  titleHighlight: 'sem virar canteiro de obras',
  description:
    'Lixamento mecanizado com aspiração: o pó vai para o aspirador em vez de ir para os seus móveis. Mais de 20 anos de obra, equipe uniformizada e prazo cumprido.',
  primaryCta: 'Pedir orçamento grátis',
  secondaryCta: 'Ver trabalhos entregues',
  reassurance: 'Resposta no mesmo dia útil. Visita técnica e orçamento sem custo e sem compromisso.',
  bullets: [
    'Visita e orçamento grátis',
    'Obra praticamente sem pó',
    'Prazo por escrito no orçamento',
  ],
} as const

export const trustPoints: readonly { readonly value: string; readonly label: string }[] = [
  { value: '+20 anos', label: 'de experiência em obra' },
  { value: 'Sem pó', label: 'lixamento mecanizado com aspiração' },
  { value: 'Prazo firme', label: 'cronograma combinado e cumprido' },
  { value: 'Orçamento grátis', label: 'visita técnica sem compromisso' },
  { value: 'Empresa formalizada', label: `CNPJ ${company.taxId}` },
  { value: 'Grande Vitória', label: 'Vila Velha, Vitória, Serra e Cariacica' },
]

export const services: readonly Service[] = [
  {
    id: 'pintura',
    title: 'Pintura residencial e comercial',
    searchTerm: 'Pintor em Vila Velha e Vitória',
    description:
      'Pintura interna e externa de casa, apartamento, loja e escritório. Parede preparada antes da tinta, tinta de primeira linha e acabamento que não descasca no primeiro verão.',
    bullets: [
      'Pintura lisa, texturizada e fachada',
      'Preparo e correção da parede antes de pintar',
      'Proteção de móveis, piso e esquadrias',
      'Limpeza do ambiente ao fim de cada dia',
    ],
    idealFor: 'Ideal para quem vai mudar de casa, receber visita ou colocar o imóvel à venda.',
    icon: 'brush',
  },
  {
    id: 'acabamento',
    title: 'Acabamento fino e massa corrida',
    searchTerm: 'Massa corrida e correção de parede',
    description:
      'É a etapa que separa pintura comum de pintura de alto padrão. Nivelamos a superfície e corrigimos trinca, furo e onda antes de qualquer demão.',
    bullets: [
      'Massa corrida e massa acrílica',
      'Correção de trincas, furos e emendas',
      'Nivelamento para a luz não denunciar a parede',
      'Base pronta para receber a tinta',
    ],
    idealFor: 'Ideal para parede velha, imóvel reformado ou pintura anterior mal executada.',
    icon: 'sparkle',
  },
  {
    id: 'lixamento',
    title: 'Lixamento sem pó',
    searchTerm: 'Lixamento de parede sem sujeira',
    description:
      'Lixadeiras mecanizadas com aspiração acoplada. O pó é sugado no momento em que é gerado, então você continua morando na casa enquanto a obra acontece.',
    bullets: [
      'Aspiração acoplada à lixadeira',
      'Sem pó no guarda-roupa e no sofá',
      'Superfície muito mais nivelada',
      'Área de trabalho isolada por ambiente',
    ],
    idealFor: 'Ideal para quem tem criança, pet, alergia ou não pode desocupar o imóvel.',
    icon: 'sander',
  },
  {
    id: 'reformas',
    title: 'Reformas e manutenção',
    searchTerm: 'Reforma de apartamento e manutenção predial',
    description:
      'Pequenas e médias reformas do orçamento à entrega, com etapas e valores definidos antes de começar. Nada de obra que começa e não termina.',
    bullets: [
      'Revitalização de ambientes e áreas comuns',
      'Reparos, adequações e manutenção preventiva',
      'Cronograma por etapa, definido no orçamento',
      'Uma equipe responsável do início ao fim',
    ],
    idealFor: 'Ideal para condomínio, imóvel de aluguel e reforma antes de mudar.',
    icon: 'home',
  },
]

export const differentials: readonly Differential[] = [
  {
    title: 'Você continua morando na casa',
    description:
      'A lixadeira mecanizada com aspiração tira quase todo o pó da obra. Nada de cobrir a casa inteira, dormir fora ou passar semanas limpando depois.',
  },
  {
    title: 'Acabamento que a luz aprova',
    description:
      'O lixamento mecanizado deixa a superfície realmente nivelada. É por isso que a luz da janela reflete bonito na parede em vez de mostrar cada onda.',
  },
  {
    title: 'Você sabe quem está na sua casa',
    description:
      'Equipe uniformizada, identificada e treinada. Sem rotatividade de gente estranha entrando e saindo no meio do serviço.',
  },
  {
    title: 'Obra organizada do início ao fim',
    description:
      'Móveis e piso protegidos, área de trabalho isolada e limpeza ao fim de cada dia. Você usa a casa enquanto o serviço acontece.',
  },
]

/**
 * Compromissos verificáveis. Substitui a seção de prova social até existir
 * depoimento real de cliente. Nada aqui pode ser afirmação não checável.
 */
export const guarantees: readonly Guarantee[] = [
  {
    title: 'Empresa formalizada',
    description: `Serviço prestado pela ${company.legalName}, CNPJ ${company.taxId}. Nota e contrato quando você precisar.`,
  },
  {
    title: 'Orçamento por escrito, detalhado por etapa',
    description:
      'Você recebe valor, prazo e materiais discriminados antes de a obra começar. O que não estiver no papel não é cobrado depois.',
  },
  {
    title: 'Visita técnica sem custo',
    description:
      'A gente vai até o local medir e avaliar a superfície de graça. Se não for serviço para nós, falamos com sinceridade.',
  },
  {
    title: 'Mais de 20 anos de obra',
    description:
      'Duas décadas de pintura e acabamento na Grande Vitória, com o próprio Isaac acompanhando o serviço.',
  },
]

export const processSteps: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'Você chama no WhatsApp',
    description:
      'Conta o que precisa e manda umas fotos do ambiente. A gente já entende o tamanho do serviço e responde no mesmo dia útil.',
  },
  {
    step: '02',
    title: 'Visita técnica gratuita',
    description:
      'Vamos até o local medir, avaliar o estado da superfície e conversar sobre o que faz sentido para o seu caso e para o seu bolso.',
  },
  {
    step: '03',
    title: 'Orçamento claro',
    description:
      'Você recebe o valor detalhado por etapa, com prazo e materiais definidos. Sem letra miúda, sem custo que aparece no meio da obra.',
  },
  {
    step: '04',
    title: 'Execução e entrega limpa',
    description:
      'Obra dentro do cronograma, ambiente protegido e entrega com tudo limpo e pronto para uso no mesmo dia.',
  },
]

export const gallery: readonly GalleryItem[] = [
  {
    src: '/img/corredor.webp',
    alt: 'Corredor de área comum de prédio com paredes claras, piso brilhante e portas de elevador, pintado pela IMM',
    caption: 'Corredor de prédio com as paredes recuperadas e a luz refletindo lisa',
    tag: 'Obra entregue',
  },
  {
    src: '/img/garagem-piso-epoxi.webp',
    alt: 'Garagem de prédio com piso epóxi cinza, faixas amarelas demarcando as vagas e pilares pintados de branco, amarelo e preto pela IMM',
    caption: 'Garagem de prédio com piso epóxi e vagas demarcadas',
    tag: 'Piso epóxi',
  },
  {
    src: '/img/escada-predio.webp',
    alt: 'Escada de área comum de prédio com degraus cinza, parede lateral azul e corrimão branco, pintada pela IMM',
    caption: 'Escada de prédio com degraus, parede e corrimão renovados',
    tag: 'Área comum',
  },
  {
    src: '/img/salao-comercial.webp',
    alt: 'Salão comercial amplo com teto e paredes pintados de branco e materiais de pintura no piso durante a obra da IMM',
    caption: 'Salão comercial no fim do preparo, antes da última demão',
    tag: 'Pintura comercial',
  },
  {
    src: '/img/garagem-vagas-demarcadas.webp',
    alt: 'Vaga de garagem numerada, com piso epóxi refletindo a luz e demarcação verde no chão, executada pela IMM',
    caption: 'Piso espelhado e vaga numerada, pronta para uso',
    tag: 'Garagem de prédio',
  },
  {
    src: '/img/parede.webp',
    alt: 'Profissional uniformizado da IMM lixando a parede com lixadeira mecanizada ligada a um aspirador',
    caption: 'Lixamento mecanizado, com o pó indo direto para o aspirador',
    tag: 'Lixamento sem pó',
  },
  {
    src: '/img/preparo-parede.webp',
    alt: 'Profissional da IMM sobre escada preparando a parede com massa, em ambiente com sanca de gesso e luminárias embutidas',
    caption: 'Parede corrigida e nivelada antes da primeira demão',
    tag: 'Preparo da parede',
  },
  {
    src: '/img/pintura-rolo.webp',
    alt: 'Pintor da IMM aplicando tinta com rolo em parede branca, com o piso coberto por plástico, bandeja, lata de tinta e fitas crepe no chão',
    caption: 'Piso coberto e fitas no lugar antes de encostar o rolo',
    tag: 'Obra organizada',
  },
]

export const faq: readonly FaqItem[] = [
  {
    question: 'Quanto custa pintar um apartamento em Vila Velha ou Vitória?',
    answer:
      'Depende da metragem, do estado das paredes e do tipo de tinta. Parede que precisa de massa corrida e correção de trinca custa mais do que parede em bom estado. Por isso a visita técnica é gratuita: medimos o local e você recebe o valor fechado por etapa, sem compromisso de fechar.',
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
    question: 'Preciso desocupar o imóvel durante a obra?',
    answer:
      'Na maioria dos casos, não. Protegemos móveis e piso, isolamos a área de trabalho e organizamos o serviço por ambiente para você continuar usando a casa normalmente.',
  },
  {
    question: 'Quanto tempo demora uma pintura?',
    answer:
      'Depende do tamanho e do estado das paredes. Um apartamento comum costuma levar de alguns dias a duas semanas. O prazo exato entra no orçamento por escrito e a gente cumpre o que foi combinado.',
  },
  {
    question: 'Vocês fornecem o material ou eu compro?',
    answer:
      'Dos dois jeitos. Podemos fornecer tudo, com tintas de primeira linha, ou trabalhar com o material que você já comprou. No orçamento deixamos claro item por item o que está incluso.',
  },
  {
    question: 'A IMM atende em quais cidades?',
    answer:
      'Atendemos Vila Velha e Vitória e também a região da Grande Vitória, como Serra e Cariacica. Se você está por perto, chame no WhatsApp que confirmamos o atendimento na sua região.',
  },
  {
    question: 'Vocês emitem nota fiscal e contrato?',
    answer:
      'Sim. O serviço é prestado pela empresa 66.201.691 Isaac Machado Moraes, CNPJ 66.201.691/0001-08, com nota e contrato sempre que você precisar, inclusive para condomínio e empresa.',
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
