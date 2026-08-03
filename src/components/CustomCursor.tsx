"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Two-part custom cursor: a small solid dot that tracks 1:1 and a
 * larger ring that eases behind it. Grows over interactive elements.
 * Hidden on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Defer enabling out of the synchronous effect body to avoid a
    // cascading render (and keeps SSR output null).
    const enableId = requestAnimationFrame(() => setEnabled(true));

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      const t = e.target as HTMLElement;
      setActive(
        !!t.closest("a, button, [data-cursor='hover'], input, textarea"),
      );
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onLeave = () => setHidden(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(enableId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity .3s" }}
      aria-hidden
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#00a8ff]"
        style={{ boxShadow: "0 0 12px rgba(0,168,255,.9)" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border border-[#3aa8ff]/70"
        style={{
          width: active ? 56 : 34,
          height: active ? 56 : 34,
          marginLeft: active ? -28 : -17,
          marginTop: active ? -28 : -17,
          background: active ? "rgba(0,102,255,0.12)" : "transparent",
          transition:
            "width .25s ease, height .25s ease, margin .25s ease, background .25s ease",
        }}
      />
    </div>
  );
}
