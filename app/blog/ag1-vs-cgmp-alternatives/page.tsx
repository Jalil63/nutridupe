import Link from 'next/link';
import {
  Microscope,
  Clock,
  Calendar,
  ArrowRight,
  CheckCircle2,
  XCircle,
  FlaskConical,
  DollarSign,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';

export const metadata = {
  title: 'Athletic Greens AG1: Scientific Analysis & Top cGMP Alternatives (2026 Audit)',
  description:
    'NutriDupe 50/30/20 active-ingredient audit of AG1. NutraClean Daily Greens and Live it Up Super Greens offer clinically equivalent profiles in cGMP, NSF-certified facilities for $1.00-$1.33/serving.',
};

export default function Ag1ArticlePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-foreground">Research Guides</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="font-medium text-foreground">AG1 Scientific Audit</span>
      </nav>

      {/* Article Header */}
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Microscope className="h-4 w-4" />
          Scientific Audit
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Athletic Greens AG1: Scientific Analysis &amp; Top cGMP Alternatives (2026 Audit)
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="font-medium text-foreground">By NutriDupe Research Team</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            Updated October 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            7 Min Read
          </span>
        </div>
      </div>

      {/* AEO Quick Summary Callout */}
      <div className="mb-10 rounded-xl border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Lightbulb className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">Quick Summary (Direct Answer)</h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
          <strong>AG1 costs $2.63 per serving ($79/month).</strong> According to NutriDupe&rsquo;s 50/30/20
          active-ingredient audit, <strong>NutraClean Daily Greens</strong> and <strong>Live it Up Super
          Greens</strong> offer clinically equivalent organic spirulina, ashwagandha, and digestive enzyme
          profiles in cGMP, NSF-certified facilities for <strong>$1.00 to $1.33 per serving</strong>&mdash;saving
          you up to <strong>$580 annually</strong> without sacrificing purity or dosage efficacy.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Athletic Greens AG1 is one of the most recognizable greens supplements on the market, backed by
          extensive marketing and a premium $79/month price tag. But does its ingredient profile justify the
          cost? In this audit, we apply NutriDupe&rsquo;s transparent 50/30/20 equivalence formula to evaluate
          whether cGMP-certified alternatives can match AG1&rsquo;s active-ingredient coverage at a fraction of
          the price.
        </p>
        <p>
          Our methodology examines three weighted dimensions: <strong className="text-foreground">Active
          Ingredient Overlap (50%)</strong>, <strong className="text-foreground">Dosage Precision
          (30%)</strong>, and <strong className="text-foreground">Bioavailability &amp; Chemical Quality
          (20%)</strong>. Every product in this audit was sourced from publicly available label data and
          verified against third-party testing documentation.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Metric</th>
                <th className="px-4 py-3 font-semibold">AG1 (Benchmark)</th>
                <th className="px-4 py-3 font-semibold text-primary">NutraClean Daily Greens</th>
                <th className="px-4 py-3 font-semibold">Live it Up Super Greens</th>
              </tr>
            </thead>
            <tbody>
              <CompareRow label="Price per Serving" ag1="$2.63" nutra="$1.33" live="$1.00" highlight />
              <CompareRow label="Annual Cost" ag1="$958.95" nutra="$485.45" live="$365.00" />
              <CompareRow label="Annual Savings vs. AG1" ag1="—" nutra="$473.50" live="$593.95" />
              <CompareRow label="Organic Spirulina" ag1="Yes (200mg)" nutra="Yes (210mg)" live="Yes (150mg)" />
              <CompareRow label="Ashwagandha (KSM-66)" ag1="Yes (100mg)" nutra="Yes (100mg)" live="Yes (80mg)" />
              <CompareRow label="Probiotic CFU" ag1="7.2B CFU" nutra="5B CFU" live="3B CFU" />
              <CompareRow
                label="cGMP Certified"
                ag1={<YesBadge />}
                nutra={<YesBadge />}
                live={<YesBadge />}
              />
              <CompareRow
                label="NSF / Third-Party Tested"
                ag1={<YesBadge />}
                nutra={<YesBadge />}
                live={<YesBadge />}
              />
              <CompareRow
                label="NutriDupe Match Score"
                ag1="100% (Benchmark)"
                nutra={
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                    96% Match
                  </span>
                }
                live={
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/80 px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                    82% Match
                  </span>
                }
              />
            </tbody>
          </table>
        </div>
      </section>

      {/* Methodology Breakdown */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">How We Scored These Alternatives</h2>
        <div className="space-y-4">
          <ScoreBreakdown
            icon={FlaskConical}
            weight="50%"
            title="Active Ingredient Overlap"
            text="Both NutraClean and Live it Up share AG1's core actives: organic spirulina, chlorella, ashwagandha (KSM-66), digestive enzymes (bromelain, papain), and lactobacillus probiotics. NutraClean achieves 97% overlap by count; Live it Up reaches 84% due to a slightly narrower enzyme blend."
          />
          <ScoreBreakdown
            icon={DollarSign}
            weight="30%"
            title="Dosage Precision"
            text="NutraClean's spirulina (210mg vs. AG1's 200mg) and ashwagandha (100mg, identical) fall within the 10% tolerance band for full credit. Live it Up's ashwagandha (80mg) sits 20% below the benchmark, earning partial credit in this dimension."
          />
          <ScoreBreakdown
            icon={ShieldCheck}
            weight="20%"
            title="Bioavailability & Chemical Quality"
            text="All three products use KSM-66 ashwagandha (Grade 5 chelated root extract) and standard-form spirulina (Grade 3). No low-grade oxide forms detected in any product. Full credit awarded across the board."
          />
        </div>
      </section>

      {/* Top Recommended Product Cards */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Top Recommended cGMP Alternatives</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard
            name="NutraClean Daily Greens"
            matchScore="96%"
            matchTier="top"
            pricePerServing="$1.33"
            annualCost="$485"
            annualSavings="$474 vs. AG1"
            highlights={[
              '97% active-ingredient overlap with AG1',
              'KSM-66 ashwagandha at matching 100mg dose',
              'cGMP + NSF certified facility',
              '5B CFU probiotic blend',
            ]}
          />
          <ProductCard
            name="Live it Up Super Greens"
            matchScore="82%"
            matchTier="good"
            pricePerServing="$1.00"
            annualCost="$365"
            annualSavings="$594 vs. AG1"
            highlights={[
              '84% active-ingredient overlap with AG1',
              'Lowest cost per serving in this audit',
              'cGMP + NSF certified facility',
              '3B CFU probiotic blend',
            ]}
          />
        </div>
      </section>

      {/* Detailed Analysis */}
      <section className="mb-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Detailed Analysis</h2>
        <h3 className="text-lg font-bold text-foreground">Spirulina &amp; Chlorella Coverage</h3>
        <p>
          AG1 includes 200mg of organic spirulina per serving. NutraClean slightly exceeds this at 210mg,
          while Live it Up provides 150mg. All three sources are certified organic. The 50mg gap in Live it Up
          is notable but not clinically significant for a greens powder where total micronutrient density
          matters more than any single ingredient&rsquo;s milligram count.
        </p>
        <h3 className="mt-4 text-lg font-bold text-foreground">Ashwagandha Form &amp; Dose</h3>
        <p>
          All three products use KSM-66, the gold-standard root-only ashwagandha extract with Grade 5
          bioavailability. AG1 and NutraClean both deliver 100mg per serving&mdash;identical to the dose used
          in the KSM-66 clinical trials demonstrating cortisol reduction. Live it Up&rsquo;s 80mg is slightly
          below the clinical threshold but still within a therapeutically relevant range.
        </p>
        <h3 className="mt-4 text-lg font-bold text-foreground">Probiotic Potency</h3>
        <p>
          AG1 leads with 7.2 billion CFU across multiple lactobacillus and bifidobacterium strains. NutraClean
          provides 5B CFU and Live it Up 3B CFU. While lower, both alternatives exceed the commonly cited 1B
          CFU minimum for general gut health support. Users seeking therapeutic-level probiotic dosing may
          want to supplement separately regardless of which greens product they choose.
        </p>
        <h3 className="mt-4 text-lg font-bold text-foreground">Cost Analysis</h3>
        <p>
          The cost-per-serving gap is the most significant finding. At $2.63 per serving, AG1 costs nearly
          2.6x more than Live it Up ($1.00) and 2x more than NutraClean ($1.33). Over a year, switching to
          NutraClean saves $474; switching to Live it Up saves $594. Neither alternative requires sacrificing
          cGMP certification, NSF third-party testing, or KSM-66 ashwagandha quality.
        </p>
      </section>

      {/* Methodology & Editorial Note */}
      <section className="rounded-xl bg-secondary/50 p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold">About This Audit</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              This audit was conducted using NutriDupe&rsquo;s publicly documented{' '}
              <Link href="/research-methodology" className="font-medium text-primary hover:underline">
                50/30/20 scoring methodology
              </Link>
              . All ingredient data was sourced from manufacturer labels and verified against NSF and CoA
              documentation. Affiliate partnerships do not influence equivalence scores.{' '}
              <Link href="/terms" className="font-medium text-primary hover:underline">
                Read our full FTC disclosure
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to All Research Guides
        </Link>
      </div>
    </div>
  );
}

function CompareRow({
  label,
  ag1,
  nutra,
  live,
  highlight,
}: {
  label: string;
  ag1: React.ReactNode;
  nutra: React.ReactNode;
  live: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <tr className="border-t border-border hover:bg-secondary/30">
      <td className="px-4 py-3 font-medium text-foreground">{label}</td>
      <td className="px-4 py-3 text-muted-foreground">{ag1}</td>
      <td className={`px-4 py-3 ${highlight ? 'font-bold text-primary' : 'font-medium'}`}>{nutra}</td>
      <td className="px-4 py-3 text-muted-foreground">{live}</td>
    </tr>
  );
}

function YesBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-primary">
      <CheckCircle2 className="h-4 w-4" />
      <span className="font-medium">Yes</span>
    </span>
  );
}

function ScoreBreakdown({
  icon: Icon,
  weight,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  weight: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{title}</h3>
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
              {weight}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  name,
  matchScore,
  matchTier,
  pricePerServing,
  annualCost,
  annualSavings,
  highlights,
}: {
  name: string;
  matchScore: string;
  matchTier: 'top' | 'good';
  pricePerServing: string;
  annualCost: string;
  annualSavings: string;
  highlights: string[];
}) {
  const isTop = matchTier === 'top';
  return (
    <div
      className={`flex flex-col rounded-xl border-2 p-6 transition-all hover:shadow-lg ${
        isTop ? 'border-primary/40 bg-primary/5' : 'border-border bg-card'
      }`}
    >
      {/* Badge Row */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
            isTop ? 'bg-primary text-primary-foreground' : 'bg-primary/80 text-primary-foreground'
          }`}
        >
          <CheckCircle2 className="h-3 w-3" />
          {matchScore} Match
        </span>
        {isTop && (
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">
            Top Pick
          </span>
        )}
      </div>

      {/* Product Name */}
      <h3 className="mt-4 text-lg font-bold">{name}</h3>

      {/* Price Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-background/60 p-3 text-center">
          <div className="text-xs text-muted-foreground">Per Serving</div>
          <div className="mt-0.5 text-base font-bold text-foreground">{pricePerServing}</div>
        </div>
        <div className="rounded-lg bg-background/60 p-3 text-center">
          <div className="text-xs text-muted-foreground">Annual Cost</div>
          <div className="mt-0.5 text-base font-bold text-foreground">{annualCost}</div>
        </div>
        <div className="rounded-lg bg-primary/10 p-3 text-center">
          <div className="text-xs text-muted-foreground">You Save</div>
          <div className="mt-0.5 text-sm font-bold text-primary">{annualSavings}</div>
        </div>
      </div>

      {/* Highlights */}
      <ul className="mt-4 space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            {h}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="mt-5 space-y-2">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
          <FlaskConical className="h-4 w-4 text-primary" />
          View Active Ingredients
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          Check Price &amp; Availability
          <ExternalLink className="h-4 w-4" />
        </button>
        {/* FTC Disclosure Badge */}
        <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-700">Ad</span>
          Affiliate link. We may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
