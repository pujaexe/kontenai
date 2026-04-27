'use client'
import { SERVICES } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'

export default function Services() {
  const revealRef = useReveal()

  return (
    <section id="services" className="py-[80px] px-6 md:px-[56px] relative z-10 text-center">
      <div className="inline-flex items-center gap-1.5 bg-p1/10 border border-p1/20 text-p1 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
        <div className="w-[5px] h-[5px] bg-p1 rounded-full" />
        Services
      </div>
      <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-ink mb-3">Built for <span className="grad-text">properties</span><br />& growing businesses</h2>
      <p className="text-[16px] text-muted max-w-[500px] mx-auto mb-[52px] leading-[1.8]">
        Everything handled by our team. You approve the content — we take care of the rest.
      </p>

      <div ref={revealRef} className="reveal services-grid grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {SERVICES.map((service, i) => (
          <div key={i} className="g-card p-[30px_26px] rounded-card text-left transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_56px_rgba(107,114,255,0.14),0_1px_0_rgba(255,255,255,0.8)_inset]">
            <div className={`w-[52px] h-[52px] rounded-[16px] flex items-center justify-center text-[22px] mb-[18px] bg-gradient-to-br ${
              service.colorClass === 'sic-1' ? 'from-p1/18 to-blue/10' :
              service.colorClass === 'sic-2' ? 'from-blue/18 to-teal/10' :
              service.colorClass === 'sic-3' ? 'from-teal/18 to-p1/10' :
              service.colorClass === 'sic-4' ? 'from-[#FFB347]/20 to-rose/10' :
              service.colorClass === 'sic-5' ? 'from-rose/18 to-[#FFB347]/10' :
              'from-p1/12 to-teal/12'
            }`}>
              {service.icon}
            </div>
            <h3 className="text-[16px] font-bold text-ink mb-2">{service.title}</h3>
            <p className="text-[13px] text-muted leading-[1.65] mb-3.5">{service.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag, j) => (
                <span key={j} className="text-[11px] font-semibold p-[3px_10px] rounded-full bg-white/50 text-ink2 border border-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
