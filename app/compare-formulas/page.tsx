import type { Metadata } from 'next';
import { getAllBenchmarks } from '@/lib/data';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Interactive Formula Comparison & Active Dosage Calculator | NutriDupe',
  description: 'Use our interactive tool to evaluate custom supplement formulas against clinical benchmarks using our transparent 50/30/20 scoring model.',
};

export default async function CompareFormulasPage() {
  const benchmarks = await getAllBenchmarks();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Editorial Disclosure */}
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
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2">
          Interactive Tool
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Formula Comparison & Active Dosage Matrix
        </h1>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Select a clinical benchmark below to review its precise active ingredient specifications, or use our pre-calculated formulation matrices to find exact percentage matches and cost efficiencies.
        </p>
      </div>

      {/* Quick Benchmark Grid for Formula Analysis */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {(benchmarks || []).map((benchmark) => {
          const dupeCount = benchmark.dupes?.length || 0;
          return (
            <div 
              key={benchmark.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                    {benchmark.category?.name || 'Benchmark'}
                  </span>
                  <span className="text-xs text-slate-500">{dupeCount} Dupes Available</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benchmark.name}</h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                  {benchmark.description || 'Clinical baseline specification for active-ingredient matching.'}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-slate-400">Baseline Cost</span>
                  <span className="font-semibold text-slate-800 text-sm">
                    {benchmark.price_per_serving ? `$${Number(benchmark.price_per_serving).toFixed(2)} / serv` : 'N/A'}
                  </span>
                </div>
                <Link
                  href={`/compare/${benchmark.slug}`}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
                >
                  Analyze Formula →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Methodology Summary Box */}
      <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10">
        <h2 className="text-xl font-bold mb-3">How We Calculate Formula Equivalency</h2>
        <p className="text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          Every formulation match score is calculated using our transparent 50/30/20 weighted model: 50% Active Ingredient Overlap, 30% Dosage Precision against clinical thresholds, and 20% Bioavailability Quality.
        </p>
        <a
          href="/research-methodology"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-lg transition"
        >
          Explore Full Research Methodology →
        </a>
      </div>
    </div>
  );
}
