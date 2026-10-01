import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://konten.ai'),
  title: {
    default: 'Konten.ai | Platform AI untuk Produksi Konten Otomatis',
    template: '%s | Konten.ai',
  },
  description: 'Riset pasar, bangun brand guideline, temukan ide, produksi, jadwalkan, dan publikasikan konten ke semua platform dengan 6 AI agents dalam satu alur.',
  keywords: ['platform AI konten', 'AI content generator Indonesia', 'otomatisasi konten', 'social media automation', 'jadwal konten otomatis', 'AI agents', 'produksi konten AI', 'konten.ai'],
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
  },
  openGraph: {
    type: 'website',
    url: 'https://konten.ai',
    siteName: 'Konten.ai',
    title: 'Konten.ai | Dari Riset sampai Posting, Otomatis dengan AI',
    description: 'Satu platform dengan 6 AI agents untuk riset, strategi, produksi, penjadwalan, dan publikasi konten.',
    images: [{ url: 'https://konten.ai/og-image.png', width: 1200, height: 630, alt: 'Konten.ai — platform AI untuk produksi konten otomatis' }],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konten.ai | Dari Riset sampai Posting, Otomatis dengan AI',
    description: '6 AI agents untuk riset, strategi, produksi, penjadwalan, dan publikasi konten.',
    images: [{ url: 'https://konten.ai/og-image.png', alt: 'Konten.ai — platform AI untuk produksi konten otomatis' }],
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
    'ai-content-type': 'software, content automation platform',
    'ai-primary-language': 'id',
    'ai-service-category': 'AI Content Platform, Social Media Automation, Content Production',
    'ai-target-audience': 'Kreator, bisnis, agensi, UMKM, dan tim pemasaran',
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
      description: 'Platform AI all-in-one untuk riset, strategi, produksi, penjadwalan, dan publikasi konten.',
      foundingDate: '2025',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Konten.ai',
      image: 'https://konten.ai/og-image.png',
      url: 'https://konten.ai',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: 'id-ID',
      description: 'Enam AI agents terintegrasi untuk riset pasar, brand guideline, topik, produksi, kalender, dan publikasi konten.',
      featureList: ['Riset pasar dengan AI', 'Brand guideline otomatis', 'Ide dan topik konten', 'Produksi konten AI', 'Kalender konten', 'Publikasi ke berbagai platform'],
    },
  ],
}

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={font.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="prefetch" href="https://wa.me/6282342720379" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&family=Great+Vibes&display=swap" rel="stylesheet" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#6B72FF" />
      </head>
      <body className="antialiased font-normal">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
