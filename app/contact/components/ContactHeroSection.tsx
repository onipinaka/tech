import React from 'react';
import styles from './ContactHeroSection.module.css';

export default function ContactHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentCol}>
          <div className={styles.breadcrumb}>
            Home &gt; <span className={styles.breadcrumbActive}>Contact Us</span>
          </div>
          
          <h1 className={styles.title}>
            We're Here to <br className={styles.mobileBreak} /><span className={styles.textBlue}>Help You!</span>
          </h1>
          
          <p className={styles.subtitle}>
            Have a question, need support, or want to book a service? Reach out to us and our team will get back to you as soon as possible.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureBadge}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <h4 className={styles.featureTitle}>Quick Response</h4>
                <p className={styles.featureDesc}>We reply within a few hours</p>
              </div>
            </div>

            <div className={styles.featureBadge}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 12 15 17 9"></polyline>
                </svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <h4 className={styles.featureTitle}>Trusted Support</h4>
                <p className={styles.featureDesc}>Reliable help from our experts</p>
              </div>
            </div>

            <div className={styles.featureBadge}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <h4 className={styles.featureTitle}>Customer First</h4>
                <p className={styles.featureDesc}>Your satisfaction is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
