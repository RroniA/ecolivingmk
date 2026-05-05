"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f4f3ea] overflow-hidden py-32 px-6 md:px-12 lg:px-20"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-40 top-20 w-[600px] h-[600px] rounded-full bg-[#b6e400]/8 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <FadeUp>
              <SectionTag text={t.about.tag} />
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 font-['Geologica'] text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.08] tracking-[-0.025em] text-[#1a1a17]">
                {t.about.heading}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2} className="shrink-0">
            <Button href="/about" variant="dark">{t.about.cta}</Button>
          </FadeUp>
        </div>

        {/* THREE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ddddd2]">
          {t.about.pillars.map((p, i) => (
            <FadeUp key={p.index} delay={i * 0.1}>
              <div className="bg-[#f4f3ea] p-8 flex flex-col gap-5 h-full">
                <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">
                  {p.index}
                </span>
                <p className="font-['Geologica'] text-[19px] font-light text-[#1a1a17]">
                  {p.title}
                </p>
                <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e]">
                  {p.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* STATS ROW */}
        <FadeUp delay={0.1}>
          <div className="mt-px bg-[#ddddd2]">
            <div className="bg-[#f4f3ea] px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#ddddd2]">
              {t.about.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 md:px-8 first:pl-0 last:pr-0">
                  <span className="font-['Geologica'] text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-none tracking-[-0.03em] text-[#1a1a17]">
                    {s.value}
                  </span>
                  <span className="font-['Jost'] text-[12px] uppercase tracking-widest text-[#7a7a6e]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}