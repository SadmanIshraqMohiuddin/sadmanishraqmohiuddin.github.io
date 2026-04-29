import SEO from "@/components/SEO";
import Section from "@/components/Section";
import { certifications, education, languages, honors, publications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <>
      <SEO
        title="Certifications & Education | Sadman Ishraq Mohiuddin"
        description="Professional certifications, education, languages, honors, and publications — including Google Data Analytics, CCBA training, and a BEng (Hons) in Aerospace Engineering from Queen Mary, University of London."
        path="/certifications"
      />

      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-24 sm:py-28">
          <p className="eyebrow text-white/70">Credentials</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight text-balance">
            Certifications, education, publications Languages & recognition.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-white/75 leading-relaxed text-balance">
            A foundation in engineering and analytics, complemented by structured business analysis training
            and continuing professional development.
          </p>
        </div>
      </section>

      <Section eyebrow="Certifications" title="Professional certifications">
        <ul className="grid gap-px bg-border md:grid-cols-2">
          {certifications.map((c) => (
            <li key={c} className="bg-background p-6 text-foreground/85 leading-relaxed">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Education"
        title="Academic background"
        className="bg-secondary/40 border-t border-border"
      >
        <ol className="space-y-8">
          {education.map((e) => (
            <li key={e.school} className="grid gap-2 sm:grid-cols-12 sm:gap-8 border-l-2 border-primary pl-6">
              <div className="sm:col-span-3">
                <p className="eyebrow">{e.period}</p>
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-display text-xl tracking-tight">{e.school}</h3>
                <p className="mt-1 text-foreground/80">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Honors & awards" title="Recognition">
        <ul className="grid gap-px bg-border md:grid-cols-2">
          {honors.map((h) => (
            <li key={h} className="bg-background p-6 text-foreground/85 leading-relaxed">
              {h}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Languages & publication"
        title="Languages and selected publication"
        className="bg-secondary/40 border-t border-border"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">Languages</p>
            <ul className="space-y-3">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between border-b border-border pb-3"
                >
                  <span className="font-medium">{l.name}</span>
                  <span className="text-sm text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Publication</p>
            <ul className="space-y-8">
              {publications.map((p) => (
                <li
                  key={p.title}
                  className="rounded-lg border border-border bg-background p-6 shadow-sm"
                >
                  <dl className="space-y-4 text-foreground/85 leading-relaxed">
                    <div>
                      <dt className="font-bold text-foreground">Title</dt>
                      <dd className="mt-1">{p.title}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Publisher</dt>
                      <dd className="mt-1">{p.publisher}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Conference</dt>
                      <dd className="mt-1">{p.conference}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Description</dt>
                      <dd className="mt-1">{p.description}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Links</dt>
                      <dd className="mt-2 space-y-3">
                        {p.links.map((ln) => (
                          <div key={ln.url}>
                            <p className="font-semibold text-foreground text-sm">
                              {ln.label}
                            </p>
                            <a
                              href={ln.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline underline-offset-4 hover:no-underline break-all text-sm"
                            >
                              {ln.url}
                            </a>
                          </div>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Keywords</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {p.keywords.map((k) => (
                          <span
                            key={k}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                          >
                            {k}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}