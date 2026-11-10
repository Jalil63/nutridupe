import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const slug = params.slug;

  // Fetch product from Supabase
  const { data: product, error } = await supabase
    .from('products')
    .select('name, affiliate_url')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !product) {
    return NextResponse.redirect('https://www.nutridupe.com', { status: 307 });
  }

  const rawUrl = product.affiliate_url ? product.affiliate_url.trim() : '';

  // 1. If there's a real, specific product URL in the DB (like an actual Amazon product /dp/ ASIN link), use it
  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    // Make sure it's not a generic root domain placeholder
    if (!rawUrl.endsWith('amazon.com') && !rawUrl.endsWith('amazon.com/')) {
      return NextResponse.redirect(rawUrl, { status: 307 });
    }
  }

  // 2. DIAGNOSTIC FALLBACK: Redirect to Google Search instead of Amazon search
  // This bypasses Amazon's bot block entirely so we can see if the route itself works.
  const query = encodeURIComponent(product.name || slug.replace(/-/g, ' '));
  const safeSearchUrl = `https://www.google.com/search?q=${query}+supplement`;

  return NextResponse.redirect(safeSearchUrl, { status: 307 });
}
