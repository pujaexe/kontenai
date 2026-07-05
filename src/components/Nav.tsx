import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-48px)] max-w-[1024px] flex items-center justify-between py-3 px-5 rounded-full g-card">
      <Link href="/" className="text-[17px] font-extrabold text-ink flex items-center gap-2 no-underline">
        <div className="w-[30px] h-[30px] rounded-[9px] bg-gradient-to-br from-p1 to-blue flex items-center justify-center text-[13px] text-white font-black shadow-[0_4px_12px_rgba(107,114,255,0.4)]">k</div>
        konten<span className="text-p1">.ai</span>
      </Link>
      
      <ul className="hidden md:flex gap-7 list-none m-0 p-0">
        <li><Link href="#how" className="text-[13px] font-semibold text-ink2 no-underline hover:text-p1 transition-colors">How It Works</Link></li>
        <li><Link href="#services" className="text-[13px] font-semibold text-ink2 no-underline hover:text-p1 transition-colors">Services</Link></li>
        <li><Link href="#pricing" className="text-[13px] font-semibold text-ink2 no-underline hover:text-p1 transition-colors">Pricing</Link></li>
        <li><Link href="#contact" className="text-[13px] font-semibold text-ink2 no-underline hover:text-p1 transition-colors">Contact</Link></li>
      </ul>
      
      <Link 
        href={SITE.wa} 
        className="bg-gradient-to-br from-p1 to-blue text-white text-[13px] font-bold py-[9px] px-[22px] rounded-full no-underline shadow-[0_4px_16px_rgba(107,114,255,0.45)] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(107,114,255,0.55)] transition-all"
      >
        Contact Us →
      </Link>
    </nav>
  )
}
