import { Link } from 'react-router-dom';
import { COLLEGE } from '../../lib/constants';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      {/* Page Hero Banner */}
      <section
        className="page-hero"
        style={{ backgroundImage: `url('/images/hero-campus.jpg')` }}
      >
        <div className="container-site">
          <h1 className="text-white font-bold" style={{ fontSize: '36px' }}>
            {title}
          </h1>
          <div className="gold-separator" style={{ margin: '12px 0 0 0', backgroundColor: '#c8900a' }} />
          <p className="text-white/70 mt-3" style={{ fontSize: '15px' }}>
            {COLLEGE.name} - {title}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-site text-center">
          <div
            className="bg-surface p-12 inline-block w-full max-w-2xl"
            style={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
          >
            <div className="section-eyebrow justify-center">Coming Soon</div>
            <h2 className="text-navy font-bold mb-4" style={{ fontSize: '28px' }}>
              {title}
            </h2>
            <div className="gold-separator mx-auto" />
            <p className="text-navy/60 mt-4 mb-8" style={{ fontSize: '15px', lineHeight: '1.7' }}>
              {description}
            </p>
            <Link to="/" className="btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
