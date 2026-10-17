import { formatCurrency } from '@/lib/data';
import { Star, ShieldCheck, FlaskConical, Building2 } from 'lucide-react';
import type { BenchmarkWithDupes } from '@/lib/types';

export function BenchmarkHeader({ benchmark }: { benchmark: BenchmarkWithDupes }) {
  const lowestDupePrice = benchmark.dupes.length > 0
    ? Math.min(...benchmark.dupes.map(d => d.price_per_serving))
    : 0;
  const maxSavings = benchmark.price_per_serving - lowestDupePrice;
  const savingsPct = benchmark.price_per_serving > 0
    ? Math.round((maxSavings / benchmark.price_per_serving) * 100)
    : 0;

  return (
    <div className="rounded-xl border-2 border-primary/20 bg-gradient-sage p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Premium Benchmark Product
            </span>
            <h2 className="text-xl font-bold sm:text-2xl">{benchmark.name}</h2>
            <p className="text-sm text-muted-foreground">by {benchmark.brand}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Price / serving</div>
            <div className="text-2xl font-bold">{formatCurrency(benchmark.price_per_serving)}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              {benchmark.rating.toFixed(1)} rating
            </div>
          </div>
          {savingsPct > 0 && (
            <div className="rounded-lg bg-primary px-4 py-3 text-primary-foreground">
              <div className="text-2xl font-bold">{savingsPct}%</div>
              <div className="text-xs">max savings</div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {benchmark.cgmp_certified && (
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
            <ShieldCheck className="h-3 w-3 text-primary" /> cGMP
          </span>
        )}
        {benchmark.fda_registered && (
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
            <Building2 className="h-3 w-3 text-primary" /> FDA-Registered
          </span>
        )}
        {benchmark.third_party_tested && (
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
            <FlaskConical className="h-3 w-3 text-primary" /> Third-Party Tested
          </span>
        )}
        {benchmark.certifications.map((cert) => (
          <span key={cert} className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
}
