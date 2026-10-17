import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Tag, Microscope, FlaskConical, DollarSign, Leaf } from 'lucide-react';

export const metadata = {
  title: 'NutriDupe Research Guides & Scientific Audits',
  description: 'Evidence-based breakdowns, active-ingredient audits, and price-per-serving analyses of popular supplements and their cGMP-certified alternatives.',
};

const articles = [
  {
    slug: 'ag1-vs-cgmp-alternatives',
    title: 'Athletic Greens AG1: Scientific Analysis & Top cGMP Alternatives (2026 Audit)',
    excerpt: 'Our 50/30/20 active-ingredient audit of AG1 reveals two cGMP-certified alternatives delivering clinically equivalent spirulina, ashwagandha, and digestive enzyme profiles at less than half the cost per serving.',
    category: 'Scientific Audit',
    readTime: '7 Min Read',
    date: 'October 2026',
    featured: true,
  },
  {
    slug: 'magnesium-glycinate-vs-oxide',
    title: 'Magnesium Glycinate vs. Oxide: Bioavailability Grade 5 vs. Grade 1 Explained',
    excerpt: 'Why magnesium oxide absorbs at just 4% while chelated glycinate reaches over 80%. We break down the chemistry, clinical data, and cost implications for each form.',
    category: 'Bioavailability Guide',
    readTime: '5 Min Read',
    date: 'October 2026',
    featured: false,
  },
  {
    slug: 'ashwagandha-ksm-66-sourcing',
    title: 'KSM-66 Ashwagandha: Sourcing Standards and cGMP Equivalents',
    excerpt: 'Not all ashwagandha extracts are created equal. We compare KSM-66 root-only extraction against generic full-spectrum powders and identify verified alternatives.',
    category: 'Ingredient Deep Dive',
    readTime: '6 Min Read',
    date: 'October 2026',
    featured: false,
  },
];

const categoryIcons: Record<string, typeof Microscope> = {
  'Scientific Audit': Microscope,
  'Bioavailability Guide': FlaskConical,
  'Ingredient Deep Dive': Leaf,
};

export default function BlogIndexPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <BookOpen className="h-4 w-4" />
          Research Guides
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          NutriDupe Research Guides &amp; Scientific Audits
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Evidence-based breakdowns, active-ingredient audits, and price-per-serving analyses.
        </p>
      </div>

      {/* Featured Article */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="group mb-10 block">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all group-hover:border-primary/30 group-hover:shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Visual Side */}
              <div className="relative flex min-h-[240px] items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-8">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Microscope className="h-8 w-8" />
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Featured Article
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight group-hover:text-primary sm:text-2xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read Full Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Article Grid */}
      <div className="mb-6 flex items-center gap-2">
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">More Research Guides</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((article) => {
          const CatIcon = categoryIcons[article.category] || BookOpen;
          return (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all group-hover:border-primary/30 group-hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CatIcon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {article.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-12 rounded-xl bg-secondary/50 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">More guides coming soon.</strong> We publish new scientific audits and ingredient deep dives every month. Have a product you want audited?{' '}
          <a href="mailto:hello@nutridupe.com?subject=NutriDupe%20Inquiry%20%7C%20General%20Question&body=Hello%20NutriDupe%20Team%2C%0A%0AI%20have%20a%20question%20or%20product%20suggestion%20regarding..." className="font-medium text-primary hover:underline">
            Let us know.
          </a>
        </p>
      </div>
    </div>
  );
}
