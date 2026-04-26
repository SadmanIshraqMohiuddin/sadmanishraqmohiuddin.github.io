import SEO from "@/components/SEO";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Sadman Ishraq Mohiuddin — Senior Business Analyst"
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
            and measurable outcomes — to make the value clear at a glance.
          </p>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <li key={c.slug}>
                <a
                  href={`#${c.slug}`}
                  className="block py-2 text-sm text-white/70 hover:text-white border-l border-white/15 pl-3"
                >
                  <span className="text-white/50 mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="py-20 sm:py-24">
        <div className="container-prose space-y-24">
          {caseStudies.map((c, i) => (
            <article id={c.slug} key={c.slug} className="scroll-mt-24">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="eyebrow">{c.sector}</p>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-balance">
                {c.title}
              </h2>

              <div className="mt-10 grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7 space-y-8">
                  <Block label="Context">{c.context}</Block>
                  <Block label="Challenge">{c.challenge}</Block>
                  <Block label="My role">{c.role}</Block>
                  <Block label="Actions">
                    <ul className="space-y-2.5">
                      {c.actions.map((a, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/85">
                          <span className="mt-2 h-1 w-3 bg-primary shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                </div>

                <aside className="lg:col-span-5 space-y-8">
                  <div className="bg-secondary/50 border-l-2 border-primary p-6">
                    <p className="eyebrow mb-4">Outcomes</p>
                    <ul className="space-y-3">
                      {c.outcomes.map((o, idx) => (
                        <li key={idx} className="text-sm text-foreground/85 leading-relaxed">
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Tools & methods</p>
                    <ul className="flex flex-wrap gap-2">
                      {c.tools.map((t) => (
                        <li
                          key={t}
                          className="text-[11px] uppercase tracking-wider px-2.5 py-1 border border-border text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Skills demonstrated</p>
                    <ul className="flex flex-wrap gap-2">
                      {c.skills.map((s) => (
                        <li
                          key={s}
                          className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <div className="text-base leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}