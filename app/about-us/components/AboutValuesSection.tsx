import React from 'react';
import Link from 'next/link';
import styles from './AboutValuesSection.module.css';

export default function AboutValuesSection() {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
      title: 'Integrity',
      desc: 'Honest advice and transparent service.',
      colorClass: styles.iconPink
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: 'Quality',
      desc: 'No compromise on workmanship.',
      colorClass: styles.iconBlue
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Customer First',
      desc: 'Your satisfaction is our success.',
      colorClass: styles.iconPurple
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <div className={styles.badge}>Our Values</div>
          <h2 className={styles.title}>What Drives Us</h2>
          <p className={styles.content}>
            We are committed to delivering technology services with integrity, quality and care. Our values guide everything we do &mdash; from the smallest repair to long-term business solutions.
          </p>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button className={styles.primaryBtn}>
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((val, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={`${styles.iconWrap} ${val.colorClass}`}>
                {val.icon}
              </div>
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDesc}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
