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

export default function EventsPage() {
  const UPCOMING_EVENTS = [
    {
      date: "25",
      month: "AUG",
      title: "National Conference on AI & ML",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      desc: "Join top researchers and industry leaders for a 2-day conference focusing on the future of GenAI, neural networks, and prompt engineering.",
      type: "Academic"
    },
    {
      date: "05",
      month: "SEP",
      title: "Teachers' Day Celebrations",
      time: "10:00 AM - 1:00 PM",
      location: "Open Air Theatre",
      desc: "A grand cultural event organized by the student council to honor our esteemed faculty members. Expect dance performances, drama, and awards.",
      type: "Cultural"
    },
    {
      date: "18",
      month: "SEP",
      title: "Mega Job Mela 2026",
      time: "8:00 AM - 6:00 PM",
      location: "T&P Block",
      desc: "Over 40 multinational companies will be conducting walk-in interviews for final year B.Tech and MBA students.",
      type: "Placement"
    }
  ];

  const PAST_EVENTS = [
    { title: "PRAGYAN Tech Fest", year: "2026", img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=400" },
    { title: "Annual Sports Meet", year: "2026", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=400" },
    { title: "Robotics Workshop", year: "2025", img: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=400" },
    { title: "Alumni Meet", year: "2025", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageHeader 
        title="College Events" 
        subtitle="Discover the vibrant life beyond classrooms at ESWAR"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        
        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <h2 className="text-navy font-bold text-3xl mb-2 flex items-center gap-3">
                Upcoming Events
              </h2>
              <p className="text-gray-500">Mark your calendars for these exciting activities</p>
            </div>
            <button className="hidden md:flex bg-navy text-white hover:bg-navy-light font-bold py-2 px-6 rounded transition-colors items-center gap-2">
              Subscribe Calendar
            </button>
          </div>

          <div className="space-y-6">
            {UPCOMING_EVENTS.map((event, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-md transition-shadow group overflow-hidden cursor-pointer">
                
                {/* Date Block */}
                <div className="md:w-48 bg-navy group-hover:bg-gold transition-colors flex flex-col justify-center items-center py-6 text-white shrink-0">
                  <span className="text-sm font-bold tracking-widest text-white/80">{event.month}</span>
                  <span className="text-5xl font-bold my-1">{event.date}</span>
                </div>

                {/* Event Details */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                    <span className="text-gold flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {event.location}
                    </span>
                  </div>
                  
                  <h3 className="text-navy font-bold text-2xl mb-3 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded">
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Right Action Block */}
                <div className="md:w-40 border-t md:border-t-0 md:border-l border-gray-100 flex items-center justify-center p-6 bg-gray-50 group-hover:bg-white transition-colors shrink-0">
                  <span className="text-navy font-bold uppercase tracking-wide text-sm flex items-center gap-2 group-hover:text-gold transition-colors">
                    Register 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Sneak Peek */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-navy font-bold mb-4" style={{ fontSize: '32px' }}>Glimpses of Past Events</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">A look back at the incredible memories we've created.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PAST_EVENTS.map((item, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy w-full h-full opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-gold text-xs font-bold mb-1">{item.year}</div>
                  <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/gallery" className="bg-transparent border-2 border-navy text-navy font-bold py-3 px-8 rounded hover:bg-navy hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
              View Full Gallery
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
