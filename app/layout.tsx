import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nutridupe.com'),
  title: {
    default: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    template: '%s | NutriDupe',
  },
  description:
    'Discover high-quality, scientifically comparable supplement alternatives (dupes) to premium brands. Compare formula match percentages, price per serving, and ingredient profiles.',
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
      <body className="antialiased bg-slate-50 text-gray-900 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-opacity hover:opacity-85 py-1">
              <Image 
                src="/nutridupe-logo.svg" 
                alt="NutriDupe Research Platform" 
                width={160}
                height={36}
                priority
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">Home</Link>
              <Link href="/compare" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">Compare</Link>
              <Link href="/categories" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">Categories</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">About</Link>
              <Link href="/research-guides" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">Research Guides</Link>
              <Link href="/research-methodology" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">Methodology</Link>
            </nav>

            {/* Desktop Right Action */}
            <div className="hidden items-center md:flex">
              <Link
                href="/compare"
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-sm transition"
              >
                🔍 Find Dupes
              </Link>
            </div>

            {/* Native Mobile Menu Toggle */}
            <details className="md:hidden">
              <summary className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer list-none focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </summary>
              <div className="fixed left-0 right-0 top-16 w-full bg-white border-b border-gray-200 shadow-2xl p-5 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-2">
                <Link href="/" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 py-2 border-b border-gray-100">Home</Link>
                <Link href="/compare" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 py-2 border-b border-gray-100">Compare</Link>
                <Link href="/categories" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 py-2 border-b border-gray-100">Categories</Link>
                <Link href="/about" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 py-2 border-b border-gray-100">About</Link>
                <Link href="/research-guides" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 py-2 border-b border-gray-100">Research Guides</Link>
                <Link href="/research-methodology" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 py-2">Methodology</Link>
                <div className="pt-3 flex flex-col gap-2">
                  <Link href="/compare" className="text-xs font-semibold text-center py-2.5 bg-emerald-600 text-white rounded-lg shadow-sm">🔍 Find Dupes</Link>
                </div>
              </div>
            </details>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <footer className="bg-gray-900 text-gray-400 text-xs py-12 border-t border-gray-800 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Summary */}
              <div className="space-y-3">
                <Link href="/" className="inline-block py-1">
                  <Image 
                    src="/nutridupe-logo.svg" 
                    alt="NutriDupe" 
                    width={140}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Independent supplement comparison platform providing active ingredient analysis, match scoring, and value breakdowns.
                </p>
              </div>

              {/* Platform Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Platform</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/compare" className="hover:text-white transition">Compare</Link></li>
                  <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
                  <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link href="/research-guides" className="hover:text-white transition">Research Guides</Link></li>
                  <li><Link href="/research-methodology" className="hover:text-white transition">Methodology</Link></li>
                </ul>
              </div>

              {/* Legal & Support Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Legal & Support</h4>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li>
                    <a href="mailto:hello@nutridupe.com" className="hover:text-white transition">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* System Link */}
              <div>
                <h4 className="text-white font-semibold mb-3">System</h4>
                <Link
                  href="/admin"
                  className="inline-block px-3 py-1.5 border border-gray-700 rounded text-gray-300 hover:border-gray-500 hover:text-white transition text-xs font-medium"
                >
                  🛡️ Admin Portal
                </Link>
              </div>
            </div>

            {/* Mandatory FDA & Legal Disclaimers */}
            <div className="border-t border-gray-800 pt-6 text-[11px] text-gray-500 space-y-3 leading-relaxed">
              <p>
                <strong>FDA Disclaimer:</strong> Statements made on this website have not been evaluated by the Food and Drug Administration. Products discussed are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before starting any supplement regimen.
              </p>
              <p>
                <strong>Affiliate Disclosure:</strong> NutriDupe is an independent research platform. We may earn a commission from purchases made through links on this site at no additional cost to you.
              </p>
              <p>© {new Date().getFullYear()} NutriDupe. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
