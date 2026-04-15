import { COLLEGE } from '../../lib/constants';

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

export default function AdmissionsPage() {
  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageHeader 
        title="Admissions 2026-27" 
        subtitle={`EAMCET / ICET / PGECET Counselling Code: ${COLLEGE.eamcetCode}`}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left 2 columns) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro Alert */}
            <div className="bg-blue-50 border-l-4 border-navy p-6 rounded-r-lg flex items-start gap-4">
              <div>
                <h3 className="text-navy font-bold mb-2 text-lg">Welcome to ESWAR Admissions</h3>
                <p className="text-gray-700 text-sm">
                  Your journey to engineering excellence starts here. Admissions to all B.Tech, M.Tech, and Professional courses are made strictly on merit and based on the rank obtained in the Common Entrance Tests conducted by the State Government of Andhra Pradesh.
                </p>
              </div>
            </div>

            {/* Admission Categories */}
            <section>
              <h2 className="text-navy font-bold mb-6 text-2xl border-b border-gray-200 pb-2 flex items-center gap-2">
                Category of Admissions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">70% Seats</div>
                  <h3 className="text-navy font-bold text-lg mb-2">Category A (Convener Quota)</h3>
                  <p className="text-gray-600 text-sm">
                    70% of the total available seats in all branches are filled by the Convener, AP EAPCET/ICET/PGECET through robust online counselling. Allocation is strictly based on the state-wide rank secured by the candidates.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-navy text-white text-xs font-bold px-3 py-1 rounded-bl-lg">30% Seats</div>
                  <h3 className="text-navy font-bold text-lg mb-2">Category B (Management Quota)</h3>
                  <p className="text-gray-600 text-sm">
                    The remaining 30% of the seats are filled by the College Management. These admissions follow the guidelines and merit prerequisites issued by the AP State Council of Higher Education (APSCHE).
                  </p>
                </div>
              </div>
            </section>

            {/* Eligibility Table */}
            <section>
              <h2 className="text-navy font-bold mb-6 text-2xl border-b border-gray-200 pb-2 flex items-center gap-2">
                Eligibility Criteria
              </h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 font-bold text-navy text-sm">Program</th>
                      <th className="p-4 font-bold text-navy text-sm">Duration</th>
                      <th className="p-4 font-bold text-navy text-sm">Eligibility Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-800">B.Tech</td>
                      <td className="p-4 text-gray-600">4 Years</td>
                      <td className="p-4 text-gray-600">Passed 10+2 with MPC. Qualified in AP EAPCET.</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-800">B.Tech (Lateral)</td>
                      <td className="p-4 text-gray-600">3 Years</td>
                      <td className="p-4 text-gray-600">Passed Diploma in Engineering. Qualified in AP ECET.</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-800">M.Tech</td>
                      <td className="p-4 text-gray-600">2 Years</td>
                      <td className="p-4 text-gray-600">B.Tech in relevant branch. Qualified in GATE / AP PGECET.</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-800">MBA</td>
                      <td className="p-4 text-gray-600">2 Years</td>
                      <td className="p-4 text-gray-600">Any Degree with min 50%. Qualified in AP ICET.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-800">Diploma</td>
                      <td className="p-4 text-gray-600">3 Years</td>
                      <td className="p-4 text-gray-600">Passed 10th Class (SSC). Qualified in AP POLYCET.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar (Right 1 column) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Quick Contact Box */}
            <div className="bg-navy p-8 rounded-lg text-white shadow-xl relative overflow-hidden">
              <h3 className="font-bold text-xl mb-4 text-gold">Admission Enquiry</h3>
              <p className="text-white/80 text-sm mb-6">
                Need guidance? Our dedicated admissions counselors are here to help you navigate your options.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Helpline Numbers</div>
                    <div className="font-bold">{COLLEGE.phone}</div>
                    <div className="font-bold">+91 94931 73355</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Email Us</div>
                    <div className="font-bold text-sm">admissions@eswarcollege.edu.in</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
                Apply Online Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Checklist */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-navy font-bold mb-4 text-lg flex items-center gap-2">
                Documents Required
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="text-green-500 shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>SSC (10th) Marks Memo Orig.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-green-500 shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Intermediate (10+2) Marks Memo</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-green-500 shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Entrance Exam Rank Card & Hall Ticket</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-green-500 shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Recently issued Transfer Certificate (TC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-green-500 shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Caste & Income Certificates (MeeSeva)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
