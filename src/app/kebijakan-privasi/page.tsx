import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi konten.ai mengenai pengumpulan, penggunaan, penyimpanan, dan perlindungan data pengguna.',
}

const sections: LegalSection[] = [
  { title: 'Tentang Kebijakan Ini', paragraphs: ['Kebijakan Privasi ini menjelaskan bagaimana konten.ai (“kami”) mengumpulkan, menggunakan, menyimpan, dan melindungi informasi ketika Anda mengakses situs, aplikasi, serta layanan konten.ai. Dengan menggunakan layanan kami, Anda memahami praktik yang dijelaskan dalam kebijakan ini.'] },
  { title: 'Informasi yang Kami Kumpulkan', paragraphs: ['Kami mengumpulkan informasi yang Anda berikan secara langsung, informasi teknis dari perangkat, serta data yang diperlukan untuk menjalankan fitur platform.'], items: ['Informasi akun, seperti nama, alamat email, nama bisnis, dan detail profil.', 'Konten dan materi yang Anda unggah atau buat melalui layanan.', 'Data penggunaan, perangkat, browser, alamat IP, dan log aktivitas.', 'Informasi transaksi dan langganan yang diproses melalui penyedia pembayaran.', 'Data integrasi platform pihak ketiga yang Anda hubungkan dengan persetujuan Anda.'] },
  { title: 'Cara Kami Menggunakan Informasi', items: ['Menyediakan, mengoperasikan, dan meningkatkan layanan konten.ai.', 'Memproses permintaan, langganan, serta komunikasi layanan.', 'Menghasilkan rekomendasi dan keluaran AI sesuai instruksi Anda.', 'Menjaga keamanan akun, mencegah penyalahgunaan, dan memecahkan masalah teknis.', 'Memenuhi kewajiban hukum serta menegakkan ketentuan layanan kami.'] },
  { title: 'Konten dan Pemrosesan AI', paragraphs: ['Konten yang Anda kirimkan dapat diproses oleh sistem AI dan penyedia teknologi yang membantu kami menghadirkan fitur layanan. Kami membatasi pemrosesan tersebut sesuai kebutuhan operasional dan perjanjian dengan penyedia terkait. Anda bertanggung jawab memastikan materi yang dikirimkan tidak melanggar hak pihak lain atau memuat data yang tidak boleh Anda bagikan.'] },
  { title: 'Pembagian Informasi', paragraphs: ['Kami tidak menjual data pribadi Anda. Informasi dapat dibagikan secara terbatas kepada penyedia layanan, mitra integrasi yang Anda pilih, penasihat profesional, atau pihak berwenang apabila diwajibkan secara hukum. Setiap penyedia diwajibkan menangani data hanya untuk tujuan yang telah ditentukan.'] },
  { title: 'Penyimpanan dan Keamanan Data', paragraphs: ['Kami menyimpan informasi selama diperlukan untuk menyediakan layanan, memenuhi kewajiban hukum, menyelesaikan sengketa, dan menjaga keamanan. Kami menerapkan langkah teknis dan organisasi yang wajar, tetapi tidak ada metode transmisi atau penyimpanan elektronik yang dapat dijamin sepenuhnya aman.'] },
  { title: 'Hak dan Pilihan Anda', items: ['Meminta akses atau salinan data pribadi Anda.', 'Memperbarui atau memperbaiki informasi yang tidak akurat.', 'Meminta penghapusan data, dengan memperhatikan kewajiban penyimpanan yang berlaku.', 'Mencabut persetujuan untuk pemrosesan tertentu.', 'Memutus integrasi pihak ketiga dan mengatur preferensi komunikasi.'] },
  { title: 'Cookie dan Teknologi Sejenis', paragraphs: ['Kami dapat menggunakan cookie dan teknologi sejenis untuk menjaga sesi, mengingat preferensi, memahami penggunaan produk, serta meningkatkan performa. Anda dapat mengatur cookie melalui browser, namun beberapa fungsi layanan mungkin tidak berjalan optimal.'] },
  { title: 'Perubahan Kebijakan', paragraphs: ['Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Tanggal pembaruan akan ditampilkan pada halaman ini. Untuk perubahan material, kami dapat memberikan pemberitahuan tambahan melalui layanan atau kanal komunikasi yang tersedia.'] },
  { title: 'Hubungi Kami', paragraphs: ['Jika Anda memiliki pertanyaan atau permintaan terkait privasi, silakan hubungi tim konten.ai melalui kanal kontak resmi yang tersedia pada platform.'] },
]

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Legal & Privasi" title="Kebijakan Privasi" description="Transparansi tentang cara kami mengelola dan melindungi informasimu." updated="1 Oktober 2026" sections={sections}/>
}
