import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { createClient } from '../../../../utils/supabase/server';
import { formatGoogleDriveUrl } from '../../../../utils/driveImage';
import styles from './PrinterDetail.module.css';

// Generating metadata dynamically for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const supabase = await createClient();
  const { data: printer } = await supabase
    .from('printers')
    .select('name, description')
    .eq('id', id)
    .single();

  if (!printer) {
    return {
      title: 'Printer Not Found | Raion Technologies',
    };
  }

  return {
    title: `${printer.name} Rental | Raion Technologies`,
    description: printer.description || `Rent the ${printer.name} with our flexible plans.`,
  };
}

export default async function PrinterDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const supabase = await createClient();
  
  // Fetch the specific printer
  const { data: printer } = await supabase
    .from('printers')
    .select('*')
    .eq('id', id)
    .single();

  if (!printer) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.breadcrumb}>
        <Link href="/printer-rental/catalog" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Catalog
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              {printer.image_url ? (
                <img src={formatGoogleDriveUrl(printer.image_url)} alt={printer.name} className={styles.image} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                  No image available
                </div>
              )}
            </div>
          </div>
          
          <div className={styles.detailsSection}>
            <div className={styles.badge}>PRINTER RENTAL</div>
            <h1 className={styles.title}>{printer.name}</h1>
            
            {printer.monthly_price && (
              <div className={styles.price}>
                ₹{printer.monthly_price} <span className={styles.priceUnit}>/ month</span>
              </div>
            )}
            
            <div 
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: printer.description || 'No description provided.' }}
            />
            
            {printer.features && printer.features.length > 0 && (
              <>
                <h3 className={styles.featuresTitle}>Key Features</h3>
                <ul className={styles.featuresList}>
                  {printer.features.map((feature: string, idx: number) => (
                    <li key={idx} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            
            <Link 
              href={`/contact?message=${encodeURIComponent(`I am interested in renting the ${printer.name}.`)}#contact-form`} 
              className={styles.contactBtn}
            >
              Request This Printer
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
