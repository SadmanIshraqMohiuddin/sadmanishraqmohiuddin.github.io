import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  // Custom pre-built HTML pages for these case studies
  const embeddedPages: Record<string, string> = {
    "ifrs-ai-assistant": "/embedded/ifrs-ai-assistant.html",
    "efdms": "/embedded/efdms.html",
  };
  if (slug && embeddedPages[slug]) {
    return (
      <iframe
        src={embeddedPages[slug]}
        title={study.title}
        className="fixed inset-0 w-screen h-screen border-0 z-50 bg-background"
      />
    );
  }

  return (
    <>
      <SEO
        title={`${study.title} | Case Study — Sadman Ishraq Mohiuddin`}
        description={study.context.slice(0, 160)}
        path={`/case-studies/${study.slug}`}
      />

      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-20 sm:py-24">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>
          <p className="eyebrow text-white/70 mt-10">{study.sector}</p>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
            {study.title}
          </h1>
        </div>
      </section>

      <article className="py-20 sm:py-28">
        <div className="container-narrow space-y-16 sm:space-y-20">
          <Block label="Context">
            <p>{study.context}</p>
          </Block>
          <Block label="Challenge">
            <p>{study.challenge}</p>
          </Block>
          <Block label="My Role">
            <p>{study.role}</p>
          </Block>
          <Block label="Actions Taken">
            <ul className="space-y-3">
              {study.actions.map((a, idx) => (
                <li key={idx} className="flex gap-4 text-foreground/85">
                  <span className="mt-2.5 h-1 w-3 bg-primary shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Tools & Methods">
            <ul className="flex flex-wrap gap-2">
              {study.tools.map((t) => (
                <li
                  key={t}
                  className="text-[11px] uppercase tracking-wider px-2.5 py-1 border border-border text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Measurable Outcomes">
            <ul className="space-y-4">
              {study.outcomes.map((o, idx) => (
                <li
                  key={idx}
                  className="border-l-2 border-primary pl-5 text-foreground/85 leading-relaxed"
                >
                  {o}
                </li>
              ))}
            </ul>
          </Block>

          {study.skills?.length ? (
            <Block label="Skills Demonstrated">
              <ul className="flex flex-wrap gap-2">
                {study.skills.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          <div className="pt-8 border-t border-border">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all case studies
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <p className="eyebrow mb-5">{label}</p>
      <div className="text-base sm:text-lg leading-relaxed text-foreground/85">
        {children}
      </div>
    </section>
  );
}