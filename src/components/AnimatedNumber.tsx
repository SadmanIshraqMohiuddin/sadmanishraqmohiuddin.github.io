import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: string;
  durationMs?: number;
  startSignal?: boolean;
  accentClassName?: string;
};

/**
 * Renders a metric string like "~30,000", "600,000+", "18 MW+", "247"
 * and animates the numeric portion from 0 -> target while preserving
 * any prefix/suffix characters (e.g. "~", "+", " MW+").
 */
export default function AnimatedNumber({ value, durationMs = 1800, startSignal, accentClassName }: Props) {
  const parsed = useMemo(() => {
    const m = value.match(/(\d[\d,]*(?:\.\d+)?)/);
    if (!m || m.index === undefined) {
      return null;
    }
    const numericStr = m[1];
    const target = parseFloat(numericStr.replace(/,/g, ""));
    return {
      target,
      prefix: value.slice(0, m.index),
      suffix: value.slice(m.index + numericStr.length),
      hasComma: numericStr.includes(","),
      decimals: numericStr.includes(".") ? numericStr.split(".")[1].length : 0,
    };
  }, [value]);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!startSignal || !parsed) return;
    let rafId = 0;
    const start = performance.now();
    const target = parsed.target;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [startSignal, parsed, durationMs]);

  if (!parsed) return <>{value}</>;

  const safe = Math.max(0, display);
  const formatted = parsed.decimals
    ? safe.toFixed(parsed.decimals)
    : parsed.hasComma
      ? Math.round(safe).toLocaleString("en-US")
      : Math.round(safe).toString();

  return (
    <>
      {parsed.prefix && (
        accentClassName ? <span className={accentClassName}>{parsed.prefix}</span> : parsed.prefix
      )}
      {formatted}
      {parsed.suffix && (
        accentClassName ? <span className={accentClassName}>{parsed.suffix}</span> : parsed.suffix
      )}
    </>
  );
}