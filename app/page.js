import { SpeedInsights } from '@vercel/speed-insights/next'
import { AboutSection } from '../components/AboutSection'
import { CursorGridBackground } from '../components/CursorGridBackground'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ProductSection } from '../components/ProductSection'
import { WaitlistSection } from '../components/WaitlistSection'
import { WebMcpProvider } from '../components/WebMcpProvider'

export default function HomePage() {
  return (
    <div className="page-shell">
      <CursorGridBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <WaitlistSection />
      </main>
      <Footer />
      <WebMcpProvider />
      <SpeedInsights />
    </div>
  )
}
