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
          <div className={styles.badge}>About Us</div>
          <h2 className={styles.title}>Your Trusted Technology Service Partner</h2>
          
          <div className={styles.content}>
            <p>
              Raion Technologies India Pvt. Ltd. is a trusted IT solutions company delivering reliable, innovative, and cost-effective technology services to businesses across India. Known as Jinisha Enterprises since 2015, we have built a strong reputation through quality service, technical excellence, and long-term customer relationships.
            </p>
            <p>
              With over a decade of industry experience, we specialize in Managed Print Services (MPS), Printer AMC, Printer Rental, Per-Click Printing Solutions, Laptop & Desktop Repair, IT Infrastructure, Networking, CCTV Solutions, and Annual Maintenance Contracts (AMC). Our experienced team is committed to minimizing downtime and maximizing productivity by providing fast, dependable, and professional technical support.
            </p>
            <p>
              At Raion Technologies, we believe technology should empower businesses, simplify operations, and create lasting value. Whether supporting manufacturing industries, corporate offices, educational institutions, or small and medium enterprises, we deliver customized technology solutions designed to meet each client’s unique business requirements.
            </p>
            <p>
              Our mission is to become one of India’s most trusted technology service providers by combining innovation, quality, transparency, and exceptional customer support. We continuously invest in skilled professionals, advanced technologies, and customer-focused processes to ensure every client receives the highest standard of service.
            </p>
            <p>
              Since 2015, our commitment has remained unchanged&mdash;to deliver reliable technology solutions with integrity, professionalism, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
