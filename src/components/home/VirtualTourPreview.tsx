import { Link } from 'react-router-dom';

const TOUR_THUMBS = [
  { src: '/images/tour/tour-01.jpg', label: 'Main Entrance' },
  { src: '/images/tour/tour-03.jpg', label: 'CSE Labs' },
  { src: '/images/tour/tour-05.jpg', label: 'Library' },
  { src: '/images/tour/tour-07.jpg', label: 'Sports Complex' },
];

export default function VirtualTourPreview() {
  return (
    <section className="bg-navy-deep py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-0.5 bg-gold" />
              <span
                className="text-gold font-bold uppercase"
                style={{ fontSize: '12px', letterSpacing: '2px' }}
              >
                Virtual Tour
              </span>
            </div>
            <h2 className="text-white font-bold mb-4" style={{ fontSize: '32px' }}>
              Explore Our Campus
            </h2>
            <div className="gold-separator" />
            <p
              className="text-white/60 mb-8 max-w-md"
              style={{ fontSize: '14.5px', lineHeight: '1.8' }}
            >
              Take a virtual walk through our 22-acre campus. Experience our state-of-the-art
              laboratories, spacious classrooms, well-stocked library, and vibrant sports complex
              from anywhere in the world.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/virtual-tour" className="btn-gold">
                Start Tour
              </Link>
              <Link to="/contact" className="btn-outline">
                Book a Visit
              </Link>
            </div>
          </div>

          {/* Right Thumbnails 2x2 */}
          <div className="grid grid-cols-2 gap-3">
            {TOUR_THUMBS.map((thumb) => (
              <Link
                to="/virtual-tour"
                key={thumb.label}
                className="group relative overflow-hidden bg-navy"
                style={{ borderRadius: '6px', aspectRatio: '4/3' }}
              >
                <img
                  src={thumb.src}
                  alt={thumb.label}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-150"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors duration-150" style={{ borderRadius: '6px' }} />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-3"
                >
                  <span className="text-white font-bold" style={{ fontSize: '12px' }}>
                    {thumb.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
