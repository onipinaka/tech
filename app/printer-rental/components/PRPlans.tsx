import React from 'react';
import Link from 'next/link';
import styles from './PRPlans.module.css';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    subtitle: 'Perfect for small offices & low volume printing.',
    price: '1,999',
    features: [
      'Up to 2,000 Pages/Month',
      'Black & White Printing',
      'Toner & Supplies Included',
      'On-site Support (48 Hrs)',
      'Regular Maintenance',
    ],
    isPopular: false,
    buttonText: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    subtitle: 'Ideal for growing businesses with higher print needs.',
    price: '3,499',
    features: [
      'Up to 5,000 Pages/Month',
      'Black & White Printing',
      'Toner & Supplies Included',
      'On-site Support (24 Hrs)',
      'Regular Maintenance',
      'Free Replacement (If needed)',
    ],
    isPopular: true,
    buttonText: 'Get Started'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    subtitle: 'High volume printing for large teams & enterprises.',
    price: 'Custom',
    features: [
      'Unlimited Pages',
      'Black & White / Color Printing',
      'Toner & Supplies Included',
      'Priority Support (Same Day)',
      'Regular Maintenance',
      'Dedicated Account Manager',
    ],
    isPopular: false,
    buttonText: 'Contact Us'
  },
];

export default function PRPlans() {
  return (
    <section id="plans" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>FLEXIBLE PLANS</div>
          <h2 className={styles.title}>Our Featured Printer Plans</h2>
          <p className={styles.subtitle}>Choose a plan that fits your business printing needs.</p>
        </div>

        <div className={styles.cardsGrid}>
          {PLANS.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}>
              {plan.isPopular && (
                <div className={styles.popularBadge}>MOST POPULAR</div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
                <div className={styles.priceWrap}>
                  {plan.price !== 'Custom' && <span className={styles.currency}>₹</span>}
                  <span className={styles.price}>{plan.price}</span>
                  {plan.price !== 'Custom' && <span className={styles.period}>/month</span>}
                </div>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={styles.checkIcon}>
                      <path d="M4 10l4 4 8-8" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={`/book?service=printer&plan=${plan.id}`} style={{ textDecoration: 'none' }}>
                <button className={`${styles.btn} ${plan.isPopular ? styles.btnSolid : styles.btnOutline}`}>
                  {plan.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.bottomInfo}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span className={styles.infoText}>
            All plans are 100% customizable. Need a custom solution? <a href="#" className={styles.infoLink}>Get in touch with our team.</a>
          </span>
        </div>
      </div>
    </section>
  );
}
