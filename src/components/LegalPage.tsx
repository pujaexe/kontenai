import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  description: string
  updated: string
  sections: LegalSection[]
}

function LegalLogo() {
  return <Image src="/assets/logo-kontenai.png" alt="konten.ai" width={296} height={77} className="brand-logo" priority />
}

export default function LegalPage({ eyebrow, title, description, updated, sections }: LegalPageProps) {
  return <main className="legal-page">
    <header className="legal-nav">
      <Link href="/" aria-label="Kembali ke beranda konten.ai"><LegalLogo /></Link>
      <Link href="/" className="legal-back"><ArrowLeft size={17}/>Kembali ke Beranda</Link>
    </header>

    <section className="legal-hero">
      <div className="legal-orb legal-orb-one"/><div className="legal-orb legal-orb-two"/>
      <div className="legal-hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <small>Terakhir diperbarui: {updated}</small>
      </div>
    </section>

    <div className="legal-layout">
      <aside className="legal-toc">
        <b>Daftar Isi</b>
        {sections.map((section, index) => <a href={`#bagian-${index + 1}`} key={section.title}>{index + 1}. {section.title}</a>)}
      </aside>
      <article className="legal-content">
        {sections.map((section, index) => <section id={`bagian-${index + 1}`} key={section.title}>
          <span className="legal-number">{String(index + 1).padStart(2,'0')}</span>
          <h2>{section.title}</h2>
          {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
        </section>)}
      </article>
    </div>

    <footer className="legal-footer">
      <div><LegalLogo/><p>AI all-in-one content platform untuk bisnis modern.</p></div>
      <nav><Link href="/kebijakan-privasi">Kebijakan Privasi</Link><Link href="/syarat-ketentuan">Syarat & Ketentuan</Link></nav>
      <span>© 2026 konten.ai</span>
    </footer>
  </main>
}
