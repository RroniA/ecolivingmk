"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const servicesMeta = [
  { index: "01", href: "/garbage-pickup",           color: "#1a1a17", accent: "#b6e400", imageSrc: "/images/garbage-pickup-europe.webp"   },
  { index: "02", href: "/dumpster-rental",          color: "#232320", accent: "#b6e400", imageSrc: "/images/dumpster-rental.jpg"  },
  { index: "03", href: "/house-demolition",         color: "#2a2a25", accent: "#b6e400", imageSrc: "/images/house-demolition.jpg" },
  { index: "04", href: "/septic-tank-cleaning",     color: "#302f29", accent: "#b6e400", imageSrc: "/images/septic-tank-cleaning.jpg" },
  { index: "05", href: "/sewer-drainage-cleaning",  color: "#373630", accent: "#b6e400", imageSrc: "/images/sewer-drainage-cleaning.jpg" },
  { index: "06", href: "/house-cleaning",           color: "#3d3c35", accent: "#b6e400", imageSrc: "/images/house-cleaning.jpg" },
  { index: "07", href: "/bulky-waste-collection", color: "#434239", accent: "#b6e400", imageSrc: "/images/bulky-waste-collection.webp" },
];

interface CardProps {
  index: string;
  title: string;
  description: string;
  href: string;
  color: string;
  accent: string;
  imageSrc: string;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  viewDetails: string;
  label: string;
}

function ServiceCard({
  index, title, description, href, color, accent, imageSrc,
  i, progress, range, targetScale, viewDetails, label,
}: CardProps) {
  const reducedMotion = useReducedMotion();
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="service-stack-item" style={{ "--card-index": i } as React.CSSProperties}>
      <motion.div
        style={{ scale: reducedMotion ? 1 : scale, backgroundColor: color }}
        className="service-stack-card relative md:h-[560px] rounded-2xl overflow-hidden flex flex-col md:flex-row origin-top"
      >
        <div className="flex flex-col justify-between p-6 md:p-12 w-full md:w-1/2 shrink-0 z-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center justify-between">
              <span className="font-['Jost'] text-[11px] uppercase tracking-widest" style={{ color: `${accent}99` }}>
                {index}
              </span>
              <span className="font-['Jost'] text-[11px] uppercase tracking-widest" style={{ color: `${accent}60` }}>
                {label}
              </span>
            </div>

            <h3 className="font-['Geologica'] text-[clamp(1.6rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.02em] text-[#f4f3ea]">
              {title}
            </h3>

            <p className="font-['Jost'] text-[15px] leading-relaxed text-[#f4f3ea]/60 max-w-xs">
              {description}
            </p>
          </div>

          <Link href={href} className="group inline-flex items-center gap-3 mt-5 md:mt-8">
            <span
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ borderColor: accent, color: accent }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-['Jost'] text-[13px] uppercase tracking-widest group-hover:underline transition-all" style={{ color: accent }}>
              {viewDetails}
            </span>
          </Link>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden">
          {imageSrc ? (
            <Image src={imageSrc} alt={title} fill sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 576px" className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.07]">
                <defs>
                  <pattern id={`dots-${i}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#f4f3ea" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#dots-${i})`} />
              </svg>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative z-10 w-full bg-[#f4f3ea] py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionTag text={t.services.tag} />
            <h2 className="mt-6 font-['Geologica'] text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.08] tracking-[-0.025em] text-[#1a1a17] max-w-md">
              {t.services.heading}
            </h2>
          </div>
          <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e] max-w-xs">
            {t.services.subtitle}
          </p>
        </div>

        <div ref={containerRef} className="relative flex flex-col gap-4">
          {t.services.items.map((item, i) => {
            const meta = servicesMeta[i];
            const targetScale = 1 - (t.services.items.length - i - 1) * 0.035;
            return (
              <ServiceCard
                key={meta.href}
                index={meta.index}
                title={item.title}
                description={item.description}
                href={meta.href}
                color={meta.color}
                accent={meta.accent}
                imageSrc={meta.imageSrc}
                i={i}
                progress={scrollYProgress}
                range={[i / t.services.items.length, 1]}
                targetScale={targetScale}
                viewDetails={t.services.view_details}
                label={t.services.label}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
