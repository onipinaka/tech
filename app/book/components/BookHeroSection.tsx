import React from 'react';
import styles from './BookHeroSection.module.css';

export default function BookHeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Book a <span className={styles.textBlue}>Service</span>
          </h1>
          <p className={styles.subtitle}>
            Fill in the details below and our team will reach out to you shortly to confirm your service.
          </p>
        </div>
      </div>
    </section>
  );
}
