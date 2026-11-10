import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: product, error } = await supabase
    .from('products')
    .select('name, affiliate_url')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !product) {
    return NextResponse.redirect('https://www.nutridupe.com', { status: 307 });
  }

  // 1. If a valid affiliate URL exists in DB, use it
  if (product.affiliate_url && product.affiliate_url.trim().startsWith('http')) {
    return NextResponse.redirect(product.affiliate_url.trim(), { status: 307 });
  }

  // 2. Safe Fallback: Search Amazon directly for product name
  const searchQuery = encodeURIComponent(product.name || 'supplement');
  const fallbackSearchUrl = `https://www.amazon.com/s?k=${searchQuery}`;

  return NextResponse.redirect(fallbackSearchUrl, { status: 307 });
}
