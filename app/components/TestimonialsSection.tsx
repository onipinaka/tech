import React from 'react';
import styles from './TestimonialsSection.module.css';

const REVIEWS = [
  {
    id: 1,
    rating: 5.0,
    text: 'Excellent service! The technician was very professional and fixed our printer the same day.',
    author: {
      name: 'Rahul Mehta',
      role: 'Office Manager, Pune',
      image: 'https://i.pravatar.cc/100?img=5'
    }
  },
  {
    id: 2,
    rating: 5.0,
    text: 'Very quick response and reliable service. Our monthly printer rental has been smooth and hassle-free.',
    author: {
      name: 'Neha Sharma',
      role: 'HR, Mumbai',
      image: 'https://i.pravatar.cc/100?img=12'
    }
  },
  {
    id: 3,
    rating: 5.0,
    text: 'Great support and maintenance service. Highly recommended for businesses.',
    author: {
      name: 'Vikram Patil',
      role: 'Business Owner, Nashik',
      image: 'https://i.pravatar.cc/100?img=11'
    }
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.badgeIcon}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            CUSTOMER REVIEWS
          </div>
          <h2 className={styles.title}>Facing an Issue? We're Here to Help.</h2>
          <p className={styles.subtitle}>
            Real reviews from our happy customers who trust our service.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={styles.navBtn} aria-label="Previous review">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.cardsContainer}>
            {REVIEWS.map((review) => (
              <div key={review.id} className={styles.card}>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2563EB" className={styles.star}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className={styles.ratingValue}>{review.rating.toFixed(1)}</span>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatarPlaceholder}>
                    {/* Placeholder avatar circle with initials if image not found */}
                    <span className={styles.initials}>{review.author.name.charAt(0)}</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{review.author.name}</h4>
                    <p className={styles.authorRole}>{review.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.navBtn} aria-label="Next review">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
