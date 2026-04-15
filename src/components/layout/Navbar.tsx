import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../../lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const SEARCH_LINKS = [
    { label: 'Departments', path: '/departments' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Placements', path: '/placements' },
    { label: 'Virtual Tour', path: '/virtual-tour' },
    { label: 'Syllabus Downloads', path: '/syllabus' },
    { label: 'Exam Results', path: '/results' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
    { label: 'News', path: '/news' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'About Us', path: '/about' },
    { label: 'Library', path: '/library' },
    { label: 'Vision & Mission', path: '/vision-mission' },
    { label: 'Management', path: '/management' },
    { label: 'Accreditations', path: '/accreditations' },
    { label: 'Academic Calendar', path: '/exam-timetable' },
  ];

  const filteredLinks = searchQuery.trim()
    ? SEARCH_LINKS.filter((l) => l.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : SEARCH_LINKS;
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 250);
  };

  const handleToggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (item: typeof NAV_LINKS[number]) => {
    if ('path' in item) return location.pathname === item.path;
    if ('children' in item) {
      return item.children.some((c) => location.pathname === c.path.split('#')[0]);
    }
    return false;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      {/* ═══════════════════════════════════════════════════════════════
          ROW 1: White Logo Bar (like SRM's main header row)
          Height: ~100px — Large logo + college name
         ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-gray-100" style={{ height: '100px' }}>
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo + College Name (SRM-style large) */}
          <Link to="/" className="flex items-center gap-5 shrink-0">
            <img
              src="/logo.png"
              alt="Eswar College of Engineering Logo"
              className="object-contain"
              style={{ height: '72px', width: '72px', mixBlendMode: 'multiply' }}
            />
            <div className="flex flex-col">
              <span
                className="text-navy font-bold leading-none"
                style={{ fontSize: '38px', letterSpacing: '2px' }}
              >
                ESWAR
              </span>
              <span
                className="text-navy-deep font-bold leading-tight mt-1"
                style={{ fontSize: '14px', letterSpacing: '1.5px' }}
              >
                COLLEGE OF ENGINEERING
              </span>
              <span
                className="text-gray-500"
                style={{ fontSize: '11px', letterSpacing: '0.5px' }}
              >
                (An UGC Autonomous Institution)
              </span>
            </div>
          </Link>

          {/* Right side — Secondary links (SRM-style) */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { label: 'Library', path: '/library' },
              { label: 'News', path: '/news' },
              { label: 'Events', path: '/events' },
              { label: 'Results', path: '/results' },
              { label: 'Contact us', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-navy hover:text-gold transition-colors duration-200"
                style={{ fontSize: '14px', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-7 h-0.5 bg-navy transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-navy transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-navy transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ROW 2: Blue Navigation Bar (SRM's main nav row)
          This is the KEY differentiator — bold white text on blue bg
         ═══════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block bg-navy" style={{ height: '50px' }}>
        <div className="container-site h-full flex items-center justify-center gap-2">
          {NAV_LINKS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                'children' in item ? handleMouseEnter(item.label) : undefined
              }
              onMouseLeave={'children' in item ? handleMouseLeave : undefined}
            >
              {'path' in item ? (
                <Link
                  to={item.path}
                  className={`px-5 text-white/90 hover:text-gold transition-colors duration-200 relative whitespace-nowrap block font-bold ${
                    isActive(item) ? 'text-gold' : ''
                  }`}
                  style={{ fontSize: '16px', lineHeight: '50px' }}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className={`px-5 text-white/90 hover:text-gold transition-colors duration-200 flex items-center gap-2 relative whitespace-nowrap font-bold ${
                      isActive(item) ? 'text-gold' : ''
                    }`}
                    style={{ fontSize: '16px', lineHeight: '50px' }}
                    onClick={() => handleToggleDropdown(item.label)}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {'children' in item && openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 py-2 min-w-[240px] z-50"
                      style={{ borderRadius: '0 0 8px 8px' }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-6 py-3 text-navy/80 hover:text-navy hover:bg-surface transition-colors duration-200 font-semibold"
                          style={{ fontSize: '14px' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Search icon (SRM-style) */}
          <button
            className="ml-4 text-white/70 hover:text-gold transition-colors duration-200 p-2"
            onClick={() => { setSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 100); }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE DRAWER
         ═══════════════════════════════════════════════════════════════ */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[70vh] overflow-y-auto">
          {NAV_LINKS.map((item) => (
            <div key={item.label}>
              {'path' in item ? (
                <Link
                  to={item.path}
                  className="block px-6 py-3 text-navy hover:bg-surface border-b border-gray-50 font-semibold"
                  style={{ fontSize: '15px' }}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="w-full text-left px-6 py-3 text-navy hover:bg-surface border-b border-gray-50 flex items-center justify-between font-semibold"
                    style={{ fontSize: '15px' }}
                    onClick={() => handleToggleDropdown(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && 'children' in item && (
                    <div className="bg-surface">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-10 py-2.5 text-navy/70 hover:text-navy border-b border-gray-50"
                          style={{ fontSize: '14px' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col gap-3 mt-4">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Quick Links</div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/login" className="text-[14px] text-navy font-semibold flex items-center gap-2"><svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>Student Login</Link>
              <Link to="/login" className="text-[14px] text-navy font-semibold flex items-center gap-2"><svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Faculty Login</Link>
              <Link to="/results" className="text-[14px] text-navy font-semibold flex items-center gap-2"><svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>Examinations</Link>
              <Link to="/contact" className="text-[14px] text-navy font-semibold flex items-center gap-2"><svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Contact Us</Link>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col gap-3 mt-4">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Quick Links</div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/login" className="text-[14px] text-navy font-semibold flex items-center gap-2">Student Login</Link>
              <Link to="/login" className="text-[14px] text-navy font-semibold flex items-center gap-2">Faculty Login</Link>
              <Link to="/results" className="text-[14px] text-navy font-semibold flex items-center gap-2">Examinations</Link>
              <Link to="/contact" className="text-[14px] text-navy font-semibold flex items-center gap-2">Contact Us</Link>
            </div>
          </div>
          <div className="p-4">
            <Link to="/admissions" className="btn-gold w-full text-center block">
              Admissions 2026
            </Link>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SEARCH OVERLAY
         ═══════════════════════════════════════════════════════════════ */}
      {searchOpen && (
        <div className="fixed inset-0 z-[9999] bg-navy-deep/95 backdrop-blur-sm flex flex-col items-center pt-24 px-4"
             onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Search Input */}
            <div className="relative mb-6">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(''); }
                  if (e.key === 'Enter' && filteredLinks.length > 0) {
                    navigate(filteredLinks[0].path);
                    setSearchOpen(false);
                    setSearchQuery('');
                  }
                }}
                placeholder="Search pages... (e.g. Admissions, Placements, Library)"
                className="w-full pl-14 pr-12 py-5 rounded-xl text-lg font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-gold shadow-2xl"
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition-colors"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Results */}
            <div className="bg-white rounded-xl shadow-2xl max-h-[50vh] overflow-y-auto">
              {filteredLinks.length > 0 ? (
                filteredLinks.map((link) => (
                  <Link
                    key={link.path + link.label}
                    to={link.path}
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-surface border-b border-gray-50 last:border-0 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-navy font-semibold text-sm group-hover:text-gold transition-colors">{link.label}</span>
                    <span className="text-gray-300 text-xs ml-auto font-mono">{link.path}</span>
                  </Link>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-400">
                  <p className="text-lg mb-1">No results found</p>
                  <p className="text-sm">Try searching for "Admissions", "Placements", or "Gallery"</p>
                </div>
              )}
            </div>

            <p className="text-white/30 text-xs text-center mt-4">Press <kbd className="bg-white/10 px-2 py-0.5 rounded text-white/50">Esc</kbd> to close or <kbd className="bg-white/10 px-2 py-0.5 rounded text-white/50">Enter</kbd> to go to first result</p>
          </div>
        </div>
      )}
    </nav>
  );
}
