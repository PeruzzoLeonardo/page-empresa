"use client";

import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Project = {
  index: string;
  tag: string;
  title: string;
  image: string;
  /** Destino do card. Uma rota interna (ex.: "/forja-fitness/") abre a
   *  página de diferenciais do projeto; caso contrário volta ao contato. */
  href: string;
  /** URL do app publicado. Quando presente, mostra um botão "Acessar o
   *  app" que abre o sistema real em uma nova aba. */
  appUrl?: string;
};

const projects: Project[] = [
  {
    index: "01",
    tag: "Plataforma web",
    title: "Forja Gestão Frotas",
    image: "/forja-frotas.png",
    href: "/forja-frotas/",
    appUrl: "https://gerenciador-frota.vercel.app/",
  },
  {
    index: "02",
    tag: "Aplicativo",
    title: "Forja Fitness",
    image: "/forja-fitness.png",
    href: "/forja-fitness/",
    appUrl: "https://academia-app-three-iota.vercel.app/?instalar",
  },
  {
    index: "03",
    tag: "Site institucional",
    title: "Site institucional",
    image: "/paginas-web.png",
    href: "#contato",
  },
];

/**
 * A single project card. Its own useReveal container drives a per-card
 * scroll reveal (reliable in this Next 16 / React 19 setup — see the hook).
 * The 16/9 frame matches the artwork aspect, so the image fills it with no
 * cropping and no letterbox bands on any screen size.
 */
function ProjectCard({ p }: { p: Project }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      {/* Container do card. A imagem é o link para o projeto; as ações ficam
          numa barra abaixo da imagem, para nunca cobrir o texto da arte. */}
      <div
        data-reveal
        className="group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#060c1a] shadow-[0_40px_120px_-40px_rgba(0,102,255,.35)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#3AA8FF]/30 hover:shadow-[0_55px_150px_-35px_rgba(0,102,255,.5)] sm:rounded-[2rem]"
      >
        {/* imagem clicável: abre o projeto (detalhes) em nova aba.
            16/9 == aspecto da arte → encaixe perfeito, sem corte nem barras */}
        <a
          href={p.href}
          data-cursor="hover"
          aria-label={`Ver projeto — ${p.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/9] w-full overflow-hidden"
        >
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* hover caption: subtle gradient + label, appears on desktop hover */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#3AA8FF]">
                {p.index} / {p.tag}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-2xl">
                {p.title}
              </h3>
            </div>
          </div>
        </a>

        {/* barra de ações, abaixo da imagem — lado a lado, à direita; nunca
            cobre o texto da arte do card. Imagem → Ver projeto; app só aqui. */}
        {(p.appUrl || p.href.startsWith("/")) && (
          <div className="flex items-center justify-end gap-2 border-t border-white/[0.06] px-3 py-2">
            {p.appUrl && (
              <a
                href={p.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-1 rounded-full border border-[#3AA8FF]/40 bg-[#0066FF]/10 px-2 py-[3px] text-[10px] font-semibold text-[#3AA8FF] transition-colors hover:border-[#3AA8FF] hover:bg-[#0066FF]/25 hover:text-white"
              >
                Acessar o app
                <ExternalLink size={11} />
              </a>
            )}
            {p.href.startsWith("/") && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2 py-[3px] text-[10px] font-semibold text-white/85 transition-colors hover:border-[#3AA8FF] hover:text-[#3AA8FF]"
              >
                Ver projeto
                <ArrowUpRight size={11} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <section id="projetos" className="relative py-14 sm:py-24 lg:py-32">
      {/* intro heading */}
      <div ref={intro} className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p
              data-reveal
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#3AA8FF]"
            >
              Projetos em destaque
            </p>
            <h2
              data-reveal
              className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            >
              Projetos que{" "}
              <span className="text-gradient-blue">geram resultados</span>
            </h2>
          </div>
          <a
            href="#contato"
            data-reveal
            data-cursor="hover"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-[#3AA8FF]"
          >
            Ver todos os projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* card gallery */}
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 sm:gap-12 lg:px-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
