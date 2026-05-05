"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { useI18n } from "@/lib/i18n";

const partners = [
  { name: "Partner One",   abbr: "P1" },
  { name: "Partner Two",   abbr: "P2" },
  { name: "Partner Three", abbr: "P3" },
  { name: "Partner Four",  abbr: "P4" },
  { name: "Partner Five",  abbr: "P5" },
  { name: "Partner Six",   abbr: "P6" },
  { name: "Partner Seven", abbr: "P7" },
];

function LogoPlaceholder({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center justify-center h-10 px-8 opacity-40 hover:opacity-70 transition-opacity duration-300 shrink-0" title={name}>
      <span className="font-['Geologica'] text-[18px] font-light tracking-[-0.02em] text-[#1a1a17] whitespace-nowrap">
        {name}
      </span>
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

        <div className="flex overflow-hidden border-y border-[#ddddd2] py-6">
          <motion.div
            className="flex items-center gap-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {partners.map((p) => (
              <div key={`a-${p.abbr}`} className="flex items-center">
                <LogoPlaceholder name={p.name} abbr={p.abbr} />
                <div className="w-px h-5 bg-[#ddddd2] shrink-0" />
              </div>
            ))}
            {partners.map((p) => (
              <div key={`b-${p.abbr}`} className="flex items-center">
                <LogoPlaceholder name={p.name} abbr={p.abbr} />
                <div className="w-px h-5 bg-[#ddddd2] shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}