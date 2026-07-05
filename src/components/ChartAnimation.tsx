'use client'

const BARS = [
  { x: 30,  minH: 15, maxH: 55, delay: '0s'   },
  { x: 65,  minH: 20, maxH: 75, delay: '0.4s' },
  { x: 100, minH: 10, maxH: 45, delay: '0.8s' },
  { x: 135, minH: 25, maxH: 85, delay: '1.2s' },
  { x: 170, minH: 15, maxH: 60, delay: '1.6s' },
] as const

const BASE_Y = 105

export default function ChartAnimation() {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="110" className="block" aria-hidden="true">
      <defs>
        {/* Gradients */}
        <linearGradient id="chartBarGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6B72FF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#5BAEFF" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6B72FF" />
          <stop offset="50%" stopColor="#5BAEFF" />
          <stop offset="100%" stopColor="#54E5D4" />
        </linearGradient>
        <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#54E5D4" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#54E5D4" stopOpacity="0" />
        </linearGradient>
        {/* Glow Filter */}
        <filter id="chartLineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid Background */}
      <line x1="15" y1="35" x2="185" y2="35" stroke="rgba(107,114,255,0.06)" strokeWidth="0.8" />
      <line x1="15" y1="70" x2="185" y2="70" stroke="rgba(107,114,255,0.06)" strokeWidth="0.8" />
      <line x1="15" y1="105" x2="185" y2="105" stroke="rgba(107,114,255,0.12)" strokeWidth="1" />

      {/* Capsule Bars in the background */}
      {BARS.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          width="12"
          rx="6"
          fill="url(#chartBarGrad)"
          y={BASE_Y - b.maxH}
          height={b.maxH}
        >
          <animate
            attributeName="height"
            values={`${b.minH};${b.maxH};${b.minH}`}
            dur="3.2s"
            begin={b.delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${BASE_Y - b.minH};${BASE_Y - b.maxH};${BASE_Y - b.minH}`}
            dur="3.2s"
            begin={b.delay}
            repeatCount="indefinite"
          />
        </rect>
      ))}

      {/* Area Chart Gradient Fill (Fades in sync with drawing line) */}
      <path
        d="M 15 95 C 45 95, 55 45, 85 60 C 115 75, 125 25, 155 40 C 170 48, 178 30, 185 25 L 185 105 L 15 105 Z"
        fill="url(#chartAreaGrad)"
      >
        <animate
          attributeName="opacity"
          values="0;0.1;0.8;0.8;0"
          keyTimes="0;0.15;0.65;0.9;1"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Spline Line Chart (Teal-to-Blue-to-Violet Gradient) */}
      <path
        d="M 15 95 C 45 95, 55 45, 85 60 C 115 75, 125 25, 155 40 C 170 48, 178 30, 185 25"
        fill="none"
        stroke="url(#chartLineGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="260"
        strokeDashoffset="260"
        className="animate-[chartDraw_4.5s_ease-in-out_infinite]"
      />

      {/* Glowing Traveler Dot */}
      <g>
        <circle r="6" fill="#54E5D4" opacity="0.45" filter="url(#chartLineGlow)" />
        <circle r="3" fill="white" />
        <animateMotion
          path="M 15 95 C 45 95, 55 45, 85 60 C 115 75, 125 25, 155 40 C 170 48, 178 30, 185 25"
          dur="4.5s"
          begin="0s"
          repeatCount="indefinite"
          keyPoints="0;1;1;1"
          keyTimes="0;0.65;0.9;1"
          calcMode="linear"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          keyTimes="0;0.05;0.9;0.95;1"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Tooltip Overlay indicating Peak Trend */}
      <g
        transform="translate(144, 2)"
        className="animate-[tooltipPop_4.5s_infinite]"
        style={{ transformOrigin: '185px 25px' }}
      >
        {/* Tooltip Glass Container */}
        <rect x="0" y="0" width="46" height="15" rx="3" fill="#0C0B1A" fillOpacity="0.85" stroke="rgba(84, 229, 212, 0.4)" strokeWidth="0.8" />
        {/* Little Tooltip Arrow */}
        <path d="M 38 15 L 41 18 L 44 15 Z" fill="#0C0B1A" stroke="rgba(84, 229, 212, 0.4)" strokeWidth="0.8" />
        {/* Mask the overlapping stroke line inside the arrow */}
        <path d="M 38.5 15 L 43.5 15" stroke="#0C0B1A" strokeWidth="1" />
        {/* Text */}
        <text x="23" y="10" fill="#54E5D4" fontSize="4.8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.2">
          +142% Trend
        </text>
      </g>
    </svg>
  )
}
