// src/app/page.tsx

import About from "@/components/home/About";
import BlogSection from "@/components/home/Blogs";
import SisterCompany from "@/components/home/Company";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Leaders from "@/components/home/Leaders";
import MissionVision from "@/components/home/Mv";
import EddvaProduct from "@/components/home/Products";
import Services from "@/components/home/Service";
import WhyChooseUs from "@/components/home/Why";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <EddvaProduct />
      <WhyChooseUs />
      <SisterCompany />
      <Leaders />
      <FAQ />
      <BlogSection />
      <Contact />
    </>
  );
}