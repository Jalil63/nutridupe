export async function getBenchmarks(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*, category:categories!category_id(*)')
    .eq('type', 'benchmark')
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getBenchmarkBySlug(slug: string): Promise<BenchmarkWithDupes | null> {
  const { data: benchmark, error } = await supabase
    .from('products')
    .select('*, category:categories!category_id(*)')
    .eq('slug', slug)
    .eq('type', 'benchmark')
    .maybeSingle();

  if (error) throw error;
  if (!benchmark) return null;

  const { data: dupes, error: dupesError } = await supabase
    .from('products')
    .select('*, category:categories!category_id(*)')
    .eq('benchmark_id', benchmark.id)
    .eq('type', 'dupe')
    .order('match_percentage', { ascending: false });

  if (dupesError) throw dupesError;

  return { ...benchmark, dupes: dupes || [] };
}

export async function getAllBenchmarks(): Promise<BenchmarkWithDupes[]> {
  const { data: benchmarks, error } = await supabase
    .from('products')
    .select('*, category:categories!category_id(*)')
    .eq('type', 'benchmark')
    .order('name', { ascending: true });

  if (error) throw error;
  if (!benchmarks) return [];

  const result: BenchmarkWithDupes[] = [];
  for (const benchmark of benchmarks) {
    const { data: dupes } = await supabase
      .from('products')
      .select('*, category:categories!category_id(*)')
      .eq('benchmark_id', benchmark.id)
      .eq('type', 'dupe')
      .order('match_percentage', { ascending: false });

    result.push({ ...benchmark, dupes: dupes || [] });
  }

  return result;
}

export async function getAllProductsWithIngredients(): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, category:categories!category_id(*)')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return products || [];
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .maybeSingle();

  if (!category) return [];

  const { data, error } = await supabase
    .from('products')
    .select('*, category:categories!category_id(*)')
    .eq('category_id', category.id)
    .order('type', { ascending: true });

  if (error) throw error;
  return data || [];
}
