'use client';

export default function DeleteButton() {
  return (
    <button 
      type="submit"
      onClick={(e) => {
        if (!confirm('Are you sure you want to delete this blog?')) e.preventDefault();
      }}
      style={{ color: '#dc2626', background: 'transparent', border: '1px solid #fecaca', fontSize: '0.875rem', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}
    >
      Delete
    </button>
  );
}
