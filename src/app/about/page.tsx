"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n";

function DotGrid() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const { t } = useI18n();
  const a = t.about_page;

  return (
    <main className="bg-[#f4f3ea] text-[#1a1a17]">

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 text-[#1a1a17]/[0.055]"><DotGrid /></div>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, #f4f3ea 30%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp><SectionTag text={a.tag} /></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-['Geologica'] text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#1a1a17] max-w-4xl">
              {a.h1}
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-xl font-['Jost'] text-[17px] leading-relaxed text-[#7a7a6e]">{a.subtitle}</p>
          </FadeUp>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-['Geologica'] text-[clamp(1.15rem,2.2vw,1.55rem)] font-light leading-relaxed text-[#1a1a17] max-w-4xl">
              {a.pull_quote}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#1a1a17]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {a.stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="flex flex-col gap-1">
                  <span className="font-['Geologica'] text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.03em] text-[#f4f3ea]">{s.value}</span>
                  <span className="font-['Jost'] text-[13px] text-[#7a7a6e] uppercase tracking-widest">{s.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
              <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{a.values_label}</span>
            </div>
            <h2 className="font-['Geologica'] text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-tight text-[#1a1a17] max-w-xl">
              {a.values_heading}
            </h2>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ddddd2]">
            {a.values.map((v, i) => (
              <FadeUp key={v.index} delay={i * 0.1}>
                <div className="flex flex-col gap-5 p-8 border border-[#ddddd2] h-full">
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{v.index}</span>
                  <p className="font-['Geologica'] text-[19px] font-light text-[#1a1a17]">{v.title}</p>
                  <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e]">{v.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#1a1a17] text-[#f4f3ea]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <FadeUp>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{a.services_label}</span>
                </div>
                <h2 className="font-['Geologica'] text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-tight text-[#f4f3ea] max-w-md">
                  {a.services_heading}
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Button href="/contact" variant="accent" className="shrink-0">{a.services_cta}</Button>
            </FadeUp>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a25]">
            {a.services.map((s, i) => (
              <FadeUp key={s.href} delay={i * 0.08}>
                <a href={s.href} className="group bg-[#1a1a17] p-8 flex flex-col gap-4 h-full hover:bg-[#232320] transition-colors">
                  <p className="font-['Geologica'] text-[18px] font-medium text-[#f4f3ea]">{s.title}</p>
                  <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e] flex-1">{s.body}</p>
                  <span className="font-['Jost'] text-[13px] text-[#b6e400] group-hover:underline mt-2">{s.link}</span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <FadeUp className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{a.cta_label}</span>
              </div>
              <h2 className="font-['Geologica'] text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-tight tracking-tight text-[#1a1a17]">
                {a.cta_heading}
              </h2>
              <p className="mt-4 font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e]">{a.cta_body}</p>
            </FadeUp>
            <FadeUp delay={0.15} className="shrink-0">
              <Button href="/contact" variant="dark">{a.cta_button}</Button>
            </FadeUp>
          </div>
        </div>
      </section>

    </main>
  );
}