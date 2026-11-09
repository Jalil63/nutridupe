import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { slug } = await params;

  // 1. Look up the product/dupe in Supabase by slug
  const { data: product, error } = await supabase
    .from('products')
    .select('affiliate_url, name')
    .eq('slug', slug)
    .maybeSingle();

  // Fallback destination if product slug isn't found
  const fallbackUrl = 'https://www.amazon.com';

  if (error || !product || !product.affiliate_url) {
    return NextResponse.redirect(fallbackUrl, { status: 307 });
  }

  // 2. Perform a 307 Temporary Redirect to the target affiliate link
  return NextResponse.redirect(product.affiliate_url, { status: 307 });
}
