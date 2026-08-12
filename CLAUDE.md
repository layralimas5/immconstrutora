# Site IMM Reformas e Pinturas

> Projeto criado em 10/08/2026. Pasta dedicada, com repositório git próprio.
> Instruções aqui sobrescrevem as da central quando relevantes.

## Sobre

Landing page de conversão da IMM Construtora Obras. Objetivo único: transformar
visitante em orçamento no WhatsApp, incluindo o tráfego do Google Ads.

## Tipo

Cliente (IMM Construtora Obras / Isaac Machado Moraes).

## Regras específicas

- **Conteúdo em um lugar só:** todo texto, serviço, FAQ e telefone fica em
  `src/content/site.ts`. Não espalhar string em componente.
- **Não inventar prova social.** Sem depoimento, avaliação, número de obras ou
  selo que não exista de verdade. Se faltar prova, deixar a seção de fora e
  avisar a Lay.
- **Legenda tem que bater com a foto.** Antes de escrever alt ou caption, abrir
  a imagem e conferir o que ela realmente mostra.
- **Uma cor de destaque por bloco.** Vermelho `#E11D2A` é sempre o CTA, azul é a
  base institucional. Nunca verde.
- **Sem travessão** em nenhum texto do site.
- Ao mexer no FAQ, atualizar também o `FAQPage` do JSON-LD em `index.html`.
- Antes de considerar pronto: `npm run build` sem erro e auditoria axe zerada.

## Contexto que herda da central

Tom de voz, identidade visual e dados da marca vêm de `_memoria/` e
`identidade/design-guide.md` da pasta do cliente. Não duplicar aqui.

## Deploy

Netlify, configurada em `netlify.toml`. Repositório:
`github.com/layralimas5/immconstrutora`.

As variáveis de medição ficam no painel da Netlify, não no código. O Vite as
injeta no bundle durante o build, então toda mudança de variável exige um novo
deploy. Passo a passo em `docs/medicao.md`.

Ao apontar para domínio próprio, trocar a URL em `index.html`,
`public/robots.txt`, `public/sitemap.xml`, `public/politica-de-privacidade.html`
e `company.siteUrl`.
