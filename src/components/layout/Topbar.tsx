import { Link } from 'react-router-dom';
import { TOPBAR_LEFT, TOPBAR_RIGHT } from '../../lib/constants';

export default function Topbar() {
  return (
    <div className="hidden lg:block bg-navy-deep" style={{ height: '40px' }}>
      <div className="container-site h-full flex items-center justify-between">
        <div className="flex items-center gap-0">
          {TOPBAR_LEFT.map((item, i) => (
            <span key={item.label} className="flex items-center">
              {i > 0 && (
                <span className="text-white/30 mx-3" style={{ fontSize: '13px' }}>|</span>
              )}
              <Link
                to={item.path}
                className="text-white/70 hover:text-white transition-colors duration-200"
                style={{ fontSize: '13px', lineHeight: '40px' }}
              >
                {item.label}
              </Link>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-0">
          {TOPBAR_RIGHT.map((item, i) => (
            <span key={item.label} className="flex items-center">
              {i > 0 && (
                <span className="text-white/30 mx-3" style={{ fontSize: '13px' }}>|</span>
              )}
              {'href' in item ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  style={{ fontSize: '13px', lineHeight: '40px' }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  style={{ fontSize: '13px', lineHeight: '40px' }}
                >
                  {item.label}
                </Link>
              )}
            </span>
          ))}
          {/* SRM-style Admissions button in topbar */}
          <span className="text-white/30 mx-3" style={{ fontSize: '13px' }}>|</span>
          <Link
            to="/admissions"
            className="border-2 border-gold text-gold font-bold hover:bg-gold hover:text-navy-deep transition-all duration-200"
            style={{
              fontSize: '12px',
              padding: '4px 18px',
              borderRadius: '4px',
              letterSpacing: '0.5px',
            }}
          >
            Admissions 2026 ▾
          </Link>
        </div>
      </div>
    </div>
  );
}
