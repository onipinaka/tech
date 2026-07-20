import BlogEditor from '../../../components/BlogEditor';
import { createClient } from '../../../../../utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', resolvedParams.id)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Edit Blog Post</h2>
      <BlogEditor initialData={blog} />
    </div>
  );
}
