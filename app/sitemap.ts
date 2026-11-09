import { MetadataRoute } from 'next';
import { getAllBenchmarks } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nutridupe.com';

  // 1. Static site routes
  const staticRoutes = ['', '/compare', '/categories', '/about', '/research-guides', '/research-methodology'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  // 2. Dynamic benchmark comparison routes
  const benchmarks = await getAllBenchmarks();
  const benchmarkRoutes = benchmarks.map((b) => ({
    url: `${baseUrl}/compare/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...benchmarkRoutes];
}
