import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forja Fitness — Diferenciais da plataforma",
  description:
    "Forja Fitness: uma academia isolada por professor, Coach de IA, anamnese personalizável, execução guiada e engajamento que segura o aluno — presencial ou online.",
};

export default function ForjaFitnessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
