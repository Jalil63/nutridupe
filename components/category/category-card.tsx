import Link from 'next/link';
import type { Category } from '@/lib/types';
import type { LucideIcon } from 'lucide-react';

export function CategoryCard({
  category,
  icon: Icon,
  benchmarkCount,
}: {
  category: Category;
  icon: LucideIcon;
  benchmarkCount: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold">{category.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{category.description}</p>
      <div className="mt-3 text-xs font-medium text-primary">
        {benchmarkCount > 0
          ? `${benchmarkCount} benchmark ${benchmarkCount === 1 ? 'product' : 'products'}`
          : 'Browse products'}
      </div>
    </Link>
  );
}
