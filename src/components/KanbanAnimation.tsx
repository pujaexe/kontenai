'use client'

export default function KanbanAnimation() {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="110" className="block" aria-hidden="true">
      {/* Column Backgrounds */}
      {/* Column 1: Idea */}
      <rect x="12" y="10" width="44" height="100" rx="6" fill="rgba(107,114,255,0.03)" stroke="rgba(107,114,255,0.12)" strokeWidth="0.8" />
      {/* Column 2: Drafting */}
      <rect x="78" y="10" width="44" height="100" rx="6" fill="rgba(91,174,255,0.03)" stroke="rgba(91,174,255,0.12)" strokeWidth="0.8" />
      {/* Column 3: Approved */}
      <rect x="144" y="10" width="44" height="100" rx="6" fill="rgba(84,229,212,0.04)" stroke="rgba(84,229,212,0.15)" strokeWidth="0.8" />

      {/* Column Header Titles */}
      <g transform="translate(18, 22)">
        <circle cx="0" cy="-1.5" r="1.5" fill="#FFB347" />
        <text x="5" y="1" fill="#7B8AAB" fontSize="5" fontWeight="bold" fontFamily="monospace">IDEA</text>
      </g>
      <g transform="translate(84, 22)">
        <circle cx="0" cy="-1.5" r="1.5" fill="#5BAEFF" />
        <text x="5" y="1" fill="#7B8AAB" fontSize="5" fontWeight="bold" fontFamily="monospace">REVIEW</text>
      </g>
      <g transform="translate(150, 22)">
        <circle cx="0" cy="-1.5" r="1.5" fill="#54E5D4" />
        <text x="5" y="1" fill="#7B8AAB" fontSize="5" fontWeight="bold" fontFamily="monospace">READY</text>
      </g>

      {/* Column 1 Static Cards */}
      <g transform="translate(16, 30)">
        <rect width="36" height="18" rx="3" fill="rgba(255, 255, 255, 0.6)" stroke="rgba(107, 114, 255, 0.15)" strokeWidth="0.6" />
        <rect x="4" y="4" width="28" height="2" rx="0.5" fill="rgba(107, 114, 255, 0.25)" />
        <rect x="4" y="8" width="18" height="2" rx="0.5" fill="rgba(107, 114, 255, 0.15)" />
        <rect x="4" y="12" width="24" height="2" rx="0.5" fill="rgba(107, 114, 255, 0.1)" />
      </g>

      {/* Column 3 Static Card */}
      <g transform="translate(148, 30)">
        <rect width="36" height="22" rx="3" fill="rgba(255, 255, 255, 0.85)" stroke="rgba(84, 229, 212, 0.3)" strokeWidth="0.8" style={{ filter: 'drop-shadow(0 1.5px 3px rgba(84, 229, 212, 0.08))' }} />
        <rect x="4" y="4" width="10" height="8" rx="1.5" fill="rgba(84, 229, 212, 0.1)" />
        <rect x="18" y="4" width="14" height="2" rx="0.5" fill="rgba(107, 114, 255, 0.2)" />
        <rect x="18" y="8" width="10" height="2" rx="0.5" fill="rgba(107, 114, 255, 0.1)" />
        <rect x="4" y="15" width="28" height="2" rx="0.5" fill="rgba(107, 114, 255, 0.15)" />
        <circle cx="30" cy="8" r="2.5" fill="#54E5D4" />
        <path d="M 29 8 L 29.8 8.8 L 31.2 7.4" fill="none" stroke="white" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Success Ripple Effect in Column 3 (glowing circle that expands on card arrival) */}
      <circle
        cx="166"
        cy="76"
        r="12"
        fill="none"
        stroke="#54E5D4"
        strokeWidth="1.2"
        className="animate-[successRipplePulse_6s_infinite]"
        style={{ transformOrigin: '166px 76px' }}
      />

      {/* Moving Card: translate base positioned at Column 1 (16, 62) */}
      <g transform="translate(16, 62)">
        <g className="animate-[kanbanMove_6s_infinite]">
          {/* Card container */}
          <rect
            x="0"
            y="0"
            width="36"
            height="28"
            rx="3.5"
            fill="white"
            stroke="#6B72FF"
            strokeWidth="1"
            className="animate-[cardBorder_6s_infinite]"
            style={{ filter: 'drop-shadow(0 2.5px 6px rgba(107, 114, 255, 0.14))' }}
          />

          {/* Card Content Header (avatar + name lines) */}
          <circle cx="5.5" cy="6" r="2.2" fill="#6B72FF" opacity="0.3" />
          <rect x="9.5" y="4" width="12" height="1.8" rx="0.5" fill="#6B72FF" opacity="0.2" />
          <rect x="9.5" y="7.5" width="7" height="1.2" rx="0.5" fill="#6B72FF" opacity="0.1" />

          {/* Card Content Body (Text lines) */}
          <rect x="5" y="12.5" width="26" height="1.8" rx="0.5" fill="rgba(107, 114, 255, 0.25)" />
          <rect x="5" y="16.5" width="18" height="1.8" rx="0.5" fill="rgba(107, 114, 255, 0.15)" />

          {/* Progress Bar (Col 2 specific - displays during drafting stage) */}
          <g transform="translate(5, 21.5)">
            <rect width="26" height="2" rx="1" fill="rgba(107, 114, 255, 0.12)" />
            <rect width="0" height="2" rx="1" fill="#5BAEFF" className="animate-[cardProgressWidth_6s_infinite]" />
          </g>

          {/* Checkmark overlay (Col 3 specific - pops in upon approval) */}
          <g transform="translate(18, 14)">
            <g className="animate-[cardCheckmark_6s_infinite]" style={{ transformOrigin: '0px 0px' }}>
              <circle r="4.5" fill="#54E5D4" />
              <path d="M -1.8 0 L -0.4 1.4 L 1.8 -1" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
