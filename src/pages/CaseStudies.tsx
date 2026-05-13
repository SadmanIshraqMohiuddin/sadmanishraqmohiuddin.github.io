import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Sadman Ishraq Mohiuddin - Senior Business Analyst"
        description="Detailed case studies covering enterprise cloud transformation, national fiscal compliance platforms, healthcare logistics, renewable energy infrastructure, and AI-enabled accounting research."
        path="/case-studies"
      />

      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-24 sm:py-28">
          <p className="eyebrow text-white/70">Case studies</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight text-balance">
            Selected engagements with structured, enterprise-grade outcomes.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-white/75 leading-relaxed text-balance">
            Each case study is presented in a consulting format: context, challenge, role, actions, tools,
            and measurable outcomes - to make the value clear at a glance.
          </p>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <li key={c.slug}>
                <Link
                  to={`/case-studies/${c.slug}`}
                  className="block py-2 text-sm text-white/70 hover:text-white border-l border-white/15 pl-3"
                >
                  <span className="text-white/50 mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}