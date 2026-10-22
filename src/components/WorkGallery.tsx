"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useId, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { galleries, galleryImages, type GalleryKind } from "@/lib/gallery";
import { useI18n } from "@/lib/i18n";
import SectionTag from "@/components/ui/SectionTag";

export default function WorkGallery({ kind = "home" }: { kind?: GalleryKind }) {
  const { t } = useI18n();
  const copy = t.work_gallery;
  const items = galleries[kind];
  const headingId = useId();
  const viewportId = useId();
  const reducedMotion = useReducedMotion();
  const [viewportRef, api] = useEmblaCarousel({ align: "start", loop: false });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSelected(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update).on("reInit", update);
    return () => { api.off("select", update).off("reInit", update); };
  }, [api]);

  return (
    <section aria-labelledby={headingId} aria-roledescription={copy.carousel} className="border-t border-[#ddddd2] bg-[#f4f3ea] px-6 py-20 text-[#1a1a17] md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionTag text={copy.tag} />
        <div className="mb-9 mt-5 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id={headingId} className="font-display text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-tight">{copy.headings[kind]}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7a7a6e]">{copy.intro}</p>
          </div>
          <div className="flex items-center gap-3">
            <span aria-live="polite" aria-atomic="true" className="mr-2 text-sm tabular-nums">{selected + 1} / {items.length}</span>
            <button type="button" aria-label={copy.previous} aria-controls={viewportId} disabled={!canPrev} onClick={() => api?.scrollPrev(!!reducedMotion)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a17]/25 text-xl transition-colors hover:bg-[#b6e400] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-25">←</button>
            <button type="button" aria-label={copy.next} aria-controls={viewportId} disabled={!canNext} onClick={() => api?.scrollNext(!!reducedMotion)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a17]/25 text-xl transition-colors hover:bg-[#b6e400] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-25">→</button>
          </div>
        </div>
        <div id={viewportId} ref={viewportRef} className="overflow-hidden rounded-2xl">
          <div className="flex touch-pan-y touch-pinch-zoom">
            {items.map((key, index) => (
              <div key={key} role="group" aria-roledescription={copy.slide} aria-label={`${index + 1} / ${items.length}`} className="min-w-0 flex-[0_0_100%] pr-4 md:flex-[0_0_70%]">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e5e4da] sm:aspect-[4/3]">
                    <Image src={`/images/gallery/${galleryImages[key]}.webp`} alt={copy.captions[key]} fill sizes="(max-width: 767px) 100vw, (max-width: 1280px) 70vw, 800px" className="object-cover" style={{ objectPosition: key === "collection" ? "55% 48%" : key === "lifting" ? "50% 35%" : "50% 50%" }} />
                  </div>
                  <figcaption className="flex gap-4 py-5 text-sm leading-relaxed"><span aria-hidden="true" className="text-[#7a7a6e]">{String(index + 1).padStart(2, "0")}</span>{copy.captions[key]}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
