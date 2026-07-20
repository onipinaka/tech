import React from 'react';
import Link from 'next/link';
import styles from './AboutCTASection.module.css';

export default function AboutCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.textWrap}>
            <h2 className={styles.title}>Let's Keep Your Technology Running</h2>
            <p className={styles.subtitle}>Book a service today and experience the Raion Technologies difference.</p>
          </div>
          <Link href="/book?service=other&notes=I%20would%20like%20to%20book%20a%20service." style={{ textDecoration: 'none' }}>
            <button className={styles.primaryBtn}>
              Book a Service
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
