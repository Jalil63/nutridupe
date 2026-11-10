import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const slug = params.slug;

  // 1. Fetch product from Supabase
  const { data: product, error } = await supabase
    .from('products')
    .select('name, affiliate_url')
    .eq('slug', slug)
    .maybeSingle();

  // If product not found in DB at all, safely fallback to homepage
  if (error || !product) {
    return NextResponse.redirect('https://www.nutridupe.com', { status: 307 });
  }

  const rawUrl = product.affiliate_url ? product.affiliate_url.trim() : '';

  // 2. Strict check: Only redirect if it is a FULL, valid product URL
  const isValidProductUrl =
    rawUrl.startsWith('http://') || rawUrl.startsWith('https://');

  if (isValidProductUrl && !rawUrl.includes('example.com')) {
    return NextResponse.redirect(rawUrl, { status: 307 });
  }

  // 3. Fallback: Clean Amazon Search query using exact product name
  const query = encodeURIComponent(product.name || slug.replace(/-/g, ' '));
  const amazonSearchUrl = `https://www.amazon.com/s?k=${query}`;

  return NextResponse.redirect(amazonSearchUrl, { status: 307 });
}
