import { notFound } from 'next/navigation';
import { getCategories, getProductsByCategory } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';
import { BenchmarkCard } from '@/components/home/benchmark-card';
import { DupeCard } from '@/components/compare/dupe-card';

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);
  const benchmarks = products.filter((p) => p.type === 'benchmark');
  const dupes = products.filter((p) => p.type === 'dupe');
  const Icon = getCategoryIcon(category.icon);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{category.name}</h1>
          <p className="mt-1 text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {benchmarks.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold">Benchmark Products ({benchmarks.length})</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benchmarks.map((product) => (
              <BenchmarkCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {dupes.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">cGMP-Certified Alternatives ({dupes.length})</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dupes.map((dupe, idx) => (
              <DupeCard key={dupe.id} dupe={dupe} benchmark={benchmarks[0] || dupe} index={idx} />
            ))}
          </div>
        </section>
      )}

      {products.length === 0 && (
        <div className="rounded-xl border border-border bg-muted/30 py-20 text-center">
          <p className="text-muted-foreground">No products in this category yet.</p>
        </div>
      )}
    </div>
  );
}
