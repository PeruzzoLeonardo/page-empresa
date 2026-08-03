"use client";

import { useEffect, useRef } from "react";

/**
 * Living background:
 *  - canvas particle field (twinkling nodes + faint links) on rAF
 *  - futuristic grid + radial glows in CSS layers
 *  - reacts to scroll (parallax + intensity) and to the mouse
 * Fixed, sits behind all content, pointer-events none.
 */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowARef = useRef<HTMLDivElement>(null);
  const glowBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      tw: number;
      tws: number;
    };
    let particles: P[] = [];

    const build = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(
        110,
        Math.floor((width * height) / 16000),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        tw: Math.random() * Math.PI * 2,
        tws: Math.random() * 0.02 + 0.005,
      }));
    };

    build();

    const mouse = { x: -9999, y: -9999 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.tw += p.tws;

        // gentle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 14000) {
          const f = (14000 - dist2) / 14000;
          p.x += (dx / Math.sqrt(dist2 || 1)) * f * 0.8;
          p.y += (dy / Math.sqrt(dist2 || 1)) * f * 0.8;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const alpha = 0.35 + Math.sin(p.tw) * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,180,255,${alpha})`;
        ctx.fill();

        // links
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const lx = p.x - q.x;
          const ly = p.y - q.y;
          const ld = lx * lx + ly * ly;
          if (ld < 12000) {
            const a = (1 - ld / 12000) * 0.18;
            ctx.strokeStyle = `rgba(0,140,255,${a})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(render);
    };
    if (!reduced) raf = requestAnimationFrame(render);
    else render();

    // scroll parallax / intensity
    let sraf = 0;
    const onScroll = () => {
      if (sraf) return;
      sraf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const doc = document.documentElement.scrollHeight - window.innerHeight;
        const prog = doc > 0 ? y / doc : 0;
        if (gridRef.current) {
          gridRef.current.style.transform = `translateY(${y * 0.12}px) perspective(600px) rotateX(58deg)`;
        }
        if (glowARef.current) {
          glowARef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
          glowARef.current.style.opacity = String(0.6 - prog * 0.3);
        }
        if (glowBRef.current) {
          glowBRef.current.style.transform = `translate3d(0, ${-y * 0.05}px, 0)`;
          glowBRef.current.style.opacity = String(0.35 + prog * 0.35);
        }
        if (canvasRef.current) {
          canvasRef.current.style.opacity = String(0.9 - prog * 0.25);
        }
        sraf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => build();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, #071228 0%, #050a18 40%, #030712 75%)",
        }}
      />

      {/* moving conic aura */}
      <div
        className="absolute left-1/2 top-[-30%] h-[900px] w-[900px] -translate-x-1/2 opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0,102,255,0) 0deg, rgba(0,168,255,.25) 120deg, rgba(0,102,255,0) 260deg)",
          filter: "blur(60px)",
          animation: "slow-spin 40s linear infinite",
        }}
      />

      {/* futuristic floor grid */}
      <div
        ref={gridRef}
        className="absolute bottom-[-20%] left-1/2 h-[70%] w-[200%] -translate-x-1/2 origin-bottom"
        style={{
          backgroundImage:
            "linear-gradient(rgba(58,168,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(58,168,255,.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: "perspective(600px) rotateX(58deg)",
          maskImage:
            "radial-gradient(60% 60% at 50% 100%, #000 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 100%, #000 0%, transparent 80%)",
        }}
      />

      {/* continuous energy beams (horizontal) */}
      {[
        { top: "18%", w: 340, d: 9, delay: 0 },
        { top: "42%", w: 220, d: 12, delay: 3 },
        { top: "68%", w: 300, d: 11, delay: 6 },
        { top: "85%", w: 180, d: 14, delay: 2 },
      ].map((b, i) => (
        <div
          key={"bx" + i}
          className="absolute h-px"
          style={{
            top: b.top,
            left: 0,
            width: b.w,
            background:
              "linear-gradient(90deg, transparent, rgba(0,168,255,.9), rgba(58,168,255,.4), transparent)",
            boxShadow: "0 0 12px rgba(0,168,255,.6)",
            animation: `beam-x ${b.d}s linear ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* continuous energy beams (vertical) */}
      {[
        { left: "22%", h: 220, d: 13, delay: 1 },
        { left: "78%", h: 260, d: 15, delay: 5 },
      ].map((b, i) => (
        <div
          key={"by" + i}
          className="absolute w-px"
          style={{
            left: b.left,
            top: 0,
            height: b.h,
            background:
              "linear-gradient(180deg, transparent, rgba(0,168,255,.8), transparent)",
            boxShadow: "0 0 12px rgba(0,168,255,.5)",
            animation: `beam-y ${b.d}s linear ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* slowly blinking light points */}
      {[
        [12, 22],
        [28, 64],
        [44, 12],
        [58, 40],
        [66, 78],
        [74, 28],
        [86, 58],
        [92, 84],
        [8, 82],
        [50, 90],
      ].map(([x, y], i) => (
        <span
          key={"tw" + i}
          className="absolute rounded-full bg-[#8fc4ff]"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            boxShadow: "0 0 8px rgba(120,180,255,.9)",
            animation: `twinkle ${4 + (i % 4)}s ease-in-out ${i * 0.6}s infinite`,
          }}
        />
      ))}

      {/* soft blue glows */}
      <div
        ref={glowARef}
        className="absolute -left-40 top-[10%] h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,.28), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        ref={glowBRef}
        className="absolute right-[-10%] top-[45%] h-[560px] w-[560px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,168,255,.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      {/* particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* vignette + grain */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 40%, transparent 55%, rgba(3,7,18,.9) 100%)",
        }}
      />
    </div>
  );
}
