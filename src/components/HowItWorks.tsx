'use client'
import { Search, TrendingUp, KanbanSquare, Rocket, MapPin, Globe, Image as ImageIcon, Video, Smartphone } from 'lucide-react'
import { HOW_STEPS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import KanbanAnimation from './KanbanAnimation'
import ChartAnimation from './ChartAnimation'

const STEP_ICONS = [Search, TrendingUp, KanbanSquare, Rocket]

/* ── Decorative illustration panels, one per agent ─────────── */

function ResearchIllustration() {
  return (
    <div className="relative w-full h-full min-h-[150px] flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 200 120" width="100%" height="110" className="block" aria-hidden="true">
        <defs>
          <linearGradient id="radarSweepGrad" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#6B72FF" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#6B72FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6B72FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer hud box */}
        <rect x="5" y="5" width="190" height="110" rx="6" fill="none" stroke="rgba(107,114,255,0.06)" strokeWidth="1" />

        {/* Dashboard Grid Lines (Techy background) */}
        <line x1="100" y1="6" x2="100" y2="114" stroke="rgba(107,114,255,0.1)" strokeDasharray="2 2" />
        <line x1="46" y1="60" x2="154" y2="60" stroke="rgba(107,114,255,0.1)" strokeDasharray="2 2" />
        <line x1="62" y1="22" x2="138" y2="98" stroke="rgba(107,114,255,0.04)" strokeDasharray="2 2" />
        <line x1="62" y1="98" x2="138" y2="22" stroke="rgba(107,114,255,0.04)" strokeDasharray="2 2" />

        {/* Concentric rings */}
        <circle cx="100" cy="60" r="18" fill="none" stroke="rgba(107,114,255,0.08)" strokeDasharray="3 3" />
        <circle cx="100" cy="60" r="36" fill="none" stroke="rgba(107,114,255,0.14)" />
        <circle cx="100" cy="60" r="54" fill="none" stroke="rgba(107,114,255,0.18)" />
        <circle cx="100" cy="60" r="54" fill="none" stroke="rgba(107,114,255,0.22)" strokeDasharray="8 4" />

        {/* Rotating sweep beam */}
        <g style={{ transformOrigin: '100px 60px', animation: 'radarSweep 4s linear infinite' }}>
          {/* Pie slice representing the trailing edge */}
          <path d="M 100 60 L 154 60 A 54 54 0 0 0 138.18 21.82 Z" fill="url(#radarSweepGrad)" />
          {/* Active sweeping laser line */}
          <line x1="100" y1="60" x2="154" y2="60" stroke="#6B72FF" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Center hub */}
        <circle cx="100" cy="60" r="4" fill="#6B72FF" />
        <circle cx="100" cy="60" r="8" fill="none" stroke="#6B72FF" strokeWidth="0.8" opacity="0.4" />

        {/* Sync'ed Blip 1: Web Site (Audience) */}
        <g transform="translate(55, 45)">
          <circle r="9" fill="none" stroke="#6B72FF" strokeWidth="0.8" className="animate-[radarTargetRing_4s_ease-out_infinite]" style={{ animationDelay: '2.20s', transformOrigin: 'center' }} />
          <g className="animate-[radarTargetPulse_4s_ease-in-out_infinite]" style={{ animationDelay: '2.20s', transformOrigin: 'center' }}>
            <circle r="6" fill="rgba(107,114,255,0.18)" />
            {/* Tiny Globe Icon */}
            <circle r="3.2" fill="none" stroke="#6B72FF" strokeWidth="0.6" />
            <ellipse rx="3.2" ry="1.2" fill="none" stroke="#6B72FF" strokeWidth="0.5" />
            <line x1="-3.2" y1="0" x2="3.2" y2="0" stroke="#6B72FF" strokeWidth="0.5" />
          </g>
          <text x="8" y="2.5" fill="#7B8AAB" fontSize="4.5" fontFamily="monospace" opacity="0.75" fontWeight="bold">AUDIENCE.DB</text>
        </g>

        {/* Sync'ed Blip 2: Competitor Pin */}
        <g transform="translate(145, 80)">
          <circle r="9" fill="none" stroke="#5BAEFF" strokeWidth="0.8" className="animate-[radarTargetRing_4s_ease-out_infinite]" style={{ animationDelay: '0.27s', transformOrigin: 'center' }} />
          <g className="animate-[radarTargetPulse_4s_ease-in-out_infinite]" style={{ animationDelay: '0.27s', transformOrigin: 'center' }}>
            <circle r="6" fill="rgba(91,174,255,0.18)" />
            {/* Tiny MapPin Icon */}
            <path d="M 0 -3 A 1.8 1.8 0 0 1 1.8 -1.2 C 1.8 -0.3 0 1.8 0 1.8 C 0 1.8 -1.8 -0.3 -1.8 -1.2 A 1.8 1.8 0 0 1 0 -3 Z" fill="none" stroke="#5BAEFF" strokeWidth="0.8" strokeLinejoin="round" />
            <circle cx="0" cy="-1.2" r="0.5" fill="#5BAEFF" />
          </g>
          <text x="8" y="2.5" fill="#7B8AAB" fontSize="4.5" fontFamily="monospace" opacity="0.75" fontWeight="bold">COMPETITOR.LOC</text>
        </g>

        {/* Sync'ed Blip 3: Keyword/Trending */}
        <g transform="translate(138, 30)">
          <circle r="9" fill="none" stroke="#54E5D4" strokeWidth="0.8" className="animate-[radarTargetRing_4s_ease-out_infinite]" style={{ animationDelay: '3.57s', transformOrigin: 'center' }} />
          <g className="animate-[radarTargetPulse_4s_ease-in-out_infinite]" style={{ animationDelay: '3.57s', transformOrigin: 'center' }}>
            <circle r="6" fill="rgba(84,229,212,0.18)" />
            {/* Tiny Trending Arrow */}
            <path d="M -2 1 L -0.5 -0.5 L 0.8 0.8 L 2.2 -1 M 1.2 -1 L 2.2 -1 L 2.2 0" fill="none" stroke="#54E5D4" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="-34" y="2.5" fill="#7B8AAB" fontSize="4.5" fontFamily="monospace" opacity="0.75" fontWeight="bold">TREND_API</text>
        </g>

        {/* Corner HUD Data Overlay */}
        <text x="12" y="16" fill="#6B72FF" fontSize="5.5" fontFamily="monospace" fontWeight="bold" opacity="0.9" className="animate-[radarHUDFlash_2s_infinite]">
          ● SYSTEM_SCAN: ACTIVE
        </text>
        <text x="12" y="24" fill="#7B8AAB" fontSize="5" fontFamily="monospace" opacity="0.6">
          FREQ: 2.45GHZ | POS: 42.1
        </text>
      </svg>
    </div>
  )
}

function TrendIllustration() {
  return <ChartAnimation />
}

function ContentIllustration() {
  return <KanbanAnimation />
}

function PostingIllustration() {
  return (
    <div className="relative w-full h-full min-h-[150px] flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 200 120" width="100%" height="110" className="block" aria-hidden="true">
        <defs>
          {/* Radial gradient for Instagram background */}
          <radialGradient id="instaGrad" cx="30%" cy="80%" r="90%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="40%" stopColor="#F44336" />
            <stop offset="100%" stopColor="#9C27B0" />
          </radialGradient>
        </defs>

        {/* Central Automated Scheduler Engine Card */}
        <g transform="translate(10, 32)">
          {/* Glass background */}
          <rect width="45" height="56" rx="6" fill="rgba(255, 255, 255, 0.75)" stroke="rgba(107, 114, 255, 0.2)" strokeWidth="1" />
          {/* Header */}
          <rect x="4" y="4" width="37" height="3" rx="1.5" fill="rgba(107, 114, 255, 0.15)" />
          {/* Inner Content Image Mock */}
          <rect x="4" y="10" width="37" height="20" rx="3" fill="rgba(107, 114, 255, 0.06)" stroke="rgba(107, 114, 255, 0.12)" strokeWidth="0.6" />
          <path d="M 6 26 L 14 18 L 22 23 L 32 15 L 37 19 L 37 26 Z" fill="rgba(107, 114, 255, 0.05)" stroke="rgba(107, 114, 255, 0.22)" strokeWidth="0.6" strokeLinejoin="round" />
          <circle cx="12" cy="15" r="1.5" fill="#6B72FF" opacity="0.3" />
          {/* Captions placeholder */}
          <rect x="4" y="34" width="37" height="2" rx="1" fill="rgba(107, 114, 255, 0.25)" />
          <rect x="4" y="39" width="26" height="2" rx="1" fill="rgba(107, 114, 255, 0.15)" />
          {/* Clock icon schedule indicator */}
          <g transform="translate(4, 45)">
            <rect width="21" height="6" rx="1.5" fill="#FFB347" fillOpacity="0.12" />
            <circle cx="3.2" cy="3" r="1.5" fill="none" stroke="#FFB347" strokeWidth="0.6" />
            <line x1="3.2" y1="3" x2="3.2" y2="1.8" stroke="#FFB347" strokeWidth="0.6" />
            <line x1="3.2" y1="3" x2="4.2" y2="3" stroke="#FFB347" strokeWidth="0.6" />
            <text x="6.5" y="4.8" fill="#FFB347" fontSize="4.2" fontWeight="bold" fontFamily="monospace">09:00</text>
          </g>
        </g>

        {/* Pipelines / Connective Paths to Social Networks */}
        <path id="path-instagram" d="M 55 60 C 95 60, 115 30, 155 30" fill="none" stroke="rgba(107, 114, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path id="path-tiktok" d="M 55 60 L 155 60" fill="none" stroke="rgba(107, 114, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path id="path-facebook" d="M 55 60 C 95 60, 115 90, 155 90" fill="none" stroke="rgba(107, 114, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Flying Post 1: Instagram Lane */}
        <g>
          {/* Mini post preview card */}
          <rect x="-6" y="-7" width="12" height="14" rx="2" fill="white" stroke="#FF7EB3" strokeWidth="0.8" style={{ filter: 'drop-shadow(0 2px 4px rgba(255, 126, 179, 0.25))' }} />
          <rect x="-4" y="-5" width="8" height="5" rx="1" fill="rgba(255, 126, 179, 0.1)" />
          <line x1="-4" y1="2" x2="4" y2="2" stroke="#FF7EB3" strokeWidth="0.6" />
          <line x1="-4" y1="4.5" x2="1" y2="4.5" stroke="#FF7EB3" strokeWidth="0.6" />
          {/* Animate motion along curve */}
          <animateMotion path="M 55 60 C 95 60, 115 30, 155 30" dur="3s" begin="0s" repeatCount="indefinite" keyPoints="0;1;1;1" keyTimes="0;0.4;0.8;1" calcMode="linear" />
          <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.08;0.8;0.88;1" dur="3s" begin="0s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="0.4;1;1;0.4;0.4" keyTimes="0;0.12;0.8;0.88;1" dur="3s" begin="0s" repeatCount="indefinite" additive="sum" />
        </g>

        {/* Flying Post 2: TikTok Lane */}
        <g>
          <rect x="-6" y="-7" width="12" height="14" rx="2" fill="white" stroke="#54E5D4" strokeWidth="0.8" style={{ filter: 'drop-shadow(0 2px 4px rgba(84, 229, 212, 0.25))' }} />
          <rect x="-4" y="-5" width="8" height="5" rx="1" fill="rgba(84, 229, 212, 0.1)" />
          <line x1="-4" y1="2" x2="4" y2="2" stroke="#54E5D4" strokeWidth="0.6" />
          <line x1="-4" y1="4.5" x2="1" y2="4.5" stroke="#54E5D4" strokeWidth="0.6" />
          <animateMotion path="M 55 60 L 155 60" dur="3s" begin="1s" repeatCount="indefinite" keyPoints="0;1;1;1" keyTimes="0;0.4;0.8;1" calcMode="linear" />
          <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.08;0.8;0.88;1" dur="3s" begin="1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="0.4;1;1;0.4;0.4" keyTimes="0;0.12;0.8;0.88;1" dur="3s" begin="1s" repeatCount="indefinite" additive="sum" />
        </g>

        {/* Flying Post 3: Facebook Lane */}
        <g>
          <rect x="-6" y="-7" width="12" height="14" rx="2" fill="white" stroke="#5BAEFF" strokeWidth="0.8" style={{ filter: 'drop-shadow(0 2px 4px rgba(91, 174, 255, 0.25))' }} />
          <rect x="-4" y="-5" width="8" height="5" rx="1" fill="rgba(91, 174, 255, 0.1)" />
          <line x1="-4" y1="2" x2="4" y2="2" stroke="#5BAEFF" strokeWidth="0.6" />
          <line x1="-4" y1="4.5" x2="1" y2="4.5" stroke="#5BAEFF" strokeWidth="0.6" />
          <animateMotion path="M 55 60 C 95 60, 115 90, 155 90" dur="3s" begin="2s" repeatCount="indefinite" keyPoints="0;1;1;1" keyTimes="0;0.4;0.8;1" calcMode="linear" />
          <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.08;0.8;0.88;1" dur="3s" begin="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="0.4;1;1;0.4;0.4" keyTimes="0;0.12;0.8;0.88;1" dur="3s" begin="2s" repeatCount="indefinite" additive="sum" />
        </g>

        {/* Success Rings (Expand on hit) */}
        <circle cx="155" cy="30" r="16" fill="none" stroke="#54E5D4" strokeWidth="1.2" className="animate-[publishSuccessRing_3s_infinite]" style={{ animationDelay: '1.20s', transformOrigin: '155px 30px' }} />
        <circle cx="155" cy="60" r="16" fill="none" stroke="#54E5D4" strokeWidth="1.2" className="animate-[publishSuccessRing_3s_infinite]" style={{ animationDelay: '2.20s', transformOrigin: '155px 60px' }} />
        <circle cx="155" cy="90" r="16" fill="none" stroke="#54E5D4" strokeWidth="1.2" className="animate-[publishSuccessRing_3s_infinite]" style={{ animationDelay: '0.20s', transformOrigin: '155px 90px' }} />

        {/* Target Platform Node 1: Instagram */}
        <g transform="translate(155, 30)">
          <g className="animate-[socialPulseInstagram_3s_infinite]" style={{ animationDelay: '1.20s', transformOrigin: '0px 0px' }}>
            <circle r="12" fill="url(#instaGrad)" />
            {/* Tiny Instagram glyph */}
            <rect x="-4.5" y="-4.5" width="9" height="9" rx="2" fill="none" stroke="white" strokeWidth="0.9" />
            <circle cx="0" cy="0" r="2.2" fill="none" stroke="white" strokeWidth="0.9" />
            <circle cx="2.2" cy="-2.2" r="0.6" fill="white" />
          </g>
        </g>

        {/* Target Platform Node 2: TikTok */}
        <g transform="translate(155, 60)">
          <g className="animate-[socialPulseTikTok_3s_infinite]" style={{ animationDelay: '2.20s', transformOrigin: '0px 0px' }}>
            <circle r="12" fill="#111" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
            {/* Custom vector TikTok note icon */}
            <g transform="translate(-4, -5) scale(0.65)">
              <path d="M6 2 A 2.5 2.5 0 0 1 8.5 4.5 L 8.5 5.5 A 3.5 3.5 0 0 0 6 3 L 6 8 A 2.5 2.5 0 1 1 3.5 5.5 L 3.5 6.5 A 1.5 1.5 0 1 0 5 8 L 5 2 Z" fill="#FF0050" transform="translate(-0.4, -0.4)" />
              <path d="M6 2 A 2.5 2.5 0 0 1 8.5 4.5 L 8.5 5.5 A 3.5 3.5 0 0 0 6 3 L 6 8 A 2.5 2.5 0 1 1 3.5 5.5 L 3.5 6.5 A 1.5 1.5 0 1 0 5 8 L 5 2 Z" fill="#00F2FE" transform="translate(0.4, 0.4)" />
              <path d="M6 2 A 2.5 2.5 0 0 1 8.5 4.5 L 8.5 5.5 A 3.5 3.5 0 0 0 6 3 L 6 8 A 2.5 2.5 0 1 1 3.5 5.5 L 3.5 6.5 A 1.5 1.5 0 1 0 5 8 L 5 2 Z" fill="white" />
            </g>
          </g>
        </g>

        {/* Target Platform Node 3: Facebook */}
        <g transform="translate(155, 90)">
          <g className="animate-[socialPulseFacebook_3s_infinite]" style={{ animationDelay: '0.20s', transformOrigin: '0px 0px' }}>
            <circle r="12" fill="#1877F2" />
            {/* Custom vector Facebook 'f' */}
            <path d="M 2 6 L 2 0 L 4.2 0 L 4.6 -2.5 L 2 -2.5 L 2 -4.2 C 2 -4.8 2.2 -5.4 3.2 -5.4 L 4.5 -5.4 L 4.5 -7.8 C 4.1 -7.8 2.8 -8 1.8 -8 C -0.6 -8 -2 -6.4 -2 -4 L -2 -2.5 L -3.5 -2.5 L -3.5 0 L -2 0 L -2 6 Z" fill="white" transform="translate(0, 0.5)" />
          </g>
        </g>

        {/* Small checkmark overlays that appear upon successful publication */}
        <g transform="translate(164, 21)">
          <g className="animate-[cardCheck_3s_infinite]" style={{ animationDelay: '1.20s', transformOrigin: '0px 0px' }}>
            <circle r="4.2" fill="#54E5D4" />
            <path d="M -1.8 0 L -0.4 1.4 L 1.8 -1" fill="none" stroke="white" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <g transform="translate(164, 51)">
          <g className="animate-[cardCheck_3s_infinite]" style={{ animationDelay: '2.20s', transformOrigin: '0px 0px' }}>
            <circle r="4.2" fill="#54E5D4" />
            <path d="M -1.8 0 L -0.4 1.4 L 1.8 -1" fill="none" stroke="white" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <g transform="translate(164, 81)">
          <g className="animate-[cardCheck_3s_infinite]" style={{ animationDelay: '0.20s', transformOrigin: '0px 0px' }}>
            <circle r="4.2" fill="#54E5D4" />
            <path d="M -1.8 0 L -0.4 1.4 L 1.8 -1" fill="none" stroke="white" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  )
}

const ILLUSTRATIONS = [ResearchIllustration, TrendIllustration, ContentIllustration, PostingIllustration]
const AREAS = ['hb-a', 'hb-b', 'hb-c', 'hb-d']

export default function HowItWorks() {
  const revealRef = useReveal()

  return (
    <section id="how" className="py-[80px] px-6 md:px-[56px] relative z-10 text-center">
      <div className="max-w-[1024px] mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-p1/10 border border-p1/20 text-p1 text-[11px] font-bold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-3.5">
          <div className="w-[5px] h-[5px] bg-p1 rounded-full" />
          How It Works
        </div>
        <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-ink mb-3">A system that works<br /><span className="grad-text">while you sleep</span></h2>
        <p className="text-[16px] text-muted max-w-[500px] mx-auto mb-[52px] leading-[1.8]">
          Four AI agents working in sequence, fully automated, so you can focus on running your business.
        </p>

        <div ref={revealRef} className="reveal how-bento">
          {HOW_STEPS.map((step, i) => {
            const Illustration = ILLUSTRATIONS[i]
            const StepIcon = STEP_ICONS[i]
            return (
              <div key={i} className={`${AREAS[i]} g-card rounded-card-lg p-7 flex flex-col text-left transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_56px_rgba(107,114,255,0.14),0_1px_0_rgba(255,255,255,0.8)_inset]`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${
                    i === 0 ? 'from-p1/20 to-p1/10 text-p1' :
                    i === 1 ? 'from-blue/20 to-blue/10 text-blue' :
                    i === 2 ? 'from-teal/20 to-teal/10 text-[#2FB3A3]' :
                    'from-[#FFB347]/20 to-rose/10 text-rose'
                  }`}>
                    <StepIcon size={18} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[18px] font-bold text-ink">{step.title}</h3>
                </div>
                <p className="text-[13px] text-muted leading-[1.65] mb-5">{step.desc}</p>

                <div className="mt-auto rounded-2xl bg-white/40 border border-white/60 flex-1 p-2.5">
                  <Illustration />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
