import type { Metadata } from 'next';
import { getBenchmarkBySlug, getAllBenchmarks } from '@/lib/data';
import { notFound } from 'next/navigation';
import { DupeCard } from '@/components/compare/dupe-card';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static paths at build time to prevent prerender errors
export async function generateStaticParams() {
  try {
    const benchmarks = await getAllBenchmarks();
    return (benchmarks || []).map((b) => ({
      slug: b.slug,
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const benchmark = await getBenchmarkBySlug(slug);

  if (!benchmark) {
    return {
      title: 'Comparison Not Found | NutriDupe',
      description: 'The requested supplement comparison could not be found.',
    };
  }

  const topDupe = benchmark.dupes?.[0];
  const title = `${benchmark.name} Alternatives & Formulation-Matched Dupes (Up to ${topDupe ? topDupe.match_percentage : '90'}% Match)`;
  const description = `Compare active ingredient alignment, dosage thresholds, and cost per serving for ${benchmark.name}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.nutridupe.com/compare/${slug}`,
      type: 'article',
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = params;
  const benchmark = await getBenchmarkBySlug(slug);

  if (!benchmark) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Above-the-Fold FTC & Methodology Disclosure */}
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
        <h1 className="text-3xl font-bold text-gray-900">{benchmark.name} Alternatives</h1>
        <p className="text-gray-600 mt-2">
          Compare active ingredient alignment, cost per serving, and dosage match scores.
        </p>
      </div>

      {/* Reference Benchmark Baseline Card (Using our updated component) */}
      <div className="mb-8">
        <DupeCard 
          type="benchmark" 
          data={{
            name: `${benchmark.name} Benchmark Baseline`,
            targetCostPerServing: benchmark.price_per_serving ? `$${Number(benchmark.price_per_serving).toFixed(2)}` : 'N/A',
            clinicalDoseBaseline: 'Matched to peer-reviewed literature & label thresholds'
          }} 
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Formulation Dupes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benchmark.dupes?.map((dupe) => (
          <div key={dupe.id} className="flex flex-col justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <DupeCard 
              type="dupe"
              data={{
                brandName: dupe.brand_name || 'Third-Party Brand',
                productName: dupe.name,
                activeMatchPercentage: dupe.match_percentage,
                subScores: dupe.sub_scores || {
                  overlap: dupe.match_percentage,
                  dosageVariance: 0,
                  bioavailabilityGrade: 5
                },
                costPerServing: dupe.price_per_serving ? Number(dupe.price_per_serving).toFixed(2) : '0.00',
                retailPrice: dupe.retail_price || '29.99',
                servings: dupe.servings || 30,
                savingsVsBenchmark: dupe.savings_percentage || '25'
              }}
            />

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href={`/go/${dupe.slug}`}
                target="_blank"
                rel="sponsored nofollow"
                className="w-full inline-block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-2 px-4 rounded-lg transition"
              >
                View Deal & Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
