// components/FooterSection.jsx
"use client";
import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#0E111A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-sm">
        {/* Brand Info */}
        <div>
            <img
              src="/kontenai-white.png"
              alt="KontenAI Logo"
              className="h-6 w-auto"
            />
          <p className="text-gray-400 pt-4">
            Solusi konten berbasis AI yang dikerjakan oleh tim ahli.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-base font-semibold mb-2">Navigasi</h4>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#layanan" className="hover:text-white">Layanan</a></li>
            <li><a href="#tentang" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#testimoni" className="hover:text-white">Testimoni</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold mb-2">Kontak</h4>
          <ul className="text-gray-400 space-y-1">
            <li>helloai@konten.ai</li>
            <li>+62 812 3456 7890</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <FaInstagram size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <FaFacebookF size={18} />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok" className="text-gray-400 hover:text-white">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-12">
        © 2025 Konten.ai. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
