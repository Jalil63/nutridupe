"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, ShieldCheck, FlaskConical, Building2, ShoppingBag, TrendingDown, Info, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IngredientModal } from '@/components/compare/ingredient-modal';
import { formatCurrency, calculateSavings } from '@/lib/data';
import type { BenchmarkWithDupes, Product, ProductIngredientWithIngredient } from '@/lib/types';

export function BenchmarkDetail({
  benchmark,
  benchmarkIngredients,
  dupeIngredientsMap,
}: {
  benchmark: BenchmarkWithDupes;
  benchmarkIngredients: ProductIngredientWithIngredient[];
  dupeIngredientsMap: { dupeId: string; ingredients: ProductIngredientWithIngredient[] }[];
}) {
  const [modalState, setModalState] = useState<{ open: boolean; product: Product | null; ingredients: ProductIngredientWithIngredient[] }>({
    open: false,
    product: null,
    ingredients: [],
  });

  const openModal = (product: Product, ingredients: ProductIngredientWithIngredient[]) => {
    setModalState({ open: true, product, ingredients });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/compare" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to all comparisons
      </Link>

      {/* Benchmark header card */}
      <div className="mb-8 rounded-2xl border-2 border-primary/20 bg-gradient-sage p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Premium Benchmark Product
              </span>
              <h1 className="text-2xl font-bold sm:text-3xl">{benchmark.name}</h1>
              <p className="text-sm text-muted-foreground">by {benchmark.brand}</p>
              <div className="mt-2 flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{benchmark.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">· {benchmark.category?.name}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Price per serving</div>
              <div className="text-3xl font-bold">{formatCurrency(benchmark.price_per_serving)}</div>
              <div className="text-xs text-muted-foreground">
                {formatCurrency(benchmark.price)} / {benchmark.servings_per_container} servings
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => openModal(benchmark, benchmarkIngredients)}
              className="gap-1.5"
            >
              <Info className="h-4 w-4" />
              Ingredients
            </Button>
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
            <span key={cert} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {cert}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{benchmark.description}</p>
      </div>

      {/* Dupes section */}
      <h2 className="mb-1 text-xl font-bold sm:text-2xl">
        cGMP-Certified Alternatives ({benchmark.dupes.length} found)
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Each alternative is manufactured in a cGMP-certified, FDA-registered facility with third-party testing for purity and potency.
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benchmark.dupes.map((dupe, idx) => {
          const savings = calculateSavings(benchmark.price_per_serving, dupe.price_per_serving);
          const dupeIngs = dupeIngredientsMap.find((d) => d.dupeId === dupe.id)?.ingredients || [];

          return (
            <div
              key={dupe.id}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {dupe.match_percentage !== null && (
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {dupe.match_percentage.toFixed(0)}% Active Match
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {savings.percentage > 0 ? `${savings.percentage}% cheaper` : 'Same price'}
                  </span>
                </div>
              )}

              <div className="mb-3">
                <h3 className="text-lg font-bold leading-tight">{dupe.name}</h3>
                <p className="text-sm text-muted-foreground">by {dupe.brand}</p>
              </div>

              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{dupe.description}</p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {dupe.cgmp_certified && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    <ShieldCheck className="h-3 w-3" /> cGMP
                  </span>
                )}
                {dupe.fda_registered && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    <Building2 className="h-3 w-3" /> FDA-Reg
                  </span>
                )}
                {dupe.third_party_tested && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    <FlaskConical className="h-3 w-3" /> 3rd-Party
                  </span>
                )}
                {dupe.certifications.slice(0, 2).map((cert) => (
                  <span key={cert} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="mb-4 grid grid-cols-2 gap-3 rounded-lg bg-secondary/60 p-3">
                <div>
                  <div className="text-xs text-muted-foreground">Price / serving</div>
                  <div className="text-xl font-bold">{formatCurrency(dupe.price_per_serving)}</div>
                  <div className="text-xs text-muted-foreground">
                    {formatCurrency(dupe.price)} / {dupe.servings_per_container} servings
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">vs. benchmark</div>
                  <div className="flex items-center gap-1 text-xl font-bold text-primary">
                    <TrendingDown className="h-4 w-4" />
                    {formatCurrency(savings.amount)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {dupe.rating.toFixed(1)} rating
                  </div>
                </div>
              </div>

              <div className="mt-auto space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => openModal(dupe, dupeIngs)}
                >
                  <span className="flex items-center gap-1.5">
                    <Info className="h-4 w-4" />
                    View Active Ingredients
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {dupe.affiliate_url && dupe.affiliate_active && (
                  <div>
                    <Button asChild className="w-full gap-2">
                      <a href={dupe.affiliate_url} target="_blank" rel="noopener noreferrer sponsored">
                        <ShoppingBag className="h-4 w-4" />
                        Shop Now
                      </a>
                    </Button>
                    <p className="mt-1.5 text-center text-[11px] leading-tight text-muted-foreground">
                      *Earns commission.
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <IngredientModal
        open={modalState.open}
        onOpenChange={(open) => setModalState((prev) => ({ ...prev, open }))}
        product={modalState.product || benchmark}
        ingredients={modalState.open ? modalState.ingredients : []}
      />
    </div>
  );
}
