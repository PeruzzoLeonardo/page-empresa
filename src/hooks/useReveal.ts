"use client";

import { useEffect, useRef } from "react";

interface Opts {
  stagger?: number;
  selector?: string;
  rootMargin?: string;
}

/**
 * Reliable scroll reveal using IntersectionObserver + CSS transitions.
 *
 * Attach the returned ref to a container. When the container scrolls into
 * view, every descendant matching `selector` (default `[data-reveal]`) gets
 * the `is-in` class with a staggered `transition-delay`, driving the CSS
 * reveal defined in globals.css.
 *
 * This is deliberately NOT built on framer-motion whileInView (which does not
 * fire in this Next 16 / React 19 setup) nor on the GSAP/rAF ticker, so it
 * triggers deterministically and fails safe (reduced-motion → visible).
 */
export function useReveal<T extends HTMLElement>(opts: Opts = {}) {
  const { stagger = 0.12, selector = "[data-reveal]", rootMargin = "0px 0px -12% 0px" } =
    opts;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll<HTMLElement>(selector));
    if (!targets.length) return;

    const reveal = () =>
      targets.forEach((t, i) => {
        t.style.transitionDelay = `${i * stagger}s`;
        t.classList.add("is-in");
      });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      reveal();
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

    // Fail-safe (frame-independent): reveal once the element is within view
    // via scroll geometry, in case the observer's frame callback is delayed.
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

  return ref;
}
