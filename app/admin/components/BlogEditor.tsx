'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../utils/supabase/client';

type BlogEditorProps = {
  initialData?: any;
};

export default function BlogEditor({ initialData }: BlogEditorProps) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    seo_keywords: initialData?.seo_keywords || '',
    tags: initialData?.tags || '',
    cover_image: initialData?.cover_image || '',
    content: initialData?.content || '',
    published: initialData?.published || false,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (!initialData) {
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setForm(prev => ({ ...prev, title, slug }));
    } else {
      setForm(prev => ({ ...prev, title }));
    }
  };

  const formatGoogleDriveUrl = (url: string) => {
    if (!url) return url;
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    return url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const dataToSave = {
      ...form,
      cover_image: formatGoogleDriveUrl(form.cover_image),
      updated_at: new Date().toISOString(),
    };

    try {
      if (initialData) {
        const { error } = await supabase.from('blogs').update(dataToSave).eq('id', initialData.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('blogs').insert(dataToSave);
        if (error) throw error;
      }
      router.push('/admin/blogs');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Error saving blog');
      setLoading(false);
    }
  };

  const inputStyle = { width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' as const, marginBottom: '1rem', fontFamily: 'inherit' };
  const labelStyle = { display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.875rem' };

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      {error && <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Title</label>
            <input type="text" value={form.title} onChange={handleTitleChange} required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Slug</label>
            <input type="text" value={form.slug} onChange={e => setForm(prev => ({ ...prev, slug: e.target.value }))} required style={inputStyle} />
          </div>
        </div>

        <label style={labelStyle}>Excerpt</label>
        <textarea value={form.excerpt} onChange={e => setForm(prev => ({ ...prev, excerpt: e.target.value }))} rows={3} required style={inputStyle} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>SEO Keywords (Comma Separated)</label>
            <input 
              type="text" 
              value={form.seo_keywords} 
              onChange={e => setForm(prev => ({ ...prev, seo_keywords: e.target.value }))} 
              style={inputStyle} 
              placeholder="e.g. laptop repair, printer rental, tech support" 
            />
          </div>
          <div>
            <label style={labelStyle}>Tags / Categories (Comma Separated)</label>
            <input 
              type="text" 
              value={form.tags} 
              onChange={e => setForm(prev => ({ ...prev, tags: e.target.value }))} 
              style={inputStyle} 
              placeholder="e.g. Hardware, Repair, Tips" 
            />
          </div>
        </div>

        <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', border: '1px solid #e5e7eb' }}>
          <label style={labelStyle}>Cover Image (Google Drive Link or Image URL)</label>
          <input 
            type="text" 
            value={form.cover_image} 
            onChange={e => setForm(prev => ({ ...prev, cover_image: e.target.value }))} 
            style={inputStyle} 
            placeholder="e.g. https://drive.google.com/file/d/..."
          />
          {form.cover_image && (
            <img 
              src={formatGoogleDriveUrl(form.cover_image)} 
              alt="Cover preview" 
              style={{ width: '200px', height: 'auto', marginTop: '1rem', borderRadius: '4px' }} 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              onLoad={(e) => { e.currentTarget.style.display = 'block'; }}
            />
          )}
        </div>

        <label style={labelStyle}>Content (HTML supported)</label>
        <textarea value={form.content} onChange={e => setForm(prev => ({ ...prev, content: e.target.value }))} rows={15} style={inputStyle} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <input type="checkbox" id="published" checked={form.published} onChange={e => setForm(prev => ({ ...prev, published: e.target.checked }))} style={{ width: '1rem', height: '1rem' }} />
          <label htmlFor="published" style={{ fontWeight: 600 }}>Publish this blog post</label>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" disabled={loading} style={{ background: '#2563eb', color: 'white', padding: '0.75rem 2rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Saving...' : 'Save Blog'}
          </button>
          <button type="button" onClick={() => router.push('/admin/blogs')} style={{ background: 'transparent', color: '#4b5563', padding: '0.75rem 2rem', border: '1px solid #d1d5db', borderRadius: '4px', fontWeight: 500, cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
