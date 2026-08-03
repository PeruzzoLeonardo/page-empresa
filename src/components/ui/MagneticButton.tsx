"use client";

import { useRef, useCallback, ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Variant = "primary" | "ghost" | "whatsapp";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  pulse?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[#0066ff] hover:bg-[#0a72ff] shadow-[0_10px_40px_-8px_rgba(0,102,255,.6)]",
  ghost:
    "text-white/90 border border-white/15 bg-white/[0.02] hover:border-[#3aa8ff]/60 hover:text-white",
  whatsapp:
    "text-white bg-[#0066ff] hover:bg-[#0a72ff] shadow-[0_10px_50px_-6px_rgba(0,102,255,.7)]",
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  pulse = false,
}: Props) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>(0.25);
  const rippleHost = useRef<HTMLSpanElement>(null);

  const ripple = useCallback((e: React.MouseEvent) => {
    const host = rippleHost.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    const span = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    span.style.cssText = `position:absolute;border-radius:9999px;pointer-events:none;background:rgba(255,255,255,.35);width:${size}px;height:${size}px;left:${
      e.clientX - rect.left - size / 2
    }px;top:${e.clientY - rect.top - size / 2}px;transform:scale(0);opacity:.7;`;
    host.appendChild(span);
    span.animate(
      [
        { transform: "scale(0)", opacity: 0.6 },
        { transform: "scale(2.4)", opacity: 0 },
      ],
      { duration: 650, easing: "ease-out" },
    ).onfinish = () => span.remove();
  }, []);

  const Tag = (href ? "a" : "button") as "a";

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={(e) => {
        ripple(e);
        onClick?.();
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor="hover"
      className={`${base} ${variants[variant]} ${className} ${
        pulse ? "animate-[pulse-glow_2.4s_ease-out_infinite]" : ""
      }`}
    >
      <span ref={rippleHost} className="absolute inset-0 overflow-hidden rounded-full" />
      {/* sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {/* neon border on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_0_1px_rgba(58,168,255,.6),0_0_28px_rgba(0,168,255,.5)]" />
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-150 ease-out group-active:scale-90">
        {children}
        {icon}
      </span>
    </Tag>
  );
}
