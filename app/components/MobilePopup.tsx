'use client';

import React, { useState, useEffect } from 'react';
import QuickBookForm from './QuickBookForm';
import styles from './MobilePopup.module.css';

export default function MobilePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3.5 seconds if on mobile screen
    const timer = setTimeout(() => {
      if (window.innerWidth <= 768) {
        setIsOpen(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className={styles.formContainer}>
          <QuickBookForm />
        </div>
      </div>
    </div>
  );
}
