import { Link } from 'react-router-dom';
import { NEWS } from '../../lib/constants';
import { formatDate } from '../../lib/utils';

export default function NewsEventsSection() {
  const featured = NEWS[0];
  const rest = NEWS.slice(1);

  return (
    <section className="bg-surface py-20">
      <div className="container-site">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Latest Updates</div>
          <h2 className="text-navy font-bold" style={{ fontSize: '32px' }}>
            News & Events
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured (2fr) */}
          <Link
            to="/news"
            className="lg:col-span-1 group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-150"
            style={{ borderRadius: '6px' }}
          >
            <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-150"
              />
            </div>
            <div className="p-6">
              <span className="text-gold font-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                {formatDate(featured.date)}
              </span>
              <h3 className="text-navy font-bold mt-2 mb-2 group-hover:text-gold transition-colors duration-150" style={{ fontSize: '18px', lineHeight: '1.3' }}>
                {featured.title}
              </h3>
              <p className="text-navy/55" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                {featured.excerpt}
              </p>
            </div>
          </Link>

          {/* Other news (1fr each) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((item) => (
              <Link
                to="/news"
                key={item.id}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-150"
                style={{ borderRadius: '6px' }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-150"
                  />
                </div>
                <div className="p-5">
                  <span className="text-gold font-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                    {formatDate(item.date)}
                  </span>
                  <h3 className="text-navy font-bold mt-2 mb-2 group-hover:text-gold transition-colors duration-150" style={{ fontSize: '15px', lineHeight: '1.3' }}>
                    {item.title}
                  </h3>
                  <p className="text-navy/55" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/news" className="btn-navy" style={{ fontSize: '12px' }}>
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
