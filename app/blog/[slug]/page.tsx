import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './BlogPost.module.css';
import { createClient } from '../../../utils/supabase/server';



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from('blogs').select('*').eq('slug', decodeURIComponent(resolvedParams.slug)).single();
  
  if (!post) {
    return {
      title: 'Post Not Found | Raion Technologies',
    };
  }

  return {
    title: `${post.title} | Raion Technologies Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from('blogs').select('*').eq('slug', decodeURIComponent(resolvedParams.slug)).single();

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      
      <article className={styles.section}>
        <div className={styles.container}>
          
          <Link href="/blog" className={styles.backBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Blog
          </Link>

          <header className={styles.header}>
            <span className={styles.category}>Blog Post</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
          </header>

          {post.cover_image && (
            <div className={styles.imageWrap}>
              <img src={post.cover_image} alt={post.title} className={styles.image} />
            </div>
          )}

          <div className={styles.content}>
            {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
          </div>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
