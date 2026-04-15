const ANNOUNCEMENTS = [
  'UGC Autonomous Status Granted to Eswar College of Engineering - 2025',
  'Admissions Open for 2026-27 Academic Year - Apply Now with EAMCET Code: ESWR',
  'Free FDP on AI Tools for Research - Register Today',
  'Mega Job Mela 2025 - 50+ Companies Participating - October 29, 2025',
  'MOU Signed with VIGNAN Technology Business Incubator - October 2025',
  'NAAC B++ Accreditation Achieved - Committed to Academic Excellence',
];

export default function Ticker() {
  const tickerText = ANNOUNCEMENTS.join('    |    ');

  return (
    <div
      className="bg-surface overflow-hidden border-b border-gray-200"
      style={{ height: '38px', marginTop: '2px' }}
    >
      <div className="container-site h-full flex items-center gap-4">
        <span
          className="shrink-0 bg-navy text-white font-bold px-3 py-1"
          style={{ fontSize: '10px', letterSpacing: '1px', borderRadius: '4px' }}
        >
          ANNOUNCEMENTS
        </span>
        <div className="overflow-hidden flex-1">
          <div
            className="whitespace-nowrap inline-flex"
            style={{
              animation: 'ticker-scroll 40s linear infinite',
            }}
          >
            <span
              className="text-navy/70 inline-block"
              style={{ fontSize: '13px', lineHeight: '38px', paddingRight: '100px' }}
            >
              {tickerText}
            </span>
            <span
              className="text-navy/70 inline-block"
              style={{ fontSize: '13px', lineHeight: '38px', paddingRight: '100px' }}
            >
              {tickerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
