export default function Founders() {
  return (
    <section id="profil" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
      
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Pimpinan Pesantren</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4" style={{ fontFamily: 'serif' }}>
            Pendiri & Pimpinan
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Founder */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-green-700 to-green-900 p-1 shadow-2xl group-hover:shadow-green-500/20 transition-all">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden">
                  <img src="/images/abi.png" alt="KH. Muhammad Bazri" className="w-full h-full object-cover"
                  />
                  </div>
                  </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                Pendiri
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
              Almaghfurlah KH. Muhammad Bazri
            </h3>
            <p className="text-green-700 font-medium">Pendiri Pondok Pesantren Nurul Hidayah Fil Waadi</p>
          </div>

          {/* Current Leader */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-green-700 to-green-900 p-1 shadow-2xl group-hover:shadow-green-500/20 transition-all">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden">
                  <svg className="w-32 h-32 text-green-800/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-700 text-white px-4 py-1 rounded-full text-xs font-semibold">
                Pimpinan Umum
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
              Ustadz Muhiburrohman
            </h3>
            <p className="text-green-700 font-medium">Pimpinan Umum Pondok Pesantren Nurul Hidayah Fil Waadi </p>
            <p className="text-gray-500 text-sm mt-2">Putra Almaghfurlah KH. Muhammad Bazri</p>
          </div>
        </div>
      </div>
    </section>
  );
}
