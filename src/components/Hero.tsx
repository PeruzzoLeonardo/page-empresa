"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { gsap } from "@/lib/gsap";
import MagneticButton from "./ui/MagneticButton";
import {
  DashboardMain,
  DashboardPhone,
  DashboardTablet,
} from "./mockups/Dashboards";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const laptop = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const tablet = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const sweep = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven choreography: laptop approaches, phone rotates,
      // tablet rises, copy fades away.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(laptop.current, { scale: 1.15, y: -30, ease: "none" }, 0)
        .to(phone.current, { rotateZ: 8, y: -70, x: 20, ease: "none" }, 0)
        .to(tablet.current, { y: -110, rotateZ: -4, ease: "none" }, 0)
        .to(copy.current, { y: -80, opacity: 0, filter: "blur(8px)", ease: "none" }, 0)
        .to(stage.current, { rotateX: 6, ease: "none" }, 0)
        // blue light sweeps across the screen as you scroll the hero
        .fromTo(
          sweep.current,
          { xPercent: -140, opacity: 0 },
          { xPercent: 140, opacity: 1, ease: "none" },
          0,
        );

      // parallax pointer tilt on the device stage
      const onPointer = (e: PointerEvent) => {
        const rx = (e.clientY / window.innerHeight - 0.5) * -8;
        const ry = (e.clientX / window.innerWidth - 0.5) * 10;
        gsap.to(stage.current, {
          rotateX: rx,
          rotateY: ry,
          duration: 0.8,
          ease: "power2.out",
        });
      };
      window.addEventListener("pointermove", onPointer);
      return () => window.removeEventListener("pointermove", onPointer);
    }, root);

    return () => ctx.revert();
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="inicio"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
    >
      {/* scroll-driven blue light sweep */}
      <div
        ref={sweep}
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[45%] -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,168,255,.14), rgba(58,168,255,.06), transparent)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 sm:gap-12 lg:grid-cols-2">
        {/* ---------- Left: copy ---------- */}
        <div ref={copy} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00A8FF]" />
            Soluções digitais
          </motion.div>

          <h1 className="font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {["Criamos", "soluções", "digitais", "que fazem", "empresas"].map(
              (w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "0.6em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.09 }}
                  className="mr-[0.28em] inline-block"
                >
                  {w}
                </motion.span>
              ),
            )}
            <motion.span
              initial={{ opacity: 0, y: "0.6em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              className="text-gradient-blue inline-block"
            >
              crescerem.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-[#9CA3AF]"
          >
            Desenvolvemos sites, sistemas personalizados e automações para
            transformar ideias em resultados de verdade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contato" icon={<ArrowRight size={16} />}>
              Solicitar orçamento
            </MagneticButton>
            <MagneticButton href="#projetos" variant="ghost">
              Ver projetos
            </MagneticButton>
          </motion.div>

          {/* scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-16 flex items-center gap-3 text-xs uppercase tracking-widest text-white/40"
          >
            <span className="relative flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#00A8FF]"
                style={{ animation: "scroll-dot 1.8s ease-in-out infinite" }}
              />
            </span>
            <MousePointerClick size={14} className="opacity-60" />
            Role para explorar
          </motion.div>
        </div>

        {/* ---------- Right: 3D device stage ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="relative -mt-4 h-[300px] sm:mt-0 sm:h-[520px] lg:h-[560px]"
          style={{ perspective: "1400px" }}
        >
          <div
            ref={stage}
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Laptop */}
            <div
              ref={laptop}
              className="anim-float absolute left-1/2 top-1/2 w-[86%] max-w-[520px] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glow-ring rounded-t-2xl border border-white/10 bg-[#0a1122] p-2.5 shadow-[0_40px_120px_-30px_rgba(0,102,255,.6)]">
                <div className="overflow-hidden rounded-lg border border-white/5">
                  <DashboardMain className="aspect-[16/10] w-full" />
                </div>
              </div>
              <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-2xl bg-gradient-to-b from-[#141d33] to-[#0a1122]" />
              <div className="mx-auto h-1 w-[40%] rounded-b-lg bg-[#0a1122]" />
            </div>

            {/* Tablet — behind/left */}
            <div
              ref={tablet}
              className="anim-float absolute -left-2 bottom-6 hidden w-[150px] sm:block lg:w-[170px]"
              style={{
                animationDelay: "1.2s",
                transform: "rotateZ(-6deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="rounded-2xl border border-white/10 bg-[#0a1122] p-2 shadow-[0_30px_80px_-30px_rgba(0,102,255,.6)]">
                <div className="overflow-hidden rounded-lg border border-white/5">
                  <DashboardTablet className="aspect-[3/4] w-full" />
                </div>
              </div>
            </div>

            {/* Phone — front/right */}
            <div
              ref={phone}
              className="anim-float absolute -right-1 bottom-0 w-[112px] sm:w-[132px] lg:w-[150px]"
              style={{
                animationDelay: "0.6s",
                transform: "rotateZ(6deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-[#0a1122] p-1.5 shadow-[0_30px_80px_-24px_rgba(0,168,255,.7)]">
                <div className="overflow-hidden rounded-[1.2rem] border border-white/5">
                  <DashboardPhone className="aspect-[9/18] w-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
