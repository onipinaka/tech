import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
    </main>
  );
}
