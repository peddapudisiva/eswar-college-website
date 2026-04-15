import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Ticker from './Ticker';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      <Ticker />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* SRM-style floating side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
        <Link
          to="/news"
          className="bg-gold text-navy-deep font-bold px-3 py-6 hover:bg-gold-dark transition-colors duration-200"
          style={{
            fontSize: '11px',
            letterSpacing: '1px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            borderRadius: '8px 0 0 0',
          }}
        >
          Announcements
        </Link>
        <Link
          to="/admissions"
          className="bg-gold-dark text-white font-bold px-3 py-6 hover:bg-navy transition-colors duration-200"
          style={{
            fontSize: '11px',
            letterSpacing: '1px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            borderRadius: '0 0 0 8px',
          }}
        >
          Admission Enquiry
        </Link>
      </div>
    </div>
  );
}
