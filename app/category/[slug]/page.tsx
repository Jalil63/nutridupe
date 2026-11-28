export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // 1. Fetch the category by slug so we have its exact id, name, and description
  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (categoryError || !category) {
    notFound();
  }

  // 2. Fetch all products linked to this category_id
  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', category.id)
    .order('type', { ascending: true })
    .order('name', { ascending: true });

  if (productsError) {
    console.error('Error fetching category products:', productsError);
  }

  const rawProducts = products || [];

  // Only keep dupes that have a valid external product/affiliate URL (not empty and not '/compare')
  const hasValidProductLink = (p: any) => {
    const url = (p.affiliate_url || p.url || '').trim();
    return Boolean(url) && !url.startsWith('/compare') && url !== '#';
  };

  const dupes = rawProducts.filter(
    (p: any) => p.type === 'dupe' && hasValidProductLink(p)
  );

  // Only show benchmarks that have at least 1 valid dupe in this category
  const validBenchmarkIds = new Set(
    dupes.map((d: any) => d.benchmark_id).filter(Boolean)
  );

  const benchmarks = rawProducts.filter(
    (p: any) => p.type === 'benchmark' && validBenchmarkIds.has(p.id)
  );

  const allProducts = [...benchmarks, ...dupes];

  // Map benchmark id -> price_per_serving so each dupe shows accurate savings
  const benchmarkCostMap = new Map<string, number>(
    benchmarks.map((b: any) => [b.id, Number(b.price_per_serving || 0)])
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-xs font-medium text-gray-500">
        <Link href="/" className="hover:text-emerald-600 transition">
          Home
        </Link>{' '}
        /{' '}
        <Link href="/categories" className="hover:text-emerald-600 transition">
          Categories
        </Link>{' '}
        / <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-10 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-900 p-8 text-white shadow-sm">
        <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
          Category Benchmark Directory
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-emerald-100/80">
          {category.description ||
            'Compare formula match percentages, price per serving, and verified active ingredient profiles for top products in this tier.'}
        </p>
      </div>

      {/* Empty State */}
      {allProducts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <h3 className="text-base font-semibold text-gray-900">
            No products indexed in this category yet
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            Our research team is continuously benchmarking new supplement formulas.
          </p>
          <div className="mt-6">
            <Link
              href="/compare"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              Explore All Benchmarks
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Reference Benchmarks in This Category */}
          {benchmarks.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Reference Benchmarks ({benchmarks.length})
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {benchmarks.map((benchmark: any) => {
                  const servingCost = Number(benchmark.price_per_serving || 0);
                  return (
                    <div
                      key={benchmark.id}
                      className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <DupeCard
                        type="benchmark"
                        data={{
                          name: benchmark.name,
                          targetCostPerServing:
                            servingCost > 0 ? `$${servingCost.toFixed(2)}` : 'N/A',
                          clinicalDoseBaseline:
                            'Matched to peer-reviewed literature & label thresholds',
                        }}
                      />
                      <div className="mt-5 pt-4 border-t border-gray-100">
                        <Link
                          href={`/compare/${benchmark.slug}`}
                          className="inline-flex items-center justify-center w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-2 px-4 transition"
                        >
                          Compare Alternatives →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Formulation-Matched Dupes in This Category */}
          {dupes.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Formulation-Matched Dupes ({dupes.length})
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dupes.map((dupe: any) => {
                  const matchPct = dupe.match_percentage || 90;
                  const dupeServingCost = Number(dupe.price_per_serving || 0);
                  const benchmarkServingCost =
                    (dupe.benchmark_id && benchmarkCostMap.get(dupe.benchmark_id)) || 0;

                  const bottlePrice =
                    dupe.price !== undefined && dupe.price !== null
                      ? Number(dupe.price).toFixed(2)
                      : '0.00';

                  const servingsCount =
                    dupe.servings_per_container !== undefined &&
                    dupe.servings_per_container !== null
                      ? Number(dupe.servings_per_container)
                      : 30;

                  const computedSavings =
                    benchmarkServingCost > 0 && dupeServingCost > 0
                      ? calculateSavings(benchmarkServingCost, dupeServingCost).percentage
                      : dupe.savings_percentage ?? 0;

                  return (
                    <div
                      key={dupe.id}
                      className="flex flex-col justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <DupeCard
                        type="dupe"
                        data={{
                          brandName: dupe.brand_name || 'Third-Party Brand',
                          productName: dupe.name || 'Alternative Formula',
                          activeMatchPercentage: matchPct,
                          subScores: dupe.sub_scores || {
                            overlap: matchPct,
                            dosageVariance: 0,
                            bioavailabilityGrade: 5,
                          },
                          costPerServing: dupeServingCost.toFixed(2),
                          retailPrice: bottlePrice,
                          servings: servingsCount,
                          savingsVsBenchmark: String(computedSavings),
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
                        <p className="mt-2 text-[11px] text-slate-400 text-center">
                          Affiliate link: NutriDupe earns a commission on qualifying purchases.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
