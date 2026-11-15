import type { Metadata } from 'next';
import { getCategories, getBenchmarks } from '@/lib/data';
import { CategoryCard } from '@/components/category/category-card';
import { getCategoryIcon } from '@/lib/icons';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Supplement Categories & Comparison Hub | NutriDupe',
  description: 'Explore formulation-matched supplement alternatives organized by health and wellness categories.',
};

export default async function CategoriesPage() {
  const [categories, benchmarks] = await Promise.all([
    getCategories(),
    getBenchmarks(),
  ]);

  const safeCategories = categories || [];
  const safeBenchmarks = benchmarks || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse Supplement Categories</h1>
        <p className="mt-2 text-muted-foreground">
          Explore formulation-matched, third-party verified supplement alternatives across all major health categories.
        </p>
      </div>

      {safeCategories.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center text-muted-foreground">
          <p>No categories are currently indexed. Please check back soon as our research team expands coverage.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safeCategories.map((category) => {
            const Icon = getCategoryIcon(category.icon);
            const benchmarkCount = safeBenchmarks.filter((b) => b.category_id === category.id).length;
            
            return (
              <CategoryCard
                key={category.id}
                category={category}
                icon={Icon}
                benchmarkCount={benchmarkCount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
