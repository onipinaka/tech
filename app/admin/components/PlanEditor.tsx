'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

type PricingPlan = {
  id?: string;
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  is_popular: boolean;
  button_text: string;
  order_index: number;
  section: string;
};

export default function PlanEditor({ initialData }: { initialData?: PricingPlan }) {
  const router = useRouter();
  const supabase = createClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<PricingPlan>(initialData || {
    name: '',
    subtitle: '',
    price: '',
    features: [''],
    is_popular: false,
    button_text: 'Book Now',
    order_index: 0,
    section: 'home'
  });

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Clean up empty features
      const cleanFeatures = formData.features.filter(f => f.trim() !== '');

      const payload = {
        name: formData.name,
        subtitle: formData.subtitle,
        price: formData.price,
        features: cleanFeatures,
        is_popular: formData.is_popular,
        button_text: formData.button_text,
        order_index: formData.order_index,
        section: formData.section
      };

      if (initialData?.id) {
        const { error: updateError } = await supabase
          .from('pricing_plans')
          .update(payload)
          .eq('id', initialData.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('pricing_plans')
          .insert([payload]);
        if (insertError) throw insertError;
      }

      router.push('/admin/pricing-plans');
      router.refresh();
    } catch (err: any) {
      console.error('Error saving plan:', err);
      setError(err.message || 'Failed to save plan');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      {error && <div style={{ color: 'red', padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '4px' }}>{error}</div>}
      
      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Plan Name</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Subtitle</label>
        <input 
          type="text" 
          value={formData.subtitle} 
          onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
          required 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Price (e.g. 999 or Custom)</label>
        <input 
          type="text" 
          value={formData.price} 
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Button Text</label>
        <input 
          type="text" 
          value={formData.button_text} 
          onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
          required 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Order Index (Lower comes first)</label>
        <input 
          type="number" 
          value={formData.order_index} 
          onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
          required 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input 
          type="checkbox" 
          id="is_popular"
          checked={formData.is_popular} 
          onChange={(e) => setFormData({ ...formData, is_popular: e.target.checked })}
        />
        <label htmlFor="is_popular" style={{ fontWeight: 'bold' }}>Is Popular / Featured?</label>
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Section</label>
        <select 
          value={formData.section}
          onChange={(e) => setFormData({ ...formData, section: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
        >
          <option value="home">Home Landing Page</option>
          <option value="printer_rental">Printer Rental Page</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Features / Points</label>
        {formData.features.map((feature, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input 
              type="text" 
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
              placeholder={`Feature ${index + 1}`}
            />
            <button 
              type="button" 
              onClick={() => removeFeature(index)}
              style={{ padding: '0.5rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Remove
            </button>
          </div>
        ))}
        <button 
          type="button" 
          onClick={addFeature}
          style={{ padding: '0.5rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          + Add Feature
        </button>
      </div>

      <div style={{ marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ padding: '0.75rem 1.5rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
        >
          {isSubmitting ? 'Saving...' : (initialData ? 'Update Plan' : 'Create Plan')}
        </button>
        <button 
          type="button" 
          onClick={() => router.push('/admin/pricing-plans')}
          style={{ marginLeft: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#9ca3af', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
