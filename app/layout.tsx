import type { Metadata } from 'next';
import * as HeaderModule from '@/components/layout/header';
import * as FooterModule from '@/components/layout/footer';
import './globals.css';

// Flexibly handle whether header/footer use default or named exports
const Header = HeaderModule.default || (HeaderModule as any).Header || HeaderModule;
const Footer = FooterModule.default || (FooterModule as any).Footer || FooterModule;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nutridupe.com'),
  title: {
    default: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    template: '%s | NutriDupe',
  },
  description:
    'Discover high-quality, scientifically comparable supplement alternatives (dupes) to premium brands.',
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
