'use client'
import { SITE, BADGE_TEXTS, STATS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import HeroAnimation from './HeroAnimation'

export default function Hero() {
  const statsRef  = useReveal()
  const notifRef  = useReveal()

  return (
    <section className="min-h-screen relative z-10 flex flex-col items-center justify-center pt-[100px] pb-16 px-6 md:px-12">

      {/* Two-column wrapper */}
      <div className="w-full max-w-[1160px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-10 lg:gap-16">

        {/* ── LEFT: text content ─────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-w-0 max-w-[520px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-[10px] p-[6px_8px_6px_6px] rounded-full g-card mb-7 animate-fade-down">
            <div className="bg-gradient-to-br from-p1 to-blue text-white text-[10px] font-extrabold p-[4px_12px] rounded-full tracking-[0.06em] uppercase">✦ New</div>
            <span className="text-[13px] font-semibold text-ink2">
              <div className="inline-flex overflow-hidden h-[1.4em] align-middle ml-[2px]">
                <div className="flex flex-col animate-cycle-text">
                  {BADGE_TEXTS.concat(BADGE_TEXTS[0], BADGE_TEXTS[1]).map((text, i) => (
                    <span key={i} className="h-[1.4em] flex items-center whitespace-nowrap text-[13px] font-semibold text-p1">{text}</span>
                  ))}
                </div>
              </div>
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(36px,3.8vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink max-w-[500px] mb-5 animate-fade-up [animation-delay:0.1s]">
            Your content runs<br /><span className="grad-text">on autopilot.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] text-muted max-w-[400px] mb-10 leading-[1.8] animate-fade-up [animation-delay:0.2s]">
            We set up and manage AI agents that generate, schedule, and post content for your property or business — automatically, every single day.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-col sm:flex-row justify-center lg:justify-start mb-10 w-full max-w-[380px] sm:max-w-none animate-fade-up [animation-delay:0.3s]">
            <a href={SITE.wa}
              className="bg-gradient-to-br from-p1 to-blue text-white text-[14px] sm:text-[15px] font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full no-underline shadow-[0_6px_28px_rgba(107,114,255,0.45)] hover:-translate-y-[2px] hover:shadow-[0_10px_36px_rgba(107,114,255,0.55)] transition-all text-center whitespace-nowrap flex-shrink-0">
              Start Free Consultation →
            </a>
            <a href="#how"
              className="text-[14px] sm:text-[15px] font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full no-underline text-ink g-card hover:bg-white/60 transition-all text-center whitespace-nowrap flex-shrink-0">
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal flex flex-col sm:flex-row rounded-card-lg overflow-hidden g-card w-full max-w-[360px] sm:max-w-[460px]">
            {STATS.map((stat, i) => (
              <div key={i} className="p-[16px_20px] sm:p-[18px_28px] text-center border-b sm:border-b-0 sm:border-r border-white/40 last:border-0 flex-1">
                <div className="text-[24px] sm:text-[28px] font-extrabold leading-none mb-1 grad-text">{stat.val}</div>
                <div className="text-[11px] sm:text-[12px] text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Notification chips */}
          <div ref={notifRef} className="reveal flex gap-2 sm:gap-3 flex-col sm:flex-row sm:flex-wrap mt-6 w-full max-w-[380px] sm:max-w-none">
            {[
              { ic:'📱', label:'Post published',     sub:'Instagram · just now',   ni:'from-p1/25 to-blue/15'              },
              { ic:'💬', label:'3 new leads from DM', sub:'Routed to WhatsApp',     ni:'from-teal/25 to-blue/15'            },
              { ic:'📈', label:'Reach up 42%',        sub:'vs last month',          ni:'from-rose/25 to-[#FFB347]/15'       },
            ].map((n, i) => (
              <div key={i} className={`flex items-center gap-2 sm:gap-3 p-[10px_12px] sm:p-[10px_16px] rounded-[18px] g-card w-full sm:w-[calc(33.333%-10px)] ${i===0?'animate-float':i===1?'animate-float [animation-delay:0.8s]':'animate-float [animation-delay:1.5s]'}`}>
                <div className={`w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] rounded-[8px] sm:rounded-[10px] flex items-center justify-center text-[13px] sm:text-[15px] bg-gradient-to-br flex-shrink-0 ${n.ni}`}>{n.ic}</div>
                <div className="text-left min-w-0">
                  <div className="text-[12px] sm:text-[13px] font-bold text-ink truncate">{n.label}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted truncate">{n.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: animation ───────────────────── */}
        <div className="hidden lg:flex shrink-0 items-center justify-center">
          <HeroAnimation />
        </div>

      </div>
    </section>
  )
}
