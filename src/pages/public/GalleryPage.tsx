import { useState } from 'react';

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

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const FILTERS = ['All', 'Campus', 'Labs', 'Events', 'Sports'];

  const IMAGES = [
    { src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800", alt: "Main Building Entrance", category: "Campus" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", alt: "Computer Science Lab", category: "Labs" },
    { src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800", alt: "Annual Tech Fest Crowd", category: "Events" },
    { src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", alt: "Cricket Ground Match", category: "Sports" },
    { src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800", alt: "Main Auditorium Seminar", category: "Events" },
    { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800", alt: "Mechanical Workshop", category: "Labs" },
    { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", alt: "Boys Hostel Block", category: "Campus" },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", alt: "Incubation Center Startup", category: "Labs" },
    { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", alt: "Badminton Tournament", category: "Sports" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", alt: "Robotics Workshop", category: "Events" },
    { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", alt: "Campus Library Top View", category: "Campus" },
    { src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=800", alt: "Inter-college Volleyball", category: "Sports" },
  ];

  const filteredImages = activeFilter === 'All' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeFilter);

  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Capturing the essence of technical education and vibrant campus life"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-bold transition-colors duration-300 text-sm tracking-wide ${
                activeFilter === filter 
                  ? 'bg-navy text-white shadow-md' 
                  : 'bg-white text-navy/70 border border-gray-200 hover:border-navy hover:text-navy'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid (CSS Columns approach suitable for images of varying heights if needed, but flex/grid works too) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((item, idx) => (
            <div key={idx} className="break-inside-avoid relative overflow-hidden rounded-lg group cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-gray-100">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                <h3 className="text-white font-bold text-lg leading-snug">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No images found for this category.
          </div>
        )}
        
      </div>
    </div>
  );
}
