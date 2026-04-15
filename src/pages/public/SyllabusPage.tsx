import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BTECH_BRANCHES } from '../../lib/constants';

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
          <Link to="/departments" className="hover:text-gold transition-colors">Academics</Link>
          <span>/</span>
          <span className="text-gold">Syllabus Downloads</span>
        </div>
      </div>
    </div>
  );
}

const REGULATIONS = ['R20 (2020-24)', 'R23 (2023-27)', 'R24 (2024-28)'] as const;
const SEMESTERS = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'] as const;

export default function SyllabusPage() {
  const [selectedRegulation, setSelectedRegulation] = useState<string>('R23 (2023-27)');
  const [selectedBranch, setSelectedBranch] = useState<string>('Computer Science & Engineering');
  const [selectedSemester, setSelectedSemester] = useState<string>('Semester 1');

  // Mock syllabus subjects
  const getSubjects = (sem: string) => {
    const semNum = parseInt(sem.replace('Semester ', ''));
    if (semNum <= 2) {
      return [
        { code: 'BS101', name: 'Mathematics - ' + (semNum === 1 ? 'I' : 'II'), credits: 4, type: 'Theory' },
        { code: 'BS102', name: semNum === 1 ? 'Engineering Physics' : 'Engineering Chemistry', credits: 4, type: 'Theory' },
        { code: 'ES103', name: semNum === 1 ? 'Programming in C' : 'Data Structures', credits: 3, type: 'Theory' },
        { code: 'ES104', name: semNum === 1 ? 'Engineering Drawing' : 'Digital Logic Design', credits: 3, type: 'Theory' },
        { code: 'HS105', name: semNum === 1 ? 'English Communication' : 'Environmental Science', credits: 2, type: 'Theory' },
        { code: 'ES103L', name: semNum === 1 ? 'C Programming Lab' : 'Data Structures Lab', credits: 1.5, type: 'Lab' },
        { code: 'BS102L', name: semNum === 1 ? 'Physics Lab' : 'Chemistry Lab', credits: 1.5, type: 'Lab' },
        { code: 'MC100', name: semNum === 1 ? 'Professional Ethics' : 'Constitution of India', credits: 0, type: 'Mandatory' },
      ];
    }
    return [
      { code: `PC${semNum}01`, name: 'Core Subject - I', credits: 4, type: 'Theory' },
      { code: `PC${semNum}02`, name: 'Core Subject - II', credits: 4, type: 'Theory' },
      { code: `PC${semNum}03`, name: 'Core Subject - III', credits: 3, type: 'Theory' },
      { code: `PE${semNum}01`, name: 'Professional Elective - I', credits: 3, type: 'Elective' },
      { code: `OE${semNum}01`, name: 'Open Elective', credits: 3, type: 'Elective' },
      { code: `PC${semNum}01L`, name: 'Core Lab - I', credits: 1.5, type: 'Lab' },
      { code: `PC${semNum}02L`, name: 'Core Lab - II', credits: 1.5, type: 'Lab' },
      { code: `SK${semNum}00`, name: 'Skill Development', credits: 2, type: 'Skill' },
    ];
  };

  const subjects = getSubjects(selectedSemester);
  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);

  return (
    <div className="bg-surface min-h-screen">
      <PageHeader
        title="Syllabus Downloads"
        subtitle="Download semester-wise syllabus for all B.Tech, M.Tech & MBA programs"
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">

        {/* Filter Controls */}
        <section className="bg-white border border-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-navy font-bold text-lg mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Select Your Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Regulation */}
            <div>
              <label className="block text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Regulation</label>
              <select
                value={selectedRegulation}
                onChange={(e) => setSelectedRegulation(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-navy font-semibold text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-surface"
              >
                {REGULATIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Branch */}
            <div>
              <label className="block text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Branch / Department</label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-navy font-semibold text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-surface"
              >
                {BTECH_BRANCHES.map((b) => (
                  <option key={b.code} value={b.name}>{b.name} ({b.code})</option>
                ))}
              </select>
            </div>

            {/* Semester */}
            <div>
              <label className="block text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-navy font-semibold text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-surface"
              >
                {SEMESTERS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Semester Tabs */}
        <div className="flex flex-wrap gap-2">
          {SEMESTERS.map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-4 py-2 rounded-md font-bold text-sm transition-all duration-200 ${
                selectedSemester === sem
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-navy/60 border border-gray-200 hover:border-navy/30'
              }`}
            >
              {sem.replace('Semester ', 'Sem ')}
            </button>
          ))}
        </div>

        {/* Results Table */}
        <section className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-navy px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="text-white font-bold text-lg">{selectedBranch}</h3>
              <p className="text-white/60 text-sm">{selectedRegulation} | {selectedSemester}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gold font-bold text-sm">Total Credits: {totalCredits}</span>
              <button className="bg-gold text-navy-deep font-bold text-xs px-4 py-2 rounded hover:bg-gold/90 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Full Syllabus (PDF)
              </button>
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-bold text-navy text-sm">Subject Code</th>
                <th className="p-4 font-bold text-navy text-sm">Subject Name</th>
                <th className="p-4 font-bold text-navy text-sm text-center">Credits</th>
                <th className="p-4 font-bold text-navy text-sm text-center">Type</th>
                <th className="p-4 font-bold text-navy text-sm text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                  <td className="p-4">
                    <span className="font-mono font-bold text-navy text-sm bg-surface px-2 py-1 rounded">{subject.code}</span>
                  </td>
                  <td className="p-4 font-semibold text-gray-800 text-sm">{subject.name}</td>
                  <td className="p-4 text-center">
                    <span className="font-bold text-navy">{subject.credits}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      subject.type === 'Theory' ? 'bg-blue-50 text-blue-700' :
                      subject.type === 'Lab' ? 'bg-green-50 text-green-700' :
                      subject.type === 'Elective' ? 'bg-purple-50 text-purple-700' :
                      subject.type === 'Mandatory' ? 'bg-gray-100 text-gray-500' :
                      'bg-gold/10 text-gold'
                    }`}>
                      {subject.type}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-gold hover:text-navy transition-colors p-1" title="Download PDF">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Info Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex items-start gap-4">
          <svg className="w-6 h-6 text-navy shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-sm text-gray-600">
            <p className="font-bold text-navy mb-1">Note for Students</p>
            <p>Syllabus documents are aligned with JNTUK / Autonomous regulations. For any discrepancies, refer to the official university website or contact your respective Head of Department. Updated syllabi will be uploaded at the beginning of each academic year.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
