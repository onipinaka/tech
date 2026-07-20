'use client';
import React, { useState } from 'react';
import styles from './ContactContentSection.module.css';

export default function ContactContentSection() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAjaxSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/ajax/viveksharma9451@gmail.com', {
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
        {/* Left Column: Form */}
        <div className={styles.formCol}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>Send Us a Message</h2>
            <p className={styles.subtitle}>Fill out the form below and we'll get back to you.</p>
          </div>

          <form onSubmit={handleAjaxSubmit} className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label>Full Name <span className={styles.required}>*</span></label>
              <input type="text" name="name" placeholder="Enter your full name" required />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number <span className={styles.required}>*</span></label>
              <input type="tel" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label>Email Address <span className={styles.required}>*</span></label>
              <input type="email" name="email" placeholder="Enter your email address" required />
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label>Subject <span className={styles.required}>*</span></label>
              <select name="subject" required defaultValue="">
                <option value="" disabled>Select a subject</option>
                <option value="support">Technical Support</option>
                <option value="booking">Book a Service</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label>Message <span className={styles.required}>*</span></label>
              <textarea name="message" placeholder="Type your message here..." rows={4} required></textarea>
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              {submitStatus === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center', marginBottom: '8px' }}>
                  {errorMessage}
                </div>
              )}
              {submitStatus === 'success' && (
                <div style={{ color: '#15803d', backgroundColor: '#dcfce3', padding: '12px', borderRadius: '6px', fontSize: '14px', textAlign: 'center', marginBottom: '12px', border: '1px solid #bbf7d0' }}>
                  ✅ <strong>Success!</strong> Your message has been sent successfully.
                </div>
              )}
              <button type="submit" className={styles.submitBtn} disabled={submitStatus === 'submitting' || submitStatus === 'success'}>
                {submitStatus === 'submitting' ? 'Sending...' : submitStatus === 'success' ? '✅ Message Sent!' : submitStatus === 'error' ? '❌ Error' : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Message
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
            Your information is safe with us. We respect your privacy.
          </div>
        </div>

        {/* Right Column: Contact Details */}
        <div className={styles.infoCol}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.subtitle}>Choose the best way to reach us.</p>
          </div>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Call Us</h4>
                <p className={styles.infoValue}>+91 96237 89414</p>
                <p className={styles.infoSubValue}>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Email Us</h4>
                <p className={styles.infoValue}>support@raiontechnologies.com</p>
                <p className={styles.infoSubValue}>We reply within a few hours</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Visit Us</h4>
                <p className={styles.infoValue}>Raion Technologies Service Center</p>
                <p className={styles.infoSubValue}>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Working Hours</h4>
                <p className={styles.infoValue}>Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className={styles.infoSubValue}>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
