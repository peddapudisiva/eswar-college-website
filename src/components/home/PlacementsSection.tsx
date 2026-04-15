import { Link } from 'react-router-dom';
import { RECRUITERS } from '../../lib/constants';
import { useCountUp } from '../../hooks/useCountUp';

export default function PlacementsSection() {
  const { count: placementRate, ref } = useCountUp(90, 2000);

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Stats */}
          <div>
            <div className="section-eyebrow">Placements</div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-gold font-bold" style={{ fontSize: '90px', lineHeight: '1' }}>
                {placementRate}%+
              </span>
            </div>
            <h2 className="text-navy font-bold mb-3" style={{ fontSize: '36px' }}>
              Placement Record
            </h2>
            <div className="gold-separator" />
            <p className="text-navy/65 mb-8" style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Our dedicated placement cell has consistently achieved outstanding placement records.
              Top recruiters from IT, manufacturing, and consulting sectors visit our campus annually
              to hire our talented graduates. 50+ companies recruit from Eswar College every year.
            </p>
            <Link to="/placements" className="btn-gold" style={{ fontSize: '14px', padding: '14px 32px' }}>
              View Placement Details
            </Link>
          </div>

          {/* Right — Sliding Logo Carousel */}
          <div className="overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-scroll-logos gap-10 items-center py-6" style={{ width: 'max-content' }}>
              {[...RECRUITERS, ...RECRUITERS, ...RECRUITERS].map((company, i) => (
                <div key={i} className="flex-shrink-0 h-24 flex items-center justify-center px-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 md:h-20 w-auto object-contain max-w-[220px]"
                  />
                </div>
              ))}
            </div>



            <style>{`
              @keyframes scrollLogos {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
              }
              .animate-scroll-logos {
                animation: scrollLogos 20s linear infinite;
              }
              .animate-scroll-logos:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
