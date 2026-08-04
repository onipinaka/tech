'use client';

import React, { useState } from 'react';
import styles from './AddReviewSection.module.css';
import { createClient } from '../../utils/supabase/client';

export default function AddReviewSection() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    role: '',
    rating: 5,
    text: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    const dataToSave = {
      ...form,
      img: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name || 'User')}&background=random&color=fff`,
    };

    try {
      const { error } = await supabase.from('reviews').insert(dataToSave);
      if (error) throw error;
      
      setStatus('success');
      setForm({ name: '', role: '', rating: 5, text: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error submitting review');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.badge}>SHARE YOUR EXPERIENCE</div>
            <h2 className={styles.title}>Add a Review</h2>
            <p className={styles.subtitle}>
              We value your feedback. Let us and others know about your experience with our services.
            </p>
          </div>

          <div className={styles.card}>
            {status === 'success' && (
              <div className={styles.successMessage}>
                Thank you for your review! It has been submitted successfully.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMessage}>
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name <span className={styles.required}>*</span></label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    className={styles.input}
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Designation & Place <span className={styles.required}>*</span></label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                    className={styles.input}
                    placeholder="e.g. Manager, Pune"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Rating (1-5) <span className={styles.required}>*</span></label>
                <div className={styles.inputWrapper}>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    required
                    value={form.rating === '' as any ? '' : form.rating}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setForm((prev) => ({ ...prev, rating: isNaN(val) ? ('' as any) : val }));
                    }}
                    className={styles.input}
                  />
                  <div className={styles.inputIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Review Text <span className={styles.required}>*</span></label>
                <textarea
                  required
                  rows={4}
                  value={form.text}
                  onChange={(e) => setForm((prev) => ({ ...prev, text: e.target.value }))}
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell us what you liked about our service..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
