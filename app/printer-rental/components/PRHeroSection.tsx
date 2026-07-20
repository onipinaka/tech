import React from 'react';
import Link from 'next/link';
import styles from './PRHeroSection.module.css';

export default function PRHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.breadcrumb}>
            Home &gt; <span className={styles.breadcrumbActive}>Printer Rental</span>
          </div>
          
          <h1 className={styles.title}>
            Smart <span className={styles.textBlue}>Printer Rental</span> Solutions for Every Need
          </h1>
          
          <p className={styles.subtitle}>
            High-performance printers, zero upfront cost. Flexible plans with service, supplies & support included.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapRed}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  <line x1="2" y1="2" x2="22" y2="22" stroke="red" />
                </svg>
              </div>
              <div className={styles.featureTextWrap}>
                <h4 className={styles.featureTitle}>No Upfront Cost</h4>
                <p className={styles.featureDesc}>Affordable monthly plans</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapRed}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className={styles.featureTextWrap}>
                <h4 className={styles.featureTitle}>All-Inclusive</h4>
                <p className={styles.featureDesc}>Service, toner & spare parts</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapRed}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <div className={styles.featureTextWrap}>
                <h4 className={styles.featureTitle}>Hassle-Free Support</h4>
                <p className={styles.featureDesc}>Quick response & on-site help</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="#plans" style={{ textDecoration: 'none' }}>
              <button className={styles.primaryBtn}>
                Explore Plans
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
            <Link href="/book?service=printer&plan=rental&notes=I%20would%20like%20to%20get%20a%20free%20quote%20for%20printer%20rental." style={{ textDecoration: 'none' }}>
              <button className={styles.secondaryBtn}>
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.imageBg}>
            <img src="/printer copy.png" alt="Printer" className={styles.printerImg} />

            <div className={`${styles.floatingBadge} ${styles.badge1}`}>
              <div className={styles.badgeIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <span className={styles.badgeTitle}>High Performance</span>
                <span className={styles.badgeDesc}>Fast & reliable printing</span>
              </div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badge2}`}>
              <div className={styles.badgeIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <span className={styles.badgeTitle}>Flexible Plans</span>
                <span className={styles.badgeDesc}>Scale as you grow</span>
              </div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badge3}`}>
              <div className={styles.badgeIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <span className={styles.badgeTitle}>Managed Service</span>
                <span className={styles.badgeDesc}>We handle everything</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
