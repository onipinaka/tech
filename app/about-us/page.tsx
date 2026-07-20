import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHeroSection from './components/AboutHeroSection';
import AboutReviewsSection from './components/AboutReviewsSection';
import AboutStorySection from './components/AboutStorySection';
import AboutWhyChooseSection from './components/AboutWhyChooseSection';
import AboutValuesSection from './components/AboutValuesSection';
import AboutCTASection from './components/AboutCTASection';

export const metadata = {
  title: 'About Us | PrintTech',
  description: 'Learn more about PrintTech and our commitment to reliable printer and laptop services.',
};

export default function AboutUsPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <AboutHeroSection />
      <AboutReviewsSection />
      <AboutStorySection />
      <AboutWhyChooseSection />
      <AboutValuesSection />
      <AboutCTASection />
      <Footer />
    </main>
  );
}
