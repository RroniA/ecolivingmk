"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { useI18n } from "@/lib/i18n";

// 1. Add your real image paths to the array. 
// Duplicated them here just so the marquee has enough items to scroll smoothly.
const partners = [
  { name: "Kipper", src: "/kipper.png" },
  { name: "Veze Sharri", src: "/vezesharri.png" },
  { name: "Lear Corporation", src: "/Lear_Corporation_logo.svg.svg" },
  { name: "Eurovia", src: "/Eurovia.svg" },
  { name: "Kipper", src: "/kipper.png" },
  { name: "Veze Sharri", src: "/vezesharri.png" },
  { name: "Lear Corporation", src: "/Lear_Corporation_logo.svg.svg" },
  { name: "Eurovia", src: "/Eurovia.svg" },
];

// 2. New Image Component
function LogoImage({ name, src }: { name: string; src: string }) {
  return (
    <div 
      className="flex items-center justify-center h-12 px-10 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 shrink-0" 
      title={name}
    >
      {/* 
        The magic happens here: 
        h-full: strictly follows the container's 3rem (48px) height.
        w-auto: keeps the aspect ratio intact.
        object-contain: prevents clipping or stretching.
        max-w-[160px]: ensures very wide logos don't take up too much horizontal space.
      */}
      <img
        src={src}
        alt={`${name} logo`}
        className="h-full w-auto max-w-[160px] object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function Partners() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 w-full bg-[#f4f3ea] py-24 border-t border-[#ddddd2] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <SectionTag text={t.partners.tag} />
            <h2 className="mt-5 font-['Geologica'] text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-[-0.025em] text-[#1a1a17]">
              {t.partners.heading}
            </h2>
          </div>
          <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e] max-w-xs">
            {t.partners.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f4f3ea] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f4f3ea] to-transparent" />

        <div className="flex overflow-hidden border-y border-[#ddddd2] py-8">
          <motion.div
            className="flex items-center gap-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {/* First Set */}
            {partners.map((p, i) => (
              <div key={`a-${i}`} className="flex items-center">
                <LogoImage name={p.name} src={p.src} />
                <div className="w-px h-6 bg-[#ddddd2] shrink-0" />
              </div>
            ))}
            {/* Duplicate Set for smooth infinite scroll */}
            {partners.map((p, i) => (
              <div key={`b-${i}`} className="flex items-center">
                <LogoImage name={p.name} src={p.src} />
                <div className="w-px h-6 bg-[#ddddd2] shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}