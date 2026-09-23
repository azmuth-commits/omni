import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'Omni Cat - AI EdTech Ecosystem',
  description: 'AI-powered educational technology solutions for universities, colleges, and schools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        {children}
      </body>
    </html>
  );
}