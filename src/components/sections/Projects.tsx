"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

/*
  Projects section — 3 image cards with hover overlay.

  Client provides images — replace imageSrc in the `projects`
  array below. Placeholder dark cards shown until then.

  Layout:
  - One large card on the left (spans 2 rows on desktop)
  - Two stacked cards on the right
  This is the editorial grid pattern used on most award sites
  (Awwwards, Bureau Oberhaeuser, etc.) — asymmetric, visually
  dynamic, but stable and mobile-safe (stacks to single column).
*/

const projects = [
  {
    title: "Chegrane Municipal Cleanup",
    location: "Chegrane, Gostivar",
    year: "2023",
    imageSrc: "", // ← client photo
    large: true,
  },
  {
    title: "Brvenitsa Dumpster Program",
    location: "Brvenitsa",
    year: "2023",
    imageSrc: "",
    large: false,
  },
  {
    title: "Želino Waste Collection",
    location: "Želino",
    year: "2022",
    imageSrc: "",
    large: false,
  },
];

function ProjectCard({
  title,
  location,
  year,
  imageSrc,
  large,
  index,
}: {
  title: string;
  location: string;
  year: string;
  imageSrc: string;
  large: boolean;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  /* Subtle image parallax inside each card */
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl bg-[#1a1a17] ${
        large ? "md:row-span-2 min-h-[480px]" : "min-h-[220px] md:min-h-[240px]"
      }`}
    >
      {/* Image with parallax */}
      {imageSrc ? (
        <motion.img
          src={imageSrc}
          alt={title}
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[116%] -top-[8%] object-cover transition-transform duration-700"
        />
      ) : (
        /* Dot grid placeholder */
        <div className="absolute inset-0">
          <svg aria-hidden="true" className="w-full h-full opacity-[0.06]">
            <defs>
              <pattern
                id={`proj-dots-${index}`}
                x="0" y="0" width="24" height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#f4f3ea" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#proj-dots-${index})`} />
          </svg>
        </div>
      )}

      {/* Always-visible dark gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a17]/90 via-[#1a1a17]/20 to-transparent" />

      {/* Hover overlay — slides up */}
      <div className="absolute inset-0 bg-[#b6e400]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />

      {/* Content — always at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#f4f3ea]/50 group-hover:text-[#1a1a17]/60 transition-colors duration-300 mb-2">
              {location} · {year}
            </p>
            <h3 className="font-['Geologica'] text-[clamp(1rem,2vw,1.3rem)] font-light text-[#f4f3ea] group-hover:text-[#1a1a17] transition-colors duration-300 leading-tight">
              {title}
            </h3>
          </div>
          {/* Arrow — appears on hover */}
          <div className="shrink-0 w-9 h-9 rounded-full border border-[#f4f3ea]/30 group-hover:border-[#1a1a17]/40 flex items-center justify-center text-[#f4f3ea] group-hover:text-[#1a1a17] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="bg-[#f4f3ea] py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionTag text="Our Work" />
            <h2 className="mt-5 font-['Geologica'] text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.08] tracking-[-0.025em] text-[#1a1a17] max-w-md">
              Showcase of Completed Projects
            </h2>
          </div>
        </div>

        {/*
          Editorial grid:
          - Mobile: single column, all cards same height
          - Desktop: left card is large (row-span-2), right two stack
          The `grid-rows-[auto]` lets the large card define row height.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}