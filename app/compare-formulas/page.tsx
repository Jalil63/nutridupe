import type { Metadata } from 'next';
import { getAllBenchmarks } from '@/lib/data';
import Link from 'next/link';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Formula Comparison & Active Dosage Matrix | NutriDupe',
  description:
    'Filter and compare formulation-matched supplement alternatives across all categories by active ingredient, match percentage, and cost per serving.',
};

interface CompareFormulasProps {
  searchParams:
    | Promise<{ q?: string; minMatch?: string; maxPrice?: string; sort?: string }>
    | { q?: string; minMatch?: string; maxPrice?: string; sort?: string };
}

export default async function CompareFormulasPage({ searchParams }: CompareFormulasProps) {
  const resolved = searchParams instanceof Promise ? await searchParams : searchParams;
  const query = resolved?.q?.trim().toLowerCase() || '';
  const minMatch = Number(resolved?.minMatch) || 0;
  const maxPrice = Number(resolved?.maxPrice) || 0;
  const sortBy = resolved?.sort || 'match';

  let benchmarks: any[] = [];
  try {
    benchmarks = await getAllBenchmarks();
  } catch {
    benchmarks = [];
  }

  // Flatten all dupes across every benchmark so users compare formulas directly
  const allDupes = (benchmarks || []).flatMap((benchmark) =>
    (benchmark.dupes || []).map((dupe: any) => ({
      ...dupe,
      benchmarkName: benchmark.name,
      benchmarkSlug: benchmark.slug,
      benchmarkCost: Number(benchmark.price_per_serving || 0),
      categoryName: benchmark.category?.name || 'Supplement',
    }))
  );

  // Filter by query, minimum match score, and max cost per serving
  const filtered = allDupes
    .filter((dupe) => {
      const matchesQuery =
        !query ||
        (dupe.name || '').toLowerCase().includes(query) ||
        (dupe.brand_name || '').toLowerCase().includes(query) ||
        (dupe.benchmarkName || '').toLowerCase().includes(query) ||
        (dupe.categoryName || '').toLowerCase().includes(query);

      const score = Number(dupe.match_percentage || 0);
      const cost = Number(dupe.price_per_serving || 0);

      const matchesScore = score >= minMatch;
      const matchesPrice = maxPrice <= 0 || (cost > 0 && cost <= maxPrice);

      return matchesQuery && matchesScore && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price') {
        return Number(a.price_per_serving || 999) - Number(b.price_per_serving || 999);
      }
      return Number(b.match_percentage || 0) - Number(a.match_percentage || 0);
    });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Editorial & Affiliate Disclosure */}
      <div className="mb-6 rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed">
        <span className="font-semibold text-slate-900 uppercase tracking-wide block mb-1">
          Editorial & Affiliate Disclosure
        </span>
        NutriDupe earns commissions from retailers when you purchase through our links. Our benchmark criteria and scoring models are defined and published in advance and do not change based on commission rates.{' '}
        <Link href="/research-methodology" className="text-emerald-700 underline font-medium hover:text-emerald-800">
          Read our methodology
        </Link>.
      </div>

      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2">
          <SlidersHorizontal className="w-3.5 h-3.5" /> Interactive Formula Screener
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
          Formula Comparison & Active Dosage Matrix
        </h1>
        <p className="mt-2 text-slate-600">
          Screen all verified supplement alternatives side-by-side by active ingredient, minimum match score, and cost per serving.
        </p>
      </div>

      {/* Multi-Criteria Formula Filter Form */}
      <form method="GET" action="/compare-formulas" className="mb-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Ingredient, Brand, or Target Product
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="e.g., Ashwagandha, Greens, AG1..."
                className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Minimum Match Score
            </label>
            <select
              name="minMatch"
              defaultValue={String(minMatch)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none"
            >
              <option value="0">Any Match %</option>
              <option value="75">75%+ Match</option>
              <option value="85">85%+ Match</option>
              <option value="90">90%+ Match</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Max Cost / Serving
            </label>
            <select
              name="maxPrice"
              defaultValue={String(maxPrice)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none"
            >
              <option value="0">Any Price</option>
              <option value="1">Under $1.00 / serv</option>
              <option value="1.5">Under $1.50 / serv</option>
              <option value="2">Under $2.00 / serv</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Sort Matrix By
            </label>
            <div className="flex gap-2">
              <select
                name="sort"
                defaultValue={sortBy}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none"
              >
                <option value="match">Highest Match %</option>
                <option value="price">Lowest Cost / Serv</option>
              </select>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition shrink-0"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Side-by-Side Comparison Matrix Table */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
          <p className="text-base font-semibold text-slate-900">No matching formulas found</p>
          <p className="text-xs text-slate-500 mt-1">
            Try lowering the minimum match percentage or selecting &quot;Any Price&quot;.
          </p>
          <Link
            href="/compare-formulas"
            className="inline-block mt-4 text-xs font-semibold text-emerald-700 underline"
          >
            Reset all filters
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-5 py-3.5">Verified Alternative Formula</th>
                <th className="px-5 py-3.5">Benchmark Baseline</th>
                <th className="px-5 py-3.5">Active Match</th>
                <th className="px-5 py-3.5">Cost / Serving</th>
                <th className="px-5 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((dupe: any, idx: number) => {
                const dupeCost = Number(dupe.price_per_serving || 0);
                const savingsPct =
                  dupe.benchmarkCost > 0 && dupeCost > 0 && dupeCost < dupe.benchmarkCost
                    ? Math.round(((dupe.benchmarkCost - dupeCost) / dupe.benchmarkCost) * 100)
                    : null;

                return (
                  <tr key={dupe.id || idx} className="hover:bg-slate-50/70 transition">
                    <td className="px-5 py-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 block">
                        {dupe.brand_name || 'Verified Brand'}
                      </span>
                      <span className="font-bold text-slate-900">{dupe.name}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">{dupe.categoryName}</span>
                    </td>

                    <td className="px-5 py-4">
                      <Link
                        href={`/compare/${dupe.benchmarkSlug}`}
                        className="font-medium text-slate-800 hover:text-emerald-700 hover:underline"
                      >
                        {dupe.benchmarkName}
                      </Link>
                      {dupe.benchmarkCost > 0 && (
                        <span className="block text-xs text-slate-400">
                          Baseline: ${dupe.benchmarkCost.toFixed(2)} / serv
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700">
                        {dupe.match_percentage || 90}% Match
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="font-bold text-slate-900">
                        {dupeCost > 0 ? `$${dupeCost.toFixed(2)}` : 'N/A'}
                      </span>
                      {savingsPct && (
                        <span className="block text-xs font-semibold text-emerald-700">
                          Save {savingsPct}% vs baseline
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="inline-flex flex-col items-end gap-1">
                        <a
                          href={`/go/${dupe.slug}`}
                          target="_blank"
                          rel="sponsored nofollow"
                          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 px-3.5 rounded-lg transition"
                        >
                          View Deal →
                        </a>
                        <span className="text-[10px] text-slate-400">
                          Affiliate link
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
