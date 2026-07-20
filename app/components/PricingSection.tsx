import React from 'react';
import Link from 'next/link';
import styles from './PricingSection.module.css';

const PLANS = [
  {
    id: 'standard',
    name: 'Standard Plan',
    subtitle: 'Perfect for small offices and startups.',
    price: '999',
    features: [
      'Up to 1,000 Pages / month',
      'Black & White Printing',
      'Regular Maintenance',
      'All Consumables Included',
      '24/7 Support',
    ],
    isPopular: false,
  },
  {
    id: 'medium',
    name: 'Medium Plan',
    subtitle: 'Ideal for growing businesses.',
    price: '1,999',
    features: [
      'Up to 2,500 Pages / month',
      'Black & White / Colour',
      'Regular Maintenance',
      'All Consumables Included',
      '24/7 Support',
      'Priority Service',
    ],
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    subtitle: 'Best for high volume printing needs.',
    price: '3,999',
    features: [
      'Up to 6,000 Pages / month',
      'Black & White / Colour',
      'Regular Maintenance',
      'All Consumables Included',
      '24/7 Support',
      'Custom Solutions',
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      {/* Background Printer Image */}
      <div className={styles.printerBgWrapper}>
        {/* Placeholder image tag for the printer */}
        <img src="/printer.png" alt="" className={styles.printerImg} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.badgeIcon}>
              <path d="M6 9V3h12v6M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-10 0v3h8v-3m-8 0h8M8 6h8M6 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            FEATURED PRINTER PLANS
          </div>
          <h2 className={styles.title}>Flexible Plans for Every Business</h2>
          <p className={styles.subtitle}>
            Choose the perfect printer plan that fits your printing needs and budget.<br />
            All plans include setup, maintenance and 24/7 support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className={styles.cardsGrid}>
          {PLANS.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}>
              {plan.isPopular && (
                <div className={styles.popularBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Most Popular
                </div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
                <div className={styles.priceWrap}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>/month</span>
                </div>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={styles.checkIcon}>
                      <circle cx="10" cy="10" r="10" fill="#3B82F6" />
                      <path d="M6 10l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={`/book?service=printer&plan=${plan.id}`} style={{ textDecoration: 'none' }}>
                <button className={`${styles.btn} ${plan.isPopular ? styles.btnSolid : styles.btnOutline}`}>
                  {plan.id === 'enterprise' ? 'Request Quote' : 'Book Now'}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className={styles.bottomStrip}>
          <div className={styles.stripContent}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.stripText}>
              <strong>No Hidden Charges</strong>
              <span className={styles.dot}>•</span>
              <strong>Free Installation</strong>
              <span className={styles.dot}>•</span>
              <strong>Flexible Billing</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
