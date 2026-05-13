import SEO from "@/components/SEO";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience | Sadman Ishraq Mohiuddin - Senior Business Analyst"
        description="Senior Business Analyst experience across enterprise cloud transformation, government fiscal platforms, healthcare logistics, renewable energy infrastructure, and global engineering at ExxonMobil."
        path="/experience"
      />

      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-24 sm:py-28">
          <p className="eyebrow text-white/70">Experience</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight text-balance">
            A decade of cross-industry enterprise delivery.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-white/75 leading-relaxed text-balance">
            From standards-driven mechanical engineering at ExxonMobil to leading business analysis on a Canadian
            enterprise cloud transformation - every role has reinforced the same discipline: rigorous requirements,
            structured delivery, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-prose">
          <ol className="relative">
            {experiences.map((e, i) => (
              <li key={`${e.company}-${e.period}`} className="grid lg:grid-cols-12 gap-8 py-12 border-t border-border first:border-t-0">
                <div className="lg:col-span-4">
                  <p className="eyebrow">{e.period}</p>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight text-balance">
                    {e.role}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 font-medium">{e.company}</p>
                  <p className="text-sm text-muted-foreground">{e.location}</p>
                  {e.stack && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {e.stack.map((s) => (
                        <li
                          key={s}
                          className="text-[11px] uppercase tracking-wider px-2.5 py-1 border border-border text-muted-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base sm:text-lg leading-relaxed text-foreground/85 text-balance">
                    {e.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {e.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                        <span className="mt-2 h-1 w-3 bg-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}