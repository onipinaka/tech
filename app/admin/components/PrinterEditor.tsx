'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../utils/supabase/client';

type PrinterEditorProps = {
  initialData?: any;
};

export default function PrinterEditor({ initialData }: PrinterEditorProps) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: initialData?.name || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    image_url: initialData?.image_url || '',
    features: initialData?.features ? initialData.features.join('\n') : '',
    monthly_price: initialData?.monthly_price || '',
    is_featured: initialData?.is_featured || false,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image_url || null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (!initialData) {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setForm(prev => ({ ...prev, name, slug }));
    } else {
      setForm(prev => ({ ...prev, name }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setError('Image file must be less than 2MB');
      return;
    }

    setError(null);
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setForm(prev => ({ ...prev, image_url: '' })); // clear url if file is selected
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let finalImageUrl = form.image_url;

    try {
      // 1. Upload image if provided
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('printers')
          .upload(filePath, imageFile);

        if (uploadError) {
          throw new Error(`Failed to upload image: ${uploadError.message}`);
        }

        const { data: publicUrlData } = supabase.storage
          .from('printers')
          .getPublicUrl(filePath);

        finalImageUrl = publicUrlData.publicUrl;
      }

      // 2. Save data to DB
      const dataToSave = {
        name: form.name,
        slug: form.slug,
        description: form.description,
        image_url: finalImageUrl,
        features: form.features.split('\n').filter(Boolean),
        monthly_price: parseFloat(form.monthly_price) || 0,
        is_featured: form.is_featured,
      };

      if (initialData) {
        const { error: dbError } = await supabase.from('printers').update(dataToSave).eq('id', initialData.id);
        if (dbError) throw dbError;
      } else {
        const { error: dbError } = await supabase.from('printers').insert(dataToSave);
        if (dbError) throw dbError;
      }

      router.push('/admin/printers');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Error saving printer');
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
            <label style={labelStyle}>Printer Name</label>
            <input type="text" value={form.name} onChange={handleNameChange} required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Slug</label>
            <input type="text" value={form.slug} onChange={e => setForm(prev => ({ ...prev, slug: e.target.value }))} required style={inputStyle} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Monthly Price (₹)</label>
            <input type="number" step="0.01" value={form.monthly_price} onChange={e => setForm(prev => ({ ...prev, monthly_price: e.target.value }))} required style={inputStyle} />
          </div>
        </div>

        <label style={labelStyle}>Description</label>
        <textarea value={form.description} onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))} rows={4} required style={inputStyle} />

        <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #e5e7eb' }}>
          <label style={{...labelStyle, fontSize: '1rem', marginBottom: '1rem'}}>Image Upload</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Option 1: Upload Image (Max 2MB)</label>
              <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Only JPEG, PNG, WEBP, GIF allowed. Under 2MB.</div>
            </div>
            
            <div style={{ position: 'relative', textAlign: 'center', color: '#9ca3af', margin: '0.5rem 0' }}>
              <span style={{ background: '#f9fafb', padding: '0 0.5rem', position: 'relative', zIndex: 1 }}>OR</span>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: '#d1d5db', zIndex: 0 }} />
            </div>

            <div>
              <label style={labelStyle}>Option 2: Provide Image URL</label>
              <input 
                type="url" 
                value={form.image_url} 
                onChange={e => {
                  setForm(prev => ({ ...prev, image_url: e.target.value }));
                  setImageFile(null); // clear file
                  setImagePreview(e.target.value);
                }} 
                style={inputStyle} 
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
          
          {imagePreview && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'white', borderRadius: '4px', border: '1px solid #e5e7eb', display: 'inline-block' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', fontWeight: 600 }}>Preview:</p>
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }} 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                onLoad={(e) => { e.currentTarget.style.display = 'block'; }}
              />
            </div>
          )}
        </div>

        <label style={labelStyle}>Features (One per line)</label>
        <textarea 
          value={form.features} 
          onChange={e => setForm(prev => ({ ...prev, features: e.target.value }))} 
          rows={6} 
          style={inputStyle} 
          placeholder="Wi-Fi Connectivity&#10;Auto-Duplex Printing&#10;Mobile Printing"
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <input type="checkbox" id="is_featured" checked={form.is_featured} onChange={e => setForm(prev => ({ ...prev, is_featured: e.target.checked }))} style={{ width: '1rem', height: '1rem' }} />
          <label htmlFor="is_featured" style={{ fontWeight: 600 }}>Feature on main rental page</label>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" disabled={loading} style={{ background: '#2563eb', color: 'white', padding: '0.75rem 2rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Saving...' : 'Save Printer'}
          </button>
          <button type="button" onClick={() => router.push('/admin/printers')} style={{ background: 'transparent', color: '#4b5563', padding: '0.75rem 2rem', border: '1px solid #d1d5db', borderRadius: '4px', fontWeight: 500, cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
