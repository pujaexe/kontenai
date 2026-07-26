'use client'
import { Smartphone, Hotel, Zap, BarChart3, ShoppingBag, Clapperboard } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import { Badge } from '@/components/ui/badge'

const SERVICE_ICONS = [Smartphone, Hotel, Zap, BarChart3, ShoppingBag, Clapperboard]

export default function Services() {
  const revealRef = useReveal()

  return (
    <section id="services" className="py-24 px-6 md:px-14 relative z-10 text-center overflow-hidden">
      {/* Background glowing orb for sweetness */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1080px] mx-auto text-left">
        <div className="flex flex-col items-start mb-16">
          <Badge variant="outline" className="bg-p1/10 text-p1 border-p1/20 uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-p1 rounded-full mr-2" />
            Services
          </Badge>
          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.05] tracking-tight text-ink mb-6">Built for <span className="text-p1">properties</span><br />& growing businesses</h2>
          <p className="text-[18px] text-muted max-w-[500px] leading-relaxed">
            Everything is handled by our team. You approve the content, we handle the rest.
          </p>
        </div>

        <div ref={revealRef} className="reveal services-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const ServiceIcon = SERVICE_ICONS[i]
            return (
            <div key={i} className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[40px] shadow-sm ring-1 ring-slate-900/5 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 hover:ring-slate-200">
              <div className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br shadow-inner ${
                service.colorClass === 'sic-1' ? 'from-p1/20 to-blue/10 text-p1' :
                service.colorClass === 'sic-2' ? 'from-blue/20 to-teal/10 text-blue' :
                service.colorClass === 'sic-3' ? 'from-teal/20 to-p1/10 text-[#2FB3A3]' :
                service.colorClass === 'sic-4' ? 'from-[#FFB347]/20 to-rose/10 text-[#E0932B]' :
                service.colorClass === 'sic-5' ? 'from-rose/20 to-[#FFB347]/10 text-rose' :
                'from-p1/20 to-teal/10 text-p1'
              }`}>
                <ServiceIcon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-extrabold text-ink mb-3">{service.title}</h3>
              <p className="text-[15px] text-muted leading-relaxed mb-8">{service.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, j) => (
                  <Badge key={j} variant="outline" className="bg-slate-50 text-slate-500 border-slate-200/60 font-semibold px-3 py-1 rounded-full text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
