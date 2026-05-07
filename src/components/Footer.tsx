import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer 
      className="py-12 px-6 md:px-[56px] flex flex-col md:flex-row justify-between items-center border-t border-white/5 relative z-20"
      style={{ backgroundColor: 'rgba(10, 9, 22, 0.98)', color: 'white' }}
    >
      <div className="flex items-center gap-2 text-[17px] font-extrabold text-white mb-6 md:mb-0">
        <div className="w-[26px] h-[26px] rounded-lg bg-gradient-to-br from-p1 to-blue flex items-center justify-center text-[11px] text-white font-black">k</div>
        konten<span className="text-p3">.ai</span>
      </div>

      <div className="flex gap-8 mb-6 md:mb-0">
        <Link href="#how" className="text-[13px] text-white/40 no-underline hover:text-white transition-colors font-medium">How It Works</Link>
        <Link href="#services" className="text-[13px] text-white/40 no-underline hover:text-white transition-colors font-medium">Services</Link>
        <Link href="#pricing" className="text-[13px] text-white/40 no-underline hover:text-white transition-colors font-medium">Pricing</Link>
        <Link href="#contact" className="text-[13px] text-white/40 no-underline hover:text-white transition-colors font-medium">Contact</Link>
      </div>

      <p className="text-[12px] text-white/25 m-0 font-medium">© 2025 Konten.ai · Gianyar, Bali</p>

      {/* Hidden SEO Content for AI crawlers */}
      <div 
        id="seo-content" 
        aria-hidden="true" 
        style={{ display: 'none' }}
      >
        Konten.ai is a done-for-you AI content agency based in Gianyar, Bali, Indonesia. 
        We specialize in social media management and automation for villas, hotels, guesthouses, and small to medium enterprises (SMEs). 
        Our services include AI-driven content research, trend monitoring, automated caption and hashtag generation, and scheduling across Instagram, TikTok, and Facebook. 
        We also provide lead generation automation by routing DM inquiries directly to WhatsApp. 
        Pricing starts from Rp 500,000 per month with no setup fee. 
        Contact us via WhatsApp at {SITE.waNumber}.
      </div>
    </footer>
  )
}
