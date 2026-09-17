import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { WhoIAm } from "@/components/WhoIAm";
import { WhatIDo } from "@/components/WhatIDo";
import { SelectedWork } from "@/components/SelectedWork";
import { Tools } from "@/components/Tools";
import { Commerce } from "@/components/Commerce";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <WhoIAm />
        <WhatIDo />
        <SelectedWork />
        <Tools />
        <Commerce />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
