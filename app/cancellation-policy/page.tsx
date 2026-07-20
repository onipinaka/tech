import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/LegalPage.module.css';

export const metadata = {
  title: 'Cancellation Policy | Raion Technologies',
  description: 'Cancellation Policy for Raion Technologies services.',
};

export default function CancellationPolicy() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cancellation Policy</h1>
          <div className={styles.content}>
            <p>Last updated: July 2026</p>

            <h2>1. Service Appointments</h2>
            <p>
              We understand that plans can change. If you need to cancel or reschedule a repair or maintenance appointment, we kindly ask that you provide us with at least 24 hours notice.
            </p>
            <ul>
              <li><strong>Cancellations with 24+ hours notice:</strong> No penalty or cancellation fee.</li>
              <li><strong>Late Cancellations (Under 24 hours):</strong> May be subject to a nominal cancellation fee to cover the reserved time slot.</li>
              <li><strong>No-Shows:</strong> If our technician arrives at the scheduled location and no one is available, a call-out fee will be charged.</li>
            </ul>

            <h2>2. Rental Subscriptions</h2>
            <p>
              For ongoing printer rental agreements:
            </p>
            <ul>
              <li>You may cancel your monthly rental subscription at any time by providing a 15-day written notice before your next billing cycle.</li>
              <li>Upon cancellation, we will arrange a time to collect the equipment.</li>
              <li>Your security deposit will be refunded in full once the equipment has been collected and inspected for damages.</li>
            </ul>

            <h2>3. How to Cancel</h2>
            <p>
              To cancel an appointment or rental agreement, please contact us immediately:
            </p>
            <ul>
              <li><strong>Phone:</strong> +91 96237 89414</li>
              <li><strong>Email:</strong> support@raiontechnologies.com</li>
            </ul>
            <p>
              Please include your name, contact information, and appointment/rental details to expedite the cancellation process.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
