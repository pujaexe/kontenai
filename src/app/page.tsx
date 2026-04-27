import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stars from '@/components/Stars'
import Marquee from '@/components/Marquee'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Stars />
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <CtaBanner />
      <Footer />
    </main>
  )
}
