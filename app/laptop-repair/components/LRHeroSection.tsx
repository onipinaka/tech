import React from 'react';
import Link from 'next/link';
import styles from './LRHeroSection.module.css';

export default function LRHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            Expert Laptop Repair <br/> at <span className={styles.textBlue}>Your Doorstep</span>
          </h1>
          
          <p className={styles.subtitle}>
            Fast, reliable and affordable laptop repair services at home or office. Our experts fix it right the first time.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className={styles.featureTitle}>Skilled Technicians</h4>
              <p className={styles.featureDesc}>Certified & experienced professionals</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 className={styles.featureTitle}>Quick Turnaround</h4>
              <p className={styles.featureDesc}>Most repairs completed on the same day</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 12 15 17 9"></polyline>
                </svg>
              </div>
              <h4 className={styles.featureTitle}>Genuine Parts</h4>
              <p className={styles.featureDesc}>We use only genuine and high-quality parts</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 17h4V5H2v12h3"></path>
                  <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"></path>
                  <path d="M14 17h1"></path>
                  <circle cx="7.5" cy="17.5" r="2.5"></circle>
                  <circle cx="17.5" cy="17.5" r="2.5"></circle>
                </svg>
              </div>
              <h4 className={styles.featureTitle}>On-site Service</h4>
              <p className={styles.featureDesc}>We come to you, anywhere!</p>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/book?service=laptop&notes=I%20would%20like%20to%20book%20a%20laptop%20repair%20service." style={{ textDecoration: 'none' }}>
              <button className={styles.primaryBtn}>
                Book a Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
            <a href="tel:+919623789414" style={{ textDecoration: 'none' }}>
              <button className={styles.secondaryBtn}>
                Call Us Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.imageBg}>
            <img src="/laptop_repair_tech_man_exact.png" alt="Laptop Repair Technician" className={styles.laptopImg} />

            <div className={styles.warrantyBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.warrantyIcon}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 12 15 17 9"></polyline>
              </svg>
              <span>Upto 90 Days Warranty on All Repairs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
