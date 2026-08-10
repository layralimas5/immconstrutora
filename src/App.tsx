import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFab } from '@/components/layout/WhatsAppFab'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Differentials } from '@/components/sections/Differentials'
import { Process } from '@/components/sections/Process'
import { Gallery } from '@/components/sections/Gallery'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { Faq } from '@/components/sections/Faq'
import { QuoteForm } from '@/components/sections/QuoteForm'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-red focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <TrustBar />
        <Services />
        <Differentials />
        <Process />
        <Gallery />
        <ServiceArea />
        <Faq />
        <QuoteForm />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
