export default function EducationUnits() {
  const units = [
    {
      name: 'Pondok Pesantren',
      description: 'Program pendidikan asrama dengan kurikulum terpadu ilmu agama dan umum',
      icon: '🕌',
      level: 'Semua Jenjang',
    },
    {
      name: 'Madrasah Ibtidaiyah',
      description: 'Pendidikan dasar setingkat SD dengan kurikulum nasional dan keagamaan',
      icon: '📖',
      level: 'Kelas 1-6',
    },
    {
      name: 'Madrasah Tsanawiyah',
      description: 'Pendidikan menengah pertama setingkat SMP dengan pendalaman ilmu agama',
      icon: '📚',
      level: 'Kelas 7-9',
    },
    {
      name: 'Madrasah Aliyah',
      description: 'Pendidikan menengah atas setingkat SMA dengan fokus ilmu agama dan umum',
      icon: '🎓',
      level: 'Kelas 10-12',
    },
  ];

  return (
    <section id="pendidikan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Unit Pendidikan</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4" style={{ fontFamily: 'serif' }}>
            Jenjang Pendidikan
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pondok Pesantren Nurul Iman menyelenggarakan pendidikan dari tingkat dasar hingga menengah atas
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit) => (
            <div
              key={unit.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group text-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{unit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                {unit.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{unit.description}</p>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                {unit.level}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Kurikulum Terpadu</h4>
              <p className="text-gray-600 text-sm">Menggabungkan kurikulum nasional dengan kitab-kitab klasik ulama salaf</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Akreditasi A</h4>
              <p className="text-gray-600 text-sm">Terakreditasi unggul oleh BAN-S/M untuk semua jenjang pendidikan</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Ustadz Berkualitas</h4>
              <p className="text-gray-600 text-sm">Tenaga pengajar lulusan universitas terkemuka dalam dan luar negeri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
