import HeroSection from '../../components/home/HeroSection';
import StatsBar from '../../components/home/StatsBar';
import AboutSection from '../../components/home/AboutSection';
import DepartmentsGrid from '../../components/home/DepartmentsGrid';
import AccreditationBand from '../../components/home/AccreditationBand';
import PlacementsSection from '../../components/home/PlacementsSection';
import VirtualTourPreview from '../../components/home/VirtualTourPreview';
import NewsEventsSection from '../../components/home/NewsEventsSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import ApplyBanner from '../../components/home/ApplyBanner';
import ContactStrip from '../../components/home/ContactStrip';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <DepartmentsGrid />
      <AccreditationBand />
      <PlacementsSection />
      <VirtualTourPreview />
      <NewsEventsSection />
      <TestimonialsSection />
      <ApplyBanner />
      <ContactStrip />
    </>
  );
}
