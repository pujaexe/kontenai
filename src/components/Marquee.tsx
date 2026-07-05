import { MARQUEE_ITEMS } from '@/lib/constants'

export default function Marquee() {
  // Triplicate items for seamless infinite loop with no gaps
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="relative z-10 py-4 overflow-hidden border-y border-white/40 bg-white/15 backdrop-blur-[8px]">
      <div className="flex gap-10 w-max animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="text-[13px] font-bold text-p1/60 whitespace-nowrap flex items-center gap-[10px]">
            {item} <span className="text-p3 text-[6px]">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
