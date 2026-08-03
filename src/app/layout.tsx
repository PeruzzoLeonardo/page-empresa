import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LLDev — Soluções digitais que fazem empresas crescerem",
  description:
    "A LLDev cria sites profissionais, sistemas personalizados, aplicativos web e automações que transformam ideias em resultados de verdade.",
  keywords: [
    "desenvolvimento web",
    "sistemas personalizados",
    "automação",
    "aplicativos web",
    "LLDev",
  ],
  openGraph: {
    title: "LLDev — Soluções digitais que fazem empresas crescerem",
    description:
      "Sites, sistemas e automações personalizados para transformar ideias em resultados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
