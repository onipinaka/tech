import React from 'react';
import Link from 'next/link';
import { createClient } from '../../../utils/supabase/server';
import styles from './PRPrintersSection.module.css';

// Using Next.js image is good but since URL can be external or Supabase Storage, we might just use img tag for simplicity, 
// or next/image if we configure domains. For now standard img works well as per plan.

export default async function PRPrintersSection() {
  const supabase = await createClient();
  
  // Fetch up to 3 featured printers, falling back to any 3 printers if none are featured
  let { data: printers } = await supabase
    .from('printers')
    .select('*')
    .eq('is_featured', true)
    .order('created_at', { ascending: false })
    .limit(3);
    
  if (!printers || printers.length === 0) {
    const { data: backupPrinters } = await supabase
      .from('printers')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);
    printers = backupPrinters;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>FEATURED PRINTERS</div>
          <h2 className={styles.title}>Top Choices for Your Office</h2>
          <p className={styles.subtitle}>Explore our most popular rental options designed to handle your daily printing needs with ease.</p>
        </div>

        <div className={styles.grid}>
          {printers && printers.length > 0 ? (
            printers.map((printer) => (
              <Link href={`/printer-rental/catalog/${printer.id}`} key={printer.id} className={styles.card} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.imageWrapper}>
                  {printer.image_url ? (
                    <img src={printer.image_url} alt={printer.name} className={styles.image} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                      No image
                    </div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{printer.name}</h3>
                  <div 
                    className={styles.cardDesc} 
                    dangerouslySetInnerHTML={{ __html: printer.description || '' }} 
                  />
                  
                  {printer.monthly_price && (
                    <div className={styles.price}>
                      ₹{printer.monthly_price} <span className={styles.priceUnit}>/ month</span>
                    </div>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              No printers available at the moment.
            </div>
          )}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/printer-rental/catalog" className={styles.viewAllBtn}>
            View All Printers
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
