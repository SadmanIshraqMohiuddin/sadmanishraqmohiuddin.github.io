import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let styleEl: HTMLStyleElement | null = null;
    let fontLink: HTMLLinkElement | null = null;
    let scriptEl: HTMLScriptElement | null = null;
    let cancelled = false;

    fetch("/about.html")
      .then((r) => r.text())
      .then((html) => {
        if (cancelled) return;
        const doc = new DOMParser().parseFromString(html, "text/html");

        // Inject Google Fonts link
        const link = doc.querySelector('link[href*="fonts.googleapis.com"]');
        if (link) {
          fontLink = document.createElement("link");
          fontLink.rel = "stylesheet";
          fontLink.href = link.getAttribute("href")!;
          document.head.appendChild(fontLink);
        }

        // Inject styles
        const styleNode = doc.querySelector("style");
        if (styleNode) {
          styleEl = document.createElement("style");
          styleEl.setAttribute("data-about-page", "");
          styleEl.textContent = styleNode.textContent;
          document.head.appendChild(styleEl);
        }

        // Set body content
        setBody(doc.body.innerHTML.replace(/<script[\s\S]*?<\/script>/gi, ""));

        // Re-run scripts
        const script = doc.querySelector("script");
        if (script) {
          setTimeout(() => {
            scriptEl = document.createElement("script");
            scriptEl.textContent = `(function(){\n${script.textContent}\n})();`;
            document.body.appendChild(scriptEl);
          }, 0);
        }

        document.title = doc.title || "About";
      });

    return () => {
      cancelled = true;
      styleEl?.remove();
      fontLink?.remove();
      scriptEl?.remove();
    };
  }, []);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = (e.target as HTMLElement).closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href) return;
    if (a.target === "_blank" || href.startsWith("http") || href.startsWith("mailto:")) return;
    if (href.startsWith("#")) return;
    e.preventDefault();
    navigate(href);
  };

  return <div onClick={onClick} dangerouslySetInnerHTML={{ __html: body }} />;
}
