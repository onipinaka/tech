import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookHeroSection from './components/BookHeroSection';
import BookFormSection from './components/BookFormSection';
import BookFeaturesSection from './components/BookFeaturesSection';

export const metadata = {
  title: 'Book a Service | PrintTech',
  description: 'Book printer or laptop repair services with PrintTech. Quick response and trusted experts.',
};

export default function BookPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <BookHeroSection />
      <Suspense fallback={<div>Loading form...</div>}>
        <BookFormSection />
      </Suspense>
      <BookFeaturesSection />
      <Footer />
    </main>
  );
}
