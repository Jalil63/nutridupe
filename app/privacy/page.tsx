import { Lock, BarChart3, Cookie, Megaphone, ExternalLink, Ban, Mail } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | NutriDupe',
  description: 'Privacy policy for the NutriDupe research and comparison platform.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Lock className="h-4 w-4" />
          Legal
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 15, 2026</p>
      </div>

      <div className="space-y-8">
        {/* Intro */}
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            This Privacy Policy describes how NutriDupe Research Platform (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects information when you visit
            nutridupe.com (the &ldquo;Site&rdquo;). By using the Site, you agree to the practices described
            in this policy.
          </p>
        </div>

        {/* Analytics */}
        <Section number="1" icon={BarChart3} title="Analytics Usage">
          <p>
            We use third-party analytics tools, such as Google Analytics, to understand how visitors interact
            with our Site. These tools collect non-personally identifiable information including page views,
            session duration, referral sources, device type, and approximate geographic location (city/region
            level). This data is used to improve site performance, content relevance, and user experience.
          </p>
          <p className="mt-3">
            Analytics data is aggregated and anonymized. We do not link analytics data to your identity or
            use it to identify individual users.
          </p>
        </Section>

        {/* Cookies */}
        <Section number="2" icon={Cookie} title="Cookie Tracking">
          <p>
            Our Site uses cookies and similar tracking technologies to enable core functionality, remember
            preferences, measure traffic, and serve relevant advertising. Cookies are small text files stored
            on your device by your browser.
          </p>
          <p className="mt-3">
            We use the following categories of cookies:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong className="text-foreground">Essential cookies</strong> — required for the Site to function correctly (e.g., navigation state).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong className="text-foreground">Analytics cookies</strong> — help us understand visitor behavior and improve content.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong className="text-foreground">Advertising cookies</strong> — used by Google AdSense to display relevant ads (see below).</span>
            </li>
          </ul>
          <p className="mt-3">
            You can control or disable cookies through your browser settings. Disabling certain cookies may
            affect Site functionality.
          </p>
        </Section>

        {/* Google AdSense */}
        <Section number="3" icon={Megaphone} title="Google AdSense & Third-Party Advertising">
          <p>
            We participate in Google AdSense, which may display advertisements on the Site. Google AdSense
            uses cookies to serve ads based on your prior visits to this and other websites. Google&rsquo;s
            use of advertising cookies enables it and its partners to serve ads to you based on your visit to
            our Site and/or other sites on the internet.
          </p>
          <p className="mt-3">
            You may opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
            >
              Google Ads Settings
              <ExternalLink className="h-3 w-3" />
            </a>
            . You can also learn more about how Google uses data at{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
            >
              Google&rsquo;s Partner Sites policy
              <ExternalLink className="h-3 w-3" />
            </a>
            .
          </p>
        </Section>

        {/* Outbound Affiliate */}
        <Section number="4" icon={ExternalLink} title="Outbound Affiliate Attribution">
          <p>
            Our Site contains affiliate links to third-party retailers. When you click an affiliate link
            (such as a &ldquo;Shop Now&rdquo; button), you are redirected to the retailer&rsquo;s website.
            These outbound clicks may include affiliate identifiers (such as a referral tag or tracking
            parameter) that allow the retailer to attribute your purchase to NutriDupe.
          </p>
          <p className="mt-3">
            Once you leave our Site, the third-party retailer&rsquo;s own privacy policy applies to any data
            collected. We do not control or have access to data collected by external retailers. We encourage
            you to review their privacy policies before providing any personal information.
          </p>
        </Section>

        {/* Data Non-Sale */}
        <Section number="5" icon={Ban} title="Data Non-Sale Statement">
          <p>
            NutriDupe does not sell, rent, or trade your personal information to third parties. We do not
            collect or store sensitive personal data such as names, addresses, phone numbers, or payment
            information — our Site does not require account registration or checkout functionality.
          </p>
          <p className="mt-3">
            The limited data we do collect (analytics and cookie data) is used solely for improving the Site
            and is never shared with or sold to advertisers, data brokers, or any other third party for
            commercial purposes.
          </p>
        </Section>

        {/* Contact */}
        <div className="rounded-xl bg-secondary/50 p-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Privacy questions? Reach us at{' '}
                <a href="mailto:hello@nutridupe.com?subject=NutriDupe%20Inquiry%20%7C%20General%20Question&body=Hello%20NutriDupe%20Team%2C%0A%0AI%20have%20a%20question%20or%20product%20suggestion%20regarding..." className="font-medium text-primary hover:underline">
                  hello@nutridupe.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <h2 className="text-lg font-bold">
          <span className="text-primary">{number}.</span> {title}
        </h2>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
