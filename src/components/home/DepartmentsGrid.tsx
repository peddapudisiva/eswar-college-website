import { Link } from 'react-router-dom';
import { BTECH_BRANCHES } from '../../lib/constants';

import React from 'react';

const DEPT_ICONS: Record<string, React.ReactNode> = {
  car: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M5 17a2 2 0 01-2-2v-4l2-5h14l2 5v4a2 2 0 01-2 2M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14M9 9h.01M9 13h.01M9 17h.01M17 9h.01M17 13h.01M17 17h.01" />
    </svg>
  ),
  cpu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" /><path d="M9 21h6M10 17v4M14 17v4" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  palette: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  radio: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0" /><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
};

export default function DepartmentsGrid() {
  return (
    <section className="bg-surface py-20">
      <div className="container-site">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Departments</div>
          <h2 className="text-navy font-bold" style={{ fontSize: '42px', lineHeight: '1.1' }}>
            Academic Departments
          </h2>
          <p className="text-navy/60 mt-3 max-w-xl mx-auto" style={{ fontSize: '15px' }}>
            8 undergraduate programs with a total intake of 498 B.Tech seats
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BTECH_BRANCHES.map((branch) => (
            <Link
              to="/departments"
              key={branch.code}
              className="group relative bg-white flex flex-col overflow-hidden"
              style={{
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 16px 40px rgba(0, 74, 153, 0.12)';
                el.style.borderColor = 'rgba(253, 185, 19, 0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                el.style.borderColor = '#e5e7eb';
              }}
            >
              {/* Image Header */}
              <div className="h-36 overflow-hidden relative bg-gray-100">
                {/* @ts-ignore - added image property to BTECH_BRANCHES */}
                <img src={branch.image} alt={branch.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Icon overlaid on image */}
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white shadow-md rounded flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {DEPT_ICONS[branch.icon]}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span
                    className="inline-block text-gold/80 font-bold mb-2 group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: '11px', letterSpacing: '1px' }}
                  >
                    {branch.code}
                  </span>
                  <h3
                    className="text-navy font-bold mb-2 group-hover:text-navy-deep transition-colors duration-300"
                    style={{ fontSize: '16px', lineHeight: '1.35' }}
                  >
                    {branch.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-500 font-medium" style={{ fontSize: '13px' }}>
                    {branch.intake} Seats
                  </p>
                  
                  {/* Arrow on hover */}
                  <div className="text-gray-300 group-hover:text-gold transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Gold bottom border on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Also Offered */}
        <div className="mt-8 text-center">
          <p className="text-navy/60" style={{ fontSize: '13.5px' }}>
            <span className="font-bold text-navy">Also Offered:</span>{' '}
            MBA (48 seats) | M.Tech (CSE, CAD/CAM, VLSI, Structural) | Diploma Programs
          </p>
        </div>
      </div>
    </section>
  );
}
