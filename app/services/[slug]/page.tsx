import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SERVICES, getService } from "@/lib/services-data";

const SITE = "https://www.swetkaar.com";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const url = `${SITE}/services/${s.slug}`;
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: url },
    openGraph: { title: `${s.seoTitle} | Swetkaar AI`, description: s.seoDescription, url },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${SITE}/services/${service.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.seoDescription,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: "Worldwide",
        url: `${SITE}/services/${service.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-4xl px-6 pt-40 text-sm text-white/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="transition hover:text-gold">Home</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><Link href="/services" className="transition hover:text-gold">Services</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-white/80">{service.title}</li>
          </ol>
        </nav>
        <section className="relative mx-auto w-full max-w-4xl px-6 pt-6 pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{service.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-soft-gold">
              Book a free call
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-gold/40 hover:text-gold">
              All services
            </Link>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-4xl px-6 pb-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">What you get</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {service.deliverables.map((d) => (
              <div key={d.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-sm font-semibold text-white">{d.label}</h2>
                <ul className="mt-4 space-y-2.5">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-3xl px-6 pb-24">
          <h2 className="mb-8 font-display text-2xl text-white md:text-3xl">Frequently asked questions</h2>
          <div className="flex flex-col gap-4">
            {service.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-6">
                <summary className="cursor-pointer list-none text-base font-semibold text-white">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-4xl px-6 pb-28">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Explore more</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/30">
                <h2 className="font-display text-base text-white">{s.title}</h2>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-gold">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
