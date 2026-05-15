import { useEffect, useState } from "react";

export default function About() {
  const [body, setBody] = useState("");

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
            scriptEl.textContent = script.textContent;
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

  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}
