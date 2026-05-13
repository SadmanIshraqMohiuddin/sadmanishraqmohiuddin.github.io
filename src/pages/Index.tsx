import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Section from "@/components/Section";
import AnimatedNumber from "@/components/AnimatedNumber";
import { profile, metrics, experiences, caseStudies, capabilities } from "@/data/portfolio";

export default function Index() {
  const previewExperience = experiences.slice(0, 4);
  const previewCaseStudies = caseStudies.slice(0, 3);

  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [metricsInView, setMetricsInView] = useState(false);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMetricsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Sadman Ishraq Mohiuddin | Senior Business Analyst & Operations Strategy Professional"
        description="Senior Business Analyst based in Montreal specializing in requirements engineering, enterprise systems, cloud transformation, operations strategy, process improvement, data analytics, and platform delivery across financial services, healthcare, government, logistics, renewable energy, and technology sectors."
        path="/"
      />

      {/* Hero */}
      <section className="relative bg-navy text-navy-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--primary-foreground)) 0, transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--primary-foreground)) 0, transparent 35%)",
          }}
        />
        <div className="container-prose relative pt-24 pb-24 sm:pt-32 sm:pb-32">
          <div className="max-w-4xl">
            <p className="eyebrow text-white/70 animate-fade-in">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
            </p>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance animate-fade-up">
              {profile.headline}
            </h1>
            <p className="mt-8 max-w-3xl text-lg sm:text-xl text-white/75 leading-relaxed text-balance animate-fade-up [animation-delay:120ms]">
              {profile.subheadline}
            </p>
            <p className="mt-6 text-sm text-white/55 animate-fade-up [animation-delay:200ms]">
              {profile.positioning}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:280ms]">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-white text-navy text-sm font-medium hover:bg-white/90 transition-colors"
              >
                View Experience <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility metrics */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-prose py-14" ref={metricsRef}>
          <p className="eyebrow mb-8">Selected outcomes at scale</p>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-primary pl-5">
                <p className="font-display text-3xl sm:text-4xl text-foreground tracking-tight tabular-nums">
                  <AnimatedNumber value={m.value} startSignal={metricsInView} durationMs={1800} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected experience */}
      <Section
        eyebrow="Selected experience"
        title="Cross-industry delivery across enterprise systems"
        intro="From a major Canadian financial institution's cloud transformation to a national fiscal compliance platform, healthcare logistics, and global engineering at ExxonMobil."
      >
        <div className="grid gap-px bg-border md:grid-cols-2">
          {previewExperience.map((e) => (
            <article
              key={`${e.company}-${e.period}`}
              className="bg-background p-8 hover:bg-secondary/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                {e.period}
              </p>
              <h3 className="mt-3 font-display text-xl tracking-tight">{e.role}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {e.company} · {e.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {e.summary}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover"
          >
            View full experience <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Selected case studies */}
      <Section
        eyebrow="Selected case studies"
        title="Engagements with measurable, enterprise-grade impact"
        intro="Structured case studies covering enterprise cloud transformation, national government platforms, healthcare logistics, and renewable infrastructure."
        className="bg-secondary/30"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {previewCaseStudies.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies#${c.slug}`}
              className="group bg-background border border-border p-8 flex flex-col hover:border-primary transition-colors"
            >
              <p className="eyebrow">{c.sector}</p>
              <h3 className="mt-4 font-display text-xl tracking-tight">{c.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {c.context}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section
        dark
        eyebrow="Core capabilities"
        title="Where business analysis meets operations strategy"
        intro="Disciplined requirements engineering, operational analytics, and enterprise system delivery - applied across financial services, government, healthcare, energy, and platform businesses."
      >
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
          {capabilities.map((cap) => {
            const meta: Record<string, { icon: string; accent: string }> = {
              "Business Analysis & Requirements": { icon: "📋", accent: "hsl(45 90% 60%)" },
              "Operations & Strategy": { icon: "⚙️", accent: "hsl(25 90% 58%)" },
              "Data & Tools": { icon: "📊", accent: "hsl(140 60% 55%)" },
              "Enterprise Technology": { icon: "☁️", accent: "hsl(200 85% 60%)" },
            };
            const m = meta[cap.group] ?? { icon: "•", accent: "hsl(var(--primary-foreground))" };
            return (
              <div key={cap.group}>
                <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: m.accent }}>
                  <span aria-hidden className="text-lg leading-none">{m.icon}</span>
                  <h3 className="font-display text-lg tracking-tight text-white">{cap.group}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cap.items.map((it) => (
                    <li
                      key={it}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/85 transition-colors hover:bg-white/10 hover:border-white/30"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-20 sm:py-24 grid gap-10 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <p className="eyebrow text-white/70">Let's talk</p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-balance">
              Interested in discussing a Senior Business Analyst, Operations Strategy, or Consulting opportunity?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-white text-navy text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Send a message <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Email directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
