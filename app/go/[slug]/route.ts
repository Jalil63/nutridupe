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
    .select('affiliate_url')
    .eq('slug', slug)
    .maybeSingle();

  const fallbackUrl = 'https://www.amazon.com';

  if (error || !product || !product.affiliate_url) {
    return NextResponse.redirect(fallbackUrl, { status: 307 });
  }

  return NextResponse.redirect(product.affiliate_url, { status: 307 });
}
