export default function History() {
  return (
    <section id="sejarah" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Perjalanan Kami</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4" style={{ fontFamily: 'serif' }}>
            Sejarah Singkat
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://image.qwenlm.ai/generated-images/b11d24aa-c0c5-4d0c-9015-e351020312ba/_result.png"
              alt="Santri belajar mengaji"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Dengan bertawakal kepada hadirat Robbi. Pondok Pesanatren Nurul Hidayah Fil Waadi Cipayung, Jawa Barat 
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Seiring berkembangnya waktu, pengajian ini berubah menjadi perguruan Nurul Iman 
              hingga selanjutnya berubah menjadi Yayasan Pondok Pesantren Nurul Iman dengan 
              memiliki beberapa unit pendidikan, mulai dari Madrasah Ibtidaiyah, Tsanawiyah, 
              hingga Aliyah.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Semenjak berdirinya pada tahun 1984 M hingga kini, Pondok Pesantren Nurul Iman 
              mengajarkan ilmu-ilmu agama melalui pengajian-pengajian kitab karangan para ulama 
              salaf. Pondok Pesantren Nurul Iman juga berperan aktif dalam menyebarkan agama 
              Islam yang berakidah Ahlussunnah Wal Jamaah.
            </p>

            {/* Timeline */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-800">1980</div>
                <div className="text-xs text-gray-600 mt-1">Pengajian Dibuka</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-800">1984</div>
                <div className="text-xs text-gray-600 mt-1">Pesantren Berdiri</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-800">2025</div>
                <div className="text-xs text-gray-600 mt-1">40+ Tahun Berkarya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
