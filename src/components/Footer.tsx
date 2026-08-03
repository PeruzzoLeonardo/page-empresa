"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "./ui/BrandIcons";
import Logo from "./ui/Logo";
import { contact, whatsappLink, mailtoLink, mapsLink } from "@/lib/contact";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] px-6 pb-10 pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9CA3AF]">
              Soluções digitais que impulsionam negócios e transformam ideias em
              resultados.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Navegação
            </h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-cursor="hover"
                    className="text-sm text-[#9CA3AF] transition-colors hover:text-[#3aa8ff]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-3 transition-colors hover:text-[#3aa8ff]"
                >
                  <Phone size={15} className="text-[#3aa8ff]" /> {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(undefined, contact.whatsapp2Number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-3 transition-colors hover:text-[#3aa8ff]"
                >
                  <Phone size={15} className="text-[#3aa8ff]" /> {contact.whatsapp2Display}
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink()}
                  data-cursor="hover"
                  className="flex items-center gap-3 transition-colors hover:text-[#3aa8ff]"
                >
                  <Mail size={15} className="text-[#3aa8ff]" /> {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-3 transition-colors hover:text-[#3aa8ff]"
                >
                  <MapPin size={15} className="text-[#3aa8ff]" /> {contact.location}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Redes sociais
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    data-cursor="hover"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#3aa8ff]/50 hover:text-[#3aa8ff] hover:shadow-[0_8px_30px_-8px_rgba(0,102,255,.6)]"
                  >
                    <Icon width={18} height={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} LLDev. Todos os direitos reservados.</p>
          <p>Feito com tecnologia e dedicação.</p>
        </div>
      </div>
    </footer>
  );
}
