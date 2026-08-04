'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect back to the previous page after 3 seconds
    const timer = setTimeout(() => {
      router.back();
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#dcfce3',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Success!</h1>
        <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
          Thank you for contacting us. We have successfully received your request and an email confirmation has been sent to you.
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
          Redirecting you back in 3 seconds...
        </p>
      </div>
    </div>
  );
}
