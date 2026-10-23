import type { Metadata } from 'next';
import Link from 'next/link';
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
      <body className="antialiased bg-slate-50 text-gray-900">
        {/* Navigation Bar Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🍃
              </div>
              <div>
                <span className="font-bold text-gray-900 text-lg leading-tight block">NutriDupe</span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase block -mt-1">
                  RESEARCH PLATFORM
                </span>
              </div>
            </Link>

            {/* Public Links */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-emerald-700 transition">Home</Link>
              <Link href="/compare" className="hover:text-emerald-700 transition">Compare</Link>
              <Link href="/categories" className="hover:text-emerald-700 transition">Categories</Link>
              <Link href="/about" className="hover:text-emerald-700 transition">About</Link>
              <Link href="/guides" className="hover:text-emerald-700 transition">Research Guides</Link>
              <Link href="/methodology" className="hover:text-emerald-700 transition">Methodology</Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                href="/admin"
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center gap-1.5"
              >
                🛡️ Admin
              </Link>
              <Link
                href="/compare"
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow transition flex items-center gap-1.5"
              >
                🔍 Find Dupes
              </Link>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
