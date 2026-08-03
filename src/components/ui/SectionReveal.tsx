"use client";

import { useEffect, useRef, ReactNode } from "react";

/**
 * Cinematic section reveal (IntersectionObserver + CSS). Unveils the block
 * with a clip-path wipe + fade + scale + blur→sharp as it enters view.
 * Deterministic and fails safe (reduced-motion → visible).
 */
export default function SectionReveal({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
}: {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.classList.add("is-in");
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) finish();
      },
      { threshold: 0, rootMargin },
    );
    io.observe(el);

    // Fail-safe (frame-independent) reveal via scroll geometry.
    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) finish();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}
