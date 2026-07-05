export const SITE = {
  name: 'Konten.ai',
  tagline: 'AI Content Agency Bali',
  url: 'https://konten.ai',
  wa: 'https://wa.me/6282342720379',
  waNumber: '+62 823-4272-0379',
  location: 'Gianyar, Bali · serving all of Indonesia',
}

export const CONTACTS = [
  { name: 'Trisna', number: '+62 823-4272-0379', wa: 'https://wa.me/6282342720379' },
  { name: 'Nia', number: '+62 877-4503-2833', wa: 'https://wa.me/6287745032833' },
]

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
  { step: 'STEP 01', title: 'Research Agent', desc: 'Gathers intel on your business, competitors, and audience to build a solid content foundation.' },
  { step: 'STEP 02', title: 'Trend Agent',    desc: 'Monitors real-time trends on Instagram, TikTok, and platforms relevant to your niche.' },
  { step: 'STEP 03', title: 'Content Agent',  desc: 'Writes captions, hashtags, and copy that match your brand voice, ready for your quick review.' },
  { step: 'STEP 04', title: 'Posting Agent',  desc: 'Schedules and publishes at optimal times across Instagram, TikTok, and Facebook.' },
]

export const SERVICES = [
  { title: 'AI Social Media Management', desc: 'Consistent daily posting on Instagram, TikTok, and Facebook, with captions, hashtags, and scheduling fully automated.', tags: ['Instagram', 'TikTok', 'Facebook'], colorClass: 'sic-1' },
  { title: 'Local & Service Content',   desc: 'Tailored for cafes, retail stores, salons, and clinics, with menu spotlights, promo highlights, and automated review responses.', tags: ['Cafe', 'Retail', 'UMKM'], colorClass: 'sic-2' },
  { title: 'Automated Lead Generation',  desc: 'AI agents detect potential guests from DMs and comments, then route them directly to your WhatsApp.', tags: ['DM Auto-reply', 'WhatsApp'], colorClass: 'sic-3' },
  { title: 'Monthly Content Strategy',   desc: 'A content calendar, performance analysis, and data-backed recommendations, delivered every month.', tags: ['Calendar', 'Analytics'], colorClass: 'sic-4' },
  { title: 'SME Content',               desc: 'For F&B, fashion, retail, and services: promos, flash sales, and brand storytelling that drives engagement.', tags: ['F&B', 'Fashion', 'Retail'], colorClass: 'sic-5' },
  { title: 'AI Visual Production',       desc: 'Product mockups, property visuals, and Reels thumbnails created with AI, no photo shoot required.', tags: ['AI Mockups', 'Reels'], colorClass: 'sic-6' },
]

export const PLANS = [
  {
    tier: 'Micro',
    category: 'UMKM · Warung · Homestay',
    accent: 'green',
    featured: false,
    originalPrice: 'Rp 500.000',
    price: 'Rp 150.000',
    save: 'Hemat 70%',
    period: '/bulan',
    postCount: '6 post / bulan',
    features: [
      { label: '6 single image', included: true },
      { label: 'Edit foto AI', included: true },
      { label: 'Caption + tagar', included: true },
      { label: 'Template branded', included: true },
      { label: '1 platform', included: true },
      { label: 'Video Reels', included: false },
      { label: 'Komunitas', included: false },
      { label: 'Laporan', included: false },
    ],
    waMessage: "Hi! I'm interested in the Micro plan at Rp150.000/bulan",
  },
  {
    tier: 'Starter',
    category: 'Guesthouse · Kafe · Toko',
    accent: 'blue',
    featured: false,
    originalPrice: 'Rp 1.000.000',
    price: 'Rp 300.000',
    save: 'Hemat 70%',
    period: '/bulan',
    postCount: '10 post / bulan',
    features: [
      { label: '5 single + 3 carousel', included: true },
      { label: '2 video Reels', included: true },
      { label: 'Edit foto & video AI', included: true },
      { label: 'Caption + kalender', included: true },
      { label: 'IG + TikTok', included: true },
      { label: 'Komunitas', included: false },
      { label: 'Laporan', included: false },
    ],
    waMessage: "Hi! I'm interested in the Starter plan at Rp300.000/bulan",
  },
  {
    tier: 'Growth',
    category: 'Restoran · Brand Retail · Startup',
    accent: 'gold',
    featured: true,
    badge: 'TERPOPULER',
    originalPrice: 'Rp 2.000.000',
    price: 'Rp 500.000',
    save: 'Hemat 75%',
    period: '/bulan',
    postCount: '15 post / bulan',
    features: [
      { label: '7 single + 5 carousel', included: true },
      { label: '3 video Reels', included: true },
      { label: 'Edit foto & video AI', included: true },
      { label: 'Manajemen komunitas', included: true },
      { label: 'Laporan analitik bulanan', included: true },
      { label: 'IG + TikTok + Facebook', included: true },
    ],
    waMessage: "Hi! I'm interested in the Growth plan at Rp500.000/bulan",
  },
  {
    tier: 'Pro',
    category: 'Hotel · Bisnis Skala Besar · Franchise',
    accent: 'purple',
    featured: false,
    originalPrice: 'Rp 3.500.000',
    price: 'Rp 1.000.000',
    save: 'Hemat 71%',
    period: '/bulan',
    postCount: '28 post / bulan',
    features: [
      { label: '12 single + 8 carousel', included: true },
      { label: '8 video Reels', included: true },
      { label: 'Edit foto & video AI', included: true },
      { label: 'Komunitas penuh', included: true },
      { label: 'Laporan + rekomendasi', included: true },
      { label: 'Campaign musiman', included: true },
      { label: 'IG + TikTok + FB + YouTube', included: true },
    ],
    waMessage: "Hi! I'm interested in the Pro plan at Rp1.000.000/bulan",
  },
]

export const TESTIMONIALS = [
  { initials: 'PT', name: 'Putri',        role: 'Restaurant Owner, Ubud',                avClass: 'av-1', text: '"Konten.ai helped us show up consistently on social media without hiring a team. In 2 months, customer inquiries and table bookings went up significantly."' },
  { initials: 'BS', name: 'Budi Santoso', role: 'Retail Shop Owner, Seminyak',        avClass: 'av-2', text: '"The AI content made our brand look professional. New customers told us they visited our store because our Instagram was active and visually compelling."' },
  { initials: 'DL', name: 'Dewi Lestari', role: 'Marketing Manager, E-Commerce & Startup', avClass: 'av-3', text: '"Outstanding content quality and an extremely responsive team. I don\'t worry about content anymore. I just focus on scaling the brand."' },
]

export const MARQUEE_ITEMS = [
  'Social Media Automation', 'Lead Generation', 'SME & Retail Content',
  'SME Digital Growth', 'Auto Posting IG TikTok FB', 'Done For You', 'AI Content Strategy',
]
