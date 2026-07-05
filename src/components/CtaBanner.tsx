import { SITE } from '@/lib/constants'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-[120px] px-6 md:px-[56px] text-center z-10 bg-gradient-to-br from-p1 via-[#5BAEFF] to-[#54E5D4]">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`, backgroundSize: '200px' }} />
      
      {/* Glow effect */}
      <div className="absolute -bottom-[120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/12 rounded-full blur-[50px] pointer-events-none" />

      <div className="relative z-10 max-w-[1024px] mx-auto">
        <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold text-white tracking-[-0.025em] leading-[1.1] mb-3.5">Content runs itself.<br />You focus on business.</h2>
        <p className="text-[16px] text-white/75 max-w-[440px] mx-auto mb-9 leading-[1.8]">
          Join properties and businesses across Bali that have trusted their content to our AI system.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href={SITE.wa} className="bg-white text-p1 text-[15px] font-bold py-3.5 px-8 rounded-full no-underline shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-all">
            Start Free Consultation →
          </a>
        </div>
      </div>
    </section>
  )
}
