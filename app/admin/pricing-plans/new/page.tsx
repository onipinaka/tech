import React from 'react';
import Link from 'next/link';
import PlanEditor from '../../components/PlanEditor';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function NewPricingPlanPage() {
  const supabase = await createClient();
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session) {
    redirect('/admin/login');
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/admin/pricing-plans" style={{ color: '#2563eb', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
          &larr; Back to Pricing Plans
        </Link>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Create New Pricing Plan</h2>
      </div>

      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <PlanEditor />
      </div>
    </div>
  );
}
