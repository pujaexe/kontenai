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
      telephone: '+6282342720379',
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
      telephone: '+6282342720379',
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
        <link rel="prefetch" href="https://wa.me/6282342720379" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#6B72FF" />
      </head>
      <body>{children}</body>
    </html>
  )
}
