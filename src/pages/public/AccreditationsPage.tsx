import { Link } from 'react-router-dom';
import { ACCREDITATIONS } from '../../lib/constants';

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
          <span className="text-gold">Accreditations</span>
        </div>
      </div>
    </div>
  );
}

export default function AccreditationsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <PageHeader 
        title="Accreditations & Approvals" 
        subtitle="Recognized by India's premier regulatory bodies for academic excellence"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* Accreditation Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACCREDITATIONS.map((acc) => (
            <div key={acc.name} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-navy p-6 flex items-center gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-gold font-black text-2xl tracking-wider">{acc.name}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{acc.desc}</h3>
                  <span className="inline-block mt-2 bg-gold/20 text-gold font-bold text-sm px-3 py-1 rounded">
                    Status: {acc.value}
                  </span>
                </div>
              </div>
              <div className="p-6">
                {acc.name === 'NAAC' && (
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p>
                      ESWAR College of Engineering has been accredited by the <strong>National Assessment and Accreditation Council (NAAC)</strong> with a grade of <strong className="text-navy">B++</strong>. This accreditation reflects our commitment to quality education, robust infrastructure, and student-centric governance.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-surface p-4 rounded border border-gray-100">
                        <span className="text-navy font-bold text-lg">B++</span>
                        <p className="text-gray-500 text-xs mt-1">Overall Grade</p>
                      </div>
                      <div className="bg-surface p-4 rounded border border-gray-100">
                        <span className="text-navy font-bold text-lg">7 Criteria</span>
                        <p className="text-gray-500 text-xs mt-1">Assessment Parameters</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      NAAC Assessment covers: Curricular Aspects, Teaching-Learning, Research, Infrastructure, Student Support, Governance, and Institutional Values.
                    </p>
                  </div>
                )}
                {acc.name === 'AICTE' && (
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p>
                      All programs offered by ESWAR College are duly approved by the <strong>All India Council for Technical Education (AICTE)</strong>, New Delhi. AICTE approval ensures that our institution meets the required standards for technical education delivery.
                    </p>
                    <div className="bg-surface p-4 rounded border border-gray-100">
                      <p className="font-bold text-navy mb-2">Approved Programs:</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>B.Tech - 9 specializations (498 seats)</li>
                        <li>M.Tech - 4 specializations</li>
                        <li>MBA - 48 seats</li>
                        <li>Diploma - 5 branches</li>
                      </ul>
                    </div>
                  </div>
                )}
                {acc.name === 'JNTUK' && (
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p>
                      ESWAR College of Engineering is permanently affiliated to <strong>Jawaharlal Nehru Technological University, Kakinada (JNTUK)</strong>. All B.Tech and M.Tech programs follow the JNTUK syllabus and examination framework.
                    </p>
                    <div className="bg-surface p-4 rounded border border-gray-100">
                      <p className="font-bold text-navy mb-2">Affiliation Details:</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>Affiliation Type: Permanent</li>
                        <li>University: JNTUK, Kakinada</li>
                        <li>State: Andhra Pradesh</li>
                        <li>Examination: JNTUK Examination Board</li>
                      </ul>
                    </div>
                  </div>
                )}
                {acc.name === 'UGC' && (
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p>
                      ESWAR College has been conferred <strong>Autonomous Status</strong> by the <strong>University Grants Commission (UGC)</strong>. This prestigious status allows the college to design its own curriculum, conduct examinations independently, and issue degree certificates.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-surface p-4 rounded border border-gray-100">
                        <span className="text-navy font-bold text-lg">Autonomous</span>
                        <p className="text-gray-500 text-xs mt-1">Institution Status</p>
                      </div>
                      <div className="bg-surface p-4 rounded border border-gray-100">
                        <span className="text-navy font-bold text-lg">Self-Governed</span>
                        <p className="text-gray-500 text-xs mt-1">Curriculum Design</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Mandatory Disclosures */}
        <section className="bg-white border border-gray-100 rounded-lg shadow-sm p-10">
          <h2 className="text-navy font-bold mb-6" style={{ fontSize: '28px' }}>Mandatory Disclosures</h2>
          <div className="h-1 w-16 bg-gold mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'AICTE Approval Letters (2024-25)',
              'JNTUK Affiliation Order',
              'NAAC Certificate & Peer Team Report',
              'UGC Autonomous Status Letter',
              'Anti-Ragging Committee Details',
              'Internal Complaints Committee (ICC)',
              'Fee Structure (as per AP-AFRC)',
              'Faculty Details & Qualifications',
              'Audited Financial Statements',
              'Student Enrollment Statistics',
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 p-4 bg-surface rounded border border-gray-100 hover:border-gold/30 transition-colors group cursor-pointer">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-gray-700 text-sm group-hover:text-navy transition-colors">{doc}</span>
                <svg className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
