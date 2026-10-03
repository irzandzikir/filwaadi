export default function News() {
  const newsItems = [
    {
      title: 'Penerimaan Peserta Didik Baru 2025/2026',
      date: '15 Januari 2025',
      category: 'Pengumuman',
      excerpt: 'Pondok Pesantren Nurul Iman membuka pendaftaran santri baru untuk tahun ajaran 2025/2026. Pendaftaran dibuka mulai 1 Februari hingga 30 Maret 2025.',
    },
    {
      title: 'Khotmil Quran & Haul Pendiri',
      date: '10 Januari 2025',
      category: 'Kegiatan',
      excerpt: 'Acara Khotmil Quran dan Haul Almaghfurlah KH. Abdullah Mansur akan dilaksanakan pada tanggal 25 Januari 2025. Seluruh santri dan wali santri diharapkan hadir.',
    },
    {
      title: 'Prestasi Santri di MTQ Nasional',
      date: '5 Januari 2025',
      category: 'Prestasi',
      excerpt: 'Santri Pondok Pesantren Nurul Iman berhasil meraih juara 2 kategori Tilawah Putra pada Musabaqah Tilawatil Quran Tingkat Nasional 2025.',
    },
    {
      title: 'Workshop Kitab Kuning untuk Guru',
      date: '28 Desember 2024',
      category: 'Kegiatan',
      excerpt: 'Dalam rangka meningkatkan kualitas pengajaran, pondok mengadakan workshop kitab kuning bagi seluruh ustadz dan ustadzah selama 3 hari.',
    },
    {
      title: 'Wisuda Tahfidz Angkatan ke-15',
      date: '20 Desember 2024',
      category: 'Prestasi',
      excerpt: 'Sebanyak 45 santri berhasil menyelesaikan hafalan 30 juz Al-Quran dan diwisuda dalam acara yang dihadiri oleh para ulama dan tokoh masyarakat.',
    },
    {
      title: 'Renovasi Masjid Pondok',
      date: '15 Desember 2024',
      category: 'Pembangunan',
      excerpt: 'Pondok Pesantren Nurul Iman memulai renovasi dan perluasan masjid utama untuk menampung lebih banyak jamaah. Donasi sangat diharapkan.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Pengumuman': return 'bg-red-100 text-red-800';
      case 'Kegiatan': return 'bg-blue-100 text-blue-800';
      case 'Prestasi': return 'bg-amber-100 text-amber-800';
      case 'Pembangunan': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="berita" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Informasi Terkini</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4" style={{ fontFamily: 'serif' }}>
            Kabar & Berita
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold mt-4 hover:text-green-900 transition-colors">
                  Baca Selengkapnya
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}
