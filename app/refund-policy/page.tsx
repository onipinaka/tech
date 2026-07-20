import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/LegalPage.module.css';

export const metadata = {
  title: 'Refund Policy | Raion Technologies',
  description: 'Refund Policy for Raion Technologies services.',
};

export default function RefundPolicy() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Refund Policy</h1>
          <div className={styles.content}>
            <p>Last updated: July 2026</p>

            <h2>1. General Refund Terms</h2>
            <p>
              At Raion Technologies, we strive to ensure absolute customer satisfaction with our rentals and repair services. If you are not entirely satisfied with your purchase or service, we're here to help.
            </p>

            <h2>2. Repair Services</h2>
            <p>
              For our laptop and printer repair services:
            </p>
            <ul>
              <li>If the device is not repaired successfully, you will not be charged for the repair service, apart from a standard diagnosis fee (if explicitly agreed upon prior).</li>
              <li>If the same issue reoccurs within our standard 30-day warranty period, we will attempt to fix it again free of charge. If unfixable, a full refund of the repair fee will be issued.</li>
              <li>Hardware parts replaced are subject to the manufacturer's warranty and cannot be refunded once installed and accepted.</li>
            </ul>

            <h2>3. Rental Services</h2>
            <p>
              For printer and equipment rentals:
            </p>
            <ul>
              <li>Security deposits are fully refundable at the end of the rental term, provided the equipment is returned in its original working condition (normal wear and tear excepted).</li>
              <li>If the equipment malfunctions within the first 48 hours and we cannot provide a replacement, a full refund for that month's rent will be issued.</li>
              <li>Mid-month cancellations do not qualify for a prorated refund of that month's rent.</li>
            </ul>

            <h2>4. Processing Refunds</h2>
            <p>
              Once your refund is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions on how to return your item or request a refund, contact us at support@raiontechnologies.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
