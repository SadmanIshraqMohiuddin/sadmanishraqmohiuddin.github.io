import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  dark?: boolean;
  id?: string;
};

export default function Section({
  eyebrow,
  title,
  intro,
  children,
  className,
  narrow,
  dark,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24",
        dark && "bg-navy text-navy-foreground",
        className
      )}
    >
      <div className={narrow ? "container-narrow" : "container-prose"}>
        {(eyebrow || title || intro) && (
          <header className="max-w-3xl mb-12 sm:mb-16 animate-fade-up">
            {eyebrow && (
              <p className={cn("eyebrow", dark && "text-white/70")}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={cn(
                  "mt-5 text-base sm:text-lg leading-relaxed text-balance",
                  dark ? "text-white/75" : "text-muted-foreground"
                )}
              >
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}