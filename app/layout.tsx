import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KontenAI - Solusi Konten Berbasis AI",
  description:
    "Kami bantu bisnis Anda menciptakan konten berkualitas tinggi dengan teknologi AI tanpa tools kompleks.",
  openGraph: {
    title: "KontenAI - Solusi Konten Berbasis AI",
    description:
      "KontenAI bantu bisnis Anda dengan strategi dan otomasi konten canggih berbasis AI.",
    url: "https://konten.ai",
    siteName: "KontenAI",
    images: [
      {
        url: "https://konten.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hero image KontenAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KontenAI - Solusi Konten Berbasis AI",
    description:
      "Automasi & strategi konten canggih berbasis AI untuk bisnis Anda.",
    images: ["https://konten.ai/og-image.jpg"],
    creator: "@kontenai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
