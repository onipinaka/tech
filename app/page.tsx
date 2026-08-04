import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import HomeServiceSection from './components/HomeServiceSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import MobilePopup from './components/MobilePopup';
import AddReviewSection from './components/AddReviewSection';

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <HomeServiceSection />
      <TestimonialsSection />
      <AddReviewSection />
      <Footer />
      <MobilePopup />
    </main>
  );
}
