import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forja Gestão Frotas — Diferenciais da plataforma",
  description:
    "Forja Gestão Frotas: dashboard em tempo real, veículos e motoristas, abastecimento e consumo, manutenção por KM, troca de pneus, multas, documentos e alertas de vencimento — cada empresa com a própria frota.",
};

export default function ForjaFrotasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
