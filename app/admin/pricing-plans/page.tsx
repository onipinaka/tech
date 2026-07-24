import React from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function PricingPlansAdminPage() {
  const supabase = await createClient();

  const { data: session } = await supabase.auth.getSession();
  if (!session?.session) {
    redirect('/admin/login');
  }

  const { data: plans, error } = await supabase
    .from('pricing_plans')
    .select('*')
    .order('section', { ascending: true })
    .order('order_index', { ascending: true });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Manage Pricing Plans</h2>
        <Link 
          href="/admin/pricing-plans/new" 
          style={{ padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          + Add New Plan
        </Link>
      </div>

      {error ? (
        <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: 'red', borderRadius: '4px' }}>
          Error loading plans: {error.message}
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Plan Name</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Section</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Price</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Popular</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Order</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans?.map((plan) => (
              <tr key={plan.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '1rem' }}>
                  <strong>{plan.name}</strong>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{plan.subtitle}</div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ padding: '0.25rem 0.5rem', backgroundColor: '#e0e7ff', color: '#3730a3', borderRadius: '4px', fontSize: '0.875rem' }}>
                    {plan.section === 'home' ? 'Home Landing' : 'Printer Rental'}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>{plan.price}</td>
                <td style={{ padding: '1rem' }}>{plan.is_popular ? '✅' : '-'}</td>
                <td style={{ padding: '1rem' }}>{plan.order_index}</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <Link 
                    href={`/admin/pricing-plans/${plan.id}/edit`}
                    style={{ padding: '0.25rem 0.75rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {plans?.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  No pricing plans found. Create one above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
