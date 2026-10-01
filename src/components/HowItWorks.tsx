'use client'
import { Search, TrendingUp, KanbanSquare, Rocket } from 'lucide-react'
import { HOW_STEPS } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'
import KanbanAnimation from './KanbanAnimation'
import ChartAnimation from './ChartAnimation'

const STEP_ICONS = [Search, TrendingUp, KanbanSquare, Rocket]

/* ── Decorative illustration panels, one per agent ─────────── */

function ResearchIllustration() {
  return (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center p-2">
      <div className="w-full h-full bg-[#0C0B1A] rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden font-mono text-[11px] md:text-xs text-slate-300 flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB347]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#54E5D4]/80" />
          </div>
          <div className="ml-auto text-slate-500 text-[10px]">research_agent.sh</div>
        </div>
        {/* Terminal Body */}
        <div className="p-4 flex-1 flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-p1 font-bold">~</span>
            <span className="text-blue">./analyze_trends --topic="fashion"</span>
          </div>
          <div className="flex gap-2 animate-fade-in [animation-delay:1s] opacity-0 fill-mode-forwards">
            <span className="text-slate-500">[System]</span>
            <span>Scanning real-time social APIs...</span>
          </div>
          <div className="flex gap-2 animate-fade-in [animation-delay:2s] opacity-0 fill-mode-forwards text-[#54E5D4]">
            <span>✓ Found 3 high-engagement topics</span>
          </div>
          <div className="flex flex-col gap-1 mt-1 animate-fade-in [animation-delay:2.5s] opacity-0 fill-mode-forwards pl-2 border-l-2 border-slate-700">
            <span className="text-slate-400">1. Minimalist streetwear (+140%)</span>
            <span className="text-slate-400">2. Sustainable fabrics (+89%)</span>
            <span className="text-slate-400">3. Y2K accessories (+55%)</span>
          </div>
          <div className="flex gap-2 mt-2 animate-fade-in [animation-delay:4s] opacity-0 fill-mode-forwards">
            <span className="text-p1 font-bold">~</span>
            <span className="text-slate-500 animate-pulse">_</span>
          </div>
        </div>
      </div>
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

import { Badge } from '@/components/ui/badge'

const ILLUSTRATIONS = [ResearchIllustration, TrendIllustration, ContentIllustration, PostingIllustration]
const AREAS = ['hb-a', 'hb-b', 'hb-c', 'hb-d']

export default function HowItWorks() {
  const revealRef = useReveal()

  return (
    <section id="how" className="py-24 px-6 md:px-14 relative z-10 text-center">
      <div className="max-w-[1080px] mx-auto text-left">
        <div className="flex flex-col items-start mb-12">
          <Badge variant="outline" className="bg-p1/10 text-p1 border-p1/20 uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-p1 rounded-full mr-2" />
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.05] tracking-tight text-ink mb-6">A system that works<br /><span className="text-p1">while you sleep</span></h2>
          <p className="text-[18px] text-muted max-w-[500px] leading-relaxed">
            Four AI agents working in sequence, fully automated, so you can focus on running your business.
          </p>
        </div>

        <div className="relative mt-8">
          {/* Glowing Orbs behind the grid */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-p1/20 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
            <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-[#54E5D4]/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
            <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-rose/15 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
          </div>

          <div ref={revealRef} className="reveal how-bento bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 overflow-hidden relative">
            {HOW_STEPS.map((step, i) => {
              const Illustration = ILLUSTRATIONS[i]
              const StepIcon = STEP_ICONS[i]
              
              // Generate different gradient themes per step
              const theme = i === 0 
                ? { icon: 'from-p1/20 to-p1/10 text-p1', backdrop: 'from-p1 to-blue/40', box: 'from-p1/10 to-blue/5' }
                : i === 1 
                ? { icon: 'from-blue/20 to-blue/10 text-blue', backdrop: 'from-blue to-teal/40', box: 'from-blue/10 to-teal/5' }
                : i === 2 
                ? { icon: 'from-teal/20 to-teal/10 text-[#2FB3A3]', backdrop: 'from-teal to-p1/40', box: 'from-teal/10 to-p1/5' }
                : { icon: 'from-[#FFB347]/20 to-rose/10 text-rose', backdrop: 'from-[#FFB347] to-rose/40', box: 'from-[#FFB347]/10 to-rose/5' }

              let borderClasses = 'border-b border-slate-100/50 last:border-b-0'
              if (i === 0) borderClasses += ' md:border-r md:border-b'
              if (i === 1) borderClasses += ' md:border-b'
              if (i === 2) borderClasses += ' md:border-r md:border-b-0'
              if (i === 3) borderClasses += ' md:border-b-0'

              return (
                <div key={i} className={`${AREAS[i]} p-8 md:p-12 text-left flex flex-col ${borderClasses} bg-white/60 hover:bg-white transition-colors duration-500`}>
                  <div className="flex flex-col mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mb-6 bg-gradient-to-br ${theme.icon}`}>
                      <StepIcon size={22} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[22px] font-extrabold text-ink mb-3">{step.title}</h3>
                    <p className="text-[15px] text-muted leading-relaxed max-w-[90%]">{step.desc}</p>
                  </div>

                  <div className="mt-auto relative rounded-[24px] p-4 bg-gradient-to-br from-slate-50 to-slate-100/50 ring-1 ring-slate-900/5 flex-1 flex items-center justify-center min-h-[220px] overflow-hidden">
                    <div className="w-full relative z-10">
                      <Illustration />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
