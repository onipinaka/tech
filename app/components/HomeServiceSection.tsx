import React from 'react';
import Link from 'next/link';
import styles from './HomeServiceSection.module.css';

export default function HomeServiceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.badgeIcon}>
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            WE COME TO YOU
          </div>
          
          <h2 className={styles.title}>We Come to You</h2>
          
          <p className={styles.description}>
            Expert service at your doorstep. Our technicians visit your home or office to ensure quick, hassle-free support.
          </p>

          <ul className={styles.featureList}>
            {[
              'On-site Repair & Support',
              'Quick Response',
              'Trusted Technicians',
              'No Extra Charges'
            ].map((feature, i) => (
              <li key={i} className={styles.featureItem}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className={styles.checkIcon}>
                  <circle cx="10" cy="10" r="10" fill="#2563EB" />
                  <path d="M6 10l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link href="/book?service=other&notes=I%20would%20like%20to%20book%20a%20home%20service%20visit." style={{ textDecoration: 'none' }}>
              <button className={styles.primaryBtn}>
                Book Home Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/lastpp.png" alt="Technician helping customer" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
