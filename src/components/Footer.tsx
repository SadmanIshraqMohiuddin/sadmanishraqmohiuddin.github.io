import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-24">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-tight">{profile.name}</p>
          <p className="mt-2 text-sm text-navy-foreground/70 leading-relaxed">
            Senior Business Analyst & Operations Strategy Professional -
            enterprise transformation, requirements engineering, and platform delivery.
          </p>
        </div>

        <div>
          <p className="eyebrow text-navy-foreground/60">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-navy-foreground/60" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-white transition-colors"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-navy-foreground/60" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors"
              >
                LinkedIn profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-navy-foreground/60" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-navy-foreground/60">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/experience" className="hover:text-white">Experience</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/certifications" className="hover:text-white">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li>
              <a href={profile.cvPath} download className="hover:text-white">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-navy-foreground/55">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}