import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
  description:
    'Discover high-quality, scientifically comparable supplement alternatives (dupes) to premium brands. Compare formula match percentages, price per serving, and ingredient profiles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-gray-900 min-h-screen flex flex-col">
        {/* Top Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Exact Original Logo */}
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900 leading-none">NutriDupe</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mt-0.5">
                  Research Platform
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
                Home
              </Link>
              <Link href="/compare" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
                Compare
              </Link>
              <Link href="/categories" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
                Categories
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
                About
              </Link>
              <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
                Research Guides
              </Link>
              <Link href="/research-methodology" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
                Methodology
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/admin"
                className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition"
              >
                🛡️ Admin
              </Link>
              <Link
                href="/compare"
                className="px-4 py-2 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-sm transition"
              >
                🔍 Find Dupes
              </Link>
            </div>
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
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-white text-xs">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  NutriDupe
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Independent supplement comparison platform providing active ingredient analysis, match scoring, and value breakdowns.
                </p>
              </div>

              {/* Platform Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Platform</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/compare" className="hover:text-white transition">All Comparisons</Link></li>
                  <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
                  <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Research Guides</Link></li>
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
