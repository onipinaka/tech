import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#1f2937', color: 'white', padding: '1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>Raion Admin Panel</h1>
          <nav>
            <Link href="/admin/blogs" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Blogs</Link>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>View Public Site</Link>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        {children}
      </main>
    </div>
  );
}
