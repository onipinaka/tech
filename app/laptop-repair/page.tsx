import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LRHeroSection from './components/LRHeroSection';
import LRServicesSection from './components/LRServicesSection';
import LRBookingForm from './components/LRBookingForm';

export const metadata = {
  title: 'Laptop Repair Services | PrintTech',
  description: 'Fast, reliable and affordable laptop repair services at home or office. Our experts fix it right the first time.',
};

export default function LaptopRepairPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <LRHeroSection />
      <LRServicesSection />
      <Footer />
    </main>
  );
}
