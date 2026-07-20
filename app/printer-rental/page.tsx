import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PRHeroSection from './components/PRHeroSection';
import PRWhyChoose from './components/PRWhyChoose';
import PRPlans from './components/PRPlans';
import PRIndustries from './components/PRIndustries';
import PRCTA from './components/PRCTA';

export const metadata = {
  title: 'Printer Rental Solutions | PrintTech',
  description: 'High-performance printers, zero upfront cost. Flexible plans with service, supplies & support included.',
};

export default function PrinterRentalPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <PRHeroSection />
      <PRWhyChoose />
      <PRPlans />
      <PRIndustries />
      <PRCTA />
      <Footer />
    </main>
  );
}
