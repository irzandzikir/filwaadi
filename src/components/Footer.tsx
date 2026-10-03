export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center border-2 border-amber-400">
                <svg className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Pondok Pesantren</h3>
                <p className="text-xs tracking-widest uppercase text-amber-400">Nurul Hidayah Fil Waadi</p>
              </div>
            </div>
            <p className="text-green-200/70 text-sm leading-relaxed mb-6">
              Mencetak kader ulama yang berakidah Ahlussunnah Wal Jamaah, 
              berakhlak mulia, dan bermanfaat bagi agama, nusa, dan bangsa.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5">Tautan</h4>
            <ul className="space-y-3">
              {['Beranda', 'Profil', 'Sejarah', 'Visi & Misi', 'Pendidikan', 'Berita'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-green-200/70 hover:text-amber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-bold text-white mb-5">Pendidikan</h4>
            <ul className="space-y-3">
              {['Pondok Pesantren', 'Madrasah Ibtidaiyah', 'Madrasah Tsanawiyah', 'Madrasah Aliyah', 'PPDB 2025', 'Beasiswa'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-green-200/70 hover:text-amber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Kontak</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-green-200/70">
                  Jl. Raya Pesantren No. 45<br />
                  Depok, Jawa Barat 16437
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-green-200/70">(021) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-green-200/70">info@nuruliman-pesantren.sch.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-green-200/50 text-sm">
            © 2025 Pondok Pesantren Nurul Iman. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-green-200/50 hover:text-amber-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-green-200/50 hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
