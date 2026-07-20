import React from 'react';
import styles from './LRServicesSection.module.css';

export default function LRServicesSection() {
  const services = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M4 11L10 5M20 11L14 5"></path>
        </svg>
      ),
      title: 'Screen Repair',
      desc: 'Cracked, broken or flickering screen? We fix all types of laptop display issues.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
          <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M10 14h.01M14 14h.01M18 14h.01"></path>
        </svg>
      ),
      title: 'Keyboard Repair',
      desc: 'Keys not working, stuck or broken? We repair or replace keyboard efficiently.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
          <rect x="5" y="10" width="8" height="4"></rect>
        </svg>
      ),
      title: 'Battery Replacement',
      desc: 'Battery not charging or draining fast? Get long-lasting battery replacement.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 14.5a2 2 0 1 0-4 0V20a2 2 0 0 0 4 0v-5.5z"></path>
          <path d="M12 2v10.5"></path>
          <path d="M12 5.5v3"></path>
        </svg>
      ),
      title: 'Overheating Fix',
      desc: 'Laptop heating up or shutting down? We fix overheating problems.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
          <line x1="1" y1="1" x2="3" y2="3"></line>
          <line x1="21" y1="21" x2="23" y2="23"></line>
        </svg>
      ),
      title: 'Slow Performance',
      desc: 'Slow boot, lagging or freezing? We optimize your laptop for better performance.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M12 13V15"></path>
        </svg>
      ),
      title: 'Software Issues',
      desc: 'OS errors, crashes or blue screen? We fix all software related problems.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      title: 'Virus & Malware Removal',
      desc: 'Remove viruses, malware and protect your laptop & data from threats.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M12 18v-6"></path>
          <path d="M9 15l3-3 3 3"></path>
        </svg>
      ),
      title: 'Data Recovery',
      desc: 'Accidentally deleted important files? We recover your valuable data.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      title: 'Hardware Repair',
      desc: "Motherboard issues, RAM, HDD/SSD problems & more. We've got you covered."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>OUR SERVICES</div>
          <h2 className={styles.title}>Laptop Repair Services We Offer</h2>
          <p className={styles.subtitle}>No matter the problem, our experts are here to help.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrap}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
