'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../utils/supabase/client';

type ReviewEditorProps = {
  initialData?: any;
};

export default function ReviewEditor({ initialData }: ReviewEditorProps) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: initialData?.name || '',
    role: initialData?.role || '',
    rating: initialData?.rating || 5,
    text: initialData?.text || '',
    img: initialData?.img || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const dataToSave = {
      ...form,
    };

    try {
      if (initialData) {
        const { error } = await supabase.from('reviews').update(dataToSave).eq('id', initialData.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('reviews').insert(dataToSave);
        if (error) throw error;
      }
      router.push('/admin/reviews');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Error saving review');
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
            <label style={labelStyle}>Customer Name</label>
            <input type="text" value={form.name} onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))} required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Designation & Place (Role)</label>
            <input type="text" value={form.role} onChange={e => setForm(prev => ({ ...prev, role: e.target.value }))} required style={inputStyle} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Rating (1-5)</label>
            <input 
              type="number" 
              step="0.1" 
              min="1" 
              max="5" 
              value={form.rating === '' as any ? '' : form.rating} 
              onChange={e => {
                const val = parseFloat(e.target.value);
                setForm(prev => ({ ...prev, rating: isNaN(val) ? ('' as any) : val }));
              }} 
              required 
              style={inputStyle} 
            />
          </div>
          <div>
            <label style={labelStyle}>Avatar Photo (Max 150KB)</label>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 150 * 1024) {
                        alert('Photo must be less than 150KB');
                        e.target.value = '';
                        return;
                      }
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        setForm(prev => ({ ...prev, img: event.target?.result as string }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  style={{ display: 'block', width: '100%', marginBottom: '0.5rem', fontFamily: 'inherit' }} 
                />
                <input 
                  type="text" 
                  value={form.img.startsWith('data:image') ? '' : form.img} 
                  onChange={e => setForm(prev => ({ ...prev, img: e.target.value }))} 
                  style={{ ...inputStyle, marginBottom: 0, fontSize: '0.875rem' }} 
                  placeholder={form.img.startsWith('data:image') ? 'Image uploaded via file' : 'Or paste image URL'} 
                  disabled={form.img.startsWith('data:image')} 
                />
                {form.img.startsWith('data:image') && (
                  <button type="button" onClick={() => setForm(prev => ({...prev, img: ''}))} style={{marginTop: '0.5rem', fontSize: '0.75rem', color: '#b91c1c', background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Remove uploaded image</button>
                )}
              </div>
              {form.img && (
                <img src={form.img} alt="Preview" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
              )}
            </div>
          </div>
        </div>

        <label style={labelStyle}>Review Text</label>
        <textarea value={form.text} onChange={e => setForm(prev => ({ ...prev, text: e.target.value }))} rows={4} required style={inputStyle} />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" disabled={loading} style={{ background: '#2563eb', color: 'white', padding: '0.75rem 2rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Saving...' : 'Save Review'}
          </button>
          <button type="button" onClick={() => router.push('/admin/reviews')} style={{ background: 'transparent', color: '#4b5563', padding: '0.75rem 2rem', border: '1px solid #d1d5db', borderRadius: '4px', fontWeight: 500, cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
