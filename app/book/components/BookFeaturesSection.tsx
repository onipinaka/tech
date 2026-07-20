import React from 'react';
import styles from './BookFeaturesSection.module.css';

export default function BookFeaturesSection() {
  const features = [
    {
      title: 'Trusted Experts',
      desc: 'Certified professionals with years of experience',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M15.4 14.6l3.6 5.4-3.5.5-.5 3.5-5.4-3.6"></path>
          <path d="M8.6 14.6L5 20l3.5-.5.5-3.5 5.4 3.6"></path>
        </svg>
      )
    },
    {
      title: 'Quick Response',
      desc: 'We respond within a few hours',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: 'Transparent Service',
      desc: 'No hidden charges, complete transparency',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: 'Satisfaction Guarantee',
      desc: 'Quality service or your money back*',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 12 15 17 9"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Book with PrintTech?</h2>
        
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.feature}>
              <div className={styles.iconWrap}>
                {feature.icon}
              </div>
              <div className={styles.textWrap}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
