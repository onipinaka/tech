'use client';
import React, { useState } from 'react';
import styles from './LRBookingForm.module.css';

export default function LRBookingForm() {
  const [siteUrl, setSiteUrl] = useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setSiteUrl(window.location.origin + '/thank-you');
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>BOOK A SERVICE</div>
          <h2 className={styles.title}>Fill in the details & we'll take care of the rest.</h2>
          <p className={styles.subtitle}>Our team will reach you at your convenience.</p>
        </div>

        <div className={styles.formCard}>
          <form action="https://formsubmit.co/support@raiontechnologies.com" method="POST" className={styles.formGrid}>
            <input type="hidden" name="_next" value={siteUrl} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting Raion Technologies! We have received your repair request and our team will get back to you shortly. Here are our details: Raion Technologies, Pune, +91 96237 89414." />
            <div className={styles.inputGroup}>
              <label>Full Name <span className={styles.required}>*</span></label>
              <input type="text" name="name" placeholder="Enter your full name" required />
            </div>

            <div className={styles.inputGroup}>
              <label>Service Type <span className={styles.required}>*</span></label>
              <select name="serviceType" required defaultValue="">
                <option value="" disabled>Select the service you need</option>
                <option value="screen">Screen Repair</option>
                <option value="battery">Battery Replacement</option>
                <option value="keyboard">Keyboard Repair</option>
                <option value="other">Other Issue</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number <span className={styles.required}>*</span></label>
              <input type="tel" name="phone" placeholder="Enter your phone number" minLength={10} pattern="[0-9]{10,}" title="Please enter at least 10 digits" onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '') }} required />
            </div>

            <div className={styles.inputGroup}>
              <label>Laptop Brand <span className={styles.required}>*</span></label>
              <select name="laptopBrand" required defaultValue="">
                <option value="" disabled>Select your laptop brand</option>
                <option value="hp">HP</option>
                <option value="dell">Dell</option>
                <option value="lenovo">Lenovo</option>
                <option value="apple">Apple / Mac</option>
                <option value="asus">ASUS</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email address" />
            </div>

            <div className={styles.inputGroup}>
              <label>Laptop Model</label>
              <input type="text" name="laptopModel" placeholder="Enter your laptop model" />
            </div>

            <div className={styles.inputGroup}>
              <label>Preferred Date</label>
              <div className={styles.iconInputWrap}>
                <input type="date" name="preferredDate" className={styles.iconInput} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Preferred Time</label>
              <div className={styles.iconInputWrap}>
                <input type="time" name="preferredTime" className={styles.iconInput} />
              </div>
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label>Describe the issue <span className={styles.required}>*</span></label>
              <textarea name="issue" placeholder="Please describe the issue in detail..." rows={4} required></textarea>
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <button type="submit" className={styles.submitBtn}>
                <>
                  Submit Request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              </button>
            </div>
          </form>

          <div className={styles.privacyNote}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Your details are safe with us. We respect your privacy.
          </div>
        </div>
      </div>
    </section>
  );
}
