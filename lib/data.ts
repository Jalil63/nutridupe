import { supabase } from '@/lib/supabase';
import type { Category, Product, BenchmarkWithDupes, ProductIngredientWithIngredient } from '@/lib/types';

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getBenchmarks(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('type', 'benchmark')
    .order('created_at', { ascending: true });

  if (error || !data) return [];

  const { data: categories } = await supabase.from('categories').select('*');
  const catMap = new Map(categories?.map((c) => [c.id, c]) || []);

  return data.map((p) => ({
    ...p,
    category: catMap.get(p.category_id) || null,
  }));
}

export async function getBenchmarkBySlug(slug: string): Promise<BenchmarkWithDupes | null> {
  const { data: benchmark, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('type', 'benchmark')
    .maybeSingle();

  if (error || !benchmark) return null;

  const { data: categories } = await supabase.from('categories').select('*');
  const catMap = new Map(categories?.map((c) => [c.id, c]) || []);

  const { data: dupes } = await supabase
    .from('products')
    .select('*')
    .eq('benchmark_id', benchmark.id)
    .eq('type', 'dupe')
    .order('match_percentage', { ascending: false });

  return {
    ...benchmark,
    category: catMap.get(benchmark.category_id) || null,
    dupes: (dupes || []).map((d) => ({
      ...d,
      category: catMap.get(d.category_id) || null,
    })),
  };
}

export async function getAllBenchmarks(): Promise<BenchmarkWithDupes[]> {
  const { data: benchmarks, error } = await supabase
    .from('products')
    .select('*')
    .eq('type', 'benchmark')
    .order('name', { ascending: true });

  if (error || !benchmarks) return [];

  const { data: categories } = await supabase.from('categories').select('*');
  const catMap = new Map(categories?.map((c) => [c.id, c]) || []);

  const result: BenchmarkWithDupes[] = [];
  for (const b of benchmarks) {
    const { data: dupes } = await supabase
      .from('products')
      .select('*')
      .eq('benchmark_id', b.id)
      .eq('type', 'dupe')
      .order('match_percentage', { ascending: false });

    result.push({
      ...b,
      category: catMap.get(b.category_id) || null,
      dupes: (dupes || []).map((d) => ({
        ...d,
        category: catMap.get(d.category_id) || null,
      })),
    });
  }

  return result;
}

export async function getProductIngredients(productId: string): Promise<ProductIngredientWithIngredient[]> {
  const { data, error } = await supabase
    .from('product_ingredients')
    .select('*, ingredient:ingredients(*)')
    .eq('product_id', productId);

  if (error) throw error;
  return (data || []) as ProductIngredientWithIngredient[];
}

export async function getAllProductsWithIngredients(): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !products) return [];

  const { data: categories } = await supabase.from('categories').select('*');
  const catMap = new Map(categories?.map((c) => [c.id, c]) || []);

  return products.map((p) => ({
    ...p,
    category: catMap.get(p.category_id) || null,
  }));
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
    .select('*')
    .eq('category_id', category.id)
    .order('type', { ascending: true });

  if (error || !data) return [];

  const { data: categories } = await supabase.from('categories').select('*');
  const catMap = new Map(categories?.map((c) => [c.id, c]) || []);

  return data.map((p) => ({
    ...p,
    category: catMap.get(p.category_id) || null,
  }));
}

export async function getIngredientBySlug(slug: string) {
  const { data, error } = await supabase
    .from('ingredients')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export function formatCurrency(value: number): string {
  const formatted = Number(value || 0).toFixed(2);
  return `${formatted}`;
}

export function calculateSavings(benchmarkPrice: number, dupePrice: number): { amount: number; percentage: number } {
  const amount = benchmarkPrice - dupePrice;
  const percentage = benchmarkPrice > 0 ? Math.round((amount / benchmarkPrice) * 100) : 0;
  return { amount, percentage };
}
