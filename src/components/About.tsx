"use client";

import { Check } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";
import { useReveal } from "@/hooks/useReveal";

const points = [
  "Projetos criados de forma personalizada",
  "Foco em simplicidade, desempenho e experiência",
  "Suporte e evolução contínua",
];

function Stat({
  end,
  suffix,
  label,
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const { ref, value } = useCounter(end);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="font-display text-4xl font-bold text-white">
        {value.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-[#9CA3AF]">{label}</div>
    </div>
  );
}

function OfficeVisual() {
  return (
    <svg viewBox="0 0 560 460" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="of-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#071630" />
          <stop offset="1" stopColor="#03080f" />
        </linearGradient>
        <radialGradient id="of-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#0066ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0066ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="560" height="460" fill="url(#of-bg)" />
      {/* blue light behind monitors */}
      <ellipse cx="280" cy="200" rx="240" ry="150" fill="url(#of-glow)" />
      {/* desk */}
      <rect x="40" y="360" width="480" height="16" rx="4" fill="#071228" />
      {/* monitors */}
      {[[120, 130], [250, 120], [380, 135]].map(([x, h], i) => (
        <g key={i}>
          <rect x={x} y={330 - h} width="110" height={h} rx="8" fill="#0a1428" stroke="rgba(58,168,255,.3)" />
          {/* code lines */}
          {Array.from({ length: Math.floor(h / 16) }).map((_, r) => (
            <rect
              key={r}
              x={x + 12}
              y={330 - h + 14 + r * 14}
              width={30 + ((i + r) % 4) * 18}
              height="6"
              rx="3"
              fill={r % 3 === 0 ? "#3aa8ff" : "#1c3a5e"}
            />
          ))}
          <rect x={x + 48} y="330" width="14" height="30" fill="#071228" />
          <rect x={x + 30} y="358" width="50" height="6" rx="3" fill="#071228" />
        </g>
      ))}
      {/* neon sign */}
      <text x="280" y="70" textAnchor="middle" fontFamily="sans-serif" fontSize="34" fontWeight="700" fill="#3aa8ff" opacity="0.9">
        LLDev
      </text>
      <rect x="220" y="80" width="120" height="3" rx="2" fill="#00a8ff" opacity="0.6" />
    </svg>
  );
}

export default function About() {
  const root = useReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="sobre" className="relative px-6 py-16 sm:py-28 lg:px-10 lg:py-36">
      <div
        ref={root}
        className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-2"
      >
        {/* text */}
        <div>
          <p
            data-reveal
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#3aa8ff]"
          >
            Sobre a LLDev
          </p>
          <h2
            data-reveal
            className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Tecnologia que <br />
            <span className="text-gradient-blue">conecta ideias</span> a resultados.
          </h2>

          <div data-reveal className="space-y-4 text-[#9CA3AF]">
            <p>
              A LLDev nasceu para ajudar empresas a transformar ideias e
              processos em soluções digitais. Desenvolvemos sites, sistemas e
              aplicações modernas, com foco em simplicidade, desempenho e
              experiência do usuário.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li
                data-reveal
                key={p}
                className="flex items-center gap-3 text-sm text-white/85"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#3aa8ff]/40 bg-[#0066ff]/10 text-[#3aa8ff]">
                  <Check size={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.07] pt-8">
            <Stat end={50} suffix="+" label="Projetos entregues" />
            <Stat end={98} suffix="%" label="Clientes satisfeitos" />
            <Stat end={5} suffix="+" label="Anos de experiência" />
          </div>
        </div>

        {/* visual */}
        <div data-reveal className="relative">
          <div className="glow-ring relative overflow-hidden rounded-3xl border border-white/[0.08]">
            <div className="aspect-[6/5] w-full">
              <OfficeVisual />
            </div>
          </div>
          {/* floating badge */}
          <div
            className="glass anim-float absolute -bottom-5 -left-5 rounded-2xl px-5 py-4"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="font-display text-lg font-bold text-white">100% dedicação</div>
            <div className="text-xs text-[#9CA3AF]">a cada projeto</div>
          </div>
        </div>
      </div>
    </section>
  );
}
