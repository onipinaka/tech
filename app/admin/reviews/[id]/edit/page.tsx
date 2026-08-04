import { notFound } from 'next/navigation';
import { createClient } from '../../../../../utils/supabase/server';
import ReviewEditor from '../../../components/ReviewEditor';

export default async function EditReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient();
  
  const { id } = await params;
  
  const { data: review, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !review) {
    notFound();
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Edit Review</h2>
      <ReviewEditor initialData={review} />
    </div>
  );
}
