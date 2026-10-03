export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Hubungi Kami</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4" style={{ fontFamily: 'serif' }}>
            Kunjungi Kami
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.8095906!3d-6.3986578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjMnNTUuMiJTIDEwNsKwNDgnMzQuNSJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '384px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Pondok Pesantren Nurul Iman"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
              Informasi Kontak
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Raya Pesantren No. 45<br />
                    Desa Sukamaju, Kec. Cipayung<br />
                    Kota Depok, Jawa Barat 16437
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                  <p className="text-gray-600">
                    (021) 1234-5678<br />
                    +62 812-3456-7890 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    info@nuruliman-pesantren.sch.id<br />
                    ppdb@nuruliman-pesantren.sch.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                  <p className="text-gray-600">
                    Senin - Jumat: 08.00 - 16.00 WIB<br />
                    Sabtu: 08.00 - 12.00 WIB<br />
                    Minggu & Hari Libur: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', icon: 'f' },
                  { name: 'Instagram', icon: 'ig' },
                  { name: 'YouTube', icon: 'yt' },
                  { name: 'WhatsApp', icon: 'wa' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-green-700 hover:bg-green-800 rounded-full flex items-center justify-center text-white font-bold text-sm transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
