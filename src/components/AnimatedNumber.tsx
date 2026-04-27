import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  durationMs?: number;
  startSignal?: boolean;
};

/**
 * Renders a metric string like "~30,000", "600,000+", "18 MW+", "247"
 * and animates the numeric portion from 0 -> target while preserving
 * any prefix/suffix characters (e.g. "~", "+", " MW+").
 */
export default function AnimatedNumber({ value, durationMs = 1800, startSignal }: Props) {
  // Find the first numeric run (digits + commas + optional decimal).
  const match = value.match(/([\d,]+(?:\.\d+)?)/);
  const numericStr = match?.[1] ?? "";
  const target = numericStr ? parseFloat(numericStr.replace(/,/g, "")) : 0;
  const prefix = match ? value.slice(0, match.index) : value;
  const suffix = match ? value.slice((match.index ?? 0) + numericStr.length) : "";
  const hasComma = numericStr.includes(",");
  const decimals = numericStr.includes(".") ? numericStr.split(".")[1].length : 0;

  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startSignal || startedRef.current || !match) return;
    startedRef.current = true;

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startSignal, target, durationMs, match]);

  if (!match) return <>{value}</>;

  const formatted = decimals
    ? display.toFixed(decimals)
    : hasComma
      ? Math.round(display).toLocaleString("en-US")
      : Math.round(display).toString();

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
}