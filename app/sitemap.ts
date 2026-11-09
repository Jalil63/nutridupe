import type { MetadataRoute } from 'next';
import { getAllBenchmarks } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nutridupe.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/compare',
    '/categories',
    '/about',
    '/research-guides',
    '/research-methodology',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    const benchmarks = await getAllBenchmarks();
    const benchmarkRoutes: MetadataRoute.Sitemap = (benchmarks || []).map((b) => ({
      url: `${baseUrl}/compare/${b.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    }));

    return [...staticRoutes, ...benchmarkRoutes];
  } catch (error) {
    // Fallback if DB is unreachable during build phase
    return staticRoutes;
  }
}
