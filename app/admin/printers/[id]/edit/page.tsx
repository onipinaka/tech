import PrinterEditor from '../../../components/PrinterEditor';
import { createClient } from '../../../../../utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function EditPrinterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: printer } = await supabase
    .from('printers')
    .select('*')
    .eq('id', id)
    .single();

  if (!printer) {
    notFound();
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Edit Printer</h2>
      <PrinterEditor initialData={printer} />
    </div>
  );
}
