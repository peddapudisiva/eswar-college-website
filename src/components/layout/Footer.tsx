import { Link } from 'react-router-dom';
import { COLLEGE, FOOTER_LINKS } from '../../lib/constants';

export default function Footer() {
  return (
    <footer>
      {/* ═══════════ SRM-STYLE LIGHT GRAY LINKS SECTION ═══════════ */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container-site py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center shrink-0"
                  style={{ borderRadius: '50%', padding: '3px' }}
                >
                  <img
                    src="/logo.png"
                    alt="Eswar College of Engineering Logo"
                    className="h-11 w-11 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-navy font-bold" style={{ fontSize: '24px', letterSpacing: '2px' }}>
                    ESWAR
                  </h3>
                  <p className="text-gray-500 font-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                    COLLEGE OF ENGINEERING
                  </p>
                </div>
              </div>
              <p className="text-gray-500 mb-5" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                {COLLEGE.tagline}. Approved by AICTE, affiliated to JNTUK, accredited by NAAC
                with B++ grade. Offering quality technical education on a sprawling 22-acre campus.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-gray-400" style={{ fontSize: '13px' }}>
                  {COLLEGE.address}
                </span>
                <a
                  href={`tel:${COLLEGE.phone}`}
                  className="text-navy font-semibold hover:text-gold transition-colors duration-200"
                  style={{ fontSize: '14px' }}
                >
                  {COLLEGE.phone}
                </a>
                <a
                  href={`mailto:${COLLEGE.email}`}
                  className="text-navy font-semibold hover:text-gold transition-colors duration-200"
                  style={{ fontSize: '14px' }}
                >
                  {COLLEGE.email}
                </a>
              </div>
            </div>

            {/* Academics Column */}
            <div>
              <h4
                className="text-navy font-bold mb-5"
                style={{ fontSize: '16px' }}
              >
                Academics
              </h4>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.academics.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-navy/70 hover:text-gold transition-colors duration-200"
                      style={{ fontSize: '14px' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campus Column */}
            <div>
              <h4
                className="text-navy font-bold mb-5"
                style={{ fontSize: '16px' }}
              >
                Campus
              </h4>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.campus.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-navy/70 hover:text-gold transition-colors duration-200"
                      style={{ fontSize: '14px' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4
                className="text-navy font-bold mb-5"
                style={{ fontSize: '16px' }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-navy/70 hover:text-gold transition-colors duration-200"
                      style={{ fontSize: '14px' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ SRM-STYLE DARK BLUE CONTACT BAR ═══════════ */}
      <div className="bg-navy-deep">
        <div className="container-site py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0"
              style={{ borderRadius: '50%', padding: '2px' }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-9 w-9 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="text-white font-bold" style={{ fontSize: '18px', letterSpacing: '1px' }}>
              ESWAR COLLEGE OF ENGINEERING
            </span>
          </div>

          <div className="flex items-center gap-8 text-white/70" style={{ fontSize: '14px' }}>
            <a href={`tel:${COLLEGE.phone}`} className="hover:text-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COLLEGE.phone}
            </a>
            <a href={`mailto:${COLLEGE.email}`} className="hover:text-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {COLLEGE.email}
            </a>
            <Link to="/virtual-tour" className="hover:text-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Virtual Tour
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════ COPYRIGHT BAR ═══════════ */}
      <div className="bg-navy-deep border-t border-white/10">
        <div className="container-site py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40" style={{ fontSize: '12px' }}>
            © {new Date().getFullYear()} {COLLEGE.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {['NAAC B++', 'AICTE Approved', 'JNTUK Affiliated', 'UGC Autonomous'].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-white/30 border border-white/15 px-3 py-1"
                  style={{ fontSize: '11px', borderRadius: '4px' }}
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
