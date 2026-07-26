'use client'
import { Check, MoreHorizontal } from 'lucide-react'
import { PLANS, SITE } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Pricing() {
  const revealRef = useReveal()

  return (
    <section
      id="pricing"
      className="py-24 px-6 md:px-14 text-center relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-rose/5 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] left-[75%] w-[600px] h-[400px] bg-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge className="bg-emerald-50 text-emerald-600 border border-emerald-200/60 uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 font-semibold shadow-sm hover:bg-emerald-50">
            Available right now
          </Badge>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">
            Transparent pricing, with top tier AI partners
          </h2>
          <p className="text-[16px] text-muted max-w-[600px] leading-relaxed">
            Transparent pricing tailored to your needs, ensuring affordability without compromising on quality. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={revealRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-[32px] transition-all duration-300 hover:-translate-y-2 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-[#FF9A9E] via-[#FECFEF] to-[#A18CD1] p-[3px] shadow-2xl shadow-purple-500/10' 
                  : 'bg-white ring-1 ring-slate-900/5 shadow-sm hover:shadow-xl hover:ring-slate-200'
              }`}
            >
              <div className={`relative h-full flex flex-col bg-white rounded-[29px] p-8 text-left ${plan.featured ? '' : ''}`}>
                
                {/* Featured Badge */}
                {plan.featured && plan.badge && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-0 -mt-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-extrabold px-6 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-md whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Card Top: Category and Dots */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    <span className="text-slate-300">✦</span>
                    {plan.category.split('·')[0].trim()}
                  </div>
                  <MoreHorizontal size={16} className="text-slate-300" />
                </div>

                {/* Tier Name & Subtitle */}
                <h3 className="text-3xl font-normal tracking-tight text-ink mb-2">
                  <span className={plan.featured ? 'font-bold' : ''}>{plan.tier}</span>
                </h3>
                <p className="text-[13px] text-muted mb-1">
                  {plan.category}
                </p>
                <div className="text-[12px] font-semibold text-emerald-500 mb-6">
                  {plan.postCount}
                </div>

                {/* Price Row */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Rp</span>
                  <span className="text-3xl font-normal text-ink tracking-tight">
                    {plan.price.replace('Rp ', '')}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium tracking-wide ml-1">
                    {plan.period}
                  </span>
                </div>

                <hr className="border-0 border-t border-slate-100 mb-6" />

                {/* Features List */}
                <ul className="list-none m-0 p-0 mb-8 space-y-3.5 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-[13px] flex items-start gap-3">
                      <Check size={14} strokeWidth={3} className={`flex-shrink-0 mt-0.5 ${feature.included ? 'text-slate-400' : 'text-slate-200 opacity-50'}`} />
                      <span className={feature.included ? 'text-slate-600' : 'text-slate-400 line-through opacity-60'}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Footer CTA */}
                <Button 
                  asChild 
                  variant={plan.featured ? 'default' : 'outline'}
                  className={`w-full rounded-full h-12 text-[13px] font-bold mt-auto ${
                    plan.featured 
                      ? 'bg-[#6B72FF] hover:bg-[#5A63FF] text-white shadow-glow-p1' 
                      : 'bg-white border-slate-200 text-ink hover:bg-slate-50'
                  }`}
                >
                  <a href={`${SITE.wa}?text=${encodeURIComponent(plan.waMessage)}`}>
                    Get {plan.tier}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
