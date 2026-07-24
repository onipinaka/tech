import Link from 'next/link';
import { createClient } from '../../../utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import DeleteButton from '../components/DeleteButton';

export default async function AdminPrintersPage() {
  const supabase = await createClient();
  
  // Fetch printers
  const { data: printers, error } = await supabase
    .from('printers')
    .select('id, name, monthly_price, is_featured, image_url, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching printers:', error);
  }

  // Define server actions for inline delete
  async function deletePrinter(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (!id) return;

    const supabase = await createClient();
    await supabase.from('printers').delete().eq('id', id);
    revalidatePath('/admin/printers');
    redirect('/admin/printers');
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Manage Printers</h2>
        <Link 
          href="/admin/printers/new" 
          style={{ background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
        >
          + New Printer
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Image</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Name</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Price</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Featured</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {printers && printers.length > 0 ? (
              printers.map((printer) => (
                <tr key={printer.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '1rem' }}>
                    {printer.image_url ? (
                      <img src={printer.image_url} alt="" style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '4px', background: '#fff', border: '1px solid #e5e7eb' }} />
                    ) : (
                      <div style={{ width: '60px', height: '60px', background: '#e5e7eb', borderRadius: '4px' }} />
                    )}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{printer.name}</td>
                  <td style={{ padding: '1rem' }}>₹{printer.monthly_price}/mo</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '999px', 
                      fontSize: '0.875rem',
                      background: printer.is_featured ? '#dcfce3' : '#f3f4f6',
                      color: printer.is_featured ? '#166534' : '#4b5563'
                    }}>
                      {printer.is_featured ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <Link 
                        href={`/admin/printers/${printer.id}/edit`}
                        style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.875rem', padding: '0.25rem 0.5rem', border: '1px solid #bfdbfe', borderRadius: '4px' }}
                      >
                        Edit
                      </Link>
                      <form action={deletePrinter}>
                        <input type="hidden" name="id" value={printer.id} />
                        <DeleteButton />
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  No printers found. Create your first printer!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
