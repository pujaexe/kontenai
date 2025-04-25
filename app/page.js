"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Noto_Sans } from 'next/font/google'
import StrategySection from "@/components/StrategySection";
import VirtualInfluencerSection from "@/components/VirtualInfluencerSection";
import VisualAudioSection from "@/components/VisualAudioSection";
import OnlineClassSection from "@/components/OnlineClassSection";
import CTASection from "@/components/CTASection";
import TestimonySection from "@/components/TestimonySection";
import FooterSection from "@/components/FooterSection";

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // atau semua range kalau kamu butuh
  variable: '--font-noto'
});

const NAV_LINKS = [
  { label: "Strategy Konten", href: "#strategy" },
  { label: "Virtual Influencer", href: "#virtual-influencer" },
  { label: "Visual & Audio", href: "#visual-audio" },
  { label: "Kelas", href: "#kelas" },
  { label: "Testimoni", href: "#testimoni" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-[#e9e6fa] ${noto.className}`}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 px-6 py-3 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md rounded-full max-w-4xl mx-auto left-0 right-0 top-4"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <img
            src="/logo-kontenai.png"
            alt="KontenAI Logo"
            className="h-8 w-auto"
          />
          <div className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-black font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 bg-white border border-gray-200 rounded-lg px-4 py-3"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-gray-700 hover:text-black font-medium"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 flex flex-col items-center text-center">
        <div className="relative mb-8 flex justify-center">
          <img
            src="/ai-hero.png"
            alt="AI Hero"
            className="w-100 h-100 object-contain mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          Solusi Konten Berbasis AI
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Kami bantu bisnis Anda menciptakan konten berkualitas tinggi dengan teknologi AI tanpa perlu menguasai tools kompleks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#konsultasi"
            onClick={(e) => handleNavClick(e, "#konsultasi")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Konsultasi Gratis
          </a>
          <a
            href="#layanan"
            onClick={(e) => handleNavClick(e, "#layanan")}
            className="px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold shadow-md hover:bg-gray-50 transition"
          >
            Lihat Layanan
          </a>
        </div>
      </section>

      <StrategySection />
      <VirtualInfluencerSection />
      <VisualAudioSection />
      <OnlineClassSection />
      <CTASection />
      <TestimonySection />
      <FooterSection />
    </div>
  );
}