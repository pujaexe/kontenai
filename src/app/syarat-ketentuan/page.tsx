import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan penggunaan platform serta layanan konten.ai.',
}

const sections: LegalSection[] = [
  { title: 'Penerimaan Ketentuan', paragraphs: ['Dengan membuat akun, mengakses, atau menggunakan konten.ai, Anda menyetujui Syarat & Ketentuan ini. Jika Anda menggunakan layanan untuk suatu organisasi, Anda menyatakan memiliki kewenangan untuk mengikat organisasi tersebut. Jika Anda tidak menyetujui ketentuan ini, jangan gunakan layanan.'] },
  { title: 'Kelayakan dan Akun', items: ['Anda harus memiliki kapasitas hukum untuk menyetujui perjanjian ini.', 'Informasi akun harus akurat, lengkap, dan selalu diperbarui.', 'Anda bertanggung jawab menjaga kerahasiaan kredensial serta seluruh aktivitas akun.', 'Segera beri tahu kami apabila Anda mengetahui akses atau penggunaan tanpa izin.'] },
  { title: 'Penggunaan Layanan', paragraphs: ['konten.ai menyediakan alat riset, strategi, produksi, penjadwalan, dan publikasi konten berbasis AI. Anda dapat menggunakan layanan hanya untuk tujuan yang sah dan sesuai dokumentasi serta batas penggunaan paket Anda.'] },
  { title: 'Penggunaan yang Dilarang', items: ['Mengunggah konten yang melanggar hukum, menipu, merugikan, atau melanggar hak pihak lain.', 'Mencoba mengakses akun, sistem, atau data tanpa izin.', 'Mengganggu keamanan, stabilitas, atau ketersediaan layanan.', 'Melakukan reverse engineering atau menyalin bagian layanan kecuali diizinkan hukum.', 'Menggunakan layanan untuk spam, manipulasi, impersonasi, atau aktivitas berbahaya.'] },
  { title: 'Konten Pengguna dan Hak Kekayaan Intelektual', paragraphs: ['Anda tetap memiliki hak atas materi yang Anda kirimkan. Anda memberi kami izin terbatas untuk menyimpan, memproses, menampilkan, dan mentransmisikan materi tersebut sejauh diperlukan untuk menyediakan layanan. Anda menjamin memiliki hak dan izin yang diperlukan atas seluruh materi yang dikirimkan. Platform, merek, desain, perangkat lunak, dan materi milik konten.ai tetap menjadi milik kami atau pemberi lisensi kami.'] },
  { title: 'Keluaran AI', paragraphs: ['Keluaran AI dapat tidak akurat, tidak lengkap, atau serupa dengan keluaran bagi pengguna lain. Anda wajib meninjau, mengedit, dan memastikan kesesuaian keluaran sebelum dipublikasikan. Keputusan bisnis, hukum, finansial, atau profesional tidak boleh semata-mata didasarkan pada keluaran AI tanpa pemeriksaan yang layak.'] },
  { title: 'Langganan dan Pembayaran', paragraphs: ['Fitur tertentu dapat memerlukan langganan berbayar. Harga, periode tagihan, batas penggunaan, pajak, serta ketentuan pembatalan ditampilkan sebelum pembelian. Kecuali ditentukan lain atau diwajibkan hukum, biaya yang telah dibayarkan tidak dapat dikembalikan.'] },
  { title: 'Integrasi Pihak Ketiga', paragraphs: ['Layanan dapat terhubung dengan platform sosial media atau layanan pihak ketiga. Penggunaan integrasi tersebut juga tunduk pada ketentuan masing-masing pihak. Kami tidak bertanggung jawab atas perubahan, gangguan, atau tindakan yang terjadi pada layanan pihak ketiga.'] },
  { title: 'Ketersediaan dan Perubahan Layanan', paragraphs: ['Kami berupaya menjaga layanan tetap tersedia, tetapi tidak menjamin layanan akan selalu bebas gangguan atau kesalahan. Kami dapat memperbarui, menambah, membatasi, atau menghentikan bagian layanan untuk alasan operasional, keamanan, hukum, atau bisnis.'] },
  { title: 'Penangguhan dan Pengakhiran', paragraphs: ['Kami dapat membatasi atau menghentikan akses apabila terdapat pelanggaran ketentuan, risiko keamanan, kewajiban hukum, atau penggunaan yang dapat merugikan layanan maupun pihak lain. Anda dapat berhenti menggunakan layanan kapan saja dan mengajukan penutupan akun.'] },
  { title: 'Batasan Tanggung Jawab', paragraphs: ['Sejauh diizinkan hukum, layanan diberikan sebagaimana adanya. konten.ai tidak bertanggung jawab atas kerugian tidak langsung, hilangnya keuntungan, data, reputasi, atau peluang yang timbul dari penggunaan layanan. Tanggung jawab kami dibatasi sesuai ketentuan hukum yang berlaku.'] },
  { title: 'Perubahan dan Kontak', paragraphs: ['Kami dapat memperbarui ketentuan ini dari waktu ke waktu. Penggunaan layanan setelah perubahan berlaku berarti Anda menerima ketentuan terbaru. Untuk pertanyaan mengenai ketentuan ini, hubungi kami melalui kanal resmi konten.ai.'] },
]

export default function TermsPage() {
  return <LegalPage eyebrow="Ketentuan Layanan" title="Syarat & Ketentuan" description="Aturan yang menjaga penggunaan konten.ai tetap aman, adil, dan transparan." updated="1 Oktober 2026" sections={sections}/>
}
