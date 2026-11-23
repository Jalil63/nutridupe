import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function isDirectAmazonProductUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const isAmazonHost =
      parsed.hostname === 'www.amazon.com' ||
      parsed.hostname === 'amazon.com';
    const isProductPath =
      parsed.pathname.includes('/dp/') ||
      parsed.pathname.includes('/gp/product/');

    return (
      (parsed.protocol === 'https:' || parsed.protocol === 'http:') &&
      isAmazonHost &&
      isProductPath
    );
  } catch {
    return false;
  }
}

export async function GET(
  _request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const { data: product, error } = await supabase
    .from('products')
    .select('affiliate_url, is_active')
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();

  if (error || !product || !product.affiliate_url) {
    return NextResponse.redirect('https://www.nutridupe.com/compare', {
      status: 307,
    });
  }

  const targetUrl = product.affiliate_url.trim();

  if (!isDirectAmazonProductUrl(targetUrl)) {
    return NextResponse.redirect('https://www.nutridupe.com/compare', {
      status: 307,
    });
  }

  return NextResponse.redirect(targetUrl, { status: 307 });
}
