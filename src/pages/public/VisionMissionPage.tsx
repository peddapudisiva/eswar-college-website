import { Link } from 'react-router-dom';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-navy py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-white font-bold mb-4" style={{ fontSize: '42px', lineHeight: '1.2' }}>{title}</h1>
        <p className="text-gold" style={{ fontSize: '18px' }}>{subtitle}</p>
        <div className="flex justify-center gap-2 mt-6 text-white/50 text-sm">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/about" className="hover:text-gold transition-colors">About</Link>
          <span>/</span>
          <span className="text-gold">Vision & Mission</span>
        </div>
      </div>
    </div>
  );
}

export default function VisionMissionPage() {
  return (
    <div className="bg-surface min-h-screen">
      <PageHeader 
        title="Vision & Mission" 
        subtitle="Our guiding principles and strategic objectives"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* Vision Section */}
        <section className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-navy/3 rounded-bl-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h2 className="text-navy font-bold" style={{ fontSize: '32px' }}>Our Vision</h2>
                <div className="h-1 w-16 bg-gold mt-2" />
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed italic border-l-4 border-gold pl-6 text-lg md:text-xl">
              "To emerge as a premier institution of global technical education and research, empowering young minds with ethical values, technological excellence, and leadership qualities required to serve the society and nation effectively."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: '🎓', title: 'Academic Excellence', desc: 'Delivering world-class education through cutting-edge curricula and innovative pedagogy.' },
                { icon: '🔬', title: 'Research & Innovation', desc: 'Fostering a vibrant culture of discovery, incubation, and entrepreneurship.' },
                { icon: '🌍', title: 'Global Impact', desc: 'Preparing graduates who lead with integrity and contribute meaningfully to society.' },
              ].map((item) => (
                <div key={item.title} className="bg-surface p-6 rounded-lg border border-gray-100">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="text-navy font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 rounded-lg relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-tr-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div>
                <h2 className="text-navy font-bold" style={{ fontSize: '32px' }}>Our Mission</h2>
                <div className="h-1 w-16 bg-gold mt-2" />
              </div>
            </div>
            <ul className="space-y-6 text-gray-700">
              {[
                'To impart holistic, quality technical education through innovative, project-based teaching-learning methodologies.',
                'To foster a vibrant culture of research, incubation, and entrepreneurship among students and faculty members.',
                'To forge strong collaborations with multinational industries and premier institutes for skill upgradation and practical training.',
                'To instil strong moral values, uncompromising professional ethics, and a deep sense of social responsibility.',
                'To ensure equitable access to education and create a supportive, inclusive campus environment for all students.',
              ].map((mission, i) => (
                <li key={i} className="flex items-start gap-4 bg-surface p-5 rounded-lg border border-gray-100">
                  <span className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-navy font-bold mb-3" style={{ fontSize: '32px' }}>Core Values</h2>
            <div className="h-1 w-16 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏛️', value: 'Integrity' },
              { icon: '💡', value: 'Innovation' },
              { icon: '🤝', value: 'Collaboration' },
              { icon: '📈', value: 'Excellence' },
              { icon: '🧪', value: 'Curiosity' },
              { icon: '⚖️', value: 'Ethics' },
              { icon: '🌱', value: 'Sustainability' },
              { icon: '🎯', value: 'Accountability' },
            ].map((item) => (
              <div key={item.value} className="bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <span className="text-navy font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
