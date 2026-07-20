'use client';
import React, { useState } from 'react';
import styles from './LRBookingForm.module.css';

export default function LRBookingForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAjaxSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/ajax/onipinak@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>BOOK A SERVICE</div>
          <h2 className={styles.title}>Fill in the details & we'll take care of the rest.</h2>
          <p className={styles.subtitle}>Our team will reach you at your convenience.</p>
        </div>

        <div className={styles.formCard}>
          <form onSubmit={handleAjaxSubmit} className={styles.formGrid}>
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
              <input type="tel" name="phone" placeholder="Enter your phone number" required />
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
              {submitStatus === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center', marginBottom: '8px' }}>
                  {errorMessage}
                </div>
              )}
              {submitStatus === 'success' && (
                <div style={{ color: '#15803d', backgroundColor: '#dcfce3', padding: '12px', borderRadius: '6px', fontSize: '14px', textAlign: 'center', marginBottom: '12px', border: '1px solid #bbf7d0' }}>
                  ✅ <strong>Success!</strong> Your request has been sent successfully. We will get back to you shortly.
                </div>
              )}
              <button type="submit" className={styles.submitBtn} disabled={submitStatus === 'submitting' || submitStatus === 'success'}>
                {submitStatus === 'submitting' ? 'Submitting...' : submitStatus === 'success' ? '✅ Request Sent!' : submitStatus === 'error' ? '❌ Error' : (
                  <>
                    Submit Request
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
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
