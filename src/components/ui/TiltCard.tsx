"use client";

import { useRef, ReactNode, useCallback } from "react";

/**
 * 3D tilt + glare card. Tracks the cursor to rotate on X/Y and moves a
 * radial highlight to follow the pointer. Transform-only, rAF-throttled.
 */
export default function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glare = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${
          (px - 0.5) * max
        }deg) translateY(-6px)`;
        if (glare.current) {
          glare.current.style.background = `radial-gradient(240px circle at ${
            px * 100
          }% ${py * 100}%, rgba(0,168,255,.18), transparent 60%)`;
        }
      });
    },
    [max],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    if (glare.current) glare.current.style.background = "transparent";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      <div
        ref={glare}
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
      />
    </div>
  );
}
