"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import { useI18n } from "@/lib/i18n";
import { serviceLocations, type ServiceLocationId } from "@/lib/service-locations";

const RegionalMap = dynamic(() => import("@/components/RegionalMap"), { ssr: false });

export default function MapRegions() {
  const { t } = useI18n();
  const copy = t.map;
  const section = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<ServiceLocationId | null>(null);
  const [resetToken, setResetToken] = useState(0);
  const select = useCallback((id: ServiceLocationId) => setActive(id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: "300px" });
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} className="relative z-10 bg-[#1a1a17] px-6 py-20 text-[#f4f3ea] md:px-12 lg:px-20" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <SectionTag text={copy.tag} />
            <h2 id="coverage-heading" className="mt-5 text-balance font-display text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight">{copy.heading}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">{copy.description}</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm transition-colors hover:border-[#b6e400] hover:text-[#b6e400]">{copy.check_address}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15">
          <div className="flex flex-wrap items-center gap-2 bg-[#262b24] p-3 md:p-4" aria-label={copy.locations}>
            {serviceLocations.map((place,i) => <button key={place.id} type="button" aria-pressed={active===place.id} onClick={()=>select(place.id)} className={`flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${active===place.id ? "border-[#b6e400] bg-[#b6e400] text-[#1a1a17]" : "border-white/15 text-white/80 hover:bg-white/10"}`}><span className="text-[10px] opacity-60">{String(i+1).padStart(2,"0")}</span>{copy.places[place.id]}</button>)}
            <button type="button" onClick={()=>{setActive(null);setResetToken(value=>value+1);}} className="min-h-11 px-3 text-sm text-[#b6e400] underline underline-offset-4 md:ml-auto">{copy.show_all}</button>
          </div>
          <div className="relative isolate z-0 h-[420px] bg-[#e6e8df] md:h-[480px]">
            {visible ? <RegionalMap active={active} onSelect={select} resetToken={resetToken} /> : <div className="flex h-full items-center justify-center text-sm text-[#425343]">{copy.loading}</div>}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#262b24] px-5 py-4 text-xs text-white/55">
            <p>{copy.map_note}</p>
            <a href="https://www.openstreetmap.org/#map=11/41.895/20.99" target="_blank" rel="noreferrer" className="text-white/80 underline underline-offset-4">{copy.open_map} ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
