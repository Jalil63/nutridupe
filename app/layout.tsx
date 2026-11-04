import type { Metadata } from 'next';
import { Header } from '@/components/Header';
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
        {/* Top Header Component */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <footer className="bg-gray-900 text-gray-400 text-xs py-12 border-t border-gray-800 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Summary */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 0 1-9-9c0-4.97 4.03-9 9-9s9 4.03 9 9a9 9 0 0 1-9 9zm0 0v-9m0 0H9m3 0h3" />
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
