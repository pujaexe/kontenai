// components/CTASection.jsx
"use client";
import React from "react";

const CTASection = () => {
  return (
    <section id="konsultasi" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#E4E1FB] rounded-2xl text-center px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Siap menyederhanakan <br className="sm:hidden" />
            Proses Konten Anda?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-6">
            Jadwalkan konsultasi gratis sekarang dan lihat bagaimana tim kami membantu Anda.
          </p>
          <a
            href="#form-konsultasi"
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
