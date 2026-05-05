"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

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
}

/* ── Dot grid SVG (decorative, matches Evermind dots.svg aesthetic) ── */
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

/* ── Parallax image wrapper ── */
function ParallaxImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative h-[480px] md:h-[560px] w-full overflow-hidden rounded-2xl">
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

/* ── Placeholder image when no real image provided ── */
function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="relative h-[480px] md:h-[560px] w-full overflow-hidden rounded-2xl bg-[#1a1a17]">
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

/* ── Fade-up animation wrapper ── */
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
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Contact form ── */
function ContactForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+389 xx xxx xxx"
            className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] uppercase tracking-widest text-[#7a7a6e]">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your needs…"
          className="w-full resize-none rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors"
        />
      </div>
      <Button variant="dark" className="self-start">
        Send Message
      </Button>
      <p className="text-[12px] text-[#7a7a6e]">
        Well get back to you within 24–48 hours.
      </p>
    </form>
  );
}

/* ── Main component ── */
export default function ServicePage({
  tag,
  title,
  subtitle,
  blurb,
  featuresHeading,
  features,
  ctaHeading,
  ctaBody,
  imageSrc,
  imageAlt = "Service image",
}: ServicePageProps) {
  return (
    <main className="bg-[#f4f3ea] text-[#1a1a17]">

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Dot grid fades out toward center */}
        <div className="pointer-events-none absolute inset-0 text-[#1a1a17]/[0.055]">
          <DotGrid />
        </div>
        {/* Radial mask so dots don't overwhelm */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #f4f3ea 30%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <SectionTag text={tag} />
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-['Geologica'] text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#1a1a17] max-w-3xl">
              {title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="max-w-md font-['Jost'] text-[17px] leading-relaxed text-[#7a7a6e]">
                {subtitle}
              </p>
              <Button href="/contact" variant="dark" className="shrink-0">
                Get a Quote
              </Button>
            </div>
          </FadeUp>

          {/* Image with parallax */}
          <FadeUp delay={0.3} className="mt-14">
            {imageSrc ? (
              <ParallaxImage src={imageSrc} alt={imageAlt} />
            ) : (
              <PlaceholderImage label="Client photo coming soon" />
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── BLURB ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-['Geologica'] text-[clamp(1.15rem,2.2vw,1.55rem)] font-light leading-relaxed text-[#1a1a17] max-w-4xl">
              {blurb}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#1a1a17] text-[#f4f3ea]">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
              <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">
                Service
              </span>
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
                  <p className="font-['Geologica'] text-[17px] font-medium text-[#f4f3ea]">
                    {feature.title}
                  </p>
                  <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e]">
                    {feature.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}
            <FadeUp>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">
                    Lets talk
                  </span>
                </div>
                <h2 className="font-['Geologica'] text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-tight tracking-tight">
                  {ctaHeading}
                </h2>
                <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e] max-w-sm">
                  {ctaBody}
                </p>

                {/* Stats or trust signal */}
                <div className="mt-4 flex flex-col gap-4 border-t border-[#ddddd2] pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((n) => (
                        <div
                          key={n}
                          className="w-8 h-8 rounded-full bg-[#ddddd2] border-2 border-[#f4f3ea]"
                        />
                      ))}
                    </div>
                    <p className="font-['Jost'] text-[13px] text-[#7a7a6e]">
                      Trusted by 36,000+ clients across North Macedonia
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.15}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>

    </main>
  );
}