'use client'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import { Badge } from '@/components/ui/badge'

export default function Testimonials() {
  const revealRef = useReveal()

  return (
    <section className="py-24 px-6 md:px-14 relative z-10 text-center">
      <div className="max-w-[1080px] mx-auto text-left">
        <div className="flex flex-col items-start mb-16">
          <Badge variant="outline" className="bg-p1/10 text-p1 border-p1/20 uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-p1 rounded-full mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.05] tracking-tight text-ink mb-6">Loved by <span className="text-p1">property owners</span><br />&amp; business operators</h2>
        </div>

        <div ref={revealRef} className="reveal testi-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm ring-1 ring-slate-900/5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-200">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#F9C74F" color="#F9C74F" />
                ))}
              </div>
              <p className="text-[15px] text-muted leading-relaxed mb-8 italic">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-extrabold ${
                  testi.avClass === 'av-1' ? 'bg-p1/10 text-p1' :
                  testi.avClass === 'av-2' ? 'bg-teal/10 text-teal' :
                  'bg-rose/10 text-rose'
                }`}>
                  {testi.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{testi.name}</div>
                  <div className="text-xs text-slate-400">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
