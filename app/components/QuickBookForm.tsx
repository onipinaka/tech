'use client';

import { useState, useEffect } from 'react';
import styles from './QuickBookForm.module.css';

const SERVICES = [
  'Printer Rental',
  'Laptop Repair',
  'Laptop Parts',
  'IT Support',
  'Network Setup',
  'Maintenance',
];

export default function QuickBookForm() {
  const [siteUrl, setSiteUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSiteUrl(window.location.origin + '/thank-you');
    }
  }, []);

  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Quick Book a Service</h3>
        <span className={styles.calendarIcon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="4" width="18" height="16" rx="3" stroke="#2563EB" strokeWidth="1.5" />
            <path d="M7 2v3M15 2v3M2 9h18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="6" y="13" width="3" height="3" rx="0.5" fill="#2563EB" />
            <rect x="13" y="13" width="3" height="3" rx="0.5" fill="#2563EB" />
          </svg>
        </span>
      </div>

      <form action="https://formsubmit.co/support@raiontechnologies.com" method="POST" className={styles.form}>
        <input type="hidden" name="_next" value={siteUrl} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting Raion Technologies! We have received your quick booking request and our team will get back to you shortly. Here are our details: Raion Technologies, Pune, +91 96237 89414." />
        {/* Your Name */}
        <div className={styles.field}>
          <label htmlFor="qb-name" className="sr-only">Your Name</label>
          <div className={styles.inputWrapper}>
            <input
              id="qb-name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={styles.input}
              autoComplete="name"
            />
            <span className={styles.inputIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5" r="3" stroke="#9CA3AF" strokeWidth="1.4" />
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Company Name */}
        <div className={styles.field}>
          <label htmlFor="qb-company" className="sr-only">Company Name</label>
          <div className={styles.inputWrapper}>
            <input
              id="qb-company"
              name="company"
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className={styles.input}
              autoComplete="organization"
            />
            <span className={styles.inputIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="4" width="14" height="11" rx="1.5" stroke="#9CA3AF" strokeWidth="1.4" />
                <path d="M5 4V3a3 3 0 016 0v1" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Phone Number */}
        <div className={styles.field}>
          <label htmlFor="qb-phone" className="sr-only">Phone Number</label>
          <div className={styles.inputWrapper}>
            <input
              id="qb-phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
                handleChange(e);
              }}
              minLength={10}
              pattern="[0-9]{10,}"
              title="Please enter at least 10 digits"
              required
              className={styles.input}
              autoComplete="tel"
            />
            <span className={styles.inputIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 2h2.5l1 3L5 6.5a9 9 0 004.5 4.5L11 9.5l3 1V13a2 2 0 01-2 2C5.373 15 1 10.627 1 5a2 2 0 012-3z" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Select Service */}
        <div className={styles.field}>
          <label htmlFor="qb-service" className="sr-only">Select Service</label>
          <div className={styles.inputWrapper}>
            <select
              id="qb-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={`${styles.input} ${styles.select}`}
            >
              <option value="" disabled>Select Service</option>
              {SERVICES.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <span className={styles.inputIcon} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5l4 4 4-4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Submit Messages */}
        <button
          type="submit"
          className={styles.submitBtn}
          id="quickbook-submit-btn"
        >
          Submit Request
        </button>
      </form>

      {/* Callback notice */}
      <p className={styles.notice}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
          <circle cx="7.5" cy="7.5" r="6.5" fill="#2563EB" />
          <path d="M5 7.5l2 2 3-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        We'll call you back within 15 mins
      </p>
    </div>
  );
}
