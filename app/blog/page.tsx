import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './BlogListing.module.css';
import { createClient } from '../../utils/supabase/server';

export const metadata = {
  title: 'Blog & Insights | Raion Technologies',
  description: 'Read our latest insights, tips, and news on office printing, IT support, and technology trends.',
};

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  return (
    <main>
      <Navbar />
      
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.badge}>Insights & News</div>
            <h1 className={styles.title}>Our Latest Blog Posts</h1>
            <p className={styles.subtitle}>Discover tips, trends, and updates from the world of office tech and IT support.</p>
          </div>

          <div className={styles.grid}>
            {posts && posts.length > 0 ? posts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                <div className={styles.imageWrap}>
                  {post.cover_image ? (
                    <img src={post.cover_image} alt={post.title} className={styles.image} />
                  ) : (
                    <div className={styles.image} style={{ backgroundColor: '#e5e7eb' }} />
                  )}
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>
                      {post.tags ? post.tags.split(',')[0].trim() : 'Blog Post'}
                    </span>
                    <span>•</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.readMore}>
                    Read Article 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            )) : (
              <p>No blog posts found.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
