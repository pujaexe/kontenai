// components/AnimatedNavbar.jsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", name: "Beranda" },
  { path: "#strategy", name: "Strategi" },
  { path: "#virtual-influencer", name: "Virtual Influencer" },
  { path: "#kelas", name: "Kelas" },
  { path: "#testimoni", name: "Testimoni" },
];

const AnimatedNavbar = () => {
  const pathname = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <header className="sticky top-4 z-50 bg-white/70 backdrop-blur-md rounded-lg border border-gray-200 shadow-sm px-4 py-2">
      <nav className="flex gap-2 relative">
        {navItems.map((item) => {
          const isActive = item.path === pathname;
          const isHovered = hoveredPath === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-indigo-600" : "text-gray-600"
              }`}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {isHovered && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-indigo-100 rounded-md z-[-1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default AnimatedNavbar;
