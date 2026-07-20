import React from 'react';
import Link from 'next/link';
import styles from './AboutHeroSection.module.css';

export default function AboutHeroSection() {
  const features = [
    "On-site Repair & Support",
    "Quick Response",
    "Trusted Technicians",
    "No Extra Charges"
  ];

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        <div className={styles.contentCol}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            WE COME TO YOU
          </div>
          
          <h1 className={styles.title}>
            We Come to You
          </h1>
          
          <p className={styles.subtitle}>
            Expert service at your doorstep. Our technicians visit your home or office to ensure quick, hassle-free support.
          </p>

          <div className={styles.featuresList}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                {feature}
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/book?service=other&notes=I%20would%20like%20to%20book%20a%20home%20service." style={{ textDecoration: 'none' }}>
              <button className={styles.primaryBtn}>
                Book Home Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
            <Link href="#our-story" style={{ textDecoration: 'none' }}>
              <button className={styles.secondaryBtn}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
