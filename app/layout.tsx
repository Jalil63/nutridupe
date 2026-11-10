import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nutridupe.com'),
  title: {
    default: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    template: '%s | NutriDupe',
  },
  description:
    'Discover high-quality, scientifically comparable supplement alternatives (dupes) to premium brands. Compare formula match percentages, price per serving, and bio-available ingredient profiles.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nutridupe.com',
    siteName: 'NutriDupe',
    title: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    description:
      'Independent supplement comparison platform providing active ingredient analysis, match scoring, and value breakdowns.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    description:
      'Independent supplement comparison platform providing active ingredient analysis, match scoring, and value breakdowns.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
