"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, ClipboardList, Code2, Rocket } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Entendemos sua ideia",
    desc: "Conversamos para entender o problema, o público e os objetivos do projeto.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Planejamos a solução",
    desc: "Organizamos funcionalidades, telas, estrutura e identidade visual.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Desenvolvemos",
    desc: "Criamos a solução e apresentamos a evolução durante o desenvolvimento.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Entregamos e acompanhamos",
    desc: "Publicamos o projeto e oferecemos suporte para melhorias e atualizações.",
  },
];

export default function Process() {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const head = useReveal<HTMLDivElement>({ stagger: 0.12 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // draw the connecting line as you scroll through the section
      gsap.fromTo(
        line.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".proc-node").forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0.25 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" ref={root} className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div ref={head} className="mb-20 max-w-2xl">
          <p
            data-reveal
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#3aa8ff]"
          >
            Como trabalhamos
          </p>
          <h2
            data-reveal
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Um processo simples, <br className="hidden sm:block" />
            claro e <span className="text-gradient-blue">eficiente</span>
          </h2>
        </div>

        <div className="relative">
          {/* base line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
          {/* drawn line */}
          <div
            ref={line}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-[#0066ff] via-[#00a8ff] to-[#3aa8ff] lg:block"
            style={{ boxShadow: "0 0 16px rgba(0,168,255,.6)" }}
          />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="proc-node relative">
                  <div className="mb-6 flex items-center gap-4 lg:block">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#3aa8ff]/40 bg-[#050a18] text-[#3aa8ff] shadow-[0_0_24px_rgba(0,102,255,.35)]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <span className="font-display text-5xl font-bold text-white/10 lg:mt-6 lg:block">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9CA3AF]">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
