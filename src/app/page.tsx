import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Background />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <SectionReveal>
          <Impact />
        </SectionReveal>
        <SectionReveal>
          <Services />
        </SectionReveal>
        {/* Projects manages its own pinned scroll choreography */}
        <Projects />
        <SectionReveal>
          <Process />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <CTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
