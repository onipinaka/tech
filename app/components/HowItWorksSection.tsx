import React from 'react';
import styles from './HowItWorksSection.module.css';

const STEPS = [
  {
    id: '01',
    title: 'Choose Service',
    description: 'Select the service you need from printer rental to IT support or repair.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="10" width="24" height="20" rx="3" fill="#E2E8F0" />
        <path d="M12 6v6m16-6v6" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <rect x="8" y="16" width="24" height="14" fill="#FFFFFF" />
        <circle cx="13" cy="21" r="1.5" fill="#3B82F6" />
        <circle cx="20" cy="21" r="1.5" fill="#3B82F6" />
        <circle cx="27" cy="21" r="1.5" fill="#3B82F6" />
        <circle cx="13" cy="26" r="1.5" fill="#3B82F6" />
        <circle cx="27" cy="27" r="7" fill="#2563EB" />
        <path d="M27 24v3h2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Request & Confirm',
    description: "Fill out the request form or contact us. We'll confirm your requirements.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="6" width="20" height="28" rx="3" fill="#E2E8F0" />
        <rect x="14" y="4" width="12" height="6" rx="2" fill="#3B82F6" />
        <rect x="12" y="8" width="16" height="24" rx="1" fill="#FFFFFF" />
        <rect x="15" y="14" width="10" height="2" rx="1" fill="#94A3B8" />
        <rect x="15" y="19" width="10" height="2" rx="1" fill="#94A3B8" />
        <rect x="15" y="24" width="6" height="2" rx="1" fill="#94A3B8" />
        <circle cx="28" cy="28" r="6" fill="#2563EB" />
        <path d="M25 28l2 2 4-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'We Visit or Deliver',
    description: 'Our team will visit your location or deliver the equipment as promised.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 16h16v12H6V16z" fill="#3B82F6" />
        <path d="M22 16h6l4 5v7h-10V16z" fill="#93C5FD" />
        <circle cx="11" cy="28" r="4" fill="#1E293B" />
        <circle cx="27" cy="28" r="4" fill="#1E293B" />
        <path d="M12 21l3-3m0 0l3 3m-3-3v6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Service Completed',
    description: 'We get the job done with quality and care. You stay focused, we handle the rest.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6L8 11v8c0 7 12 15 12 15s12-8 12-15v-8L20 6z" fill="#3B82F6" />
        <path d="M15 20l4 4 8-8" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      {/* Background Decorations */}
      <div className={styles.bgDecorations} aria-hidden="true">
        <div className={styles.circleLines}></div>
        <div className={styles.dotsLeft}></div>
        <div className={styles.dotsRight}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.badgeIcon}>
              <path d="M7 2a5 5 0 100 10A5 5 0 007 2zM7 4.5A2.5 2.5 0 117 9a2.5 2.5 0 010-5z" fill="currentColor"/>
              <path d="M7 1v1m0 10v1m5-6h1M1 7h1m9.243-4.243l-.707.707M3.464 10.536l-.707.707m0-8.486l.707.707M10.536 10.536l.707.707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            HOW IT WORKS
          </div>
          <h2 className={styles.title}>Simple Process, Seamless Service</h2>
          <p className={styles.subtitle}>
            We make it easy to get the right support.<br />
            Just follow a few simple steps and we'll handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.stepsWrapper}>
          <div className={styles.dashedLine} aria-hidden="true"></div>
          
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.id} className={styles.stepCard}>
                <div className={styles.stepBadge}>{step.id}</div>
                <div className={styles.iconCircle}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.divider}></div>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaIconWrapper}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3a7 7 0 00-7 7v4a2 2 0 002 2h2v-6H4a6 6 0 1112 0h-3v6h2a2 2 0 002-2v-4a7 7 0 00-7-7z" fill="#2563EB" />
                <circle cx="15" cy="14" r="2" fill="#2563EB" />
                <circle cx="5" cy="14" r="2" fill="#2563EB" />
                <path d="M7 16c1 1.5 5 1.5 6 0" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <p>
              <strong>Need Help?</strong> Our support team is available 24/7 to assist you.
            </p>
          </div>
          <a href="/contact" className={styles.ctaLink}>
            Contact Us <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
