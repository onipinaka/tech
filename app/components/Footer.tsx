import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Column 1: Brand & Info */}
        <div className={styles.brandCol}>
          <div className={styles.logoWrap}>
            <img src="/brandlogo.png" alt="Raion Technologies Logo" className={styles.logo} />
            <div className={styles.logoTextWrap}>
              <h2 className={styles.logoTitle}>Raion Technologies</h2>
              <p className={styles.logoTagline}>Print. Support. Simplified.</p>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Professional printer rental and IT support services for homes and businesses. Reliable, affordable, always here for you.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider for Desktop */}
        <div className={styles.divider}></div>

        {/* Middle Columns: Links */}
        <div className={styles.linksGrid}>


          {/* Quick Links */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>QUICK LINKS</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Printer Rental</a></li>
              <li><a href="#">Laptop Repair</a></li>

              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>COMPANY</h3>
            <ul className={styles.linkList}>
              <li><a href="#">About Raion Technologies</a></li>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="#">Our Process</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact */}
        <div className={styles.contactCol}>
          <h3 className={styles.groupTitle}>CONTACT INFO</h3>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className={styles.contactTitle}>Need Help?</h4>
                <p className={styles.contactText}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px', display: 'inline-block'}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
                  +91 96237 89414
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 className={styles.contactTitle}>Working Hours</h4>
                <p className={styles.contactText}>Mon – Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          © 2026 Raion Technologies. All Rights Reserved.
        </div>
        
        <div className={styles.legalLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/terms">Terms & Conditions</a>
          <span className={styles.separator}>|</span>
          <a href="/refund-policy">Refund Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/cancellation-policy">Cancellation Policy</a>
        </div>
        
        <div className={styles.trustedService}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.shieldIcon}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 12 15 17 9"></polyline>
          </svg>
          Secure & Trusted Service
        </div>
      </div>
    </footer>
  );
}
