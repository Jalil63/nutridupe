"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { getCategoryIcon } from '@/lib/icons';
import type { Category } from '@/lib/types';

export function CategoryPills({ categories }: { categories: Category[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const Icon = getCategoryIcon(category.icon);
        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={cn(
              "group flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5",
              "text-sm font-medium text-foreground transition-all",
              "hover:border-primary hover:bg-primary/5 hover:shadow-sm"
            )}
          >
            <Icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}