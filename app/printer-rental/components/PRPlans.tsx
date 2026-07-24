import React from 'react';
import Link from 'next/link';
import styles from './PRPlans.module.css';
import { createClient } from '@/utils/supabase/server';

export default async function PRPlans() {
  const supabase = await createClient();
  const { data: plans = [] } = await supabase
    .from('pricing_plans')
    .select('*')
    .eq('section', 'home') // Reusing the same plans as the home page
    .order('order_index', { ascending: true });

  const displayPlans = plans && plans.length > 0 ? plans : [];

  return (
    <section id="plans" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>FLEXIBLE PLANS</div>
          <h2 className={styles.title}>Our Featured Printer Plans</h2>
          <p className={styles.subtitle}>Choose a plan that fits your business printing needs.</p>
        </div>

        <div className={styles.cardsGrid}>
          {displayPlans.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.is_popular ? styles.popularCard : ''}`}>
              {plan.is_popular && (
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
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={styles.checkIcon}>
                      <path d="M4 10l4 4 8-8" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={`/book?service=printer&plan=${plan.id}`} style={{ textDecoration: 'none' }}>
                <button className={`${styles.btn} ${plan.is_popular ? styles.btnSolid : styles.btnOutline}`}>
                  {plan.button_text}
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
