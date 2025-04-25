// components/VirtualInfluencerSection.jsx
"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const VirtualInfluencerSection = () => {
  return (
    <section id="virtual-influencer" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 mb-12">
        <div className="w-full lg:w-2/2 text-right">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Virtual Influencer</h2>
          <p className="text-gray-600">
            Layanan yang menghadirkan wajah dan suara brand Anda <br className="hidden sm:block" />
            melalui model virtual, interaksi live, dan kampanye konten modern.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src="/placeholder-virtual.png"
            alt="Virtual Influencer Illustration"
            className="max-w-xs md:max-w-sm object-contain"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Influencer Virtual AI",
              desc: "Kami hadirkan model virtual berbasis AI yang bisa mewakili brand Anda di kampanye promosi, katalog digital, atau sosial media.",
              bullets: ["Fashion, beauty, F&B", "Brand awareness modern", "Kampanye produk skala besar"],
              cta: "Diskusikan Sekarang",
              icon: "/icon-virtual1.png"
            },
            {
              title: "Custom Influencer AI",
              desc: "Punya ide untuk karakter brand Anda? Kami bantu wujudkan influencer virtual eksklusif — dari wajah, suara, hingga kepribadian digital.",
              bullets: ["Brand ambassador jangka panjang", "Maskot digital yang konsisten", "Strategi pemasaran multikanal"],
              cta: "Diskusikan Sekarang",
              icon: "/icon-virtual2.png"
            },
            {
              title: "Live AI untuk Shopee & TikTok",
              desc: "Ingin tampil live tanpa kehadiran fisik? Kami siapkan model virtual yang bisa melakukan live selling 24/7, sesuai skrip dan karakter brand Anda.",
              bullets: ["Avatar realistis", "Dapat disesuaikan", "Interaktif & bisa dikontrol jarak jauh"],
              cta: "Daftar Kelas Sekarang",
              icon: "/icon-virtual3.png"
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

export default VirtualInfluencerSection;
