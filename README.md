# Site IMM Reformas e Pinturas

Landing page de conversão da IMM Construtora Obras (Vila Velha e Vitória, ES).
Objetivo único: gerar orçamento pelo WhatsApp, incluindo o tráfego pago do Google Ads.

## Stack

React 19 + TypeScript (strict) + Vite + Tailwind CSS v4 + Framer Motion.
Sem backend: o formulário monta a mensagem e abre o WhatsApp.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + build em dist/
npm run preview  # serve o dist/
```

## Onde mexer no conteúdo

Quase tudo do site (textos, serviços, FAQ, telefone, galeria) vive em um arquivo só:

- `src/content/site.ts`

Trocar um texto, um serviço ou uma pergunta do FAQ não exige mexer em componente.
Ao mudar o FAQ, atualizar também o bloco `FAQPage` do JSON-LD em `index.html`.

## Estrutura

```
src/
  content/site.ts          fonte única de conteúdo
  lib/                     whatsapp.ts (monta o link), cn.ts
  hooks/useScrolled.ts
  components/
    ui/                    Container, Section, Button, Reveal, icons
    layout/                Header, Footer, WhatsAppFab
    sections/              Hero, TrustBar, Services, Differentials,
                           Process, Gallery, ServiceArea, Faq, QuoteForm
public/img/                fotos reais da obra
```

## Identidade

Branco, azul (`#14306B` / `#071431`) e vermelho (`#E11D2A`), conforme
`identidade/design-guide.md` da central. Vermelho é sempre o CTA; azul é a base
institucional. Tokens definidos em `src/index.css` (`@theme`).

## SEO

- Meta tags, Open Graph e canonical em `index.html`
- JSON-LD `LocalBusiness` + `HousePainter` e `FAQPage`
- `public/robots.txt` e `public/sitemap.xml`

Ao publicar em domínio próprio, trocar `https://immreformas.vercel.app` em
`index.html`, `robots.txt`, `sitemap.xml` e `src/content/site.ts` (`company.siteUrl`).

## Pendências de conteúdo

- **Fotos:** só existem 3 fotos reais (corredor entregue e dois registros de
  lixamento). Faltam fotos de pintura em execução, antes/depois e fachada.
- **Depoimentos:** não há avaliações reais coletadas, então o site não tem seção
  de depoimentos. Vale ativar o Google Meu Negócio e trazer as avaliações depois.
- **Endereço:** o JSON-LD usa só cidade/estado. Se a IMM tiver endereço público,
  completar em `index.html` para reforçar o SEO local.

## Deploy

Vercel, projeto apontando para esta pasta. `vercel.json` já define build,
`outputDirectory` e headers de cache.
