import { Link } from 'react-router-dom';
import { COLLEGE } from '../../lib/constants';

export default function ApplyBanner() {
  return (
    <section
      className="py-14"
      style={{
        background: 'linear-gradient(135deg, #c8900a 0%, #d4a332 50%, #c8900a 100%)',
      }}
    >
      <div className="container-site text-center">
        <h2 className="text-white font-bold mb-3" style={{ fontSize: '32px' }}>
          Begin Your Engineering Journey
        </h2>
        <p className="text-white/85 mb-4" style={{ fontSize: '15px' }}>
          Admissions open for 2026-27 academic year. Apply with EAMCET Code:
        </p>
        <div
          className="inline-block bg-white/20 text-white font-bold px-6 py-2 mb-6"
          style={{ borderRadius: '4px', fontSize: '24px', letterSpacing: '4px' }}
        >
          {COLLEGE.eamcetCode}
        </div>
        <div className="flex justify-center">
          <Link to="/admissions" className="btn-navy">
            Apply for Admission
          </Link>
        </div>
      </div>
    </section>
  );
}
