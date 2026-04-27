# Konten.ai — Convert HTML Landing Page to Next.js 14

## Your Task
Convert the provided `kontenai-landing.html` file into a production-ready **Next.js 14 App Router** project with full TypeScript, Tailwind CSS, and all SEO/performance optimizations preserved. The final result must be pixel-perfect to the original HTML design — same colors, same animations, same layout, same glassmorphism effects.

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules for complex animations
- **Font:** `Plus Jakarta Sans` via `next/font/google`
- **Icons:** No external icon library — use emoji or inline SVG as in original
- **Animation:** CSS keyframes preserved via Tailwind arbitrary values + `globals.css`
- **Package manager:** `pnpm` (preferred) or `npm`

---

## Project Setup

```bash
pnpm create next-app@latest kontenai --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd kontenai
pnpm install
```

---

## Folder Structure to Create

```
kontenai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout with ALL meta tags & JSON-LD
│   │   ├── page.tsx            ← Main page — assembles all sections
│   │   ├── globals.css         ← All keyframe animations, custom CSS vars
│   │   └── sitemap.ts          ← Auto-generate sitemap
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Footer.tsx
│   │   └── Stars.tsx           ← Client component for twinkling stars
│   ├── lib/
│   │   └── constants.ts        ← All text content, pricing, links
│   └── types/
│       └── index.ts
├── public/
│   ├── og-image.jpg            ← 1200×630 OG image (create or placeholder)
│   ├── robots.txt
│   └── sitemap.xml             ← Also auto-generated via sitemap.ts
├── tailwind.config.ts
└── next.config.ts
```

---

## Step 1 — `src/app/layout.tsx`

This is the most critical file. Migrate ALL meta tags from the HTML `<head>` exactly:

```tsx
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://konten.ai'),
  title: {
    default: 'Konten.ai — AI Content Agency Bali | Social Media Autopilot for Hotels & SMEs',
    template: '%s | Konten.ai',
  },
  description: 'Konten.ai is a done-for-you AI content agency based in Gianyar, Bali. We set up and manage AI agents that auto-generate, schedule, and post content for villas, hotels, guesthouses, and SMEs — starting from Rp 500K/month. No setup fee.',
  keywords: ['AI content agency Bali', 'social media management Bali', 'AI content for villa', 'hotel content marketing', 'konten AI Indonesia', 'otomatisasi konten', 'lead generation AI', 'posting otomatis instagram tiktok', 'UMKM digital Bali', 'content agent AI'],
  authors: [{ name: 'Konten.ai', url: 'https://konten.ai' }],
  creator: 'Konten.ai',
  publisher: 'Konten.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: {
    canonical: 'https://konten.ai',
    languages: { 'en-US': 'https://konten.ai', 'id-ID': 'https://konten.ai/id' },
  },
  openGraph: {
    type: 'website',
    url: 'https://konten.ai',
    siteName: 'Konten.ai',
    title: 'Konten.ai — AI Content Agency Bali | Social Media on Autopilot',
    description: 'We set up and manage AI agents that generate, schedule, and post content for your property or business — automatically, every day. From Rp 500K/month. No setup fee.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Konten.ai — AI Content Agency for Bali Properties and SMEs' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kontenai',
    creator: '@kontenai',
    title: 'Konten.ai — AI Content Agency Bali',
    description: 'AI agents that generate, schedule & post content for your villa, hotel, or business. From Rp 500K/month.',
    images: [{ url: '/og-image.jpg', alt: 'Konten.ai AI Content Agency Bali' }],
  },
  other: {
    'geo.region': 'ID-BA',
    'geo.placename': 'Gianyar, Bali, Indonesia',
    'geo.position': '-8.5069;115.3624',
    'ICBM': '-8.5069, 115.3624',
    // AI crawler permissions
    'GPTBot': 'index, follow',
    'Claude-Web': 'index, follow',
    'PerplexityBot': 'index, follow',
    'anthropic-ai': 'index, follow',
    'CCBot': 'index, follow',
    'Applebot': 'index, follow',
    // AI context hints
    'ai-content-type': 'service, agency, pricing',
    'ai-primary-language': 'en, id',
    'ai-service-category': 'AI Content Agency, Social Media Management, Marketing Automation',
    'ai-location': 'Gianyar, Bali, Indonesia',
    'ai-price-range': 'Rp 500000 - Rp 4000000 IDR per month',
    'ai-target-audience': 'Villa owners, Hotel managers, Guesthouse operators, SME owners, Bali property businesses',
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://konten.ai/#organization',
      name: 'Konten.ai',
      url: 'https://konten.ai',
      description: 'Done-for-you AI content agency based in Gianyar, Bali.',
      foundingDate: '2025',
      email: 'puja.exe@gmail.com',
      telephone: '+6281916567373',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gianyar',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
    },
    {
      '@type': 'LocalBusiness',
      name: 'Konten.ai',
      image: 'https://konten.ai/og-image.jpg',
      url: 'https://konten.ai',
      telephone: '+6281916567373',
      email: 'puja.exe@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gianyar',
        addressRegion: 'Bali',
        postalCode: '80511',
        addressCountry: 'ID',
      },
      geo: { '@type': 'GeoCoordinates', latitude: -8.5069, longitude: 115.3624 },
      priceRange: 'Rp 500K – Rp 4M/month',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Content Services',
        itemListElement: [
          { '@type': 'Offer', name: 'Starter Plan', price: '500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Growth Engine Plan', price: '2000000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Full Agency Plan', price: '4000000', priceCurrency: 'IDR' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How does Konten.ai work?', acceptedAnswer: { '@type': 'Answer', text: 'We set up 4 AI agents: Research, Trend, Content, and Posting. They work together to create and publish content daily.' } },
        { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Plans start from Rp 500K/month. No setup fee.' } },
        { '@type': 'Question', name: 'Is there a setup fee?', acceptedAnswer: { '@type': 'Answer', text: 'No. Zero setup fee on all plans.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="prefetch" href="https://wa.me/6281916567373" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#6B72FF" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Step 2 — `src/app/globals.css`

Port ALL CSS custom properties and keyframe animations from the `<style>` block in the HTML. This includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #dfe6f5;
  --p1: #6B72FF;
  --p2: #9B8FFF;
  --p3: #C4BDFF;
  --blue: #5BAEFF;
  --teal: #54E5D4;
  --rose: #FF7EB3;
  --ink: #0C0B1A;
  --ink2: #2D2B4E;
  --muted: #7B8AAB;
  --r: 20px;
  --r-lg: 28px;
}

/* Port ALL @keyframes from the HTML exactly: */
@keyframes fadeDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeUp   { from { opacity: 0; transform: translateY(24px);  } to { opacity: 1; transform: translateY(0); } }
@keyframes fl       { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes mar      { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes twinkle  { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.4); } }
@keyframes placeholderPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
@keyframes cycleText {
  0%, 18%  { transform: translateY(0); }
  25%, 43% { transform: translateY(-1.4em); }
  50%, 68% { transform: translateY(-2.8em); }
  75%, 93% { transform: translateY(-4.2em); }
  100%     { transform: translateY(-5.6em); }
}

/* Glassmorphism utility classes */
.g-card {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 4px 32px rgba(107,114,255,0.08), 0 1px 0 rgba(255,255,255,0.6) inset;
}

/* Gradient text */
.grad-text {
  background: linear-gradient(135deg, #6B72FF, #5BAEFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* All other CSS from the <style> block — port everything verbatim */
/* Nav, Hero, Stats, Notif, Marquee, How, Services, Pricing, Testi, Contact, CTA, Footer */
```

---

## Step 3 — `src/lib/constants.ts`

Extract ALL hardcoded content into a constants file:

```ts
export const SITE = {
  name: 'Konten.ai',
  tagline: 'AI Content Agency Bali',
  url: 'https://konten.ai',
  wa: 'https://wa.me/6281916567373',
  waNumber: '+62 819-1656-7373',
  email: 'puja.exe@gmail.com',
  location: 'Gianyar, Bali — serving all of Indonesia',
}

export const BADGE_TEXTS = [
  'AI Content Agency',
  'Social Media Autopilot',
  'Lead Gen on AI',
  'Done For You',
]

export const STATS = [
  { val: '80%', label: 'Content time saved' },
  { val: '24/7', label: 'AI agents running' },
  { val: '14hr', label: 'To go live' },
  { val: '3x',   label: 'More consistent' },
]

export const HOW_STEPS = [
  { step: '01', icon: '🔍', title: 'Research Agent', desc: 'Gathers intel on your business, competitors, and audience to build a solid content foundation.' },
  { step: '02', icon: '📡', title: 'Trend Agent',    desc: 'Monitors real-time trends on Instagram, TikTok, and platforms relevant to your niche.' },
  { step: '03', icon: '✍️', title: 'Content Agent',  desc: 'Writes captions, hashtags, and copy matching your brand voice — ready for your quick review.' },
  { step: '04', icon: '🚀', title: 'Posting Agent',  desc: 'Schedules and publishes at optimal times across Instagram, TikTok, and Facebook.' },
]

export const SERVICES = [
  { icon: '📱', title: 'AI Social Media Management', desc: 'Consistent daily posting on Instagram, TikTok, and Facebook — captions, hashtags, and scheduling fully automated.', tags: ['Instagram', 'TikTok', 'Facebook'], colorClass: 'sic-1' },
  { icon: '🏨', title: 'Property Content',           desc: 'Tailored for villas, hotels, and guesthouses — seasonal promos, room highlights, and automated review responses.', tags: ['Villa', 'Hotel', 'Guesthouse'], colorClass: 'sic-2' },
  { icon: '⚡', title: 'Automated Lead Generation',  desc: 'AI agents detect potential guests from DMs and comments, then route them directly to your WhatsApp.', tags: ['DM Auto-reply', 'WhatsApp'], colorClass: 'sic-3' },
  { icon: '📊', title: 'Monthly Content Strategy',   desc: 'Content calendar, performance analysis, and data-backed recommendations — delivered every month.', tags: ['Calendar', 'Analytics'], colorClass: 'sic-4' },
  { icon: '🛍️', title: 'SME Content',               desc: 'For F&B, fashion, retail, and services — promos, flash sales, and brand storytelling that drives engagement.', tags: ['F&B', 'Fashion', 'Retail'], colorClass: 'sic-5' },
  { icon: '🎬', title: 'AI Visual Production',       desc: 'Product mockups, property visuals, and Reels thumbnails created with AI — no photo shoot required.', tags: ['AI Mockups', 'Reels'], colorClass: 'sic-6' },
]

export const PLANS = [
  {
    tier: 'Starter',
    featured: false,
    originalPrice: 'Rp 1.5M',
    price: 'Rp 500K',
    save: 'Save 67%',
    period: '/month · no setup fee',
    features: ['12–15 posts per month', 'AI captions + hashtags', 'Automated scheduling', 'Instagram & Facebook', 'Monthly performance report'],
    waMessage: "Hi! I'm interested in the Starter plan at Rp500K/mo",
  },
  {
    tier: 'Growth Engine',
    featured: true,
    badge: '✦ Most Popular',
    originalPrice: 'Rp 4M',
    price: 'Rp 2M',
    save: 'Save 50%',
    period: '/month · no setup fee',
    features: ['20–25 posts per month', 'Stories & Reels content', 'Auto DM & comment replies', 'WhatsApp lead gen automation', 'IG, Facebook & TikTok', 'Monthly strategy call'],
    waMessage: "Hi! I'm interested in the Growth Engine at Rp2M/mo",
  },
  {
    tier: 'Full Agency',
    featured: false,
    originalPrice: 'Rp 8M',
    price: 'Rp 4M',
    save: 'Save 50%',
    period: '/month · no setup fee',
    features: ['Everything in Growth Engine', 'AI video content (Reels)', 'Google review management', 'OTA copywriting (Airbnb etc.)', 'Dedicated account manager', 'Weekly analytics report'],
    waMessage: "Hi! I'm interested in the Full Agency at Rp4M/mo",
  },
]

export const TESTIMONIALS = [
  { initials: 'PT', name: 'Putri',        role: 'Villa Owner, Ubud',                avClass: 'av-1', text: '"Konten.ai helped us show up consistently on social media without hiring a team. In 2 months, booking inquiries went up significantly."' },
  { initials: 'BS', name: 'Budi Santoso', role: 'Guesthouse Owner, Seminyak',        avClass: 'av-2', text: '"The AI content made our property look professional. New guests told us they booked because our Instagram was active and visually compelling."' },
  { initials: 'DL', name: 'Dewi Lestari', role: 'Marketing Manager, Boutique Hotel', avClass: 'av-3', text: '"Outstanding content quality and an extremely responsive team. I don\'t worry about content anymore — I just focus on running the hotel."' },
]

export const MARQUEE_ITEMS = [
  'AI Content Strategy', 'Social Media Automation', 'Lead Generation',
  'Villa & Hotel Content', 'SME Digital Growth', 'Auto Posting IG TikTok FB', 'Done For You',
]
```

---

## Step 4 — Component Instructions

### `Nav.tsx` — Server Component
- Floating pill navbar with glassmorphism (`g-card` class)
- Logo with gradient icon + `konten.ai` text
- Nav links: How It Works, Services, Pricing, Contact
- CTA button linking to WhatsApp
- Sticky `top-4` with `fixed` position

### `Hero.tsx` — Client Component (`'use client'`)
- Full viewport height section
- **Video background:** `<video autoPlay muted loop playsInline>` with overlay div
- Animated badge with cycling text (cycleText animation on `.badge-anim-inner`)
- H1 with gradient text on "on autopilot."
- Sub text, two CTA buttons
- Stats row (glass card)
- 3 floating notification cards with staggered float animations
- Twinkling stars are handled by `Stars.tsx`

### `Stars.tsx` — Client Component (`'use client'`)
```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function Stars() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('div')
      const size = Math.random() * 2.5 + 1
      s.style.cssText = `
        position:absolute;border-radius:50%;background:white;
        width:${size}px;height:${size}px;
        left:${Math.random()*100}%;top:${Math.random()*100}%;
        opacity:${0.1+Math.random()*0.2};
        animation:twinkle ${2+Math.random()*4}s ease-in-out ${Math.random()*5}s infinite;
      `
      ref.current.appendChild(s)
    }
  }, [])
  return <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}
```

### `Marquee.tsx` — Server Component
- Duplicate items array twice for seamless loop
- `animation: mar 24s linear infinite` on inner track

### `HowItWorks.tsx` — Server Component
- 4-column grid on desktop, 1-column on mobile
- Each card: step badge, colored icon box, title, description
- Cards use `g-card` glassmorphism

### `Services.tsx` — Server Component
- 3-column grid
- Map over `SERVICES` constant
- Each card: colored icon box, title, desc, tag pills
- Hover: translateY(-6px) with enhanced shadow

### `Pricing.tsx` — Server Component
- Dark section with mesh gradient background (CSS)
- 3 pricing cards, middle one is `featured`
- Price anchor (strikethrough original + save badge) + actual price
- Checklist features with custom CSS checkmarks
- Each button links to WhatsApp with pre-filled message

### `Testimonials.tsx` — Server Component
- 3 glass cards
- Star rating (★★★★★ in gold)
- Italic quote text
- Author avatar (gradient circle with initials), name, role

### `Contact.tsx` — Client Component (`'use client'`)
- Two-column: left info, right form
- Form state with `useState`
- On submit: show success state + open WhatsApp after 1 second delay
- Form wrapped in glass card

### `CtaBanner.tsx` — Server Component
- Full-width gradient banner (purple → blue → teal)
- Noise texture overlay via CSS
- Two buttons: white filled + ghost white

### `Footer.tsx` — Server Component
- Dark background
- Logo, nav links, copyright
- Hidden SEO content div (`aria-hidden="true"`) with full text content for AI crawlers

---

## Step 5 — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        p1: '#6B72FF',
        p2: '#9B8FFF',
        p3: '#C4BDFF',
        blue: { DEFAULT: '#5BAEFF' },
        teal: { DEFAULT: '#54E5D4' },
        rose: { DEFAULT: '#FF7EB3' },
        ink: { DEFAULT: '#0C0B1A', 2: '#2D2B4E' },
        muted: '#7B8AAB',
      },
      borderRadius: {
        card: '20px',
        'card-lg': '28px',
      },
      animation: {
        'fade-down': 'fadeDown 0.6s ease both',
        'fade-up':   'fadeUp 0.7s ease both',
        'float':     'fl 4s ease-in-out infinite',
        'marquee':   'mar 24s linear infinite',
        'twinkle':   'twinkle 3s ease-in-out infinite',
        'cycle-text':'cycleText 4s cubic-bezier(0.4,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
```

---

## Step 6 — `next.config.ts`

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },

  // Security & caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          // Cache HTML pages for 1 hour, revalidate in background
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/(.*)\\.(js|css|woff2|png|jpg|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## Step 7 — `public/robots.txt`

```txt
User-agent: *
Allow: /

# AI Crawlers — explicitly allowed
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Applebot
Allow: /

User-agent: bingbot
Allow: /

Sitemap: https://konten.ai/sitemap.xml
```

---

## Step 8 — `src/app/sitemap.ts`

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://konten.ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

---

## Step 9 — Scroll Reveal (useReveal hook)

Create `src/hooks/useReveal.ts`:

```ts
'use client'
import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.07 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
```

Use in any component:
```tsx
const ref = useReveal()
return <div ref={ref} className="reveal">...</div>
```

For Server Components, use a `RevealWrapper` Client Component that wraps children.

---

## Step 10 — Contact Form Handler

Create `src/app/api/contact/route.ts` for form submission:

```ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  // Option A: Forward to email via Resend / Nodemailer
  // Option B: Log and redirect to WhatsApp (current behavior)
  // Option C: Save to a Notion database / Google Sheets via API
  
  const waMessage = encodeURIComponent(
    `Hi Konten.ai! New consultation request:\nName: ${body.name}\nBusiness: ${body.business}\nPlan: ${body.plan}\nMessage: ${body.message}`
  )
  
  return NextResponse.json({ 
    success: true, 
    waUrl: `https://wa.me/6281916567373?text=${waMessage}` 
  })
}
```

---

## Critical Rules for Claude Code

1. **Pixel-perfect** — Do not change any colors, spacing, font sizes, or animations. The CSS from the HTML is the source of truth.
2. **No UI libraries** — Do not install shadcn, MUI, Chakra, or Radix. Build everything from scratch with Tailwind + custom CSS.
3. **Glass effects** — `backdrop-filter: blur(24px)` must be preserved on all `.g-card` elements. Use CSS modules or globals.css for this, not Tailwind (Tailwind's backdrop-blur purges differently).
4. **Video background** — The `<video>` element in Hero must have `autoPlay muted loop playsInline` as React boolean props. The `src` is left empty for the client to fill.
5. **Animations** — All keyframes must live in `globals.css`. Use Tailwind's `animation` config to reference them by name.
6. **'use client' only where needed** — Stars, Contact form, Hero (for video ref), badge animation. Everything else is Server Component.
7. **Font** — Use `next/font/google` only. Remove any `<link>` to Google Fonts.
8. **No `<img>` tags** — Use `next/image` with `width`, `height`, and `alt` for any images added later.
9. **WhatsApp links** — All CTA buttons must open `https://wa.me/6281916567373` with appropriate pre-filled messages.
10. **Hidden SEO block** — The `#seo-content` div in Footer must be preserved with `aria-hidden="true"` and `style={{ display: 'none' }}`.

---

## Final Checklist Before `pnpm build`

- [ ] `pnpm build` completes with zero errors and zero TypeScript errors
- [ ] `pnpm lint` passes
- [ ] All animations working (float, marquee, badge cycle, stars twinkle, reveal on scroll)
- [ ] Glassmorphism visible on nav, hero stats, cards, form
- [ ] Video background placeholder shows (pulsing gradient) when `src` is empty
- [ ] All WhatsApp links open correct number with pre-filled messages
- [ ] JSON-LD visible in page source (`view-source:`)
- [ ] Open Graph tags present in `<head>`
- [ ] AI crawler meta tags present
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] Mobile responsive (test at 375px, 768px, 1440px)
- [ ] Lighthouse score: Performance ≥ 90, SEO = 100, Accessibility ≥ 90

---

## Reference Files

Place these in the project root before starting:
- `kontenai-landing.html` — the complete source HTML (this is your design reference)

The HTML file is the single source of truth for design. When in doubt, match the HTML exactly.
