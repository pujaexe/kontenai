'use client'
import { Check, Minus } from 'lucide-react'
import { PLANS, SITE } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'

export default function Pricing() {
  const revealRef = useReveal()

  return (
    <section
      id="pricing"
      className="pricing-section py-[80px] px-6 md:px-[56px] text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, rgba(12, 11, 26, 0.97) 0%, rgba(25, 20, 80, 0.97) 100%)' }}
    >
      {/* Mesh gradient effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[15%] w-[700px] h-[500px] bg-p1/15 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[85%] w-[500px] h-[400px] bg-blue/12 rounded-full blur-[80px]" />
        <div className="absolute top-[90%] left-[50%] w-[400px] h-[300px] bg-rose/8 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-[1024px] mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-p1/15 border border-p1/30 text-p3 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
          <div className="w-[5px] h-[5px] bg-p3 rounded-full" />
          Pricing
        </div>
        <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-white mb-3">Transparent pricing,<br /><span className="grad-text">no surprises</span></h2>
        <p className="text-[16px] text-white/40 max-w-[500px] mx-auto mb-[52px] leading-[1.8]">
          All plans include full AI agent setup and onboarding. No setup fee. Cancel anytime.
        </p>

        <div ref={revealRef} className="reveal pricing-grid grid grid-cols-1 md:grid-cols-4 gap-3.5">
          {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card relative flex flex-col rounded-card-lg p-[26px_20px] bg-white/5 backdrop-blur-[20px] border transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(107,114,255,0.2)] text-left ${
                  plan.featured ? 'border-p1/50 bg-gradient-to-br from-p1/[0.1] to-blue/[0.04] shadow-[0_16px_56px_rgba(107,114,255,0.22),0_1px_0_rgba(255,255,255,0.08)_inset]' : 'border-white/[0.09] hover:border-p1/30'
                }`}
              >
                {plan.featured && plan.badge && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[13px] bg-gradient-to-r from-p1 to-blue text-white text-[10px] font-extrabold py-[5px] px-[14px] rounded-full tracking-[0.05em] uppercase shadow-[0_4px_14px_rgba(107,114,255,0.45)] whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className={`text-[13px] font-extrabold uppercase tracking-[0.06em] mb-1 text-p3 ${plan.featured ? 'mt-3' : ''}`}>
                  {plan.tier}
                </div>
                <div className="text-[12px] text-white/35 mb-5">{plan.category}</div>

                <div className="pricing-price text-[28px] font-extrabold text-white leading-none mb-1">{plan.price}</div>
                <div className="pricing-period text-[12px] text-white/40 mb-2">{plan.period}</div>
                <div className="price-anchor-row flex items-center gap-2 mb-5">
                  <span className="price-orig text-[13px] text-white/25 line-through font-medium">{plan.originalPrice}</span>
                  <span className="price-save-badge text-[10px] font-bold border py-[2px] px-[8px] rounded-full bg-p1/15 text-p3 border-p1/30">{plan.save}</span>
                </div>

                <hr className="pricing-divider border-0 border-t border-white/[0.07] mb-4" />

                <div className="text-[15px] font-bold text-white mb-4">{plan.postCount}</div>

                <ul className="pricing-features list-none m-0 p-0 mb-7">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-[12.5px] py-[6px] flex items-center gap-2">
                      {feature.included
                        ? <Check size={14} strokeWidth={2.5} className="flex-shrink-0 text-p1" />
                        : <Minus size={14} strokeWidth={2.5} className="flex-shrink-0 text-white/20" />
                      }
                      <span className={feature.included ? 'text-white/70' : 'text-white/30'}>{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${SITE.wa}?text=${encodeURIComponent(plan.waMessage)}`}
                  className={`btn-plan block w-full mt-auto py-[12px] text-center text-[13.5px] font-bold rounded-full no-underline transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-p1 to-blue text-white shadow-[0_6px_24px_rgba(107,114,255,0.5)] hover:shadow-[0_8px_32px_rgba(107,114,255,0.65)] hover:-translate-y-[1px]'
                      : 'bg-white/6 border border-white/12 text-white/60 hover:bg-white/12 hover:border-white/25 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
