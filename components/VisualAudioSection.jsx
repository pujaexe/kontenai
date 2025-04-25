// components/VisualAudioSection.jsx
"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const VisualAudioSection = () => {
  return (
    <section id="visual-audio" className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center gap-12 mb-12">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <img
            src="/placeholder-visual-audio.png"
            alt="Visual & Audio Illustration"
            className="max-w-xs md:max-w-sm object-contain"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Produksi Visual & Audio Konten</h2>
          <p className="text-gray-600">
            Layanan kreatif yang memvisualisasikan produk atau identitas bisnis Anda <br className="hidden sm:block" />
            secara menarik dan profesional menggunakan AI.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Virtual Try–On Produk",
              desc: "Visualisasi produk fashion & aksesoris langsung pada model AI. Tanpa sesi foto fisik, namun tetap memberikan experience 'mencoba sebelum membeli.'",
              bullets: ["Ecommerce fashion", "Brand skincare / wearable", "Lookbook digital"],
              cta: "Demo Sekarang",
              icon: "/icon-visual1.png"
            },
            {
              title: "Mockup Produk dengan AI",
              desc: "Kami bantu buatkan visualisasi produk Anda secara profesional. Kirim desain, logo, atau ide—kami hasilkan mockup menarik dengan gaya branding Anda.",
              bullets: ["Tidak perlu photoshoot", "Variasi background & angle", "Siap pakai untuk promosi"],
              cta: "Kirim Desain Produk",
              icon: "/icon-visual2.png"
            },
            {
              title: "Jingle Bisnis dengan AI",
              desc: "Butuh jingle, opening konten, atau musik identitas brand? Tim kami bantu produksi jingle menggunakan AI—unik, catchy, dan sesuai dengan karakter bisnis Anda.",
              bullets: ["Intro video promosi", "Sound TikTok / Reels", "Branding audio"],
              cta: "Pesan Jingle Sekarang",
              icon: "/icon-visual3.png"
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

export default VisualAudioSection;
