import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export default function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-48px)] max-w-[1080px] flex items-center justify-between py-3 px-5 rounded-full bg-white/80 backdrop-blur-md ring-1 ring-slate-900/5 shadow-sm">
      <Link href="/" className="text-[17px] font-extrabold text-ink flex items-center gap-2 no-underline">
        <div className="w-[30px] h-[30px] rounded-[9px] bg-p1 flex items-center justify-center text-[13px] text-white font-black shadow-sm">k</div>
        konten<span className="text-p1">.ai</span>
      </Link>
      
      <ul className="hidden md:flex gap-7 list-none m-0 p-0">
        <li><Link href="#how" className="text-sm font-semibold text-muted hover:text-p1 transition-colors">How It Works</Link></li>
        <li><Link href="#services" className="text-sm font-semibold text-muted hover:text-p1 transition-colors">Services</Link></li>
        <li><Link href="#pricing" className="text-sm font-semibold text-muted hover:text-p1 transition-colors">Pricing</Link></li>
        <li><Link href="#contact" className="text-sm font-semibold text-muted hover:text-p1 transition-colors">Contact</Link></li>
      </ul>
      
      <Button asChild className="rounded-full font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-md">
        <Link href={SITE.wa}>
          Contact Us &rarr;
        </Link>
      </Button>
    </nav>
  )
}
