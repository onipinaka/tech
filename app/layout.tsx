import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raion Technologies - Professional Printer Rental & IT Support',
  description:
    'Smart printing solutions, expert IT support and reliable service - delivered to your home or office. Rent printers, get laptop repair, and 24/7 IT support.',
  keywords: ['printer rental', 'IT support', 'laptop repair', 'printing solutions'],
  openGraph: {
    title: 'Raion Technologies - Professional Printer Rental & IT Support',
    description:
      'Smart printing solutions, expert IT support and reliable service - delivered to your home or office.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
