import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NutriDupe - Find cGMP-Certified Supplement Alternatives',
  description:
    'NutriDupe is an independent research platform helping you find cost-effective, cGMP-certified, clinically equivalent supplement alternatives to expensive brand-name products.',
  openGraph: {
    title: 'NutriDupe - Find cGMP-Certified Supplement Alternatives',
    description:
      'Compare premium supplements like AG1, Seed, and Thorne with cGMP-certified alternatives at a fraction of the cost.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
