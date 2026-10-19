import { getCategories, getBenchmarks } from '@/lib/data';
import { HomeSearch } from '@/components/home/home-search';
import { CategoryPills } from '@/components/home/category-pills';
import { BenchmarkCard } from '@/components/home/benchmark-card';
import { ShieldCheck, FlaskConical, DollarSign, TrendingDown } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let categories = [];
  let benchmarks = [];

  try {
    const [fetchedCategories, fetchedBenchmarks] = await Promise.all([
      getCategories(),
      getBenchmarks(),
    ]);
    categories = fetchedCategories || [];
    benchmarks = fetchedBenchmarks || [];
  } catch (error) {
    console.warn('Database not fully ready, rendering page safely with fallback data:', error);
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-sage">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              cGMP-Certified & Third-Party Tested Alternatives
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find <span className="text-primary">clinically equivalent</span> supplement alternatives
            </h1>
            <p className="mt-6 text-balance text-lg text-muted-foreground">
              Compare premium brand-name supplements with cGMP-certified, FDA-registered, third-party tested alternatives — and save up to 80% without compromising on quality.
            </p>
            <div className="mt-8">
              <HomeSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      {categories.length > 0 && (
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Browse by Category
            </h2>
            <CategoryPills categories={categories} />
          </div>
        </section>
      )}

      {/* Stats Bar */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          <StatCard icon={ShieldCheck} label="cGMP Certified" value="100%" />
          <StatCard icon={FlaskConical} label="Third-Party Tested" value="NSF / USP" />
          <StatCard icon={TrendingDown} label="Average Savings" value="up to 80%" />
          <StatCard icon={DollarSign} label="Cost per Serving" value="From $0.18" />
        </div>
      </section>

      {/* Benchmark Products */}
      {benchmarks.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Featured Comparisons
              </h2>
              <p className="mt-2 text-muted-foreground">
                Click a premium product below to see its cGMP-certified dupes side-by-side.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benchmarks.map((product) => (
              <BenchmarkCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Ad Slot */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <AdSlot label="Advertisement" />
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            How NutriDupe Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <HowItWorksStep
              number="01"
              title="Search a Product or Ingredient"
              description="Type in a premium supplement name or an active ingredient like 'Creatine Monohydrate' to begin."
            />
            <HowItWorksStep
              number="02"
              title="Compare cGMP-Certified Dupes"
              description="View side-by-side comparisons with exact active-ingredient match percentages, bioavailability ratings, and savings."
            />
            <HowItWorksStep
              number="03"
              title="Shop with Confidence"
              description="Every dupe is cGMP-certified, FDA-registered, and third-party tested. Click through to verified retailers."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function HowItWorksStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function AdSlot({ label }: { label: string }) {
  return (
    <div className="flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/50">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label} — Google AdSense</span>
    </div>
  );
}
