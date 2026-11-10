import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { DupeCard } from '@/components/compare/dupe-card';
import type { Product } from '@/lib/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = resolvedParams.slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${categoryName} Supplement Alternatives & Dupes`,
    description: `Compare clinically equivalent, cGMP-certified alternatives in ${categoryName}. View ingredient matches, bioavailability scores, and price savings.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const categoryName = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Fetch products matching this category from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .ilike('category', `%${slug.replace(/-/g, ' ')}%`);

  if (error) {
    console.error('Error fetching category products:', error);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-xs font-medium text-gray-500">
        <Link href="/" className="hover:text-emerald-600 transition">
          Home
        </Link>{' '}
        / <span className="text-gray-900">{categoryName}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-10 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-900 p-8 text-white shadow-sm">
        <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
          Category Benchmark Directory
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {categoryName}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-emerald-100/80">
          Compare formula match percentages, price per serving, and verified active ingredient profiles for top products in this tier.
        </p>
      </div>

      {/* Products Grid */}
      {!products || products.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <h3 className="text-base font-semibold text-gray-900">
            No products indexed in this category yet
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            Our research team is continuously benchmarking new supplement formulas.
          </p>
          <div className="mt-6">
            <Link
              href="/compare"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              Explore All Benchmarks
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product, index: number) => (
            <DupeCard
              key={product.id}
              dupe={product}
              benchmark={product}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
