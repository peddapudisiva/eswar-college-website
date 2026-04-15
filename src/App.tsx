import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import VisionMissionPage from './pages/public/VisionMissionPage';
import ManagementPage from './pages/public/ManagementPage';
import AccreditationsPage from './pages/public/AccreditationsPage';
import SyllabusPage from './pages/public/SyllabusPage';
import DepartmentsPage from './pages/public/DepartmentsPage';
import AdmissionsPage from './pages/public/AdmissionsPage';
import PlacementsPage from './pages/public/PlacementsPage';
import VirtualTourPage from './pages/public/VirtualTourPage';
import NewsPage from './pages/public/NewsPage';
import EventsPage from './pages/public/EventsPage';
import GalleryPage from './pages/public/GalleryPage';
import LibraryPage from './pages/public/LibraryPage';
import PlaceholderPage from './components/common/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/accreditations" element={<AccreditationsPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/virtual-tour" element={<VirtualTourPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/student-clubs" element={<PlaceholderPage title="Student Clubs" description="Explore the various technical and cultural student clubs active on campus." />} />
          <Route path="/grievance-cell" element={<PlaceholderPage title="Grievance Redressal Cell" description="A dedicated portal for submitting and tracking student and staff grievances to ensure a transparent academic environment." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with ESWAR COLLEGE OF ENGINEERING. Visit us at Kesanupalli, Palnadu District, Andhra Pradesh, or call +91 86472 18256." />} />
          <Route path="/results" element={<PlaceholderPage title="Exam Results" description="Check your examination results and download mark sheets. Results published as per JNTUK examination schedule." />} />
          <Route path="/exam-timetable" element={<PlaceholderPage title="Academic Calendar" description="View the academic calendar and examination schedule for the current semester." />} />
          <Route path="/verify-certificate" element={<PlaceholderPage title="Verify Certificate" description="Verify the authenticity of certificates issued by Eswar College of Engineering." />} />
          <Route path="/alumni/register" element={<PlaceholderPage title="Alumni Network" description="Connect with fellow alumni, register for events, and stay connected with your alma mater." />} />
          <Route path="/login" element={<PlaceholderPage title="Portal Login" description="Login to your Student, Faculty, or Parent portal to access academic information, attendance, and more." />} />
          {/* Research page */}
          <Route path="/research" element={<PlaceholderPage title="Research & Innovation" description="Explore research activities, publications, funded projects, and innovation initiatives at Eswar College of Engineering." />} />
          {/* Catch-all for any unmatched routes */}
          <Route path="*" element={<PlaceholderPage title="Page Not Found" description="The page you are looking for does not exist or is under construction. Please navigate back to the homepage." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
