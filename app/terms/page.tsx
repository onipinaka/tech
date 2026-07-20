import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/LegalPage.module.css';

export const metadata = {
  title: 'Terms & Conditions | PrintTech',
  description: 'Terms and Conditions for PrintTech services.',
};

export default function TermsAndConditions() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <div className={styles.content}>
            <p>Last updated: July 2026</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website and utilizing our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on PrintTech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2>3. Service Provision</h2>
            <p>
              We aim to provide the best possible printer rental, IT support, and repair services. However, all services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>

            <h2>4. Rental Agreements</h2>
            <p>
              When renting equipment from PrintTech, you agree to:
            </p>
            <ul>
              <li>Take reasonable care of the rented equipment.</li>
              <li>Not attempt unauthorized repairs or modifications.</li>
              <li>Return the equipment in good working condition at the end of the rental period.</li>
              <li>Pay all rental fees on time as per the agreed invoice schedule.</li>
            </ul>

            <h2>5. Limitations</h2>
            <p>
              In no event shall PrintTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PrintTech's website or services.
            </p>

            <h2>6. Revisions and Errata</h2>
            <p>
              The materials appearing on PrintTech's website could include technical, typographical, or photographic errors. PrintTech does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
