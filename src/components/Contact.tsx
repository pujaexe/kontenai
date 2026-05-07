'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { SITE } from '@/lib/constants'

export default function Contact() {
  const revealRef = useReveal()
  const [form, setForm] = useState({ 
    name: '', 
    business: '', 
    whatsapp: '', 
    businessType: '', 
    plan: 'Growth Engine', 
    message: '' 
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      
      const waMessage = encodeURIComponent(
        `Hi Konten.ai! New consultation request:\nName: ${form.name}\nBusiness: ${form.business}\nWhatsApp: ${form.whatsapp}\nType: ${form.businessType}\nPlan: ${form.plan}\nMessage: ${form.message}`
      )
      
      setTimeout(() => {
        window.open(`${SITE.wa}?text=${waMessage}`, '_blank')
      }, 1000)
    }, 800)
  }

  return (
    <section id="contact" className="py-[80px] px-6 md:px-[56px] relative z-10 flex justify-center">
      <div ref={revealRef} className="reveal grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start max-w-[980px] w-full text-left">
        <div className="">
          <div className="inline-flex items-center gap-1.5 bg-p1/10 border border-p1/20 text-p1 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
            <div className="w-[5px] h-[5px] bg-p1 rounded-full" />
            Contact
          </div>
          <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em] mb-6 max-w-[320px]">
            Start with a<br /><span className="grad-text">free consultation</span>
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] mb-8 max-w-[320px]">
            Tell us about your business. In 30 minutes we'll show you exactly how AI agents can work for you.
          </p>
          <div className="space-y-3.5">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[17px] flex-shrink-0 c-ic-2 bg-gradient-to-br from-teal/20 to-blue/10">
                📱
              </div>
              <span className="text-[14px] font-semibold text-ink2">Trisna: +62 823-4272-0379</span>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[17px] flex-shrink-0 c-ic-1 bg-gradient-to-br from-p1/20 to-blue/10">
                📱
              </div>
              <span className="text-[14px] font-semibold text-ink2">Nia: +62 877-4503-2833</span>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[17px] flex-shrink-0 c-ic-3 bg-gradient-to-br from-blue/20 to-p1/10">
                🌐
              </div>
              <span className="text-[14px] font-semibold text-ink2">konten.ai</span>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[17px] flex-shrink-0 c-ic-4 bg-gradient-to-br from-[#FFB347]/20 to-rose/10">
                📍
              </div>
              <span className="text-[14px] font-semibold text-ink2">{SITE.location}</span>
            </div>
          </div>
        </div>

        <div className="form-wrap g-card p-8 rounded-card-lg">
          {success ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted mb-6">Redirecting you to WhatsApp for a faster response...</p>
              <button onClick={() => setSuccess(false)} className="text-p1 font-semibold hover:underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="flabel text-[12px] font-bold text-ink2 mb-1.5 block">Your name</label>
                  <input required type="text" placeholder="John Doe" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="finput w-full p-[12px_16px] font-sans text-[14px] bg-white/55 border-[1.5px] border-white/70 rounded-xl outline-none focus:border-p1 focus:bg-white/80 transition-all" />
                </div>
                <div>
                  <label className="flabel text-[12px] font-bold text-ink2 mb-1.5 block">Business name</label>
                  <input required type="text" placeholder="Villa Sunrise" value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} className="finput w-full p-[12px_16px] font-sans text-[14px] bg-white/55 border-[1.5px] border-white/70 rounded-xl outline-none focus:border-p1 focus:bg-white/80 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="flabel text-[12px] font-bold text-ink2 mb-1.5 block">WhatsApp</label>
                  <input type="tel" placeholder="+62 812 xxxx xxxx" value={form.whatsapp} onChange={(e) => setForm({...form, whatsapp: e.target.value})} className="finput w-full p-[12px_16px] font-sans text-[14px] bg-white/55 border-[1.5px] border-white/70 rounded-xl outline-none focus:border-p1 focus:bg-white/80 transition-all" />
                </div>
                <div>
                  <label className="flabel text-[12px] font-bold text-ink2 mb-1.5 block">Business type</label>
                  <select value={form.businessType} onChange={(e) => setForm({...form, businessType: e.target.value})} className="fselect w-full p-[12px_16px] font-sans text-[14px] bg-white/55 border-[1.5px] border-white/70 rounded-xl outline-none focus:border-p1 focus:bg-white/80 transition-all cursor-pointer">
                    <option value="">Select type</option>
                    <option>Villa</option><option>Hotel / Boutique Hotel</option>
                    <option>Guesthouse</option><option>F&B / Restaurant</option>
                    <option>Fashion / Retail</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="flabel text-[12px] font-bold text-ink2 mb-1.5 block">Interested plan</label>
                <select value={form.plan} onChange={(e) => setForm({...form, plan: e.target.value})} className="fselect w-full p-[12px_16px] font-sans text-[14px] bg-white/55 border-[1.5px] border-white/70 rounded-xl outline-none focus:border-p1 focus:bg-white/80 transition-all cursor-pointer">
                  <option>Starter</option>
                  <option>Growth Engine</option>
                  <option>Full Agency</option>
                  <option>Not sure — just want to chat</option>
                </select>
              </div>
              <div>
                <label className="flabel text-[12px] font-bold text-ink2 mb-1.5 block">Your biggest content challenge</label>
                <textarea placeholder="Tell us what's been holding your content back..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="ftextarea w-full p-[12px_16px] font-sans text-[14px] bg-white/55 border-[1.5px] border-white/70 rounded-xl outline-none focus:border-p1 focus:bg-white/80 transition-all min-h-[88px] resize-y" />
              </div>
              <button disabled={loading} type="submit" className="fsubmit w-full p-3.5 bg-gradient-to-br from-p1 to-blue text-white font-bold text-[15px] rounded-full mt-1 shadow-[0_6px_28px_rgba(107,114,255,0.4)] hover:-translate-y-0.5 transition-all disabled:opacity-70">
                {loading ? 'Sending...' : 'Send & Schedule Consultation →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
