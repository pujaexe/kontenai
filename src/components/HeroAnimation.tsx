'use client'
import { useEffect, useState } from 'react'

/* ── Proper brand SVG icons ─────────────────────── */
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TtIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const SOCIAL = [
  { Icon: IgIcon,  bg: 'linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', anim: 'bubble1', delay: '0s'   },
  { Icon: FbIcon,  bg: 'linear-gradient(160deg,#1877F2,#0a5ec7)', anim: 'bubble2', delay: '1.1s' },
  { Icon: TtIcon,  bg: 'linear-gradient(160deg,#1a1a1a,#2a2a2a)',                   anim: 'bubble3', delay: '2.2s' },
] as const

export default function HeroAnimation() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div style={{ width: 340, height: 480 }} />

  return (
    <div className="relative select-none pointer-events-none" style={{ width: 340, height: 480 }} aria-hidden="true">

      {/* ── PHONE ─────────────────────────────────── */}
      <div className="absolute" style={{ left: 0, top: 20, width: 196, height: 396 }}>
        {/* Shell */}
        <div className="absolute inset-0 rounded-[36px]"
          style={{ background: 'linear-gradient(160deg,#1c1c2e,#0d0d1a)', boxShadow: '0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07)' }} />
        {/* Side buttons */}
        <div className="absolute rounded-r-sm" style={{ right:-3, top:88, width:3, height:32, background:'#2a2a3e' }} />
        <div className="absolute rounded-l-sm" style={{ left:-3, top:78, width:3, height:20, background:'#2a2a3e' }} />
        <div className="absolute rounded-l-sm" style={{ left:-3, top:106, width:3, height:42, background:'#2a2a3e' }} />
        {/* Screen */}
        <div className="absolute overflow-hidden rounded-[32px]" style={{ inset: 4 }}>
          <div className="absolute inset-0" style={{ background: '#ECE5DD' }} />
          {/* Notch */}
          <div className="absolute rounded-b-[10px] z-20"
            style={{ top:0, left:'50%', transform:'translateX(-50%)', width:50, height:18, background:'#1c1c2e' }} />
          {/* WA Header */}
          <div className="absolute left-0 right-0 flex items-center gap-2 z-10"
            style={{ top:18, height:48, padding:'0 10px', background:'linear-gradient(135deg,#1a5c4c,#075E54)' }}>
            <div className="rounded-full flex items-center justify-center text-white font-black shrink-0"
              style={{ width:30, height:30, fontSize:11, background:'linear-gradient(135deg,#25D366,#128C7E)', boxShadow:'0 2px 6px rgba(0,0,0,0.2)' }}>C</div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize:9, fontWeight:700, color:'white', lineHeight:1 }}>Claudia AI</div>
              <div style={{ fontSize:7, color:'#a0e8d0', lineHeight:1, marginTop:3 }}>✓ Posting Agent · online</div>
            </div>
            <div style={{ fontSize:11, color:'#a0e8d0' }}>⋯</div>
          </div>
          {/* Chat */}
          <div className="absolute left-0 right-0 flex flex-col gap-[5px] overflow-hidden"
            style={{ top:66, bottom:28, padding:'8px 8px 4px' }}>
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage:'radial-gradient(circle,#6B72FF 1px,transparent 1px)', backgroundSize:'14px 14px' }} />
            {/* User 1 */}
            <div className="relative self-end" style={{ maxWidth:136, animation:'msgIn 0.3s ease 0.7s both' }}>
              <div style={{ background:'#DCF8C6', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 2px 8px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)', lineHeight:1.45, color:'#1a1a1a' }}>
                Hi! manage my villa&apos;s social media please 🙏
              </div>
            </div>
            {/* Typing */}
            <div className="relative self-start" style={{ animation:'msgIn 0.3s ease 1.7s both' }}>
              <div className="flex items-center gap-[3px]"
                style={{ background:'white', padding:'7px 10px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)' }}>
                {[0, 0.2, 0.4].map((d, i) => (
                  <span key={i} className="block rounded-full"
                    style={{ width:4, height:4, background:'#aaa', animation:`typingDot 1.2s ease ${d}s infinite` }} />
                ))}
              </div>
            </div>
            {/* AI 1 */}
            <div className="relative self-start" style={{ maxWidth:142, animation:'msgIn 0.3s ease 2.7s both' }}>
              <div style={{ background:'white', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)', lineHeight:1.45, color:'#1a1a1a' }}>
                On it! Daily posts for IG, TikTok & FB — fully automated 🚀
              </div>
            </div>
            {/* User 2 */}
            <div className="relative self-end" style={{ maxWidth:120, animation:'msgIn 0.3s ease 5s both' }}>
              <div style={{ background:'#DCF8C6', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 2px 8px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)', lineHeight:1.45, color:'#1a1a1a' }}>
                How often will you post? ⏰
              </div>
            </div>
            {/* AI 2 */}
            <div className="relative self-start" style={{ maxWidth:142, animation:'msgIn 0.3s ease 6.4s both' }}>
              <div style={{ background:'white', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)', lineHeight:1.45, color:'#1a1a1a' }}>
                Every day at peak times. 3 posts already scheduled! ✅
              </div>
            </div>
            {/* Notif */}
            <div className="relative" style={{ animation:'msgIn 0.3s ease 8.4s both' }}>
              <div style={{ background:'rgba(37,211,102,0.12)', border:'1px solid rgba(37,211,102,0.28)', color:'#1a5c4c', fontSize:7, padding:'5px 10px', borderRadius:8, textAlign:'center', fontWeight:600 }}>
                📱 Post published · Instagram · just now
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="absolute left-0 right-0 flex items-center gap-[6px]"
            style={{ bottom:0, height:28, background:'#f0f0f0', borderTop:'1px solid #e0e0e0', padding:'0 8px' }}>
            <div className="flex-1 bg-white rounded-full" style={{ fontSize:6, color:'#aaa', padding:'3px 8px' }}>Message...</div>
            <div className="rounded-full flex items-center justify-center text-white font-bold"
              style={{ width:15, height:15, fontSize:8, background:'#25D366' }}>→</div>
          </div>
        </div>
      </div>

      {/* ── MEDIA ICONS FLYING TO AI ─────────────── */}
      {([
        { emoji:'🖼️', left:216, top:102, anim:'floatToDb1', dur:'3.6s', delay:'0s'   },
        { emoji:'🎬', left:248, top:156, anim:'floatToDb2', dur:'3.6s', delay:'1.2s' },
        { emoji:'✍️', left:224, top:200, anim:'floatToDb3', dur:'3.6s', delay:'2.4s' },
      ] as const).map((item, i) => (
        <div key={i} className="absolute z-10" style={{ left:item.left, top:item.top, fontSize:20, animation:`${item.anim} ${item.dur} ease-in-out ${item.delay} infinite` }}>
          {item.emoji}
        </div>
      ))}

      {/* ── AI PROCESSING CIRCLE ─────────────────── */}
      <div className="absolute z-20" style={{ left: 234, top: 226 }}>
        <div className="relative" style={{ width: 82, height: 82 }}>
          {/* Pulsing outer rings */}
          <div className="absolute inset-0 rounded-full"
            style={{ border:'1px solid rgba(107,114,255,0.35)', animation:'aiRingPulse 2.2s ease-out infinite' }} />
          <div className="absolute inset-0 rounded-full"
            style={{ border:'1px solid rgba(107,114,255,0.2)', animation:'aiRingPulse 2.2s ease-out 0.8s infinite' }} />
          {/* BG disc */}
          <div className="absolute rounded-full"
            style={{ inset:6, background:'rgba(107,114,255,0.07)', border:'1px solid rgba(107,114,255,0.22)' }} />
          {/* Orbit ring 1 — clockwise */}
          <div className="absolute rounded-full"
            style={{ inset:10, border:'1.5px dashed rgba(107,114,255,0.5)', animation:'aiOrbit1 4s linear infinite' }}>
            <div className="absolute rounded-full"
              style={{ width:8, height:8, background:'#6B72FF', boxShadow:'0 0 7px rgba(107,114,255,0.9)', top:-4, left:'50%', marginLeft:-4 }} />
          </div>
          {/* Orbit ring 2 — counter-clockwise */}
          <div className="absolute rounded-full"
            style={{ inset:2, border:'1px dashed rgba(91,174,255,0.4)', animation:'aiOrbit2 3s linear infinite' }}>
            <div className="absolute rounded-full"
              style={{ width:6, height:6, background:'#5BAEFF', boxShadow:'0 0 6px rgba(91,174,255,0.85)', top:-3, left:'50%', marginLeft:-3 }} />
            <div className="absolute rounded-full"
              style={{ width:5, height:5, background:'#54E5D4', boxShadow:'0 0 5px rgba(84,229,212,0.85)', bottom:-2.5, left:'50%', marginLeft:-2.5 }} />
          </div>
          {/* Core */}
          <div className="absolute rounded-full"
            style={{ inset:24, background:'linear-gradient(135deg,#C4BDFF,#6B72FF,#5BAEFF)', boxShadow:'0 0 14px rgba(107,114,255,0.75)', animation:'dbGlow 2s ease-in-out infinite' }} />
        </div>
        <div style={{ fontSize:7, color:'#6B72FF', textAlign:'center', marginTop:2, fontWeight:700, letterSpacing:'0.04em', opacity:0.72 }}>AI ENGINE</div>
      </div>

      {/* ── SOCIAL MEDIA BUBBLES ─────────────────── */}
      {SOCIAL.map((b, i) => (
        <div key={i} className="absolute z-30"
          style={{ left:276, top:300, animation:`${b.anim} 2.9s ease ${b.delay} infinite` }}>
          <div className="rounded-full flex items-center justify-center"
            style={{ width:32, height:32, background:b.bg,
              border:'1.5px solid rgba(255,255,255,0.25)', boxShadow:'0 4px 14px rgba(0,0,0,0.35)',
              transform:'translateX(-50%)' }}>
            <b.Icon />
          </div>
        </div>
      ))}

      {/* ── GLOW ORBS ───────────────────────────── */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:130, height:130, background:'#6B72FF', filter:'blur(54px)', opacity:0.11, left:162, top:88 }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:90, height:90, background:'#54E5D4', filter:'blur(40px)', opacity:0.14, left:224, top:238 }} />
    </div>
  )
}
