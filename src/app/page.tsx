import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhoIAm } from "@/components/WhoIAm";
import { WhatIDo } from "@/components/WhatIDo";
import { Tools } from "@/components/Tools";
import { Work } from "@/components/Work";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoIAm />
        <WhatIDo />
        <Tools />
        <Work />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
