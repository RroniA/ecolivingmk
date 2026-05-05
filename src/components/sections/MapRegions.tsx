"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { useI18n } from "@/lib/i18n";

/* Pin positions are visual/design values — not translated */
const pins = [
  { id: "gostivar",   name: "Gostivar",  top: "40%", left: "25%", primary: true  },
  { id: "chegrane",   name: "Chegrane",  top: "35%", left: "28%", primary: false },
  { id: "brvenitsa",  name: "Brvenitsa", top: "30%", left: "32%", primary: false },
  { id: "zelino",     name: "Želino",    top: "28%", left: "38%", primary: false },
];

export default function MapRegions() {
  const [activePin, setActivePin] = useState<string | null>(null);
  const { t } = useI18n();

  return (
    <section className="relative z-10 w-full bg-[#1a1a17] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4"
        >
          <SectionTag text={t.map.tag} />
          <h2 className="mt-5 font-['Geologica'] text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.08] tracking-[-0.025em] text-[#f4f3ea] max-w-2xl">
            {t.map.heading}
          </h2>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-3 gap-px bg-[#2a2a25] mb-10 max-w-xl"
        >
          {t.map.stats.map((s) => (
            <div key={s.label} className="bg-[#1a1a17] px-5 py-6 flex flex-col gap-1">
              <span className="font-['Geologica'] text-[clamp(1.5rem,3vw,2.2rem)] font-light leading-none tracking-[-0.03em] text-[#f4f3ea]">
                {s.value}
              </span>
              <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full rounded-2xl border border-[#2a2a25] overflow-hidden bg-[#0f0f0d] relative p-8 md:p-12"
        >
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center aspect-[16/9]">
            <img
              src="/macedonia.svg"
              alt="North Macedonia Map"
              className="w-full h-full object-contain opacity-80"
              draggable="false"
            />

            <div className="absolute inset-0 w-full h-full">
              {pins.map((pin) => (
                <div
                  key={pin.id}
                  onMouseEnter={() => setActivePin(pin.id)}
                  onMouseLeave={() => setActivePin(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center group z-10"
                  style={{ top: pin.top, left: pin.left }}
                >
                  {(pin.primary || activePin === pin.id) && (
                    <>
                      <div className="absolute w-14 h-14 rounded-full bg-[#b6e400]/10 animate-pulse pointer-events-none" />
                      <div className="absolute w-10 h-10 rounded-full bg-[#b6e400]/20 pointer-events-none" />
                    </>
                  )}

                  <div className={`relative rounded-full border-2 border-[#1a1a17] flex items-center justify-center shadow-lg transition-transform duration-300 cursor-pointer ${
                    pin.primary ? "w-5 h-5 bg-[#b6e400] group-hover:scale-110" : "w-3.5 h-3.5 bg-[#f4f3ea] opacity-80 group-hover:opacity-100 group-hover:scale-125"
                  }`}>
                    {pin.primary && <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a17]" />}
                  </div>

                  <div className="absolute bottom-[calc(100%+8px)] pointer-events-none whitespace-nowrap">
                    <span className={`font-['Jost'] tracking-widest ${
                      pin.primary ? "text-[13px] font-semibold text-[#b6e400]" : "text-[11px] font-normal text-[#f4f3ea]/65"
                    }`}>
                      {pin.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* LEGEND */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-6"
        >
          {pins.map((pin) => (
            <div key={pin.id} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: pin.primary ? "#b6e400" : "rgba(244,243,234,0.35)" }}
              />
              <span
                className="font-['Jost'] text-[13px]"
                style={{ color: pin.primary ? "#f4f3ea" : "rgba(244,243,234,0.45)" }}
              >
                {pin.name}
                {pin.primary && (
                  <span className="ml-1.5 text-[11px] text-[#b6e400]/60 uppercase tracking-widest">
                    · {t.map.hq}
                  </span>
                )}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}