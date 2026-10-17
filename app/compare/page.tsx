import { getAllBenchmarks } from '@/lib/data';
import { CompareSearch } from '@/components/compare/compare-search';
import { BenchmarkResults } from '@/components/compare/benchmark-results';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function ComparePage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.trim() || '';
  const benchmarks = await getAllBenchmarks();

  const filtered = query
    ? benchmarks.filter(
        (b) =>
          b.name.toLowerCase().includes(query.toLowerCase()) ||
          b.brand.toLowerCase().includes(query.toLowerCase()) ||
          (b.description || '').toLowerCase().includes(query.toLowerCase()) ||
          (b.category?.name || '').toLowerCase().includes(query.toLowerCase())
      )
    : benchmarks;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Compare Supplements
        </h1>
        <p className="mt-2 text-muted-foreground">
          Search for a premium product or browse all available comparisons to find cGMP-certified alternatives.
        </p>
      </div>

      <div className="mb-8">
        <CompareSearch initialQuery={query} />
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/30 py-20 text-center">
          <Search className="mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="text-lg font-semibold">No results found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try searching for "AG1", "Creatine", "Seed", or "probiotic"
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {filtered.map((benchmark) => (
            <BenchmarkResults key={benchmark.id} benchmark={benchmark} />
          ))}
        </div>
      )}
    </div>
  );
}
