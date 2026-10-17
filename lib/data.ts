import { supabase } from '@/lib/supabase';
import type { Category, Product, BenchmarkWithDupes, ProductIngredientWithIngredient } from '@/lib/types';

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getBenchmarks(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*, category:categories(*)')
    .eq('type', 'benchmark')
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getBenchmarkBySlug(slug: string): Promise<BenchmarkWithDupes | null> {
  const { data: benchmark, error } = await supabase
    .from('products')
    .select('*, category:categories(*)')
    .eq('slug', slug)
    .eq('type', 'benchmark')
    .maybeSingle();

  if (error) throw error;
  if (!benchmark) return null;

  const { data: dupes, error: dupesError } = await supabase
    .from('products')
    .select('*, category:categories(*)')
    .eq('benchmark_id', benchmark.id)
    .eq('type', 'dupe')
    .order('match_percentage', { ascending: false });

  if (dupesError) throw dupesError;

  return { ...benchmark, dupes: dupes || [] };
}

export async function getAllBenchmarks(): Promise<BenchmarkWithDupes[]> {
  const { data: benchmarks, error } = await supabase
    .from('products')
    .select('*, category:categories(*)')
    .eq('type', 'benchmark')
    .order('name', { ascending: true });

  if (error) throw error;
  if (!benchmarks) return [];

  const result: BenchmarkWithDupes[] = [];
  for (const benchmark of benchmarks) {
    const { data: dupes } = await supabase
      .from('products')
      .select('*, category:categories(*)')
      .eq('benchmark_id', benchmark.id)
      .eq('type', 'dupe')
      .order('match_percentage', { ascending: false });

    result.push({ ...benchmark, dupes: dupes || [] });
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
    .select('*, category:categories(*)')
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
    .select('*, category:categories(*)')
    .eq('category_id', category.id)
    .order('type', { ascending: true });

  if (error) throw error;
  return data || [];
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
