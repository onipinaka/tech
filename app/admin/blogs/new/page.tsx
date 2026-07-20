import BlogEditor from '../../components/BlogEditor';

export default function NewBlogPage() {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Create New Blog Post</h2>
      <BlogEditor />
    </div>
  );
}
