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
          <span className="text-gold">Management</span>
        </div>
      </div>
    </div>
  );
}

export default function ManagementPage() {
  return (
    <div className="bg-surface min-h-screen">
      <PageHeader 
        title="Management" 
        subtitle="Leadership that drives excellence and innovation"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* Governing Body */}
        <section className="text-center mb-4">
          <h2 className="text-navy font-bold mb-3" style={{ fontSize: '32px' }}>Governing Body</h2>
          <div className="h-1 w-16 bg-gold mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            The college is managed by the Shaik Dada Saheb Charitable Trust, comprising distinguished educationists, industrialists, and professionals committed to academic excellence.
          </p>
        </section>

        {/* Chairman */}
        <section className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-navy p-10 flex flex-col items-center justify-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                alt="Chairman" 
                className="w-40 h-40 rounded-full object-cover border-4 border-gold shadow-xl mb-6"
              />
              <h3 className="text-white font-bold text-2xl">Sri Shaik Dada Saheb</h3>
              <p className="text-gold font-bold uppercase text-sm tracking-wider mt-2">Founder & Chairman</p>
            </div>
            <div className="lg:col-span-2 p-10 flex flex-col justify-center">
              <h3 className="text-navy font-bold text-xl mb-4">Chairman's Message</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p className="italic border-l-4 border-gold pl-4">
                  "Welcome to ESWAR. Education is not merely about producing skilled professionals, but about nurturing complete global citizens."
                </p>
                <p>
                  We embarked on this journey with a profound dream to make world-class engineering education accessible to rural and urban students alike. Today, seeing our alumni excel in top Fortune 500 companies fills my heart with immense pride.
                </p>
                <p>
                  We remain committed to providing an environment where innovation thrives, ethical values take root, and futures are secured. Our vision is to make Eswar College a center of excellence recognized nationally and internationally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principal */}
        <section className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-navy-deep p-10 flex flex-col items-center justify-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                alt="Principal" 
                className="w-40 h-40 rounded-full object-cover border-4 border-gold shadow-xl mb-6"
              />
              <h3 className="text-white font-bold text-2xl">Dr. K. S. Reddy</h3>
              <p className="text-gold font-bold uppercase text-sm tracking-wider mt-2">Principal</p>
              <p className="text-white/50 text-sm mt-1">M.Tech, Ph.D</p>
            </div>
            <div className="lg:col-span-2 p-10 flex flex-col justify-center">
              <h3 className="text-navy font-bold text-xl mb-4">Principal's Message</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p className="italic border-l-4 border-navy pl-4">
                  "Greetings to all prospective students and parents. Our academic ecosystem at ESWAR is rigorously designed to bridge the gap between classroom theory and dynamic industry requirements."
                </p>
                <p>
                  With profoundly qualified faculty, advanced AI-ready laboratories, and a strict emphasis on discipline and project-based learning, we prepare our students not just to pass exams, but to tackle the complex engineering challenges of tomorrow.
                </p>
                <p>
                  Join us, and let's engineer your success together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Administrative Team */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-navy font-bold mb-3" style={{ fontSize: '32px' }}>Administrative Leadership</h2>
            <div className="h-1 w-16 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. P. Ramesh', role: 'Vice Principal', dept: 'CSE' },
              { name: 'Dr. S. Lakshmi', role: 'Dean - Academics', dept: 'ECE' },
              { name: 'Prof. M. Venkat', role: 'Dean - R&D', dept: 'Mechanical' },
              { name: 'Sri K. Prasad', role: 'Administrative Officer', dept: 'Administration' },
              { name: 'Dr. N. Srinivas', role: 'Controller of Examinations', dept: 'EEE' },
              { name: 'Prof. A. Durga', role: 'Training & Placement Officer', dept: 'CSE' },
              { name: 'Dr. V. Rao', role: 'IQAC Coordinator', dept: 'Civil' },
              { name: 'Prof. R. Kavitha', role: 'Student Welfare Officer', dept: 'MBA' },
            ].map((person) => (
              <div key={person.name} className="bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-xl mx-auto mb-4">
                  {person.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <h3 className="text-navy font-bold text-sm">{person.name}</h3>
                <p className="text-gold font-bold text-xs uppercase tracking-wide mt-1">{person.role}</p>
                <p className="text-gray-400 text-xs mt-1">{person.dept}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
