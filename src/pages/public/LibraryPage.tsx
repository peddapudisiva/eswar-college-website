import { useState } from 'react';
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
          <span className="text-gold">Library</span>
        </div>
      </div>
    </div>
  );
}

const LIBRARY_STATS = [
  { value: '25,000+', label: 'Books & Volumes' },
  { value: '500+', label: 'E-Journals' },
  { value: '150+', label: 'Periodicals & Magazines' },
  { value: '50+', label: 'Daily Newspapers' },
];

const DIGITAL_RESOURCES = [
  { name: 'DELNET (Online Journals)', url: '#', desc: 'Access thousands of international research papers and journals.' },
  { name: 'NPTEL Video Lectures', url: '#', desc: 'Free online courses from IITs and IISc covering all engineering subjects.' },
  { name: 'NDL India (National Digital Library)', url: '#', desc: 'A virtual repository of learning resources with single-window search.' },
  { name: 'IEEE Xplore', url: '#', desc: 'Full-text access to IEEE journals, conferences, and standards.' },
  { name: 'Spoken Tutorial (IIT Bombay)', url: '#', desc: 'Free software training on Linux, Python, Java, and more.' },
  { name: 'Swayam Online Courses', url: '#', desc: 'MOOCs from UGC, AICTE, and NPTEL for credit transfer.' },
];

const DEPARTMENTS_COLLECTION = [
  { dept: 'Computer Science & Engineering', books: 4200, journals: 85 },
  { dept: 'Electronics & Communication', books: 3800, journals: 72 },
  { dept: 'Electrical & Electronics', books: 2900, journals: 58 },
  { dept: 'Mechanical Engineering', books: 3500, journals: 65 },
  { dept: 'Civil Engineering', books: 2600, journals: 48 },
  { dept: 'General Sciences & Humanities', books: 5000, journals: 120 },
  { dept: 'Management (MBA)', books: 2100, journals: 45 },
  { dept: 'Automobile Engineering', books: 1400, journals: 32 },
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-surface min-h-screen">
      <PageHeader
        title="Central Library"
        subtitle="Knowledge Hub of Eswar College of Engineering"
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">

        {/* Stats Bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {LIBRARY_STATS.map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm">
              <span className="text-navy font-black text-2xl md:text-3xl block">{stat.value}</span>
              <span className="text-gray-500 text-sm font-semibold mt-1 block">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* About Library + OPAC Search */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-lg shadow-sm p-8">
            <h2 className="text-navy font-bold text-2xl mb-4">About Our Library</h2>
            <div className="h-1 w-16 bg-gold mb-6" />
            <div className="text-gray-600 leading-relaxed space-y-4 text-sm">
              <p>
                The Central Library at Eswar College of Engineering is a modern, two-floor knowledge center spread over <strong>5,000 sq. ft.</strong> of space. It serves as the intellectual hub of the campus, supporting the academic and research needs of over <strong>2,500 students</strong> and <strong>120+ faculty members</strong>.
              </p>
              <p>
                The library holds an extensive collection of <strong>25,000+ volumes</strong> covering all branches of engineering, sciences, humanities, and management. Our digital infrastructure provides 24/7 access to international journals, e-books, and MOOCs through platforms like DELNET, NPTEL, and IEEE Xplore.
              </p>
              <p>
                With dedicated reading rooms, a well-equipped e-library section, a reference corner, and a periodicals display area, the library ensures a conducive environment for self-study, group discussions, and competitive exam preparation.
              </p>
            </div>

            {/* Facilities */}
            <h3 className="text-navy font-bold text-lg mt-8 mb-4">Facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Air-Conditioned Reading Hall',
                'E-Library (30 Systems)',
                'Reprography Service',
                'Book Bank Scheme',
                'Reference Section',
                'Periodicals Display',
                'Competitive Exam Corner',
                'Wi-Fi Enabled',
                'OPAC (Online Catalog)',
              ].map((facility) => (
                <div key={facility} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {facility}
                </div>
              ))}
            </div>
          </div>

          {/* OPAC Search */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-navy rounded-lg p-8 text-center">
              <h3 className="text-white font-bold text-xl mb-2">OPAC Search</h3>
              <p className="text-white/60 text-sm mb-6">Search our online catalog for books & journals</p>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, author, or ISBN..."
                  className="w-full px-4 py-3 pr-12 rounded-md text-sm font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-navy-deep p-2 rounded hover:bg-gold/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              {searchQuery && (
                <p className="text-white/50 text-xs mt-3">OPAC integration coming soon. Contact the librarian for assistance.</p>
              )}
            </div>

            {/* Library Timings */}
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
              <h3 className="text-navy font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
                Library Hours
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
                  { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
                  { day: 'Sunday & Holidays', time: 'Closed' },
                  { day: 'During Exams', time: '7:00 AM - 10:00 PM' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-gray-700 font-semibold">{item.day}</span>
                    <span className={`font-bold ${item.time === 'Closed' ? 'text-red-500' : 'text-navy'}`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Librarian Contact */}
            <div className="bg-gold/10 border border-gold/20 rounded-lg p-6">
              <h3 className="text-navy font-bold text-sm mb-2">Chief Librarian</h3>
              <p className="text-navy font-bold">Sri M. Venkatesh, M.L.I.Sc</p>
              <p className="text-gray-600 text-sm mt-1">library@eswarcollegeofengg.org</p>
            </div>
          </div>
        </section>

        {/* Digital Resources */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold text-2xl mb-2">Digital Resources & E-Library</h2>
            <div className="h-1 w-16 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGITAL_RESOURCES.map((res) => (
              <div key={res.name} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <h3 className="text-navy font-bold text-sm">{res.name}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{res.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Department-wise Collection */}
        <section className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-navy px-6 py-4">
            <h3 className="text-white font-bold text-lg">Department-wise Book Collection</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-bold text-navy text-sm">Department</th>
                <th className="p-4 font-bold text-navy text-sm text-center">Books & Titles</th>
                <th className="p-4 font-bold text-navy text-sm text-center">Journals & Periodicals</th>
              </tr>
            </thead>
            <tbody>
              {DEPARTMENTS_COLLECTION.map((d) => (
                <tr key={d.dept} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                  <td className="p-4 font-semibold text-gray-800 text-sm">{d.dept}</td>
                  <td className="p-4 text-center font-bold text-navy">{d.books.toLocaleString()}</td>
                  <td className="p-4 text-center font-bold text-gold">{d.journals}</td>
                </tr>
              ))}
              <tr className="bg-navy/5">
                <td className="p-4 font-bold text-navy">Total Collection</td>
                <td className="p-4 text-center font-black text-navy text-lg">{DEPARTMENTS_COLLECTION.reduce((s, d) => s + d.books, 0).toLocaleString()}</td>
                <td className="p-4 text-center font-black text-gold text-lg">{DEPARTMENTS_COLLECTION.reduce((s, d) => s + d.journals, 0)}</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
}
