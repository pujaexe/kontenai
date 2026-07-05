'use client'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'

export default function Testimonials() {
  const revealRef = useReveal()

  return (
    <section className="py-[80px] px-6 md:px-[56px] relative z-10 text-center">
      <div className="max-w-[1024px] mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-p1/10 border border-p1/20 text-p1 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
          <div className="w-[5px] h-[5px] bg-p1 rounded-full" />
          Testimonials
        </div>
        <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-ink mb-[52px]">Loved by <span className="grad-text">property owners</span><br />&amp; business operators</h2>

        <div ref={revealRef} className="reveal testi-grid grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {TESTIMONIALS.map((testi, i) => (
            <div key={i} className="g-card p-[28px_24px] rounded-card text-left transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_16px_48px_rgba(107,114,255,0.12),0_1px_0_rgba(255,255,255,0.8)_inset]">
              <div className="flex gap-1 mb-3.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="#F9C74F" color="#F9C74F" />
                ))}
              </div>
              <p className="text-[14px] text-ink2 leading-[1.75] mb-5 italic">{testi.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-extrabold flex-shrink-0 ${
                  testi.avClass === 'av-1' ? 'bg-gradient-to-br from-p1/25 to-blue/20 text-p1' :
                  testi.avClass === 'av-2' ? 'bg-gradient-to-br from-teal/25 to-blue/20 text-[#30B5A6]' :
                  'bg-gradient-to-br from-rose/25 to-[#FFB347]/20 text-rose'
                }`}>
                  {testi.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-ink">{testi.name}</div>
                  <div className="text-[12px] text-muted">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
