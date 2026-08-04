import React from 'react';
import styles from './AboutReviewsSection.module.css';
import { createClient } from '../../../utils/supabase/server';

export default async function AboutReviewsSection() {
  const supabase = await createClient();
  
  const { data: dbReviews, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  const reviews = dbReviews || [];

  const renderStars = () => {
    return (
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2563EB" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            CUSTOMER REVIEWS
          </div>
          <h2 className={styles.title}>Facing an Issue? We're Here to Help.</h2>
          <p className={styles.subtitle}>Real reviews from our happy customers who trust our service.</p>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={styles.navButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className={styles.cardsContainer}>
            {reviews.map((review, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <div className={styles.ratingRow}>
                  {renderStars()}
                  <span className={styles.ratingNumber}>{review.rating.toFixed(1)}</span>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.customerInfo}>
                  <img src={review.img} alt={review.name} className={styles.avatar} />
                  <div className={styles.customerDetails}>
                    <h4 className={styles.customerName}>{review.name}</h4>
                    <p className={styles.customerRole}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.navButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
