import { Metadata } from 'next';
import ProductSchema from '@/components/ProductSchema';

interface Props {
  params: { slug: string };
}

// Dynamic SEO Title & Description for each comparison route
export async function generateMetadata({ params }: Props): Metadata {
  const formattedTitle = params.slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Best Dupe for ${formattedTitle}`,
    description: `Detailed formula breakdown and match percentage analysis comparing ${formattedTitle} with top affordable alternatives.`,
  };
}

export default function ComparisonPage({ params }: Props) {
  // Sample data — would normally come from database/Supabase query
  const comparisonData = {
    benchmarkName: 'Basic Nutrients 2/Day',
    benchmarkBrand: 'Thorne',
    benchmarkPrice: 32.00,
    dupeName: 'Organic Greens & Superfoods',
    dupeBrand: 'NutriDupe Labs',
    dupePrice: 29.99,
    matchPercentage: 94,
    category: 'Multivitamins',
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      {/* 1. JSON-LD Schema Insertion for AEO/SEO */}
      <ProductSchema {...comparisonData} />

      {/* 2. Direct Q&A Block for AI Engine Optimization */}
      <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          What is the best affordable alternative to {comparisonData.benchmarkBrand} {comparisonData.benchmarkName}?
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          The top-rated alternative is <strong>{comparisonData.dupeName}</strong> by {comparisonData.dupeBrand}. 
          It offers a <strong>{comparisonData.matchPercentage}% formulation match</strong> at ${comparisonData.dupePrice.toFixed(2)}, 
          providing comparable ingredient potencies at a lower price per serving.
        </p>
      </section>

      {/* 3. Detailed Comparison Specs Table */}
      <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Formula Comparison Breakdown</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 font-semibold uppercase">Benchmark</p>
            <p className="font-bold text-gray-900 text-base">{comparisonData.benchmarkName}</p>
            <p className="text-gray-600">${comparisonData.benchmarkPrice.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
            <p className="text-xs text-emerald-800 font-semibold uppercase">NutriDupe Match ({comparisonData.matchPercentage}%)</p>
            <p className="font-bold text-gray-900 text-base">{comparisonData.dupeName}</p>
            <p className="text-emerald-700 font-semibold">${comparisonData.dupePrice.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
