import React from 'react';
import styles from './ServicesSection.module.css';

const SERVICES = [
  {
    id: '01',
    title: 'Printer Rental',
    description: 'High-quality printers for offices and businesses. Flexible plans that fit your needs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 12h16v6h4v10H4V18h4v-6z" fill="#3B82F6" />
        <path d="M10 14h12v4H10v-4z" fill="#93C5FD" />
        <rect x="12" y="22" width="8" height="2" fill="#EFF6FF" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Pay Per Print',
    description: 'Pay only for what you print. Cost-effective and transparent printing solutions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="16" height="20" rx="2" fill="#E2E8F0" />
        <rect x="10" y="8" width="8" height="2" fill="#CBD5E1" />
        <rect x="10" y="12" width="8" height="2" fill="#CBD5E1" />
        <rect x="10" y="16" width="6" height="2" fill="#CBD5E1" />
        <circle cx="22" cy="22" r="8" fill="#1D4ED8" />
        <path d="M19 22h6m-4-3l-2 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Laptop Repair',
    description: 'Expert repair services for all laptop brands. Fast, reliable and hassle-free.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="14" rx="2" fill="#1E293B" />
        <rect x="6" y="10" width="20" height="10" fill="#3B82F6" />
        <path d="M2 24h28l-2 2H4l-2-2z" fill="#94A3B8" />
        <circle cx="16" cy="15" r="3" stroke="#fff" strokeWidth="1.5" />
        <path d="M16 12v1M16 17v1M13 15h1M18 15h1" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Laptop Parts',
    description: 'Genuine laptop parts and accessories with warranty and quality assurance.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="8" width="16" height="16" rx="2" fill="#475569" />
        <rect x="11" y="11" width="10" height="10" rx="1" fill="#3B82F6" />
        <path d="M6 12h2M6 16h2M6 20h2M24 12h2M24 16h2M24 20h2M12 6v2M16 6v2M20 6v2M12 24v2M16 24v2M20 24v2" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Printer Repair',
    description: 'Professional repair and maintenance for all types of printers.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 22l6-6-4-4-6 6 4 4z" fill="#94A3B8" />
        <path d="M22 10l-6 6 4 4 6-6-4-4z" fill="#3B82F6" />
        <circle cx="20" cy="12" r="1.5" fill="#fff" />
        <circle cx="12" cy="20" r="1.5" fill="#1E293B" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Cartridge Replacement',
    description: 'Cartridge refill and replacement services at competitive prices.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6C16 6 10 14 10 18a6 6 0 0012 0c0-4-6-12-6-12z" fill="#2563EB" />
        <circle cx="11" cy="26" r="2.5" fill="#0EA5E9" />
        <circle cx="17.5" cy="26" r="2.5" fill="#E11D48" />
        <circle cx="24" cy="26" r="2.5" fill="#FBBF24" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      {/* Background Decorative Elements */}
      <div className={styles.bgDecorations} aria-hidden="true">
        <div className={styles.circleLines}></div>
        <div className={styles.dotsLeft}></div>
        <div className={styles.dotsRight}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            OUR SERVICES
            <span className={styles.badgeDot}></span>
          </div>
          <h2 className={styles.title}>Complete Solutions for Every Need</h2>
          <p className={styles.subtitle}>
            From printer rentals to IT support, we provide end-to-end solutions
            designed for homes, professionals and growing businesses.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.card}>
              <span className={styles.cardNumber}>{service.id}</span>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <div className={styles.divider}></div>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
