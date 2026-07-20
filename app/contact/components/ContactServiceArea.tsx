import React from 'react';
import styles from './ContactServiceArea.module.css';

export default function ContactServiceArea() {
  const locations = [
    'Pune', 'PCMC', 'Kothrud', 'Hinjewadi',
    'Wakad', 'Baner', 'Aundh', 'And More'
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>Our Service Area</h2>
            <p className={styles.subtitle}>We provide home service across Pune and nearby areas.</p>
            
            <div className={styles.locationsGrid}>
              {locations.map((loc, idx) => (
                <div key={idx} className={styles.locationPill}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 0-18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.mapCol}>
            <div className={styles.mapWrap}>
              <iframe 
                title="Pune Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043135!2d73.7805654!3d18.5246036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
