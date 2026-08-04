import Link from 'next/link';
import { createClient } from '../../../utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import DeleteButton from '../components/DeleteButton';

export default async function AdminReviewsPage() {
  const supabase = await createClient();
  
  // Fetch reviews
  const { data: reviews, error } = await supabase
    .from('reviews')
    .select('id, name, role, rating, text, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reviews:', error);
  }

  // Define server actions for inline delete
  async function deleteReview(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (!id) return;

    const supabase = await createClient();
    await supabase.from('reviews').delete().eq('id', id);
    revalidatePath('/admin/reviews');
    redirect('/admin/reviews');
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Manage Reviews</h2>
        <Link 
          href="/admin/reviews/new" 
          style={{ background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
        >
          + New Review
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Customer</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Role / Place</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Rating</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews && reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{review.name}</td>
                  <td style={{ padding: '1rem', color: '#6b7280' }}>{review.role}</td>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{review.rating} / 5</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <Link 
                        href={`/admin/reviews/${review.id}/edit`}
                        style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.875rem', padding: '0.25rem 0.5rem', border: '1px solid #bfdbfe', borderRadius: '4px' }}
                      >
                        Edit
                      </Link>
                      <form action={deleteReview}>
                        <input type="hidden" name="id" value={review.id} />
                        <DeleteButton />
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  No reviews found. Add your first customer review!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
