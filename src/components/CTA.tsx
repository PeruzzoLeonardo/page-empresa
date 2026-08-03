"use client";

import { useState } from "react";
import { MessageCircle, Mail, Globe, MapPin, Send } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { contact, whatsappLink, mailtoLink, mapsLink } from "@/lib/contact";

const info = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: whatsappLink(),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsapp2Display,
    href: whatsappLink(undefined, contact.whatsapp2Number),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: contact.email,
    href: mailtoLink(),
  },
  { icon: Globe, label: "Atendimento", value: contact.service },
  {
    icon: MapPin,
    label: "Localização",
    value: contact.location,
    href: mapsLink(),
  },
];

export default function CTA() {
  const root = useReveal<HTMLDivElement>({ stagger: 0.1 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name || "—"}.
E-mail: ${email || "—"}

${message || "Gostaria de solicitar um orçamento."}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative px-6 py-16 sm:py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div ref={root} className="mb-10 text-center sm:mb-14">
          <p
            data-reveal
            className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#3aa8ff]"
          >
            Vamos começar
          </p>
          <h2
            data-reveal
            className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Sua empresa está pronta para o{" "}
            <span className="text-gradient-blue">próximo nível?</span>
          </h2>
          <p
            data-reveal
            className="mx-auto mt-5 max-w-xl text-lg text-[#9CA3AF]"
          >
            Preencha o formulário ou fale conosco diretamente. Receba um
            orçamento sem compromisso.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* ---------- Form ---------- */}
          <form
            onSubmit={handleSubmit}
            className="glass relative overflow-hidden rounded-[1.8rem] p-8 sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0066ff]/20 blur-[70px]"
              aria-hidden
            />
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Nome
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Seu nome"
                className="mb-5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#3aa8ff]/60 focus:bg-white/[0.05]"
              />

              <label className="mb-2 block text-sm font-medium text-white/80">
                E-mail
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="voce@email.com"
                className="mb-5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#3aa8ff]/60 focus:bg-white/[0.05]"
              />

              <label className="mb-2 block text-sm font-medium text-white/80">
                Mensagem
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Conte um pouco sobre seu projeto..."
                className="mb-6 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#3aa8ff]/60 focus:bg-white/[0.05]"
              />

              <button
                type="submit"
                data-cursor="hover"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0066ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(0,102,255,.6)] transition-all duration-300 hover:bg-[#0a72ff] active:scale-[0.98]"
              >
                Enviar mensagem
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </form>

          {/* ---------- Contact card ---------- */}
          <div className="glass relative overflow-hidden rounded-[1.8rem] p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#00a8ff]/15 blur-[70px]"
              aria-hidden
            />
            <div className="relative flex h-full flex-col">
              <h3 className="mb-8 font-display text-2xl font-bold text-white">
                Fale conosco
              </h3>

              <ul className="space-y-6">
                {info.map((item) => {
                  const Icon = item.icon;
                  const key = `${item.label}-${item.value}`;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#3aa8ff] transition-colors group-hover:border-[#3aa8ff]/50 group-hover:bg-[#0066ff]/10">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block font-semibold text-white">
                          {item.label}
                        </span>
                        <span className="block text-sm text-[#9CA3AF]">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={key}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="group flex items-center gap-4"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group mt-10 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#0066FF] to-[#00A8FF] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_45px_-8px_rgba(0,102,255,.7)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
