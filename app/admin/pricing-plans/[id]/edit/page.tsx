import React from 'react';
import Link from 'next/link';
import PlanEditor from '../../../components/PlanEditor';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function EditPricingPlanPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session) {
    redirect('/admin/login');
  }

  // Await params per Next.js 15+ constraints
  const { id } = await Promise.resolve(params);

  const { data: plan, error } = await supabase
    .from('pricing_plans')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !plan) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Error: Plan not found.</p>
        <Link href="/admin/pricing-plans" style={{ color: '#2563eb' }}>Return to plans</Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/admin/pricing-plans" style={{ color: '#2563eb', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
          &larr; Back to Pricing Plans
        </Link>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Edit Pricing Plan</h2>
      </div>

      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <PlanEditor initialData={plan} />
      </div>
    </div>
  );
}
