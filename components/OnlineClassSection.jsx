"use client";
import React from "react";

const OnlineClassSection = () => {
  return (
    <section id="kelas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
          Pelajari dan terapkan strategi konten modern berbasis AI<br />untuk pertumbuhan bisnis yang berkelanjutan.
        </h2>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200">
          {/* Left side - Illustration & Text side-by-side */}
          <div className="bg-orange-50 p-8 flex items-center gap-6">
          <img
            src="/placeholder-kelas.png"
            alt="Ilustrasi Kelas AI"
            className="h-[260px] w-auto object-contain"
          />

            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Belajar AI Sekarang, Sebelum Kompetitor Anda Lebih Dulu</h3>
              <p className="text-gray-700 text-sm">
                AI sudah mengubah cara bisnis beroperasi. Kelas ini bantu Anda memahami dan menerapkan AI secara praktis—tanpa perlu background teknis.
              </p>
            </div>
          </div>

          {/* Right side - Class Info */}
          <div className="bg-white p-8 flex flex-col justify-center gap-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Kelas Online Konten.ai</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Materi relevan untuk operasional harian</li>
              <li>Dibimbing oleh praktisi</li>
              <li>Tidak teknis, langsung aplikatif</li>
            </ul>
            
            <div className="mt-6 flex">
              <a
                href="#form-kelas"
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
              >
                Daftar Kelas Sekarang
              </a>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineClassSection;
