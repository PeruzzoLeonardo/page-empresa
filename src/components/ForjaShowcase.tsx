"use client";

import { useEffect, useRef } from "react";

/**
 * Vitrine de diferenciais no tema "brasa/forja" (quente), usada pelas
 * páginas de projeto (Forja Fitness, Forja Gestão Frotas...).
 *
 * Cada rota é exportada como um HTML próprio (output: "export"), então o
 * <style> abaixo pode sobrescrever com segurança o body escuro e o
 * `cursor: none` herdados de globals.css sem afetar a home.
 *
 * O markup (incluindo os SVGs) chega como string em `content` e é injetado
 * via dangerouslySetInnerHTML para manter os ícones fiéis; os dois efeitos
 * (reveal on scroll e as partículas de brasa no hero) rodam no useEffect.
 */

const STYLES = `
  .forja {
    --ground: #F6F1EA;
    --surface: #FFFFFF;
    --surface-2: #F1EAE0;
    --hairline: #E2D8C9;
    --text: #1E1A17;
    --muted: #6E6154;
    --accent: #E8461F;
    --accent-2: #F0872B;
    --spark: #C9761E;
    --ink-on-accent: #FFF6EF;
    --shadow: 0 18px 44px -22px rgba(60, 30, 12, .45);
    --grain: rgba(30, 20, 12, .04);

    --maxw: 1080px;
    --step--1: clamp(.78rem, .74rem + .2vw, .86rem);
    --step-0: clamp(1rem, .96rem + .2vw, 1.08rem);
    --step-1: clamp(1.2rem, 1.1rem + .5vw, 1.4rem);
    --step-2: clamp(1.55rem, 1.35rem + 1vw, 2rem);
    --step-3: clamp(2.1rem, 1.7rem + 2vw, 3.1rem);
    --step-4: clamp(2.8rem, 2rem + 4vw, 5rem);

    --font-body: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-display: "Helvetica Neue", "Arial Black", var(--font-body);
    --font-mono: ui-monospace, "SF Mono", "Cascadia Mono", "Roboto Mono", Menlo, Consolas, monospace;

    background: var(--ground);
    color: var(--text);
    font-family: var(--font-body);
    font-size: var(--step-0);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  @media (prefers-color-scheme: dark) {
    .forja {
      --ground: #141110;
      --surface: #1C1815;
      --surface-2: #241F1B;
      --hairline: #39312B;
      --text: #F4EEE7;
      --muted: #A6988A;
      --accent: #FF5A2C;
      --accent-2: #FFA23D;
      --spark: #FFCE7A;
      --ink-on-accent: #1a0d06;
      --shadow: 0 24px 60px -26px rgba(0, 0, 0, .8);
      --grain: rgba(255, 230, 200, .035);
    }
  }

  /* neutraliza o body escuro + cursor custom herdados do site principal */
  body:has(.forja) { background: var(--ground); cursor: auto; }

  .forja * { box-sizing: border-box; }

  .forja .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 clamp(1.1rem, 4vw, 2.5rem); }

  .forja .eyebrow {
    font-family: var(--font-mono);
    font-size: var(--step--1);
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--muted);
    margin: 0;
  }

  .forja h1, .forja h2, .forja h3 { font-family: var(--font-display); text-wrap: balance; margin: 0; letter-spacing: 0; }

  /* ---------- HERO ---------- */
  .forja .hero {
    position: relative;
    background: var(--surface);
    border-bottom: 1px solid var(--hairline);
    overflow: hidden;
  }
  .forja .hero::after {
    content: "";
    position: absolute; inset: 0;
    background-image: radial-gradient(var(--grain) 1px, transparent 1px);
    background-size: 4px 4px;
    pointer-events: none;
  }
  .forja #embers {
    position: absolute; inset: 0; width: 100%; height: 100%;
    z-index: 0; pointer-events: none;
  }
  .forja .hero .wrap { position: relative; z-index: 1; padding-top: clamp(2.4rem, 6vw, 4.5rem); padding-bottom: clamp(2.6rem, 6vw, 4.5rem); }

  .forja .brandline { display: flex; align-items: center; gap: .85rem; margin-bottom: clamp(2rem, 6vw, 3.4rem); }
  .forja .brandmark {
    width: 46px; height: 46px; border-radius: 14px; flex: none;
    display: grid; place-items: center;
    font-family: var(--font-display); font-weight: 900; font-size: 1.6rem;
    color: var(--ink-on-accent);
    background: linear-gradient(140deg, var(--accent), var(--accent-2));
    box-shadow: 0 12px 30px -10px color-mix(in srgb, var(--accent) 65%, transparent);
  }
  .forja .brandname { font-family: var(--font-display); font-weight: 800; font-size: var(--step-1); letter-spacing: -.01em; }
  .forja .brandname span { color: var(--muted); font-weight: 600; }

  .forja .hero h1 {
    font-weight: 900;
    font-size: var(--step-4);
    line-height: .98;
    letter-spacing: -.02em;
    text-transform: uppercase;
    max-width: 15ch;
  }
  .forja .hero h1 .molten {
    background: linear-gradient(100deg, var(--accent), var(--accent-2) 55%, var(--spark));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .forja .hero .lede {
    margin: clamp(1.2rem, 3vw, 1.8rem) 0 0;
    font-size: var(--step-1);
    line-height: 1.5;
    color: var(--muted);
    max-width: 46ch;
  }
  .forja .hero .lede strong { color: var(--text); font-weight: 700; }

  .forja .stats { display: flex; flex-wrap: wrap; gap: clamp(1.5rem, 5vw, 3rem); margin-top: clamp(2rem, 5vw, 3rem); }
  .forja .stat .n { font-family: var(--font-display); font-weight: 900; font-size: var(--step-3); line-height: 1; letter-spacing: -.02em; color: var(--text); font-variant-numeric: tabular-nums; }
  .forja .stat .n em { font-style: normal; color: var(--accent); }
  .forja .stat .l { font-family: var(--font-mono); font-size: var(--step--1); text-transform: uppercase; letter-spacing: .14em; color: var(--muted); margin-top: .5rem; max-width: 22ch; }

  /* ---------- SECTIONS ---------- */
  .forja section { padding: clamp(3rem, 8vw, 5.5rem) 0; }
  .forja .sec-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: clamp(1.6rem, 4vw, 2.4rem); flex-wrap: wrap; }
  .forja .sec-head h2 { font-weight: 800; font-size: var(--step-2); letter-spacing: -.01em; }
  .forja .sec-head .kicker { font-family: var(--font-mono); font-size: var(--step--1); letter-spacing: .18em; text-transform: uppercase; color: var(--accent); }
  .forja .sec-head p { margin: 0; color: var(--muted); max-width: 52ch; font-size: var(--step-0); }

  .forja .pillars { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(.9rem, 2vw, 1.3rem); }
  .forja .pillar {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 20px;
    padding: clamp(1.4rem, 3vw, 2rem);
    box-shadow: var(--shadow);
    overflow: hidden;
    isolation: isolate;
  }
  .forja .pillar::before {
    content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
    background: linear-gradient(180deg, var(--accent), var(--accent-2));
  }
  .forja .pillar .ic { color: var(--accent); margin-bottom: 1rem; display: block; }
  .forja .pillar h3 { font-weight: 800; font-size: var(--step-1); letter-spacing: -.01em; line-height: 1.15; }
  .forja .pillar p { margin: .6rem 0 0; color: var(--muted); font-size: var(--step-0); }
  .forja .pillar .tag { font-family: var(--font-mono); font-size: .68rem; letter-spacing: .16em; text-transform: uppercase; color: var(--spark); display: inline-block; margin-bottom: .9rem; }

  .forja .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(.8rem, 2vw, 1.1rem); }
  .forja .feat {
    background: var(--surface-2);
    border: 1px solid var(--hairline);
    border-radius: 16px;
    padding: clamp(1.1rem, 2.4vw, 1.4rem);
  }
  .forja .feat .ic { color: var(--accent); margin-bottom: .7rem; display: block; }
  .forja .feat h4 { margin: 0 0 .35rem; font-family: var(--font-display); font-weight: 800; font-size: var(--step-0); letter-spacing: -.005em; }
  .forja .feat p { margin: 0; color: var(--muted); font-size: var(--step--1); line-height: 1.5; }

  .forja .rule { height: 1px; background: linear-gradient(90deg, transparent, var(--hairline) 15%, var(--hairline) 85%, transparent); border: 0; margin: 0; }

  .forja .close { text-align: center; }
  .forja .close h2 { font-weight: 900; font-size: var(--step-3); text-transform: uppercase; letter-spacing: -.02em; line-height: 1; max-width: 18ch; margin: 0 auto; }
  .forja .close h2 .molten { background: linear-gradient(100deg, var(--accent), var(--spark)); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .forja .close p { color: var(--muted); max-width: 42ch; margin: 1.1rem auto 0; }
  .forja .foot { color: var(--muted); font-family: var(--font-mono); font-size: var(--step--1); letter-spacing: .1em; text-transform: uppercase; text-align: center; padding-bottom: clamp(2rem,5vw,3rem); }

  .forja .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease; }
  .forja .reveal.in { opacity: 1; transform: none; }

  /* voltar ao site */
  .forja .backlink {
    position: fixed; top: clamp(.9rem, 2vw, 1.4rem); left: clamp(.9rem, 2vw, 1.4rem);
    z-index: 10; display: inline-flex; align-items: center; gap: .5rem;
    padding: .55rem .9rem; border-radius: 999px;
    font-family: var(--font-mono); font-size: var(--step--1); letter-spacing: .08em; text-transform: uppercase;
    color: var(--text); text-decoration: none;
    background: color-mix(in srgb, var(--surface) 82%, transparent);
    border: 1px solid var(--hairline);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    box-shadow: var(--shadow);
    transition: transform .25s ease, border-color .25s ease, color .25s ease;
  }
  .forja .backlink:hover { transform: translateY(-1px); border-color: var(--accent); color: var(--accent); }

  /* CTA "Acessar o app" */
  .forja .cta {
    display: inline-flex; align-items: center; gap: .6rem;
    margin-top: clamp(1.6rem, 4vw, 2.2rem);
    padding: .85rem 1.6rem; border-radius: 999px;
    font-family: var(--font-display); font-weight: 800; font-size: var(--step-0);
    letter-spacing: .01em; text-decoration: none;
    color: var(--ink-on-accent);
    background: linear-gradient(140deg, var(--accent), var(--accent-2));
    box-shadow: 0 16px 36px -14px color-mix(in srgb, var(--accent) 70%, transparent);
    transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
  }
  .forja .cta:hover { transform: translateY(-2px); filter: brightness(1.05); box-shadow: 0 22px 48px -16px color-mix(in srgb, var(--accent) 78%, transparent); }
  .forja .cta svg { width: 18px; height: 18px; }

  @media (max-width: 720px) {
    .forja .pillars { grid-template-columns: 1fr; }
    .forja .feat-grid { grid-template-columns: 1fr; }
    .forja .backlink { position: absolute; }
  }
  @media (prefers-reduced-motion: reduce) {
    .forja .reveal { opacity: 1; transform: none; transition: none; }
  }
`;

export default function ForjaShowcase({ content }: { content: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // ----- Reveal on scroll -----
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | null = null;
    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((e) => io!.observe(e));
    }

    // ----- Ember particles in hero -----
    let raf = 0;
    let onResize: (() => void) | null = null;
    let mo: MutationObserver | null = null;
    const canvas = root.querySelector<HTMLCanvasElement>("#embers");

    if (canvas && !reduce) {
      const ctx = canvas.getContext("2d")!;
      const dpr = window.devicePixelRatio || 1;
      let w = 0;
      let h = 0;
      type P = { x: number; y: number; r: number; vy: number; vx: number; a: number; tw: number; ph: number };
      let parts: P[] = [];

      const accent = () =>
        getComputedStyle(root).getPropertyValue("--accent").trim() || "#FF5A2C";
      let color = accent();

      const size = () => {
        const r = canvas.parentElement!.getBoundingClientRect();
        w = canvas.width = Math.floor(r.width * dpr);
        h = canvas.height = Math.floor(r.height * dpr);
        canvas.style.width = r.width + "px";
        canvas.style.height = r.height + "px";
      };
      const make = (spread: boolean): P => ({
        x: Math.random() * w,
        y: spread ? Math.random() * h : h + Math.random() * 40,
        r: (Math.random() * 1.6 + 0.5) * dpr,
        vy: (Math.random() * 0.5 + 0.25) * dpr,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.02 + 0.005,
        ph: Math.random() * 6.28,
      });
      const seed = () => {
        const n = Math.max(26, Math.min(60, Math.floor(w / dpr / 26)));
        parts = [];
        for (let i = 0; i < n; i++) parts.push(make(true));
      };
      const frame = () => {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          p.y -= p.vy;
          p.x += p.vx;
          p.ph += p.tw;
          const a = p.a * (0.6 + 0.4 * Math.sin(p.ph));
          if (p.y < -10) {
            parts[i] = make(false);
            continue;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, 6.2832);
          ctx.fillStyle = color;
          ctx.globalAlpha = Math.max(0, a);
          ctx.shadowColor = color;
          ctx.shadowBlur = 8 * dpr;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        raf = requestAnimationFrame(frame);
      };
      const start = () => {
        cancelAnimationFrame(raf);
        size();
        seed();
        frame();
      };
      start();

      let t: ReturnType<typeof setTimeout>;
      onResize = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          color = accent();
          start();
        }, 180);
      };
      window.addEventListener("resize", onResize);

      mo = new MutationObserver(() => {
        color = accent();
      });
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }

    return () => {
      io?.disconnect();
      if (onResize) window.removeEventListener("resize", onResize);
      mo?.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [content]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="forja" ref={rootRef} dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
