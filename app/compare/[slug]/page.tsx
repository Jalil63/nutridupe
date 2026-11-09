import type { Metadata } from 'next';
import { getBenchmarkBySlug, getAllBenchmarks } from '@/lib/data';
import { notFound } from 'next/navigation';

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
  const title = `Top ${benchmark.name} Alternatives & Dupes (Up to ${topDupe ? topDupe.match_percentage : '90'}% Match)`;
  const description = `Compare ingredients, dosage thresholds, and cost per serving for ${benchmark.name}.`;

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{benchmark.name} Alternatives</h1>
        <p className="text-gray-600 mt-2">
          Compare active chemical forms, price per serving, and dosage match scores.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">{benchmark.name} Benchmark Baseline</h2>
        <p className="text-sm text-gray-500 mt-1">
          Price per serving: ${benchmark.price_per_serving ? Number(benchmark.price_per_serving).toFixed(2) : 'N/A'}
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Formula Dupes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benchmark.dupes?.map((dupe) => (
          <div key={dupe.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">
                  {dupe.match_percentage}% Match
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  ${dupe.price_per_serving ? Number(dupe.price_per_serving).toFixed(2) : '0.00'}/serving
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{dupe.name}</h3>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href={`/go/${dupe.slug}`}
                target="_blank"
                rel="noopener noreferrer"
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
