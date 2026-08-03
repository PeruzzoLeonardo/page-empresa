"use client";

import { Monitor, Code2, Smartphone, Cog, ArrowUpRight } from "lucide-react";
import TiltCard from "./ui/TiltCard";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: Monitor,
    title: "Sites profissionais",
    desc: "Páginas modernas, rápidas e responsivas que apresentam sua empresa e geram contatos.",
  },
  {
    icon: Code2,
    title: "Sistemas personalizados",
    desc: "Soluções desenvolvidas de acordo com as necessidades reais do seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos web",
    desc: "Aplicações acessíveis de qualquer dispositivo, com desempenho e experiência incríveis.",
  },
  {
    icon: Cog,
    title: "Automação de processos",
    desc: "Reduza tarefas manuais, tenha mais controle e produtividade na sua empresa.",
  },
];

export default function Services() {
  const root = useReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="servicos" className="relative px-6 py-16 sm:py-28 lg:px-10 lg:py-36">
      <div ref={root} className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-16">
          <p
            data-reveal
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#3aa8ff]"
          >
            Nossos serviços
          </p>
          <h2
            data-reveal
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Soluções completas <br />
            <span className="text-gradient-blue">para o seu negócio</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div data-reveal key={s.title}>
                <TiltCard className="group h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition-colors duration-300 group-hover:border-[#3aa8ff]/40">
                    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_-6px_rgba(0,102,255,.5)]" />
                    </div>

                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#3aa8ff]/25 bg-[#0066ff]/10 text-[#3aa8ff] transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-110">
                      <Icon size={26} strokeWidth={1.6} />
                    </div>

                    <h3 className="mb-3 font-display text-xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#9CA3AF]">
                      {s.desc}
                    </p>

                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-[#3aa8ff]/50 group-hover:text-[#3aa8ff]">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
