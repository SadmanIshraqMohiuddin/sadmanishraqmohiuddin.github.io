import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="h-8 w-8 rounded-sm bg-primary text-primary-foreground grid place-items-center font-display text-sm">
            S
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium tracking-tight">{profile.shortName}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Senior Business Analyst
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm border-b border-border/60",
                    isActive ? "text-foreground font-medium" : "text-muted-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={profile.cvPath}
              download
              className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-sm bg-primary text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}