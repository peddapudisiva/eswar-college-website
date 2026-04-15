import React, { useState } from 'react';
import { BTECH_BRANCHES, PG_PROGRAMS, DIPLOMA_PROGRAMS } from '../../lib/constants';
import { Link } from 'react-router-dom';

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

// Reuse icons from home page for consistency
const DEPT_ICONS: Record<string, React.ReactNode> = {
  car: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 01-2-2v-4l2-5h14l2 5v4a2 2 0 01-2 2M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z" /></svg>,
  building: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14M9 9h.01M9 13h.01M9 17h.01M17 9h.01M17 13h.01M17 17h.01" /></svg>,
  cpu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>,
  brain: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" /><path d="M9 21h6M10 17v4M14 17v4" /></svg>,
  database: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
  palette: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.55-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" /></svg>,
  radio: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0" /><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" /></svg>,
  zap: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  settings: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
};

export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState<'BTECH' | 'PG' | 'DIPLOMA'>('BTECH');

  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageHeader 
        title="Academic Departments" 
        subtitle="Explore our comprehensive range of engineering and management programs"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['BTECH', 'PG', 'DIPLOMA'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-3 rounded-md font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab 
                  ? 'bg-navy text-white shadow-md' 
                  : 'bg-white text-navy/70 border border-gray-200 hover:border-navy/30 hover:bg-gray-50'
              }`}
              style={{ fontSize: '15px' }}
            >
              {tab === 'BTECH' ? 'B.Tech Programs' : tab === 'PG' ? 'PG Programs (M.Tech & MBA)' : 'Diploma'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'BTECH' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {BTECH_BRANCHES.map((branch) => (
                <div 
                  key={branch.code}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden relative bg-navy flex items-center justify-center">
                    {/* @ts-ignore */}
                    {branch.image ? (
                      <>
                        {/* @ts-ignore */}
                        <img src={branch.image} alt={branch.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    )}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded flex items-center justify-center text-navy shadow-lg">
                      {DEPT_ICONS[branch.icon]}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-gold font-bold text-xs uppercase tracking-wider mb-2 block">{branch.code}</span>
                    <h3 className="text-navy font-bold mb-4 min-h-[50px] leading-snug" style={{ fontSize: '18px' }}>
                      {branch.name}
                    </h3>
                    
                    <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-sm">
                      <div className="text-gray-500 flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                        Intake: <span className="font-bold text-navy">{branch.intake}</span>
                      </div>
                      <Link to="/admissions" className="text-gold hover:text-navy transition-colors font-bold flex items-center gap-1">
                        Apply
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'PG' && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 bg-blue-50 border-b border-gray-100 flex items-start gap-4">
                <div className="text-3xl mt-1 text-navy flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-navy font-bold text-lg mb-1">Post Graduate Programs</h3>
                  <p className="text-gray-600 text-sm">Advance your career with our specialized Master's programs. We offer robust M.Tech specializations for engineering graduates and a comprehensive MBA program for aspiring business leaders.</p>
                </div>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 font-bold border-b border-navy-light text-sm">Program Name</th>
                    <th className="p-4 font-bold border-b border-navy-light text-sm">Duration</th>
                    <th className="p-4 font-bold border-b border-navy-light text-sm">Entrance Exam</th>
                    <th className="p-4 font-bold border-b border-navy-light text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {PG_PROGRAMS.map((program, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-navy">{program.name}</td>
                      <td className="p-4 text-gray-600">
                        <span className="flex items-center gap-2">
                           {program.duration}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold font-sans">
                          {program.entrance}
                        </span>
                      </td>
                      <td className="p-4">
                        <Link to="/admissions" className="text-gold font-bold hover:underline text-sm flex items-center gap-1">
                          View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'DIPLOMA' && (
            <div className="space-y-8">
              <div className="p-6 bg-gold/10 border border-gold/20 rounded-lg flex items-start gap-4">
                <div className="text-3xl mt-1 text-gold flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <div>
                  <h3 className="text-navy font-bold text-lg mb-1">Polytechnic Diploma Courses</h3>
                  <p className="text-gray-600 text-sm">Jumpstart your technical career right after 10th grade. Our intensive 3-year diploma courses equip you with hands-on skills required by modern industries.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DIPLOMA_PROGRAMS.map((prog, idx) => (
                  <div key={idx} className="bg-white border-l-4 border-gold p-6 shadow-sm rounded-r-lg hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-gray-100 group-hover:text-gold/10 transition-colors">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3 className="text-navy font-bold text-lg mb-2 relative z-10">{prog}</h3>
                    <p className="text-gray-500 text-sm relative z-10 flex items-center gap-2">
                       <span className="bg-gray-100 px-2 py-0.5 rounded">3 Years</span> • <span className="text-gold font-bold border border-gold px-2 py-0.5 rounded">AP POLYCET</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
