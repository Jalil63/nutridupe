import Link from 'next/link';
import { Star, ArrowRight, ShieldCheck, FlaskConical } from 'lucide-react';
import { formatCurrency } from '@/lib/data';
import type { Product } from '@/lib/types';

export function BenchmarkCard({ product }: { product: Product }) {
  return (
    <Link href={`/compare/${product.slug}`} className="group block">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {product.category?.name || 'Supplement'}
            </span>
            <h3 className="mt-1 text-xl font-bold leading-tight">{product.name}</h3>
            <p className="text-sm text-muted-foreground">by {product.brand}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{product.description}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {product.certifications.slice(0, 3).map((cert) => (
            <span key={cert} className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3 w-3" />
              {cert}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-xs text-muted-foreground">Price per serving</div>
            <div className="text-2xl font-bold">
              {formatCurrency(product.price_per_serving)}
            </div>
            <div className="text-xs text-muted-foreground">
              {formatCurrency(product.price)} / {product.servings_per_container} servings
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
            Compare <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
