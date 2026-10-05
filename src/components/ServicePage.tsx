"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import ContainerSizeGuide from "@/components/ContainerSizeGuide";
import { useI18n } from "@/lib/i18n";

/* ── Types ── */
export interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServicePageProps {
  tag: string;
  title: string;
  subtitle: string;
  blurb: string;
  featuresHeading: string;
  features: ServiceFeature[];
  ctaHeading: string;
  ctaBody: string;
  imageSrc?: string;
  imageAlt?: string;
  preparation: { heading: string; items: string[] };
  containerGuide?: "pickup" | "rental";
}

function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    /*
      aspect-square on mobile → natural 16/9 on md and up.
      This prevents the tall portrait crop on small screens.
    */
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[560px]"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 h-[116%] w-full -top-[8%] object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
    </div>
  );
}

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[560px] bg-[#1a1a17]">
      <div className="absolute inset-0 text-[#f4f3ea]/5">
        <DotGrid />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-['Geologica'] text-[#f4f3ea]/20 text-sm tracking-widest uppercase">
          {label}
        </p>
      </div>
    </div>
  );
}

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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ContactForm() {
  const { t } = useI18n();
  const c = t.contact_page;
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service-name" className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_name}</label>
        <input id="service-name" name="name" type="text" autoComplete="name" placeholder={c.field_name_placeholder} className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service-email" className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_email}</label>
          <input id="service-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service-phone" className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_phone}</label>
          <input id="service-phone" name="phone" type="tel" autoComplete="tel" placeholder="+389 xx xxx xxx" className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service-message" className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_message}</label>
        <textarea id="service-message" name="message" rows={4} placeholder={c.field_message_placeholder} className="w-full resize-none rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
      </div>
      <Button variant="dark" className="self-start">{c.send}</Button>
      <p className="text-[12px] text-[#7a7a6e]">{c.send_note}</p>
    </form>
  );
}

export default function ServicePage({
  tag, title, subtitle, blurb, featuresHeading, features,
  ctaHeading, ctaBody, imageSrc, imageAlt, preparation, containerGuide,
}: ServicePageProps) {
  const { t } = useI18n();
  const ui = t.service_ui;
  return (
    <div className="bg-[#f4f3ea] text-[#1a1a17]">

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 text-[#1a1a17]/[0.055]"><DotGrid /></div>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, #f4f3ea 30%, transparent 100%)" }} />

        <div className="relative mx-auto max-w-6xl">
          <FadeUp><SectionTag text={tag} /></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-['Geologica'] text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#1a1a17] max-w-3xl">
              {title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="max-w-md font-['Jost'] text-[17px] leading-relaxed text-[#7a7a6e]">{subtitle}</p>
              <Button href="/contact" variant="dark" className="shrink-0">{ui.quote}</Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.3} className="mt-14">
            {imageSrc ? <ParallaxImage src={imageSrc} alt={imageAlt ?? `${ui.image_alt} ${tag}`} /> : <PlaceholderImage label={ui.placeholder} />}
          </FadeUp>
        </div>
      </section>

      {/* BLURB */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-['Geologica'] text-[clamp(1.15rem,2.2vw,1.55rem)] font-light leading-relaxed text-[#1a1a17] max-w-4xl">
              {blurb}
            </p>
          </FadeUp>
        </div>
      </section>

      {containerGuide && <ContainerSizeGuide variant={containerGuide} />}

      {/* FEATURES */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#1a1a17] text-[#f4f3ea]">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
              <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{ui.service}</span>
            </div>
            <h2 className="font-['Geologica'] text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-tight text-[#f4f3ea]">
              {featuresHeading}
            </h2>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#2a2a25]">
            {features.map((feature, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-[#1a1a17] p-8 flex flex-col gap-4 h-full">
                  <div className="w-10 h-10 rounded-lg border border-[#2a2a25] flex items-center justify-center text-[#b6e400]">
                    {feature.icon}
                  </div>
                  <p className="font-['Geologica'] text-[17px] font-medium text-[#f4f3ea]">{feature.title}</p>
                  <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e]">{feature.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <SectionTag text={ui.preparation_tag} />
          <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-tight">{preparation.heading}</h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {preparation.items.map((item, i) => (
              <li key={item} className="border-t border-border pt-5">
                <span aria-hidden="true" className="font-display text-sm text-text-muted">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[16px] leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{ui.talk}</span>
                </div>
                <h2 className="font-['Geologica'] text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-tight tracking-tight">
                  {ctaHeading}
                </h2>
                <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e] max-w-sm">{ctaBody}</p>
                <div className="mt-4 flex flex-col gap-4 border-t border-[#ddddd2] pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((n) => (
                        <div key={n} className="w-8 h-8 rounded-full bg-[#ddddd2] border-2 border-[#f4f3ea]" />
                      ))}
                    </div>
                    <p className="font-['Jost'] text-[13px] text-[#7a7a6e]">
                      {ui.contact_hint}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}><ContactForm /></FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}
