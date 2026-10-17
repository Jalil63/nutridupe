import { getCategories, getBenchmarks } from '@/lib/data';
import { CategoryCard } from '@/components/category/category-card';
import { getCategoryIcon } from '@/lib/icons';

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const [categories, benchmarks] = await Promise.all([
    getCategories(),
    getBenchmarks(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse Categories</h1>
        <p className="mt-2 text-muted-foreground">
          Explore cGMP-certified supplement alternatives across all major health categories.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = getCategoryIcon(category.icon);
          const benchmarkCount = benchmarks.filter((b) => b.category_id === category.id).length;
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
    </div>
  );
}
