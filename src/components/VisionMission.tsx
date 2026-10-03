export default function VisionMission() {
  return (
    <section id="visi-misi" className="py-20 bg-gradient-to-b from-green-900 to-green-950 text-white relative overflow-hidden">
      {/* Islamic Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 0l40 40-40 40L0 40 40 0zm0 10L10 40l30 30 30-30L40 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Arah Tujuan Kami</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: 'serif' }}>
            Visi & Misi
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Visi */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'serif' }}>Visi</h3>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Mencetak kader ulama yang berakidah <span className="text-amber-400 font-semibold">Ahlussunnah Wal Jamaah</span>, 
              berakhlak mulia, dan bermanfaat bagi agama, nusa, dan bangsa.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'serif' }}>Misi</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Menyelenggarakan pendidikan berkualitas demi menciptakan insan yang bermanfaat bagi agama, nusa, dan bangsa',
                'Memelihara agama Islam yang berlandaskan akidah Ahlussunnah Wal Jamaah',
                'Merawat, memelihara, dan menyebarkan ajaran agama sesuai dengan tradisi ulama salafusshalih',
                'Membentuk karakter santri yang berakhlakul karimah dan berwawasan luas',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
