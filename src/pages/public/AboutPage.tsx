import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COLLEGE } from '../../lib/constants';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-navy py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-white font-bold mb-4" style={{ fontSize: '42px', lineHeight: '1.2' }}>{title}</h1>
        <p className="text-gold" style={{ fontSize: '18px' }}>{subtitle}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-surface min-h-screen">
      <PageHeader 
        title="About ESWAR College of Engineering" 
        subtitle="Nurturing World-Class Technical Professionals Since 2008"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        
        {/* History & Evolution */}
        <section id="history" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-navy font-bold mb-6 flex items-center gap-3" style={{ fontSize: '36px' }}>
              Our History & Evolution
            </h2>
            <div className="h-1 w-20 bg-gold mb-8"></div>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Established in <strong>{COLLEGE.founded}</strong> under the visionary guidance of the <strong>{COLLEGE.trust}</strong>, ESWAR College of Engineering was born out of a deep-seated commitment to bring high-quality, rigorous technical education to the youth of the Palnadu region.
              </p>
              <p>
                What began with a modest intake and a handful of dedicated faculty has blossomed over the last <strong>{new Date().getFullYear() - COLLEGE.founded} years</strong> into a premier destination for engineering excellence. Today, our institution stands proudly on a sprawling, green <strong>{COLLEGE.campus} campus</strong>, housing cutting-edge research laboratories, digital classrooms, and comprehensive sports facilities.
              </p>
              <p>
                We are immensely proud of our academic credentials. Approved by the <strong>AICTE, New Delhi</strong>, and permanently affiliated to <strong>JNTU Kakinada</strong>, ESWAR College holds the prestigious <strong>NAAC B++ accreditation</strong>. This recognition is a testament to our transparent pedagogy, outstanding placement records, and unwavering focus on holistic student development.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Decorative block behind image */}
            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-lg hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000" 
              alt="Campus History" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="bg-white p-12 shadow-sm border border-gray-100 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h4l3-9 5 18 3-9h5" />
                </svg>
              </div>
              <h2 className="text-navy font-bold mb-4" style={{ fontSize: '28px' }}>Our Vision</h2>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-gold pl-4 text-lg">
                "To emerge as a premier institution of global technical education and research, empowering young minds with ethical values, technological excellence, and leadership qualities required to serve the society and nation effectively."
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h2 className="text-navy font-bold mb-4" style={{ fontSize: '28px' }}>Our Mission</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-bold">•</span>
                  <span>To impart holistic, quality technical education through innovative, project-based teaching-learning methodologies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-bold">•</span>
                  <span>To foster a vibrant culture of research, incubation, and entrepreneurship among students and faculty members.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-bold">•</span>
                  <span>To forge strong collaborations with multinational industries and premier institutes for skill upgradation and practical training.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-bold">•</span>
                  <span>To instil strong moral values, uncompromising professional ethics, and a deep sense of social responsibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Management Desk */}
        <section id="management">
          <div className="text-center mb-12">
            <h2 className="text-navy font-bold mb-4 flex justify-center items-center gap-3" style={{ fontSize: '36px' }}>
              From the Management Desk
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chairman Message */}
            <div className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10"></div>
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                  alt="Chairman" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md z-10"
                />
                <div className="z-10">
                  <h3 className="text-navy font-bold" style={{ fontSize: '22px' }}>Sri Shaik Dada Saheb</h3>
                  <p className="text-gold font-bold uppercase text-sm tracking-wide">Founder & Chairman</p>
                </div>
              </div>
              <div className="text-gray-600 leading-relaxed text-sm italic z-10 relative">
                "Welcome to ESWAR. Education is not merely about producing skilled professionals, but about nurturing complete global citizens. We embarked on this journey with a profound dream to make world-class engineering education accessible to rural and urban students alike. Today, seeing our alumni excel in top Fortune 500 companies fills my heart with immense pride. We remain committed to providing an environment where innovation thrives, ethical values take root, and futures are secured."
              </div>
            </div>

            {/* Principal Message */}
            <div className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-bl-full -z-10"></div>
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                  alt="Principal" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md z-10"
                />
                <div className="z-10">
                  <h3 className="text-navy font-bold" style={{ fontSize: '22px' }}>Dr. K. S. Reddy</h3>
                  <p className="text-gold font-bold uppercase text-sm tracking-wide">Principal</p>
                </div>
              </div>
              <div className="text-gray-600 leading-relaxed text-sm italic z-10 relative">
                "Greetings to all prospective students and parents. Our academic ecosystem at ESWAR is rigorously designed to bridge the gap between classroom theory and dynamic industry requirements. With profoundly qualified faculty, advanced AI-ready laboratories, and a strict emphasis on discipline and project-based learning, we prepare our students not just to pass exams, but to tackle the complex engineering challenges of tomorrow. Join us, and let's engineer your success together."
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
