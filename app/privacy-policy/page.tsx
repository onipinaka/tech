import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/LegalPage.module.css';

export const metadata = {
  title: 'Privacy Policy | Raion Technologies',
  description: 'Privacy Policy for Raion Technologies services.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.content}>
            <p>Last updated: July 2026</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Raion Technologies. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. The Data We Collect About You</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            </ul>

            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at support@raiontechnologies.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
