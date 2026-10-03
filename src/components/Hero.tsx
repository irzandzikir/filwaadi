export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/4492bb51-108e-4326-a67c-636a21921263/_result.png"
          alt="Pondok Pesantren Nurul Iman"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/50 to-green-950/80" />
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Bismillah */}
        <div className="mb-6">
          <p className="text-amber-300 text-lg sm:text-xl font-arabic mb-2" style={{ fontFamily: 'serif' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium tracking-wide">
            Selamat Datang di
          </span>
        </div>

        {/* School Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
          Pondok Pesantren
        </h1>
        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-amber-400 mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
          Nurul Hidayah Fil Waadi
        </h2>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic">
            "Tanam padi, rumput ikut. Tanam rumput, padi luput.
            <br />
            Tuntut akhirat, dunia ikut. Tuntut dunia, akhirat luput."
          </p>
          <p className="text-amber-300 text-sm mt-3">
            — KH. Muhammad Bazri, Pendiri Pondok Pesantren Nurul Hidayah Fil Waadi
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ppdb"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-amber-600/20 hover:-translate-y-0.5"
          >
            Daftar Sekarang
          </a>
          <a
            href="#profil"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10"
          >
            Profil Pesantren
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">40+</div>
            <div className="text-white/70 text-sm">Tahun Berdiri</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">1500+</div>
            <div className="text-white/70 text-sm">Santri Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">4</div>
            <div className="text-white/70 text-sm">Unit Pendidikan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">50+</div>
            <div className="text-white/70 text-sm">Tenaga Pengajar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
