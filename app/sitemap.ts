import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

const BASE_URL = 'https://www.nutridupe.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/research-guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research-methodology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 2. Fetch dynamic products from Supabase for comparison URLs
  let productPages: MetadataRoute.Sitemap = [];

  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('slug, updated_at');

    if (!error && products) {
      productPages = products.map((product) => ({
        url: `${BASE_URL}/compare/${product.slug}`,
        lastModified: product.updated_at ? new Date(product.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error('Sitemap generation error fetching products:', err);
  }

  // Combine static pages and dynamic database product pages
  return [...staticPages, ...productPages];
}
