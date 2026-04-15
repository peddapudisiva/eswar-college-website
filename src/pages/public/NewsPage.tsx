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

export default function NewsPage() {
  const LATEST_NEWS = [
    { 
      date: "August 15, 2026", 
      title: "Independence Day Celebrations & Hackathon", 
      excerpt: "ESWAR College celebrated the 80th Independence Day with a flag hoisting ceremony followed by a 24-hour non-stop 'Code for India' hackathon targeting rural software solutions.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=600",
      category: "Campus Events"
    },
    { 
      date: "July 28, 2026", 
      title: "TCS Ninja Campus Drive Records 150+ Offers", 
      excerpt: "Breaking previous records, over 150 students from the B.Tech final year batch secured lucrative offers from Tata Consultancy Services during the phase 1 campus placements.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
      category: "Placements"
    },
    { 
      date: "July 10, 2026", 
      title: "New AI & Deep Learning Lab Inaugurated", 
      excerpt: "In collaboration with industry partners, our new state-of-the-art AI lab equipped with 40 high-performance GPU workstations was inaugurated by the Honorable Chairman.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      category: "Academics"
    },
    { 
      date: "June 25, 2026", 
      title: "Alumni Meet 2026: Bridging the Generational Gap", 
      excerpt: "Over 500 alumni from across the globe gathered at the campus to share their industry experiences, network with current students, and pledge support for the newly formed INCUBATOR cell.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
      category: "Alumni"
    },
    { 
      date: "June 05, 2026", 
      title: "ESWAR Tech Fest 'PRAGYAN 26' a Massive Success", 
      excerpt: "The annual national level technical symposium witnessed participation from 50+ engineering colleges. Highlights included robowars, paper presentations, and a laser show.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600",
      category: "Events"
    },
    { 
      date: "May 20, 2026", 
      title: "Faculty Development Program on Cloud Native Apps", 
      excerpt: "A rigorous one-week FDP was conducted for the CSE & IT departments by senior architects from AWS and Microsoft, focusing on Kubernetes and serverless architectures.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      category: "Workshops"
    }
  ];

  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageHeader 
        title="News & Updates" 
        subtitle="Stay informed about the latest happenings, achievements, and announcements"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Featured News (Latest item mapped first for emphasis) */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
              <img 
                src={LATEST_NEWS[0].image} 
                alt="Featured News" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="lg:w-1/2 p-10 flex flex-col justify-center">
              <div className="text-gold font-bold mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {LATEST_NEWS[0].date}
              </div>
              <h2 className="text-navy font-bold text-3xl mb-4 leading-tight group-hover:text-gold transition-colors">
                {LATEST_NEWS[0].title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {LATEST_NEWS[0].excerpt}
              </p>
              <div>
                <button className="text-navy font-bold uppercase tracking-wide border-b-2 border-gold pb-1 flex items-center gap-2 hover:gap-4 transition-all">
                  Read Full Story
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Regular News Grid */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h3 className="text-navy font-bold text-2xl">Recent Articles</h3>
          <div className="flex gap-2">
            <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded shadow-sm outline-none focus:border-navy">
              <option>All Categories</option>
              <option>Academics</option>
              <option>Placements</option>
              <option>Campus Events</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_NEWS.slice(1).map((news, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-navy text-xs font-bold px-3 py-1 rounded shadow-md">
                  {news.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-gray-500 text-sm mb-3 font-medium">
                  {news.date}
                </div>
                <h3 className="text-navy font-bold text-xl mb-3 leading-snug group-hover:text-gold transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-gold font-bold text-sm tracking-wide uppercase group-hover:text-navy transition-colors">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-navy text-navy font-bold py-3 px-8 rounded hover:bg-navy hover:text-white transition-colors duration-300">
            Load More News
          </button>
        </div>

      </div>
    </div>
  );
}
