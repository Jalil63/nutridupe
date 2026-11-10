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

  // 1. If affiliate URL exists, redirect directly
  if (product.affiliate_url && product.affiliate_url.trim().startsWith('http')) {
    return NextResponse.redirect(product.affiliate_url.trim(), { status: 307 });
  }

  // 2. Safe Fallback: Redirect to Amazon search query for product name
  const searchQuery = encodeURIComponent(product.name || 'supplement');
  return NextResponse.redirect(`https://www.amazon.com/s?k=${searchQuery}`, { status: 307 });
}
