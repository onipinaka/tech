import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeroSection from './components/ContactHeroSection';
import ContactContentSection from './components/ContactContentSection';
import ContactServiceArea from './components/ContactServiceArea';

export const metadata = {
  title: 'Contact Us | PrintTech',
  description: 'Have a question or want to book a service? Reach out to PrintTech today.',
};

export default function ContactPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <ContactHeroSection />
      <ContactContentSection />
      <ContactServiceArea />
      <Footer />
    </main>
  );
}
