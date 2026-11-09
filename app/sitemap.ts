import { MetadataRoute } from 'next';
import { getAllBenchmarks } from '@/lib/data';

// Force dynamic execution at build time
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nutridupe.com';

  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/compare',
    '/categories',
    '/about',
    '/research-guides',
    '/research-methodology',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    const benchmarks = await getAllBenchmarks();
    const benchmarkPages: MetadataRoute.Sitemap = (benchmarks || []).map((b) => ({
      url: `${baseUrl}/compare/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    }));

    return [...staticPages, ...benchmarkPages];
  } catch (error) {
    return staticPages;
  }
}
