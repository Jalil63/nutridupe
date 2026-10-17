import { ShieldCheck, FlaskConical, Building2, Eye, Search, BarChart3, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <ShieldCheck className="h-4 w-4" />
          Independent Research Platform
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About NutriDupe</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We help you find cGMP-certified, clinically equivalent supplement alternatives to expensive brand-name products — without compromising on quality.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-xl font-bold">What is a "NutriDupe"?</h2>
          <p className="mt-2 text-muted-foreground">
            A NutriDupe is explicitly defined as a cGMP-certified, clinically equivalent active-ingredient alternative
            manufactured in FDA-registered facilities with third-party testing (NSF, USP). It is <strong>not</strong> a cheap
            knock-off or unverified product from overseas marketplaces. Every alternative we recommend meets the same
            rigorous manufacturing and testing standards as the premium brands they replace.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Our Standards</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <StandardCard
              icon={Building2}
              title="FDA-Registered"
              description="All recommended products are manufactured in FDA-registered facilities."
            />
            <StandardCard
              icon={ShieldCheck}
              title="cGMP Certified"
              description="Current Good Manufacturing Practice certification ensures consistent quality."
            />
            <StandardCard
              icon={FlaskConical}
              title="Third-Party Tested"
              description="Independent verification by NSF, USP, or other accredited laboratories."
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">Our Methodology</h2>
          <div className="mt-4 space-y-4">
            <Step
              icon={Search}
              title="Identify Premium Benchmarks"
              description="We analyze the market's most popular and expensive supplement brands to understand their active ingredients, dosages, and bioavailability."
            />
            <Step
              icon={BarChart3}
              title="Compare Active Ingredients"
              description="We match each benchmark's active ingredients with cGMP-certified alternatives, calculating exact match percentages and price-per-serving savings."
            />
            <Step
              icon={Eye}
              title="Verify Quality Standards"
              description="Every dupe must be cGMP-certified, FDA-registered, and third-party tested. We verify certifications and reject any product that doesn't meet our standards."
            />
            <Step
              icon={CheckCircle2}
              title="Publish Transparent Results"
              description="We present side-by-side comparisons with full ingredient breakdowns, bioavailability scores, and clear savings calculations."
            />
          </div>
        </section>

        <section className="rounded-xl bg-secondary/50 p-6">
          <h2 className="text-lg font-bold">FTC Disclosure</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            NutriDupe is reader-supported. When you purchase through links on our site, we may earn an affiliate commission
            at no additional cost to you. This does not influence our independent research or product recommendations.
            All products are evaluated solely on their merits — active ingredient equivalence, manufacturing quality, and value.
          </p>
        </section>

        <section className="rounded-xl bg-muted/60 p-6">
          <h2 className="text-sm font-bold">FDA Disclaimer</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            These statements have not been evaluated by the Food and Drug Administration. These products are not intended to
            diagnose, treat, cure, or prevent any disease. NutriDupe is an independent research and comparison platform and
            does not provide medical advice. Always consult a qualified healthcare professional before starting any supplement regimen.
          </p>
        </section>
      </div>
    </div>
  );
}

function StandardCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Step({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
