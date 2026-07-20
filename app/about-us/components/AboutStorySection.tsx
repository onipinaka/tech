import React from 'react';
import styles from './AboutStorySection.module.css';

export default function AboutStorySection() {
  return (
    <section id="our-story" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            {/* Using lastpp.png as the placeholder for the technician image */}
            <img src="/lastpp.webp" alt="Technician repairing a device" className={styles.storyImage} />
          </div>
        </div>
        
        <div className={styles.textCol}>
          <div className={styles.badge}>Our Story</div>
          <h2 className={styles.title}>From a Small Idea to a Trusted Service Brand</h2>
          
          <div className={styles.content}>
            <p>
              Raion Technologies started with a simple goal &ndash; to provide honest, high-quality and affordable tech support to everyone. What began as a small local service has now grown into a trusted partner for homes, students and businesses.
            </p>
            <p>
              Today, we help thousands of customers keep their laptops and printers running smoothly, with fast service, genuine parts and a team that truly cares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
