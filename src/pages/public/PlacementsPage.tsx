import { RECRUITERS } from '../../lib/constants';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-navy py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-white font-bold mb-4" style={{ fontSize: '42px', lineHeight: '1.2' }}>{title}</h1>
        <p className="text-gold" style={{ fontSize: '18px' }}>{subtitle}</p>
      </div>
    </div>
  );
}

export default function PlacementsPage() {
  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageHeader 
        title="Training & Placements" 
        subtitle="Empowering careers with top-tier corporate connections"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        
        {/* Placement Dashboard Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full"></div>
            <div className="text-navy/20 mb-4 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
            </div>
            <div className="text-gold font-bold mb-2 flex items-baseline justify-center" style={{ fontSize: '48px', lineHeight: '1' }}>12.5 <span className="text-2xl ml-1">LPA</span></div>
            <div className="text-navy font-bold uppercase tracking-widest text-sm">Highest Package</div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-navy/5 rounded-br-full"></div>
            <div className="text-navy/20 mb-4 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div className="text-gold font-bold mb-2 flex justify-center text-4xl" style={{ fontSize: '48px', lineHeight: '1' }}>500+</div>
            <div className="text-navy font-bold uppercase tracking-widest text-sm">Placement Offers</div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full"></div>
            <div className="text-navy/20 mb-4 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
            </div>
            <div className="text-gold font-bold mb-2 flex justify-center" style={{ fontSize: '48px', lineHeight: '1' }}>50+</div>
            <div className="text-navy font-bold uppercase tracking-widest text-sm">Top Companies</div>
          </div>
        </section>

        {/* About T&P Cell */}
        <section className="bg-white p-12 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-navy font-bold mb-6 flex items-center gap-3" style={{ fontSize: '32px' }}>
                About the Placement Cell
              </h2>
              <div className="h-1 w-16 bg-gold mb-6"></div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Training & Placement (T&P) Cell at ESWAR College is a dedicated, proactive department operating relentlessly to facilitate high-paying campus recruitments for our graduating students. We act as the ultimate bridge between raw student talent and the fast-paced corporate world.
                </p>
                <p>
                  We don't wait until the final year. Our rigorously structured training program inherently begins from the second year, encompassing aptitude tests, group discussions, intensive coding bootcamps, and mock interviews led by industry veterans. Because of our relentless dedication and strong network of MNC corporate partners, we consistently achieve an outstanding **90%+ placement record** every single year.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-navy font-bold mb-4 text-xl">Key Training Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span className="text-gray-700 text-sm font-medium">Aptitude & Logical Reasoning</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span className="text-gray-700 text-sm font-medium">Full-Stack Tech Bootcamps</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span className="text-gray-700 text-sm font-medium">Soft Skills & Business English</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span className="text-gray-700 text-sm font-medium">Mock Interviews & Group Discussions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Recruiters — Sliding Carousel */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-navy font-bold mb-4 flex items-center justify-center gap-3" style={{ fontSize: '36px' }}>
              Our Top Recruiters
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          
          {/* Infinite Scroll Carousel */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-scroll-left gap-12 items-center" style={{ width: 'max-content' }}>
              {/* Duplicate the logos 3x for seamless infinite scroll */}
              {[...RECRUITERS, ...RECRUITERS, ...RECRUITERS].map((company, i) => (
                <div key={i} className="flex-shrink-0 h-24 flex items-center justify-center px-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 md:h-20 w-auto object-contain max-w-[220px]"
                  />
                </div>
              ))}
            </div>
          </div>


        </section>

        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-scroll-left {
            animation: scrollLeft 25s linear infinite;
          }
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>

      </div>
    </div>
  );
}
