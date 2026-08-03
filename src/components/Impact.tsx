"use client";

import { useReveal } from "@/hooks/useReveal";

const line1 = [
  { w: "Sua", hi: false },
  { w: "empresa", hi: false },
  { w: "não precisa", hi: true },
  { w: "apenas", hi: false },
  { w: "de", hi: false },
  { w: "um", hi: false },
  { w: "site.", hi: false },
];

const line2 = [
  { w: "Precisa", hi: false },
  { w: "de", hi: false },
  { w: "uma", hi: false },
  { w: "solução", hi: false },
  { w: "digital", hi: false },
  { w: "que", hi: false },
  { w: "gera", hi: true },
  { w: "resultados.", hi: true },
];

export default function Impact() {
  const root = useReveal<HTMLDivElement>({ stagger: 0.06 });

  return (
    <section className="relative flex min-h-0 items-center px-6 py-16 sm:min-h-[85vh] sm:py-32 lg:px-10">
      <div ref={root} className="mx-auto w-full max-w-5xl text-center">
        <p
          data-reveal
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#3aa8ff] sm:mb-10"
        >
          O que realmente importa
        </p>

        <h2 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-[4.5rem]">
          <span className="block">
            {line1.map((item, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <span
                  data-reveal
                  className={`mr-[0.25em] inline-block ${
                    item.hi ? "text-gradient-blue" : "text-white"
                  }`}
                >
                  {item.w}
                </span>
              </span>
            ))}
          </span>
          <span className="mt-2 block">
            {line2.map((item, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <span
                  data-reveal
                  className={`mr-[0.25em] inline-block ${
                    item.hi ? "text-gradient-blue" : "text-white/35"
                  }`}
                >
                  {item.w}
                </span>
              </span>
            ))}
          </span>
        </h2>
      </div>
    </section>
  );
}
