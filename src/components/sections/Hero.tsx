"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n";

const VIDEO_SRC = "/HeroVideo.mp4";
const YOUTUBE_ID = "uebHUakGZsM";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

function VideoModal({ open, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={handleInnerClick}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="EcoLiving video"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          aria-label="Close video"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7 4.5L15.5 10L7 15.5V4.5Z" fill="currentColor" />
    </svg>
  );
}

function GlassCard({ onPlay }: { onPlay: () => void }) {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="relative w-full max-w-[320px] rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-[24px] p-5 flex flex-col gap-4"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)" }}
    >
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
        <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-white/60">
          {t.hero.watch}
        </span>
      </div>

      <button
        onClick={onPlay}
        className="group relative w-full aspect-video rounded-xl overflow-hidden bg-black/30 flex items-center justify-center"
        aria-label="Play EcoLiving video"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#b6e400]/10 to-black/30" />
        <div className="relative z-10 w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#b6e400] group-hover:text-[#b6e400] transition-all duration-300">
          <PlayIcon />
        </div>
        <span className="absolute bottom-2 right-2 font-['Jost'] text-[11px] text-white/70 bg-black/40 px-2 py-0.5 rounded">
          {t.hero.watch_video}
        </span>
      </button>

      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-['Geologica'] text-[20px] font-light text-white leading-none">36K+</span>
          <span className="font-['Jost'] text-[10px] text-white/50 uppercase tracking-widest">{t.hero.happy_clients}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-['Geologica'] text-[20px] font-light text-white leading-none">120+</span>
          <span className="font-['Jost'] text-[10px] text-white/50 uppercase tracking-widest">{t.hero.companies}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useI18n();

  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentBlur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(10px)"]);
  const contentY = useTransform(scrollY, [0, 400], ["0%", "-6%"]);

  return (
    <>
      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/*
        FIX 1: Changed `h-screen` to `h-[100dvh]`. 
        This respects mobile browser toolbars dynamically.
      */}
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#1a1a17] z-0">

        {/* VIDEO */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline preload="auto" aria-hidden="true"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a17]/85 via-[#1a1a17]/55 to-[#1a1a17]/25" />
        </div>

        {/* CONTENT */}
        <motion.div
          className="relative z-10 h-full flex items-center"
          style={{ opacity: contentOpacity, filter: contentBlur, y: contentY }}
        >
          <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20">
            {/* 
              FIX 2: Tightened mobile spacing. 
              Changed gap-8 to gap-6, pt-24 to pt-20, and pb-8 to pb-4 for mobile only.
              This ensures the stack doesn't overflow the sticky container on small phones.
            */}
            <div className="
              flex flex-col lg:flex-row lg:items-center lg:justify-between 
              gap-6 md:gap-8
              pt-20 pb-4
              md:pt-0 md:pb-0
            ">

              {/* LEFT — text */}
              {/* FIX 3: Tightened gap-5 to gap-4 on mobile */}
              <div className="flex flex-col gap-4 md:gap-5 max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-white/60">
                    {t.hero.tag}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="font-['Geologica'] text-[clamp(2.2rem,6.5vw,5.2rem)] font-light leading-[1.04] tracking-[-0.025em] text-[#f4f3ea]"
                >
                  {t.hero.h1_1} <span className="text-[#b6e400]">{t.hero.h1_2}</span> {t.hero.h1_3}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="font-['Jost'] text-[16px] leading-relaxed text-white/65 max-w-md"
                >
                  {t.hero.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.48 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <Button href="/contact" variant="accent">{t.hero.cta_contact}</Button>
                  <Button href="/about" variant="outline">{t.hero.cta_learn}</Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex -space-x-2.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-[#f4f3ea] bg-[#b6e400]/30" />
                    ))}
                  </div>
                  <p className="font-['Jost'] text-[13px] text-[#f4f3ea]/70 leading-snug">
                    {t.hero.trust}
                  </p>
                </motion.div>
              </div>

              {/* RIGHT — glass card */}
              <div className="flex justify-center lg:justify-end">
                <GlassCard onPlay={() => setModalOpen(true)} />
              </div>

            </div>
          </div>
        </motion.div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-['Jost'] text-[10px] uppercase tracking-[0.2em] text-white/40">{t.hero.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>

      </section>
    </>
  );
}