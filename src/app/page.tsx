import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import Hero from "@/components/sections/Hero";
import AboutBlock from "@/components/sections/AboutBlock";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import MapRegions from "@/components/sections/MapRegions";

export default function HomePage() {
  return (
    <main className="relative w-full">
      <Navbar />
      <Hero />
      <div className="relative z-10 w-full">
        <AboutBlock />
        <Services />
        {/*<Projects />*/}
        <Partners />
        <MapRegions />
      

      
      </div>
    </main>
  );
}