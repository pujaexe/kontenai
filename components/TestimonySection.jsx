// components/TestimonySection.jsx
"use client";
import React from "react";

const testimonies = [
  {
    name: "Putri",
    role: "Clothing Brand Owner",
    quote:
      "Tim Konten.ai bantu kami tampil konsisten di media sosial tanpa harus rekrut tim internal."
  },
  {
    name: "Budi Santoso",
    role: "Online Shop Owner",
    quote:
      "Jingle dan konten AI yang dibuat sangat membantu brand kami terlihat profesional."
  },
  {
    name: "Dewi Lestari",
    role: "Marketing Manager",
    quote:
      "Kualitas kontennya luar biasa dan tim sangat responsif terhadap feedback."
  }
];

const TestimonySection = () => {
  return (
    <section id="testimoni" className="py-24 bg-[#f9fafa]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Testimony Klien</h2>
        <p className="text-gray-600 mb-12">
          Apa kata klien kami tentang layanan Konten.ai
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonies.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
              <img
                  src={`/foto-${t.name.toLowerCase().replace(" ", "-")}.png`}
                  alt={`Foto ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
