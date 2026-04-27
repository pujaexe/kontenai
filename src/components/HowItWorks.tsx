'use client'
import { HOW_STEPS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'

export default function HowItWorks() {
  const revealRef = useReveal()

  return (
    <section id="how" className="py-[80px] px-6 md:px-[56px] relative z-10 text-center">
      <div className="inline-flex items-center gap-1.5 bg-p1/10 border border-p1/20 text-p1 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
        <div className="w-[5px] h-[5px] bg-p1 rounded-full" />
        How It Works
      </div>
      <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-ink mb-3">A system that works<br /><span className="grad-text">while you sleep</span></h2>
      <p className="text-[16px] text-muted max-w-[500px] mx-auto mb-[52px] leading-[1.8]">
        Four AI agents in sequence — fully automated so you can focus on running your business.
      </p>

      <div ref={revealRef} className="reveal how-grid grid grid-cols-1 md:grid-cols-4 gap-3.5">
        {HOW_STEPS.map((step, i) => (
          <div key={i} className="g-card p-[28px_22px] rounded-card text-left transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_56px_rgba(107,114,255,0.14),0_1px_0_rgba(255,255,255,0.8)_inset]">
            <span className="inline-block text-[10px] font-extrabold text-p1 bg-p1/10 p-[3px_10px] rounded-full mb-3.5 tracking-[0.06em]">
              {step.step}
            </span>
            <div className={`w-[50px] h-[50px] rounded-[16px] flex items-center justify-center text-[22px] mb-[18px] bg-gradient-to-br ${
              i === 0 ? 'from-p1/20 to-p1/10' :
              i === 1 ? 'from-blue/20 to-blue/10' :
              i === 2 ? 'from-teal/20 to-teal/10' :
              'from-[#FFB347]/20 to-rose/10'
            }`}>
              {step.icon}
            </div>
            <h3 className="text-[15px] font-bold text-ink mb-2">{step.title}</h3>
            <p className="text-[13px] text-muted leading-[1.65]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
