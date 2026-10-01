import Image from 'next/image'
import {
  ArrowRight, Bookmark, CalendarDays, Check,
  ImageIcon, MapPin, Menu, MessageCircle, Phone, Plane, Search, Sparkles,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const navItems = [['Cara Kerja', '#cara-kerja'], ['Fitur', '#fitur'], ['Platform', '#platform'], ['Testimoni', '#testimoni']]
const workflow = [
  { n: '01', title: 'Riset Pasar', text: 'Temukan peluang, audiens, dan insight menggunakan AI.', icon: Search, tone: 'blue' },
  { n: '02', title: 'Brand Guideline', text: 'Bangun identitas brand yang konsisten dengan AI.', icon: Bookmark, tone: 'green' },
  { n: '03', title: 'Topik Konten', text: 'Dapatkan ide konten relevan dan high potential.', icon: Sparkles, tone: 'purple' },
  { n: '04', title: 'Produksi Konten', text: 'Generate script, gambar, dan video dengan AI.', icon: ImageIcon, tone: 'violet' },
  { n: '05', title: 'Kalender & Jadwal', text: 'Atur kalender konten secara otomatis.', icon: CalendarDays, tone: 'red' },
  { n: '06', title: 'Publish ke Sosmed', text: 'Posting ke semua platform sekaligus.', icon: Plane, tone: 'cyan' },
]
const features = [
  { title: 'Riset Pasar dengan AI', text: 'Temukan topik, audiens, dan peluang nyata.', icon: Search, tone: 'blue' },
  { title: 'Brand Guideline Otomatis', text: 'Bangun identitas brand yang konsisten.', icon: CalendarDays, tone: 'purple' },
  { title: 'Ide & Pilar Konten', text: 'Dapatkan ide dan pilar yang relevan dan berpotensi viral.', icon: Bookmark, tone: 'red' },
  { title: 'Produksi Konten AI', text: 'Generate script, gambar, video, dan caption.', icon: ImageIcon, tone: 'cyan' },
  { title: 'Kalender & Scheduling', text: 'Atur jadwal konten dengan mudah.', icon: CalendarDays, tone: 'green' },
  { title: 'Publish ke Semua Sosmed', text: 'Posting ke TikTok, Instagram, YouTube, Facebook, X, LinkedIn dalam satu klik.', icon: Plane, tone: 'purple' },
]
const testimonials = [
  { name: 'Rizky Pratama', role: 'Founder PropertiKita', quote: 'Strategi kontennya sangat membantu. Sekarang tim kami bisa fokus ke eksekusi tanpa pusing mikirin ide.', avatar: 'RP' },
  { name: 'Sinta Lestari', role: 'Content Creator', quote: 'Brand guideline dan kalender kontennya super rapi. Semua platform teratur dalam satu tempat.', avatar: 'SL' },
  { name: 'Andi Kurniawan', role: 'Digital Marketing Lead', quote: 'Konten.ai benar-benar menghemat waktu tim kami. Dari riset sampai posting, semua otomatis.', avatar: 'AK' },
]

function Logo() { return <Image src="/assets/logo-kontenai.png" alt="konten.ai" width={296} height={77} className="brand-logo" priority /> }
function Sparkle({ className = '' }: { className?: string }) { return <span className={`sparkle ${className}`} aria-hidden="true"><span /></span> }
function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow">{children}</div> }
function PrimaryButton({ children = 'Mulai Gratis', href = 'https://app.konten.ai' }: { children?: React.ReactNode; href?: string }) { return <a className="btn btn-primary-new" href={href}>{children}<ArrowRight size={17} /></a> }

function SocialIcon({ name, small = false }: { name: string; small?: boolean }) {
  const key = name.toLowerCase()
  const icons: Record<string, React.ReactNode> = {
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    youtube: <FaYoutube />,
    facebook: <FaFacebookF />,
    x: <FaXTwitter />,
    linkedin: <FaLinkedinIn />,
  }
  const icon = icons[key] ?? <Sparkles />
  return <span className={`social social--${key}${small ? ' social--small' : ''}`} aria-label={name}>{icon}</span>
}

function Navbar() { return <header className="landing-nav"><a href="#top" aria-label="konten.ai home"><Logo /></a><nav aria-label="Navigasi utama">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="nav-actions"><a className="login" href="https://app.konten.ai">Masuk</a><PrimaryButton /></div><button className="mobile-menu" aria-label="Buka menu"><Menu /></button></header> }
function HeroDashboard() {
  return <div className="dashboard-stage dashboard-stage--image" aria-label="Preview dashboard konten.ai">
    <div className="hero-image-glow" />
    <Image
      src="/assets/kontenai-abstract-cloud-v2.png"
      alt=""
      width={1672}
      height={941}
      className="hero-abstract-layer"
      aria-hidden="true"
      unoptimized
    />
    <div className="hero-dashboard-layer-wrap">
      <Image
        src="/assets/kontenai-dashboard-layer.png"
        alt="Dashboard konten.ai dengan workflow produksi konten otomatis"
        width={1536}
        height={1024}
        className="hero-dashboard-image"
        priority
        unoptimized
      />
    </div>
    <span className="hero-geo hero-geo-star" aria-hidden="true" />
    <span className="hero-geo hero-geo-diamond" aria-hidden="true" />
    <span className="hero-geo hero-geo-triangle" aria-hidden="true" />
    <div className="hero-socials">{['Instagram','TikTok','YouTube','Facebook','X','LinkedIn'].map((x, index) => <span className={`hero-social-float float-${index + 1}`} key={x}><SocialIcon name={x}/></span>)}</div>
  </div>
}

function Hero() { return <section className="hero-section section-shell" id="top"><div className="hero-copy"><Eyebrow>Platform Konten AI All-in-One</Eyebrow><h1>Dari riset<br/>sampai posting,<br/>semua otomatis<br/><span className="gradient-text">dengan AI.</span></h1><p>Riset brand, buat strategi, generate konten, jadwalkan, dan publis ke semua social media — dalam satu <strong>platform dengan AI agents.</strong></p><div className="button-row"><PrimaryButton/></div><div className="trust-row">{['Tanpa kartu kredit','Setup dalam menit','Bisa cancel kapan saja'].map(x => <span key={x}><i><Check size={10}/></i>{x}</span>)}</div></div><HeroDashboard /></section> }
function Handwritten({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`handwritten ${className}`}><svg viewBox="0 0 90 48"><path d="M87 8C54 3 30 11 16 29M16 29l4-12M16 29l13-3"/></svg><span>{children}</span></div> }

function AgentWorkflow() { return <section className="workflow-section section-shell" id="cara-kerja"><Eyebrow>Cara Kerja</Eyebrow><div className="section-heading"><div><h2>6 AI Agents, 1 Alur Lengkap</h2><p>Dari strategi hingga posting, semua dikerjakan oleh AI agents<br className="desktop-only"/> yang terintegrasi dalam satu sistem.</p></div><Handwritten>Konten otomatis<br/>dari A sampai Z</Handwritten></div><div className="workflow-grid">{workflow.map(({ n,title,text,icon:Icon,tone }, i) => <div className="workflow-wrap" key={n} style={{'--agent-index':i} as React.CSSProperties}><article className="workflow-card"><span className="workflow-step-label">STEP {n}</span><span className={`icon-badge ${tone}`}><Icon/></span><span className="agent-state"><i/><em>Agent memproses</em></span><h3>{title}</h3><p>{text}</p><span className="workflow-progress"><i/></span></article>{i < workflow.length-1 && <span className="workflow-connector" aria-hidden="true"><i/><ArrowRight/></span>}</div>)}</div></section> }

function FeatureVisual() {
  return <div className="feature-visual feature-visual--image">
    <div className="feature-image-glow" />
    <Image
      src="/assets/kontenai-feature-showcase.png"
      alt="Visual ide dan produksi konten AI untuk berbagai platform sosial media"
      width={1536}
      height={1024}
      className="feature-showcase-image"
      unoptimized
    />
  </div>
}
function FeatureGrid() { return <section className="features-section section-shell" id="fitur"><FeatureVisual/><div className="feature-copy"><Eyebrow>Fitur Unggulan</Eyebrow><h2>Semua yang kamu butuh<br/>untuk konten yang <span className="gradient-text">tumbuh.</span></h2><p className="feature-lead">Konten.ai menggabungkan riset, strategi, produksi, hingga publishing dalam satu platform dengan AI agents.</p><div className="feature-grid">{features.map(({title,text,icon:Icon,tone})=><article key={title}><span className={`icon-badge ${tone}`}><Icon/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section> }
function SocialPublish() { return <section className="publish-section section-shell" id="platform"><Eyebrow>Publikasi ke Semua Platform</Eyebrow><div className="publish-row"><div className="publish-icons">{['Instagram','TikTok','YouTube','Facebook','X','LinkedIn'].map(x => <SocialIcon name={x} key={x}/>)}</div><Handwritten>Satu klik,<br/>semua ter-publish!</Handwritten></div></section> }
function ClientLogos() { return <section className="client-logos section-shell" aria-label="Klien yang menggunakan Konten.ai"><span>Dipercaya oleh brand yang tumbuh bersama Konten.ai</span><div className="client-logo-row"><div className="client-wordmark argasoka"><i>✦</i>argasoka</div><div className="client-wordmark lunaire">Lunaire</div><div className="client-wordmark dexrl"><b>D</b>dexrl</div><div className="client-wordmark thirdvox"><i>III</i>thirdvox</div></div></section> }
function Testimonials() { return <section className="testimonials-section section-shell" id="testimoni"><Eyebrow>Dipercaya oleh Kreator, Bisnis, dan Agensi</Eyebrow><div className="testimonial-grid">{testimonials.map((t,i)=><article key={t.name}><div className="stars">★★★★★</div><blockquote>“{t.quote}”</blockquote><div className="person"><span className={`avatar avatar-${i+1}`}>{t.avatar}</span><div><b>{t.name}</b><small>{t.role}</small></div></div></article>)}</div></section> }

function CtaVisual() {
  return <div className="cta-visual cta-visual--image">
    <Image
      src="/assets/kontenai-analytics-growth.png"
      alt="Kolase analytics pertumbuhan audiens konten.ai"
      width={1790}
      height={879}
      className="cta-showcase-image"
      unoptimized
    />
  </div>
}
function FinalCTA() { const whatsappUrl = 'https://wa.me/6281916567373?text=Halo%20tim%20Konten.ai%2C%20saya%20ingin%20bertanya%20tentang%20platform%20Konten.ai.'; return <section className="cta-section section-shell" id="cta"><div className="cta-copy"><h2>Ubah cara kamu<br/>membuat <span className="gradient-text">konten.</span></h2><p>Dapatkan akses ke semua AI agents dan mulai produksi konten yang lebih cepat, konsisten, dan berdampak.</p><div className="button-row"><PrimaryButton/><a className="btn cta-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/>Chat WhatsApp</a></div></div><CtaVisual/></section> }
function Footer() { return <footer id="footer"><div className="footer-inner section-shell"><div className="footer-brand"><Logo/><p>AI all-in-one content platform untuk bisnis modern.</p><div className="footer-sales"><b>Kontak Sales</b><a href="https://wa.me/6282342720379" target="_blank" rel="noreferrer"><Phone/>Trisna: +62 823-4272-0379</a><a href="https://wa.me/6287745032833" target="_blank" rel="noreferrer"><Phone/>Nia: +62 877-4503-2833</a><span><MapPin/>Gianyar, Bali · serving all of Indonesia</span></div><div className="footer-socials">{['X','Instagram','LinkedIn','YouTube'].map(x=><SocialIcon key={x} name={x} small/>)}</div></div><div className="footer-links"><div><b>Produk</b><a href="#cara-kerja">Cara Kerja</a><a href="#fitur">Fitur</a><a href="#platform">Platform</a><a href="#testimoni">Testimoni</a></div><div><b>Legal</b><a href="/kebijakan-privasi">Kebijakan Privasi</a><a href="/syarat-ketentuan">Syarat & Ketentuan</a></div></div></div><div className="copyright section-shell">© 2026 konten.ai. All rights reserved.</div></footer> }

export default function LandingPage() { return <main className="konten-landing"><Navbar/><Hero/><ClientLogos/><AgentWorkflow/><FeatureGrid/><SocialPublish/><Testimonials/><FinalCTA/><Footer/></main> }
