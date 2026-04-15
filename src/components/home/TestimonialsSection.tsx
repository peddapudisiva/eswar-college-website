import { TESTIMONIALS } from '../../lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Testimonials</div>
          <h2 className="text-navy font-bold" style={{ fontSize: '32px' }}>
            What Our Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="border border-gray-100 p-7 relative"
              style={{ borderRadius: '6px' }}
            >
              {/* Quote mark */}
              <div
                className="text-gold/20 font-bold absolute top-4 left-5"
                style={{ fontSize: '56px', lineHeight: '1' }}
              >
                &ldquo;
              </div>
              <p
                className="text-navy/65 relative z-10 mb-6 pt-6"
                style={{ fontSize: '14px', lineHeight: '1.75' }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className="w-10 h-10 bg-navy/10 flex items-center justify-center text-navy font-bold"
                  style={{ borderRadius: '4px', fontSize: '13px' }}
                >
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-navy font-bold" style={{ fontSize: '13.5px' }}>
                    {t.name}
                  </div>
                  <div className="text-navy/45" style={{ fontSize: '11.5px' }}>
                    {t.dept} | Batch {t.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
