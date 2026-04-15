import { Link } from 'react-router-dom';
import { COLLEGE, HERO_STATS } from '../../lib/constants';
import { useCountUp } from '../../hooks/useCountUp';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center cursor-pointer group"
      style={{
        borderRadius: '8px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(1.08) translateY(-4px)';
        el.style.borderColor = 'rgba(253, 185, 19, 0.6)';
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        el.style.boxShadow = '0 12px 40px rgba(253, 185, 19, 0.25), 0 0 20px rgba(253, 185, 19, 0.1)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(1) translateY(0)';
        el.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        el.style.boxShadow = 'none';
      }}
    >
      <div className="text-gold font-bold group-hover:text-gold-light" style={{ fontSize: '42px', lineHeight: '1', transition: 'color 0.3s' }}>
        {count}{suffix}
      </div>
      <div className="text-white/75 group-hover:text-white mt-2" style={{ fontSize: '13px', letterSpacing: '0.5px', transition: 'color 0.3s' }}>
        {label}
      </div>
    </div>
  );
}


export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '600px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-campus.jpg')`,
          backgroundColor: '#002f6c',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(0, 47, 108, 0.80) 0%, rgba(0, 74, 153, 0.65) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 container-site h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-0.5 bg-gold" />
              <span
                className="text-gold font-bold uppercase"
                style={{ fontSize: '14px', letterSpacing: '3px' }}
              >
                Welcome to {COLLEGE.shortName}
              </span>
            </div>
            <h1
              className="text-white font-bold mb-6"
              style={{ fontSize: '52px', lineHeight: '1.1' }}
            >
              {COLLEGE.name}
            </h1>
            <p
              className="text-white/80 mb-10 max-w-lg"
              style={{ fontSize: '17px', lineHeight: '1.8' }}
            >
              {COLLEGE.tagline}. Approved by AICTE, affiliated to JNTUK Kakinada,
              accredited by NAAC with B++ grade, and granted UGC Autonomous status.
              Located on a sprawling {COLLEGE.campus}.
            </p>
            <div className="flex items-center gap-5 mb-8 flex-wrap">
              <Link
                to="/admissions"
                className="btn-gold"
                style={{ padding: '14px 36px', fontSize: '14px' }}
              >
                Apply Now →
              </Link>
              <Link
                to="/virtual-tour"
                className="btn-outline"
                style={{ padding: '14px 36px', fontSize: '14px' }}
              >
                Virtual Tour
              </Link>
            </div>
            <div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3"
              style={{ borderRadius: '6px' }}
            >
              <span className="text-white/60" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                EAMCET CODE
              </span>
              <span className="text-gold font-bold" style={{ fontSize: '18px' }}>
                {COLLEGE.eamcetCode}
              </span>
            </div>
          </div>

          {/* Right stat cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
