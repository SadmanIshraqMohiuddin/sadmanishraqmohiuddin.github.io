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

        {/* Ticker */}
        <div className="relative border-t border-white/10">
          <div className="overflow-hidden py-4">
            <div className="flex w-max animate-[ticker_58s_linear_infinite] whitespace-nowrap">
              {[0, 1].map((dup) => (
                <ul key={dup} aria-hidden={dup === 1} className="flex items-center shrink-0">
                  {[
                    "Enterprise Cloud Transformation",
                    "Government Fiscal Compliance",
                    "National Fiscal Compliance (EFDMS)",
                    "Healthcare Logistics",
                    "Digital EdTech Platform Delivery",
                    "Renewable Energy Infrastructure",
                    "AI IFRS Accounting Research",
                    "Requirements Engineering",
                    "Agile Delivery",
                    "UAT & Business Sign-Off",
                    "Microsoft Azure Migration",
                    "SQL",
                    "Power BI",
                    "Tableau",
                    "CCBA® In Progress",
                    "BPMN Process Mapping",
                    "Stakeholder Management",
                    "Cloud Transformation",
                  ].map((item, i) => (
                    <li key={`${dup}-${i}`} className="flex items-center">
                      <span className="px-6 text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                        {item}
                      </span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-[hsl(45_70%_55%)]" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility metrics */}
      <section style={{ backgroundColor: "#0c1929" }}>
        <div className="container-prose py-16" ref={metricsRef}>
          <p className="eyebrow mb-10 text-white/60">Selected outcomes at scale</p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="group relative p-8 transition-colors hover:bg-white/[0.04]"
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: "#e8c97a" }}
                />
                <p
                  className="font-display tracking-tight tabular-nums text-white"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3rem)", lineHeight: 1.05 }}
                >
                  <AnimatedNumber
                    value={m.value}
                    startSignal={metricsInView}
                    durationMs={1800}
                    accentClassName="text-[#e8c97a]"
                  />
                </p>
                <p
                  className="mt-4 leading-relaxed"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}
                >
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
            const meta: Record<string, { icon: string; accent: string; pillColor: string; pillBg: string; pillBorder: string }> = {
              "Business Analysis & Requirements": {
                icon: "📋",
                accent: "#2a9d8f",
                pillColor: "#2a9d8f",
                pillBg: "rgba(42,157,143,0.08)",
                pillBorder: "rgba(42,157,143,0.25)",
              },
              "Operations & Strategy": {
                icon: "⚙️",
                accent: "#c9a84c",
                pillColor: "#c9a84c",
                pillBg: "rgba(201,168,76,0.08)",
                pillBorder: "rgba(201,168,76,0.25)",
              },
              "Data & Tools": {
                icon: "📊",
                accent: "#a78bfa",
                pillColor: "#a78bfa",
                pillBg: "rgba(167,139,250,0.08)",
                pillBorder: "rgba(167,139,250,0.25)",
              },
              "Enterprise Technology": {
                icon: "☁️",
                accent: "#52b788",
                pillColor: "#52b788",
                pillBg: "rgba(82,183,136,0.08)",
                pillBorder: "rgba(82,183,136,0.25)",
              },
            };
            const m = meta[cap.group] ?? {
              icon: "•",
              accent: "hsl(var(--primary-foreground))",
              pillColor: "#ffffff",
              pillBg: "rgba(255,255,255,0.04)",
              pillBorder: "rgba(255,255,255,0.15)",
            };
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
                      className="inline-flex items-center border px-3.5 py-1.5 text-xs font-medium transition-colors"
                      style={{
                        borderRadius: "100px",
                        color: m.pillColor,
                        backgroundColor: m.pillBg,
                        borderColor: m.pillBorder,
                      }}
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
