import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  title: "The Leading Blockchain Venture Platform for Digital Assets",
  description: "Your Next Gen Digital Asset Platform"
  
};


export default function Home() {
  return (
    <main>
      
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
 
    </main>
  );
}
