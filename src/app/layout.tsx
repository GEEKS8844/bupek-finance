import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'BUPEK Finance | Premium Microfinance Solutions',
  description: 'Empowering businesses and communities through accessible financial solutions in Tanzania.',
  keywords: 'loans, microfinance, business financing, SME, agriculture',
  authors: [{ name: 'BUPEK Finance' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
