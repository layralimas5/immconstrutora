# Medição do site IMM

Tudo já está implementado no código. Falta só colar os IDs. Enquanto as
variáveis estiverem vazias o site funciona normalmente e não envia nada, então
dá para publicar antes de configurar.

## 1. Criar as contas

**Google Analytics 4** (responde "quantos acessaram e até onde foram")

1. analytics.google.com > Admin > Criar propriedade
2. Fluxo de dados > Web > URL do site
3. Copiar o **Measurement ID**, no formato `G-XXXXXXXXXX`

**Google Ads** (você já tem a conta)

1. Ferramentas > Conversões > Nova ação de conversão > Site
2. Criar **duas** conversões:

| Nome                    | Categoria      | Valor          | Contagem |
| ----------------------- | -------------- | -------------- | -------- |
| Orçamento pelo site     | Enviar formulário de lead | escolha um valor médio de obra | Uma |
| Clique no WhatsApp      | Contato        | valor menor    | Uma |

3. Em cada uma, escolher **Tag do Google > Instalar manualmente** e copiar:
   - o **ID de conversão**, formato `AW-123456789` (é o mesmo nas duas)
   - o **label**, a string depois da barra

## 2. Cadastrar na Netlify

Site `immconstrutora` > Site configuration > Environment variables > Add a
single variable. Escopo Production.

Valores reais da conta, coletados em 01/09/2026:

| Variável                   | Valor                          |
| -------------------------- | ------------------------------ |
| `VITE_GA4_ID`              | `G-5L1NDRZHRQ`                 |
| `VITE_ADS_ID`              | `AW-17891940320`               |
| `VITE_ADS_LEAD_LABEL`      | `_gZYCLOV0uUcEOCvxdNC`         |
| `VITE_ADS_WHATSAPP_LABEL`  | `-ROLCMn21uUcEOCvxdNC`         |

Os labels vão **sozinhos**, sem o `AW-17891940320` e sem a barra. O
`analytics.ts` monta o `send_to` como `${ADS_ID}/${label}`. Colar o
`send_to` inteiro no label quebra a medição em silêncio.

Não são segredo: os quatro vão para o bundle do navegador e são públicos em
qualquer site que use gtag.

Depois de salvar, **Deploys > Trigger deploy > Clear cache and deploy site**.
As variáveis entram no bundle na hora do build, não em tempo de execução, então
deploy com cache antigo republica o site sem elas.

### Ações de conversão correspondentes

| Ação no Google Ads    | Meta                       | Origem | Valor    |
| --------------------- | -------------------------- | ------ | -------- |
| Orçamento pelo site   | Enviar formulários de lead | Site   | R$ 1.500 |
| Clique no WhatsApp    | Contatos                   | Site   | R$ 1,00  |

Outras duas ações existem na conta e não dependem do site: `Ligação do
anúncio` (chamadas a partir de anúncios) e `Local actions - Directions`
(Google Meu Negócio, fora das metas da conta).

## 3. O que já é medido

| Evento           | Quando dispara                          | Responde                                    |
| ---------------- | --------------------------------------- | ------------------------------------------- |
| `page_view`      | carregou a página                       | quantos acessaram                           |
| `section_view`   | seção entrou na tela pela primeira vez  | **até onde a pessoa acompanhou**            |
| `scroll_depth`   | 25%, 50%, 75% e 90% da página           | **onde a pessoa parou de rolar**            |
| `whatsapp_click` | qualquer botão de WhatsApp              | qual bloco da página gera contato           |
| `form_start`     | primeiro campo preenchido               | quantos começam o formulário                |
| `form_error`     | envio barrado pela validação            | qual campo trava o envio                    |
| `generate_lead`  | formulário enviado com sucesso          | **conversão principal**                     |
| `phone_click`    | clique no telefone fixo                 | quem prefere ligar                          |
| `faq_open`       | abriu uma pergunta                      | qual objeção segura a decisão               |
| `gallery_open`   | ampliou uma foto                        | quanto a prova visual importa               |
| `instagram_click`| clique no Instagram                     | fuga de tráfego para fora do site           |

Todo `whatsapp_click` carrega o parâmetro `location`, com o ponto exato da
página: `header`, `hero`, `servico`, `servicos_rodape`, `garantias`, `duvidas`,
`orcamento`, `rodape`, `botao_flutuante`. Em `servico` vem também qual serviço.

## 4. Como ler o funil no GA4

Relatórios > Engajamento > Eventos. A leitura útil é a queda entre etapas:

```
page_view  →  section_view(servicos)  →  section_view(orcamento)  →  whatsapp_click  →  generate_lead
```

Onde a queda for maior, é ali que a página está perdendo gente. Se muita gente
chega em `section_view(orcamento)` e pouca dispara `generate_lead`, o problema é
o formulário. Se poucos chegam lá, o problema é a copy acima.

## 5. Pendências que dependem do cliente

- **Prova social.** Não existe depoimento real, então a seção não foi criada. O
  caminho mais rápido é o Isaac criar um perfil no Google Meu Negócio e pedir
  avaliação aos últimos clientes. Isso ajuda em conversão e em SEO local ao
  mesmo tempo.
- **Fotos antes e depois.** É a prova visual que mais converte em reforma.
- **Domínio próprio.** Ao sair de `immconstrutora.netlify.app`, trocar a URL em
  `index.html`, `public/robots.txt`, `public/sitemap.xml`,
  `public/politica-de-privacidade.html` e `company.siteUrl`.
