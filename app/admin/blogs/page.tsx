import Link from 'next/link';
import { createClient } from '../../../utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import DeleteButton from '../components/DeleteButton';

export default async function AdminBlogsPage() {
  const supabase = await createClient();
  
  // Fetch blogs
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('id, title, published, created_at, cover_image')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
  }

  // Define server actions for inline delete (using a form to support progressively enhanced actions)
  async function deleteBlog(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (!id) return;

    const supabase = await createClient();
    await supabase.from('blogs').delete().eq('id', id);
    revalidatePath('/admin/blogs');
    redirect('/admin/blogs');
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Manage Blogs</h2>
        <Link 
          href="/admin/blogs/new" 
          style={{ background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
        >
          + New Blog
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Cover</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Title</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Status</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151' }}>Date</th>
              <th style={{ padding: '1rem', fontWeight: 500, color: '#374151', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '1rem' }}>
                    {blog.cover_image ? (
                      <img src={blog.cover_image} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                    ) : (
                      <div style={{ width: '60px', height: '40px', background: '#e5e7eb', borderRadius: '4px' }} />
                    )}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{blog.title}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '999px', 
                      fontSize: '0.875rem',
                      background: blog.published ? '#dcfce3' : '#f3f4f6',
                      color: blog.published ? '#166534' : '#4b5563'
                    }}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                    {new Date(blog.created_at).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <Link 
                        href={`/admin/blogs/${blog.id}/edit`}
                        style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.875rem', padding: '0.25rem 0.5rem', border: '1px solid #bfdbfe', borderRadius: '4px' }}
                      >
                        Edit
                      </Link>
                      <form action={deleteBlog}>
                        <input type="hidden" name="id" value={blog.id} />
                        <DeleteButton />
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  No blogs found. Create your first blog post!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
