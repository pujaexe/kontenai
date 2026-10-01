'use client'
import { Clock } from 'lucide-react'
import { SITE, BADGE_TEXTS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import HeroAnimation from './HeroAnimation'
import ChartAnimation from './ChartAnimation'

export default function Hero() {
  const bentoRef = useReveal()

  return (
    <section className="relative z-10 flex flex-col items-center pt-[140px] pb-20 px-6 md:px-12">
      {/* Background Grid & Glowing Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-p1/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-[#FFB347]/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[600px] h-[600px] bg-rose/15 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center text-left">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start pt-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-[10px] p-[6px_8px_6px_6px] rounded-full bg-white/60 backdrop-blur-md ring-1 ring-slate-900/5 shadow-sm mb-7 animate-fade-down">
            <Badge className="bg-p1 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-glow-p1 hover:bg-p1">✦ New</Badge>
            <div className="text-[13px] font-semibold text-ink inline-flex">
              <div className="inline-flex overflow-hidden h-[1.4em] align-middle ml-[2px]">
                <div className="flex flex-col animate-cycle-text">
                  {BADGE_TEXTS.concat(BADGE_TEXTS[0], BADGE_TEXTS[1]).map((text, i) => (
                    <span key={i} className="h-[1.4em] flex items-center whitespace-nowrap text-[13px] font-semibold text-p1">{text}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.05] tracking-tight text-ink max-w-[700px] mb-6 animate-fade-up [animation-delay:0.1s]">
            Boost your organic <br className="hidden md:block"/><span className="text-p1">sales</span> in 90 days.
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] text-muted max-w-[500px] mb-10 leading-[1.8] animate-fade-up [animation-delay:0.2s]">
            Our AI agents write, schedule, and publish content for your business, shop, or startup automatically, every single day.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-col sm:flex-row items-center justify-start mb-16 animate-fade-up [animation-delay:0.3s]">
            <Button asChild size="lg" className="rounded-full font-bold px-8 shadow-glow-p1 bg-p1 text-white hover:bg-p1/90">
              <a href={SITE.wa}>Get 14 Days Free Trial</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-semibold px-8 shadow-sm bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
              <a href="#how">How It Works</a>
            </Button>
          </div>
        </div>

        {/* Right Column: ── Floating UI Mockups ─────── */}
        <div ref={bentoRef} className="reveal relative w-full lg:h-[600px] flex items-center justify-center lg:justify-end">
          <div className="relative z-10 w-full max-w-[500px]">
            {/* Center phone */}
            <div className="relative z-20 w-[295px] h-[394px] md:w-[360px] md:h-[480px] mx-auto shadow-2xl shadow-p1/20 rounded-[40px] bg-white ring-1 ring-slate-900/5">
              <div className="origin-top-left scale-[0.82] md:scale-[1]">
                <HeroAnimation />
              </div>
            </div>

            {/* Floating Left Card */}
            <div className="absolute top-[10%] -left-[10%] lg:-left-[20%] bg-white/90 backdrop-blur-xl p-4 rounded-xl ring-1 ring-slate-900/5 shadow-2xl shadow-blue/10 animate-float transition-transform duration-300 flex items-center gap-4 z-30">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-p1/10 flex-shrink-0 text-p1">
                <Clock size={20} strokeWidth={2.25} />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted font-semibold leading-none mb-1.5">Content time saved</div>
                <div className="text-xl font-extrabold text-ink leading-none">80%</div>
              </div>
            </div>

            {/* Floating Right Card */}
            <div className="absolute bottom-[15%] -right-[5%] lg:-right-[15%] bg-white/90 backdrop-blur-xl rounded-card-lg shadow-2xl shadow-rose/15 ring-1 ring-slate-900/5 p-5 flex flex-col gap-3 text-left animate-float [animation-delay:2s] z-30">
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-2">
                <ChartAnimation />
              </div>
              <h3 className="text-sm font-bold text-ink">Social Analytics</h3>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
