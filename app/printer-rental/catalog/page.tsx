import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { createClient } from '../../../utils/supabase/server';
import styles from './Catalog.module.css';

export const metadata = {
  title: 'Printer Rental Catalog | Raion Technologies',
  description: 'Browse our extensive catalog of high-performance printers available for rent with flexible plans.',
};

export default async function CatalogPage() {
  const supabase = await createClient();
  
  // Fetch all printers
  const { data: printers } = await supabase
    .from('printers')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <h1 className={styles.title}>Printer Rental Catalog</h1>
        <p className={styles.subtitle}>
          Find the perfect printer for your business needs. All rentals include maintenance, supplies, and support.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {printers && printers.length > 0 ? (
            printers.map((printer) => (
              <Link href={`/printer-rental/catalog/${printer.id}`} key={printer.id} className={styles.card}>
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

                  <div className={styles.viewDetails}>
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              No printers available in the catalog at the moment.
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
