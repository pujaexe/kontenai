'use client'
import { useState } from 'react'
import { Phone, Globe, MapPin, Rocket } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { SITE } from '@/lib/constants'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const revealRef = useReveal()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    business: '',
    whatsapp: '',
    businessType: '',
    plan: 'Growth Engine',
    message: ''
  })
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
    <section id="contact" className="py-24 px-6 md:px-14 relative z-10 flex justify-center">
      <div ref={revealRef} className="reveal grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start max-w-[980px] w-full text-left">
        <div className="">
          <div className="inline-flex items-center gap-1.5 bg-p1/10 border border-p1/20 text-p1 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
            <div className="w-[5px] h-[5px] bg-p1 rounded-full" />
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6 max-w-[320px]">
            Start with a<br /><span className="text-p1">free consultation</span>
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8 max-w-[320px]">
            Tell us about your business. In 30 minutes we'll show you exactly how AI agents can work for you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-teal bg-teal/10">
                <Phone size={18} strokeWidth={2.2} />
              </div>
              <span className="text-sm font-semibold text-slate-700">Trisna: +62 823-4272-0379</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-p1 bg-p1/10">
                <Phone size={18} strokeWidth={2.2} />
              </div>
              <span className="text-sm font-semibold text-slate-700">Nia: +62 877-4503-2833</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue bg-blue/10">
                <Globe size={18} strokeWidth={2.2} />
              </div>
              <span className="text-sm font-semibold text-slate-700">konten.ai</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#E0932B] bg-[#FFB347]/20">
                <MapPin size={18} strokeWidth={2.2} />
              </div>
              <span className="text-sm font-semibold text-slate-700">{SITE.location}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-card-lg shadow-sm ring-1 ring-slate-900/5">
          {success ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-4"><Rocket size={40} strokeWidth={1.75} className="text-p1" /></div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted mb-6">Redirecting you to WhatsApp for a faster response...</p>
              <button onClick={() => setSuccess(false)} className="text-p1 font-semibold hover:underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-ink mb-2 block">Your name</label>
                  <Input required type="text" placeholder="John Doe" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-bold text-ink mb-2 block">Business name</label>
                  <Input required type="text" placeholder="Coffee Shop / Fashion Brand" value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-ink mb-2 block">WhatsApp</label>
                  <Input type="tel" placeholder="+62 812 xxxx xxxx" value={form.whatsapp} onChange={(e) => setForm({...form, whatsapp: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-bold text-ink mb-2 block">Business type</label>
                  <Select value={form.businessType} onValueChange={(val) => setForm({...form, businessType: val})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UMKM / Retail">UMKM / Retail</SelectItem>
                      <SelectItem value="Restaurant / Cafe">Restaurant / Cafe</SelectItem>
                      <SelectItem value="Service / Salon / Clinic">Service / Salon / Clinic</SelectItem>
                      <SelectItem value="Startup / Brand Online">Startup / Brand Online</SelectItem>
                      <SelectItem value="Hotel / Property">Hotel / Property</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-ink mb-2 block">Interested plan</label>
                <Select value={form.plan} onValueChange={(val) => setForm({...form, plan: val})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Starter">Starter</SelectItem>
                    <SelectItem value="Growth Engine">Growth Engine</SelectItem>
                    <SelectItem value="Full Agency">Full Agency</SelectItem>
                    <SelectItem value="Not sure yet, just want to chat">Not sure yet, just want to chat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-bold text-ink mb-2 block">Your biggest content challenge</label>
                <Textarea placeholder="Tell us what's been holding your content back..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="resize-none" />
              </div>
              <Button disabled={loading} type="submit" size="lg" className="w-full mt-4 rounded-full font-bold shadow-glow-p1">
                {loading ? 'Sending...' : 'Send & Schedule Consultation →'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
