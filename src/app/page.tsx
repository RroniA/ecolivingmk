import Hero from "@/components/sections/Hero";
import AboutBlock from "@/components/sections/AboutBlock";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import MapRegions from "@/components/sections/MapRegions";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="relative z-10 w-full">
        <AboutBlock />
        <Services />
        {/*<Projects />*/}
        <Partners />
        <MapRegions />
      

      
      </div>
    </div>
  );
}
