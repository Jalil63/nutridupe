import { notFound } from 'next/navigation';
import { getBenchmarkBySlug, getProductIngredients } from '@/lib/data';
import { BenchmarkDetail } from '@/components/compare/benchmark-detail';

export const dynamic = 'force-dynamic';

export default async function CompareDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const benchmark = await getBenchmarkBySlug(params.slug);
  if (!benchmark) notFound();

  const benchmarkIngredients = await getProductIngredients(benchmark.id);
  const dupeIngredientsMap = await Promise.all(
    benchmark.dupes.map(async (dupe) => ({
      dupeId: dupe.id,
      ingredients: await getProductIngredients(dupe.id),
    }))
  );

  return (
    <BenchmarkDetail
      benchmark={benchmark}
      benchmarkIngredients={benchmarkIngredients}
      dupeIngredientsMap={dupeIngredientsMap}
    />
  );
}
