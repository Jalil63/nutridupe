import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    template: '%s | NutriDupe Research Platform',
  },
  description:
    'Discover high-quality, scientifically comparable supplement alternatives (dupes) to premium brands. Compare formula match percentages, price per serving, and ingredient profiles.',
  keywords: [
    'supplement dupes',
    'affordable vitamin alternatives',
    'Thorne duplicates',
    'supplement ingredient comparison',
    'NutriDupe research',
  ],
  authors: [{ name: 'NutriDupe Research Team' }],
  creator: 'NutriDupe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nutridupe.com',
    title: 'NutriDupe — Supplement Alternatives & Formula Comparison',
    description:
      'Compare premium supplement formulas against affordable alternatives with match percentages and cost-per-serving breakdowns.',
    siteName: 'NutriDupe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriDupe — Find Affordable Supplement Alternatives',
    description:
      'Compare supplement formulas, match percentages, and prices per serving.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-gray-900">{children}</body>
    </html>
  );
}
