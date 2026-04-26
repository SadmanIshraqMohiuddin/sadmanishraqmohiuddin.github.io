import SEO from "@/components/SEO";
import Section from "@/components/Section";
import { capabilities, profile } from "@/data/portfolio";

export default function About() {
  return (
    <>
      <SEO
        title="About | Sadman Ishraq Mohiuddin — Senior Business Analyst"
        description="Senior Business Analyst & Operations Strategy professional based in Montreal. Cross-industry experience in banking, fintech, healthcare, logistics, government systems, renewable energy, digital platforms, and industrial engineering."
        path="/about"
      />

      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-24 sm:py-28">
          <p className="eyebrow text-white/70">About</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight text-balance">
            Translating complex enterprise problems into structured, scalable systems.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-white/75 leading-relaxed text-balance">
            I'm a Senior Business Analyst & Operations Strategy professional based in {profile.location.split(",")[0]},
            working at the intersection of business analysis, process improvement, and operational analytics.
            My focus is helping organizations turn ambiguous operational challenges into well-defined requirements,
            reliable platforms, and measurable business outcomes.
          </p>
        </div>
      </section>

      <Section narrow>
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed text-foreground/85">
            My career began as a Mechanical Engineer at <strong>ExxonMobil</strong>, delivering engineering
            analysis and reliability work across more than 40 global refinery and chemical sites and contributing
            to a $3M refinery retrofit project in highly regulated industrial environments. That foundation in
            standards-driven, code-compliant analysis shaped how I approach enterprise software today: rigorous,
            traceable, and outcome-focused.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            I transitioned into IT business analysis and enterprise platform delivery, working across
            <strong> banking, fintech, healthcare, logistics, renewable energy, government systems, and digital platforms</strong>.
            Today I lead requirements engineering for a large-scale enterprise cloud transformation program at a
            major Canadian financial institution — supporting modernization initiatives impacting approximately
            30,000 users across Microsoft 365, Azure, IAM, WAF, and FinOps governance.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Earlier, I owned requirements management for the <strong>Electronic Fiscal Device Management System (EFDMS)</strong>,
            a national fiscal compliance platform serving 30,000+ retail outlets and architected to scale to 600,000+ devices.
            I've also led operations and platform development for a digital healthcare logistics startup, scaling
            it to 14,000+ orders, ~$150K cumulative revenue, ~70% retention, and a 40+ partner pharmacy network —
            and led a ~200-person engineering and field operations team deploying 18 MW+ of solar infrastructure
            across 247 sites and nearly 800 solar-powered irrigation systems.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            I'm particularly interested in <strong>Senior Business Analyst, Operations Analyst, and consulting-style roles</strong>
            {" "}where complex systems, cross-functional teams, and data-driven decision making intersect.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Core strengths"
        title="Disciplined business analysis. Operational rigour. Delivery focus."
        intro="A practical toolkit grounded in years of cross-industry enterprise delivery."
        className="bg-secondary/40 border-t border-border"
      >
        <div className="grid gap-px bg-border md:grid-cols-2">
          {capabilities.map((cap) => (
            <div key={cap.group} className="bg-background p-10">
              <h3 className="font-display text-2xl tracking-tight">{cap.group}</h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/80">
                {cap.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 bg-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}