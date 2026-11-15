import { getAllBenchmarks } from '@/lib/data';
import Link from 'next/link';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface ComparePageProps {
  searchParams: Promise<{ q?: string }> | { q?: string };
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const query = resolvedSearchParams?.q?.trim() || '';
  
  let benchmarks: any[] = [];
  try {
    benchmarks = await getAllBenchmarks();
  } catch (err) {
    benchmarks = [];
  }

  const filtered = query
    ? (benchmarks || []).filter(
        (b) =>
          (b.name || '').toLowerCase().includes(query.toLowerCase()) ||
          (b.brand || '').toLowerCase().includes(query.toLowerCase()) ||
          (b.description || '').toLowerCase().includes(query.toLowerCase()) ||
          (b.category?.name || '').toLowerCase().includes(query.toLowerCase())
      )
    : (benchmarks || []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Editorial & Affiliate Disclosure */}
      <div className="mb-6 rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed">
        <span className="font-semibold text-slate-900 uppercase tracking-wide block mb-1">
          Editorial & Affiliate Disclosure
        </span>
        NutriDupe earns commissions from retailers when you purchase through our links. Our benchmark criteria and scoring models are defined and published in advance and do not change based on commission rates.{' '}
        <a href="/research-methodology" className="text-emerald-700 underline font-medium hover:text-emerald-800">
          Read our methodology
        </a>.
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
          Compare Supplements & Formulas
        </h1>
        <p className="mt-2 text-slate-600">
          Search for a premium product or browse all available comparisons to find cGMP-certified alternatives.
        </p>
      </div>

      {/* Direct Search Bar Form */}
      <div className="mb-8">
        <form method="GET" action="/compare" className="flex gap-2 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search AG1, Creatine, Seed Probiotic, Ashwagandha..."
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg transition shadow-sm"
          >
            Search
          </button>
        </form>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 py-20 text-center">
          <Search className="mb-4 h-12 w-12 text-slate-400" />
          <h3 className="text-lg font-semibold text-slate-900">No results found</h3>
          <p className="mt-1 text-sm text-slate-500">
            Try searching for &quot;AG1&quot;, &quot;Creatine&quot;, &quot;Seed&quot;, or &quot;probiotic&quot;
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((benchmark) => {
            const dupeCount = benchmark.dupes?.length || 0;

            return (
              <div
                key={benchmark.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                      {benchmark.category?.name || 'Wellness Benchmark'}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {dupeCount} {dupeCount === 1 ? 'Alternative' : 'Alternatives'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{benchmark.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                    {benchmark.description || 'Clinical baseline reference specification for active-ingredient matching.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] text-slate-400">Reference Cost</span>
                      <span className="font-semibold text-slate-800 text-sm">
                        {benchmark.price_per_serving ? `$${Number(benchmark.price_per_serving).toFixed(2)} / serv` : 'N/A'}
                      </span>
                    </div>
                    <Link
                      href={`/compare/${benchmark.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition"
                    >
                      View Comparison →
                    </Link>
                  </div>
                  <p className="mt-2.5 text-[10px] text-slate-400 text-right">
                    Affiliate link — NutriDupe may earn a commission at no extra cost.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
