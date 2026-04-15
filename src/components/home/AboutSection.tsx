import { Link } from 'react-router-dom';
import { COLLEGE } from '../../lib/constants';

const VALUES = [
  {
    title: 'Vision',
    text: 'To be a nationally recognized institution of higher learning imparting quality technical education, fostering research, innovation, and entrepreneurship for societal transformation.',
  },
  {
    title: 'Mission',
    text: 'To provide industry-relevant curriculum, experienced faculty, and state-of-the-art infrastructure to develop competent professionals with ethical values and social responsibility.',
  },
  {
    title: 'Core Values',
    text: 'Excellence in teaching and learning, integrity in all endeavors, inclusiveness and diversity, commitment to innovation, and service to the community and nation.',
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          {/* Left Text */}
          <div>
            <div className="section-eyebrow">About Us</div>
            <h2 className="text-navy font-bold mb-3" style={{ fontSize: '42px', lineHeight: '1.1' }}>
              {COLLEGE.name}
            </h2>
            <div className="gold-separator" />
            <p className="text-navy/70 mb-4" style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Established in {COLLEGE.founded} under the {COLLEGE.trust}, Eswar College of Engineering
              is a premier technical institution located in Kesanupalli, Palnadu District, Andhra Pradesh.
              The college is approved by AICTE, affiliated to JNTUK Kakinada, and accredited by NAAC
              with B++ grade.
            </p>
            <p className="text-navy/70 mb-6" style={{ fontSize: '16px', lineHeight: '1.8' }}>
              With a sprawling 22-acre campus on Chilakaluripet Road, the institution offers 8 B.Tech
              programs, PG courses, and Diploma programs. Our 120+ experienced faculty members are
              dedicated to nurturing world-class engineers who contribute to the nation and beyond.
            </p>
            <Link to="/about" className="btn-gold" style={{ fontSize: '14px', padding: '14px 32px' }}>
              Learn More
            </Link>
          </div>

          {/* Right Image */}
          <div
            className="relative overflow-hidden bg-surface"
            style={{ borderRadius: '6px', aspectRatio: '4/3' }}
          >
            <img
              src="/images/college-building.jpg"
              alt="Eswar College of Engineering Main Building"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-4 left-4 bg-navy text-white px-4 py-2"
              style={{ borderRadius: '4px', fontSize: '12px' }}
            >
              Est. {COLLEGE.founded} | {COLLEGE.campus}
            </div>
          </div>
        </div>

        {/* Vision / Mission / Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((item) => (
            <div
              key={item.title}
              className="border-l-[3px] border-gold pl-5 py-4"
            >
              <h3 className="text-navy font-bold mb-2" style={{ fontSize: '20px' }}>
                {item.title}
              </h3>
              <p className="text-navy/60" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
