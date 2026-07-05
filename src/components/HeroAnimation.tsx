'use client'
import { useEffect, useState } from 'react'

/* ── Brand SVG icons ─────────────────────────────── */
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TtIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

/* Custom premium icons for content types */
const ImageIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#5BAEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#54E5D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
)

const WriteIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#FF7EB3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
)

/* Icons that materialize from behind the phone's left/right edges, then evaporate */
const FLOATING_ICONS = [
  { kind: 'vector', Icon: ImageIcon, bg: 'rgba(255, 255, 255, 0.45)', border: 'rgba(91, 174, 255, 0.3)',  side: 'left',  left: 12,  top: 66,  dur: '4.2s', delay: '0s'   },
  { kind: 'bubble', Icon: FbIcon,    bg: 'linear-gradient(160deg,#1877F2,#0a5ec7)',                       side: 'left',  left: 4,   top: 226, dur: '3.8s', delay: '1.4s' },
  { kind: 'vector', Icon: VideoIcon, bg: 'rgba(255, 255, 255, 0.45)', border: 'rgba(84, 229, 212, 0.3)',  side: 'left',  left: 22,  top: 336, dur: '4.6s', delay: '2.6s' },
  { kind: 'vector', Icon: WriteIcon, bg: 'rgba(255, 255, 255, 0.45)', border: 'rgba(255, 126, 179, 0.3)', side: 'right', left: 296, top: 96,  dur: '4s',   delay: '0.7s' },
  { kind: 'bubble', Icon: IgIcon,    bg: 'linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',                  side: 'right', left: 300, top: 206, dur: '4.4s', delay: '2s'   },
  { kind: 'bubble', Icon: TtIcon,    bg: 'linear-gradient(160deg,#1a1a1a,#2a2a2a)',                       side: 'right', left: 292, top: 322, dur: '3.6s', delay: '3.3s' },
] as const

export default function HeroAnimation() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div style={{ width: 340, height: 480 }} />

  return (
    <div className="relative select-none pointer-events-none" style={{ width: 340, height: 480 }} aria-hidden="true">

      {/* ── GLOW ORBS (behind everything) ────────── */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:150, height:150, background:'#6B72FF', filter:'blur(58px)', opacity:0.13, left:95, top:118, zIndex:0 }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:110, height:110, background:'#54E5D4', filter:'blur(46px)', opacity:0.16, left:115, top:260, zIndex:0 }} />

      {/* ── AI PROCESSING CIRCLE — centered behind the phone ─── */}
      <div className="absolute" style={{ left: 129, top: 177, zIndex: 1 }}>
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
      </div>

      {/* ── FLOATING ICONS ─── */}
      {FLOATING_ICONS.map((item, i) => (
        <div key={i} className="absolute"
          style={{
            left: item.left, top: item.top, zIndex: 1,
            animation: `${item.side === 'left' ? 'evaporateLeft' : 'evaporateRight'} ${item.dur} ease-out ${item.delay} infinite`,
          }}>
          <div className="rounded-full flex items-center justify-center"
            style={{
              width: 30,
              height: 30,
              background: item.kind === 'bubble' ? item.bg : 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: item.kind === 'bubble' ? '1.5px solid rgba(255,255,255,0.3)' : `1.5px solid ${item.border}`,
              boxShadow: '0 4px 16px rgba(10,10,30,0.15)'
            }}
          >
            <item.Icon />
          </div>
        </div>
      ))}

      {/* ── PHONE SCREEN (always in front) ─────────────────── */}
      <div className="absolute" style={{ left: 72, top: 20, width: 196, height: 396, zIndex: 20 }}>
        {/* Shell */}
        <div className="absolute inset-0 rounded-[36px]"
          style={{ background: 'linear-gradient(160deg,#1c1c2e,#0d0d1a)', boxShadow: '0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.1)' }} />
        {/* Side buttons */}
        <div className="absolute rounded-r-sm" style={{ right:-3, top:88, width:3, height:32, background:'#2a2a3e' }} />
        <div className="absolute rounded-l-sm" style={{ left:-3, top:78, width:3, height:20, background:'#2a2a3e' }} />
        <div className="absolute rounded-l-sm" style={{ left:-3, top:106, width:3, height:42, background:'#2a2a3e' }} />
        {/* Screen */}
        <div className="absolute overflow-hidden rounded-[32px]" style={{ inset: 4 }}>
          {/* Dashboard Theme Screen BG */}
          <div className="absolute inset-0" style={{ background: '#0C0B1B' }} />
          {/* Notch */}
          <div className="absolute rounded-b-[10px] z-20"
            style={{ top:0, left:'50%', transform:'translateX(-50%)', width:50, height:18, background:'#1c1c2e' }} />
          
          {/* Dashboard Header */}
          <div className="absolute left-0 right-0 flex items-center gap-2 z-10"
            style={{ top:18, height:48, padding:'0 10px', background:'linear-gradient(135deg,#121124,#1A1835)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
            <div className="rounded-full flex items-center justify-center text-white font-black shrink-0 bg-gradient-to-br from-p1 to-blue"
              style={{ width:30, height:30, fontSize:10, boxShadow:'0 2px 6px rgba(107,114,255,0.3)' }}>
              T
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize:9, fontWeight:700, color:'white', lineHeight:1 }}>Teni Agent</div>
              <div className="flex items-center gap-1" style={{ marginTop:3 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#54E5D4] animate-pulse" />
                <span style={{ fontSize:7, color:'#7B8AAB', lineHeight:1 }}>online</span>
              </div>
            </div>
            <div style={{ fontSize:11, color:'#7B8AAB' }}>⋯</div>
          </div>

          {/* Chat Container */}
          <div className="absolute left-0 right-0 flex flex-col gap-[7px] overflow-hidden"
            style={{ top:66, bottom:28, padding:'8px 8px 4px' }}>
            <div className="absolute inset-0 opacity-[0.02]"
              style={{ backgroundImage:'radial-gradient(circle,#6B72FF 1px,transparent 1px)', backgroundSize:'14px 14px' }} />

            {/* User Message 1 */}
            <div className="relative self-end" style={{ maxWidth:136, animation:'msgIn 0.3s ease 0.7s both' }}>
              <div style={{ background:'rgba(91,174,255,0.15)', border:'1px solid rgba(91,174,255,0.3)', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 2px 8px', boxShadow:'0 1px 2px rgba(0,0,0,0.15)', lineHeight:1.45, color:'#DFE6F5' }}>
                Hi! manage my brand&apos;s social media please 🙏
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="relative self-start" style={{ animation:'msgIn 0.3s ease 1.7s both' }}>
              <div className="flex items-center gap-[3px]"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', padding:'7px 10px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)' }}>
                {[0, 0.2, 0.4].map((d, i) => (
                  <span key={i} className="block rounded-full"
                    style={{ width:4, height:4, background:'#7B8AAB', animation:`typingDot 1.2s ease ${d}s infinite` }} />
                ))}
              </div>
            </div>

            {/* Agent Message 1 */}
            <div className="relative self-start" style={{ maxWidth:142, animation:'msgIn 0.3s ease 2.7s both' }}>
              <div style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)', lineHeight:1.45, color:'#DFE6F5' }}>
                On it! Daily posts for IG, TikTok & FB, fully automated 🚀
              </div>
            </div>

            {/* User Message 2 */}
            <div className="relative self-end" style={{ maxWidth:120, animation:'msgIn 0.3s ease 5s both' }}>
              <div style={{ background:'rgba(91,174,255,0.15)', border:'1px solid rgba(91,174,255,0.3)', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 2px 8px', boxShadow:'0 1px 2px rgba(0,0,0,0.15)', lineHeight:1.45, color:'#DFE6F5' }}>
                How often will you post? ⏰
              </div>
            </div>

            {/* Agent Message 2 */}
            <div className="relative self-start" style={{ maxWidth:142, animation:'msgIn 0.3s ease 6.4s both' }}>
              <div style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', fontSize:8, padding:'5px 8px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 1px 2px rgba(0,0,0,0.1)', lineHeight:1.45, color:'#DFE6F5' }}>
                Every day at peak times. 3 posts already scheduled! ✅
              </div>
            </div>

            {/* Visual Post Preview Card (Teni Agent scheduling proof) */}
            <div className="relative self-start" style={{ maxWidth: 132, animation: 'msgIn 0.3s ease 7.6s both' }}>
              <div style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', padding:'4px', borderRadius:'8px 8px 8px 2px', boxShadow:'0 2px 8px rgba(0,0,0,0.2)' }}>
                <div className="rounded-md overflow-hidden bg-gradient-to-br from-p1 to-blue p-[0.8px]">
                  <div className="bg-[#121124] p-1.5 rounded-[5px] flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-p1 to-blue shrink-0" />
                      <div className="text-[5px] text-white font-bold leading-none">Brand Post Preview</div>
                    </div>
                    {/* Mock Post Graphic */}
                    <div className="h-12 rounded bg-gradient-to-br from-p1/20 to-blue/20 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(107,114,255,0.25) 0%, transparent 80%)' }} />
                      <span className="text-[5.5px] text-white font-extrabold tracking-wider leading-none">NEW COLLECTION</span>
                      <span className="text-[4px] text-[#54E5D4] leading-none mt-0.5">KONTENAI.AI</span>
                    </div>
                    <div className="flex justify-between items-center mt-0.5">
                      <div className="flex gap-0.5 items-center">
                        <span className="w-1 h-1 rounded-full bg-[#54E5D4] animate-ping" />
                        <span className="text-[4.5px] text-[#54E5D4] font-semibold">Scheduled</span>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10 flex items-center justify-center"><IgIcon /></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10 flex items-center justify-center"><TtIcon /></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10 flex items-center justify-center"><FbIcon /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification success bubble */}
            <div className="relative" style={{ animation:'msgIn 0.3s ease 9.4s both' }}>
              <div style={{ background:'rgba(84,229,212,0.06)', border:'1px solid rgba(84,229,212,0.18)', color:'#54E5D4', fontSize:7, padding:'5px 10px', borderRadius:8, textAlign:'center', fontWeight:600 }}>
                📱 Post published · Instagram · just now
              </div>
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="absolute left-0 right-0 flex items-center gap-[6px]"
            style={{ bottom:0, height:28, background:'#121124', borderTop:'1px solid rgba(255,255,255,0.06)', padding:'0 8px' }}>
            <div className="flex-1 bg-[#1A1835]/60 rounded-full" style={{ fontSize:6.5, color:'#7B8AAB', padding:'3.5px 8px' }}>Message...</div>
            <div className="rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br from-p1 to-blue"
              style={{ width:14, height:14, fontSize:7, boxShadow:'0 1px 4px rgba(107,114,255,0.4)' }}>→</div>
          </div>
        </div>
      </div>

    </div>
  )
}
