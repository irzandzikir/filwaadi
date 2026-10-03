import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Struktur navigasi dengan sub-menu (Dropdown)
  const navLinks: NavItem[] = [
    { name: 'Beranda', href: '#beranda' },
    {
      name: 'Profil',
      children: [
        { name: 'Sejarah', href: '#sejarah' },
        { name: 'Visi & Misi', href: '#visi-misi' },
        { name: 'Kebijakan Mutu', href: '#kebijakan-mutu' },
        { name: 'Tentang Kami', href: '#tentang-kami' },
      ],
    },
    {
      name: 'Pendidikan',
      children: [
        { name: 'Tahfizh Al-Qur\'an', href: '#tahfizh' },
        { name: 'Madrasah Tsanawiyah', href: '#mts' },
        { name: 'Madrasah Aliyah', href: '#ma' },
      ],
    },
    { name: 'Berita', href: '#berita' },
    {
      name: 'Informasi',
      children: [
        { name: 'Pengumuman', href: '#pengumuman' },
        { name: 'Galeri Kegiatan', href: '#galeri' },
        { name: 'Fasilitas', href: '#fasilitas' },
      ],
    },
    { name: 'Kontak', href: '#kontak' },
  ];

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-gradient-to-b from-green-950/80 via-green-900/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Identitas */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo Pondok Pesantren"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1
                className={`text-lg font-bold tracking-tight transition-colors ${
                  scrolled ? 'text-green-900' : 'text-white'
                }`}
              >
                Pondok Pesantren
              </h1>
              <p
                className={`text-xs tracking-widest uppercase transition-colors ${
                  scrolled ? 'text-green-700' : 'text-amber-300'
                }`}
              >
                Nurul Hidayah Fil Waadi
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-6">
                {link.children ? (
                  // Tombol Induk dengan Panah Bawah
                  <button
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      scrolled
                        ? 'text-red-700 hover:text-red-800'
                        : 'text-white hover:text-amber-300'
                    }`}
                  >
                    {link.name}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  // Link Tunggal
                  <a
                    href={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      scrolled
                        ? 'text-red-700 hover:text-red-800'
                        : 'text-white hover:text-amber-300'
                    }`}
                  >
                    {link.name}
                  </a>
                )}

                {/* Dropdown Box Menu (Desktop) */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 animate-fadeIn">
                    {/* Panah dekoratif di atas box (opsional) */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                    
                    {link.children.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-xs font-semibold text-sky-900 hover:bg-sky-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-0"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Tombol PPDB */}
            <a
              href="#ppdb"
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:scale-105"
            >
              PPDB 2026/2027
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="flex justify-between items-center w-full py-2.5 text-left text-gray-800 font-semibold"
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMobileDropdown === link.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Submenu Mobile */}
                    {activeMobileDropdown === link.name && (
                      <div className="pl-4 border-l-2 border-green-700 my-1 space-y-1">
                        {link.children.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-xs font-medium text-sky-900 hover:text-green-800"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2.5 text-gray-800 font-semibold hover:text-green-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2">
              <a
                href="#ppdb"
                className="block bg-amber-600 text-white text-center py-3 rounded-full font-bold text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                PPDB 2026/2027
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}