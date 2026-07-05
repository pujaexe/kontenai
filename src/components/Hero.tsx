'use client'
import { Clock, RefreshCw } from 'lucide-react'
import { SITE, BADGE_TEXTS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import HeroAnimation from './HeroAnimation'
import KanbanAnimation from './KanbanAnimation'
import ChartAnimation from './ChartAnimation'

export default function Hero() {
  const bentoRef = useReveal()

  return (
    <section className="min-h-screen relative z-10 flex flex-col items-center justify-center pt-[140px] pb-20 px-6 md:px-12">

      <div className="w-full max-w-[1024px] mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-[10px] p-[6px_8px_6px_6px] rounded-full g-card mb-7 animate-fade-down">
          <div className="bg-gradient-to-br from-p1 to-blue text-white text-[10px] font-extrabold p-[4px_12px] rounded-full tracking-[0.06em] uppercase">✦ New</div>
          <div className="text-[13px] font-semibold text-ink2 inline-flex">
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
        <h1 className="text-[clamp(36px,3.8vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink max-w-[620px] mb-5 animate-fade-up [animation-delay:0.1s]">
          Your content runs <span className="grad-text">on autopilot.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[16px] text-muted max-w-[560px] mb-10 leading-[1.8] animate-fade-up [animation-delay:0.2s]">
          Our AI agents write, schedule, and publish content for your business, shop, or startup automatically, every single day.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 flex-col sm:flex-row items-center justify-center mb-16 animate-fade-up [animation-delay:0.3s]">
          <a href="#how"
            className="text-[14px] sm:text-[15px] font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full no-underline text-ink g-card hover:bg-white/60 transition-all text-center whitespace-nowrap">
            How It Works
          </a>
          <a href={SITE.wa}
            className="bg-gradient-to-br from-p1 to-blue text-white text-[14px] sm:text-[15px] font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full no-underline shadow-[0_6px_28px_rgba(107,114,255,0.45)] hover:-translate-y-[2px] hover:shadow-[0_10px_36px_rgba(107,114,255,0.55)] transition-all text-center whitespace-nowrap">
            Start Free Consultation →
          </a>
        </div>

        {/* ── Arch backdrop + floating cards (phone shows on mobile too) ─────── */}
        <div ref={bentoRef} className="reveal relative w-full pt-10">
          <div className="hero-arch" aria-hidden="true" />
          <div className="hero-grid-pattern" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">

            {/* Left column (desktop only) */}
            <div className="hidden md:flex flex-col gap-6 md:mt-14">
              <div className="hero-pill g-card self-start float-card-left-pill translate-x-0 md:translate-x-3 transition-transform duration-300">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-p1/25 to-blue/15 flex-shrink-0 text-p1">
                  <Clock size={17} strokeWidth={2.25} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-muted font-semibold leading-none mb-1">Content time saved</div>
                  <div className="text-[18px] font-extrabold text-ink leading-none">80%</div>
                </div>
              </div>

              <div className="g-card rounded-card-lg p-5 flex flex-col gap-4 text-left float-card-left transition-all duration-300">
                <div className="hidden md:block rounded-[12px] bg-white/40 border border-white/60 p-2.5">
                  <KanbanAnimation />
                </div>
                <h3 className="text-[15px] font-bold text-ink">Content Plan</h3>
              </div>
            </div>

            {/* Center column — chat animation, no card frame (shown on all breakpoints) */}
            <div className="flex md:mt-28 items-center justify-center">
              <div className="relative w-[295px] h-[394px] md:w-[382px] md:h-[510px]">
                <div className="origin-top-left scale-[0.82] md:scale-[1.06] rotate-[-1deg]">
                  <HeroAnimation />
                </div>
              </div>
            </div>

            {/* Right column (desktop only) */}
            <div className="hidden md:flex flex-col gap-6 md:-mt-8">
              <div className="hero-pill g-card self-end float-card-right-pill translate-x-0 md:-translate-x-4 transition-transform duration-300">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-teal/25 to-blue/15 flex-shrink-0 text-teal">
                  <RefreshCw size={16} strokeWidth={2.25} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-muted font-semibold leading-none mb-1">AI agents running</div>
                  <div className="text-[18px] font-extrabold text-ink leading-none">24/7</div>
                </div>
              </div>

              <div className="g-card rounded-card-lg p-5 flex flex-col gap-4 text-left float-card-right transition-all duration-300 md:mt-8">
                <div className="hidden md:block rounded-[12px] bg-white/40 border border-white/60 p-2.5">
                  <ChartAnimation />
                </div>
                <h3 className="text-[15px] font-bold text-ink">Social Media Analytics</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
