"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, createCoordinates } from "@vnedyalk0v/react19-simple-maps";
import type { GeographyProps } from "@vnedyalk0v/react19-simple-maps";
import boundary from "@/data/north-macedonia.json";
import SectionTag from "@/components/ui/SectionTag";
import { useI18n } from "@/lib/i18n";

const places = [
  { id: "gostivar", coordinates: createCoordinates(20.917, 41.8), left: true },
  { id: "chegrane", coordinates: createCoordinates(20.97438, 41.83722), left: false },
  { id: "brvenitsa", coordinates: createCoordinates(20.9808, 41.9672), left: true },
  { id: "zelino", coordinates: createCoordinates(21.0642, 41.9803), left: false },
] as const;

export default function MapRegions() {
  const { t } = useI18n();
  const copy = t.map;
  const [overview, setOverview] = useState(false);
  const [active, setActive] = useState<string>("gostivar");
  return (
    <section className="relative z-10 overflow-hidden bg-[#1a1a17] px-6 py-24 text-[#f4f3ea] md:px-12 lg:px-20" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-6xl">
        <SectionTag text={copy.tag} />
        <h2 id="coverage-heading" className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-tight">{copy.heading}</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-white/60">{copy.description}</p>
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-[1fr_280px]">
          <div className="relative min-w-0 bg-[#101410]">
            <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
              {[false,true].map(value=><button key={String(value)} type="button" aria-pressed={overview===value} onClick={() => setOverview(value)} className={`rounded-full border px-4 py-2 text-xs focus-visible:outline-2 focus-visible:outline-offset-4 ${overview===value ? "border-[#b6e400] bg-[#b6e400] text-black" : "border-white/20 bg-[#1a1a17] text-white"}`}>{value ? copy.overview : copy.focus}</button>)}
            </div>
            <ComposableMap width={600} height={500} projection="geoMercator" projectionConfig={{center: overview ? createCoordinates(21.7, 41.6) : createCoordinates(20.99, 41.895), scale: 10000}} className="mt-12 w-full" role="img" aria-label={copy.map_alt}>
              <g transform={overview ? undefined : "translate(300 250) scale(6.5) translate(-300 -250)"}>
              <Geographies geography={{type: "FeatureCollection", features: [boundary as GeographyProps["geography"]]}}>
                {({geographies}) => geographies.map(geo => <Geography key={String(geo.id)} geography={geo} fill="#29352a" stroke="#70816a" strokeWidth={overview ? 1.2 : 0.3} style={{default:{outline:"none"},hover:{outline:"none"},pressed:{outline:"none"}}} />)}
              </Geographies>
              {places.map(place => (
                <Marker key={place.id} coordinates={place.coordinates}>
                  <g transform={overview ? undefined : "scale(0.153846)"}>
                  <circle r={active === place.id ? 16 : 10} fill="#b6e400" opacity={0.14} />
                  <circle r={active === place.id ? 6 : 4} fill={active === place.id ? "#b6e400" : "#f4f3ea"} stroke="#101410" strokeWidth={2} />
                  {!overview && <text x={place.left ? -23 : 23} y={6} textAnchor={place.left ? "end" : "start"} fill={active === place.id ? "#b6e400" : "#f4f3ea"} fontSize={20} fontWeight={500}>{copy.places[place.id]}</text>}
                  </g>
                </Marker>
              ))}
              </g>
            </ComposableMap>
            <p className="px-5 pb-5 text-xs text-white/45">{copy.map_note}</p>
          </div>
          <div className="border-t border-white/10 bg-[#20251f] p-6 lg:border-l lg:border-t-0">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/50">{copy.locations}</p>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {places.map((place,i) => <button key={place.id} type="button" aria-pressed={active === place.id} onClick={()=>{setActive(place.id);setOverview(false);}} className={`rounded-xl border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${active === place.id ? "border-[#b6e400]/50 bg-[#b6e400]/10" : "border-white/10 hover:bg-white/5"}`}><span className="block text-xs text-[#b6e400]">0{i+1}{i===0 ? ` · ${copy.hq}` : ""}</span><span className="mt-2 block text-base">{copy.places[place.id]}</span></button>)}
            </div>
            <a href="/contact" className="mt-6 inline-block text-sm text-[#b6e400] underline underline-offset-4">{copy.check_address} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
