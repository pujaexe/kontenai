// components/StrategySection.jsx
"use client";
import React from "react";
import ServiceCard from "./ServiceCard";


const StrategySection = () => {
  return (
    <section id="strategy" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center gap-12 mb-12">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <img
            src="/placeholder-strategy.png"
            alt="Strategi Konten Illustration"
            className="max-w-xs md:max-w-sm object-contain"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Strategi Konten</h2>
          <p className="text-gray-600">
            Layanan yang membantu bisnis memahami, merancang, <br className="hidden sm:block" />
            dan menyusun strategi konten yang efektif berbasis teknologi AI
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/** Card list (3) */}
          {[
            {
              title: "Manajemen Sosial Media",
              desc: "Tim kami bantu Anda menjalankan media sosial secara konsisten dan strategis. Didukung teknologi AI untuk riset tren dan optimasi performa.",
              bullets: ["Perencanaan konten", "Desain visual & caption", "Penjadwalan & laporan bulanan"],
              cta: "Konsultasi Sekarang",
              icon: "/icon-strategy1.png"
            },
            {
              title: "Lead Generation",
              desc: "Kami menciptakan konten lead generation dengan AI untuk meningkatkan engagement dan penjualan.",
              bullets: ["Personalisasi berdasarkan data perilaku", "Distribusi & outreach terjadwal", "Call-to-action yang optimal"],
              cta: "Aktifkan Sekarang",
              icon: "/icon-strategy2.png"
            },
            {
              title: "Otomatisasi Posting Konten",
              desc: "Alur konten otomatis, penjadwalan pintar, dan laporan hasil konten secara rutin.",
              bullets: ["Caption & hashtag sesuai tren", "Konsistensi unggah harian", "Integrasi lintas platform (IG, FB, TikTok)"],
              cta: "Otomasi Sekarang",
              icon: "/icon-strategy3.png"
            }
          ].map((item, idx) => (
            <ServiceCard
                key={idx}
                title={item.title}
                description={item.desc}
                points={item.bullets}
                ctaText={item.cta}
                ctaHref="#konsultasi"
                imageSrc={item.icon}
                headerBg="#FFFFFF"
                titleColor="text-indigo-600"
              />

          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;