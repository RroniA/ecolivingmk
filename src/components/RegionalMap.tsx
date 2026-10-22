"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./regional-map.css";
import { serviceLocations, type ServiceLocationId } from "@/lib/service-locations";
import { useI18n } from "@/lib/i18n";

interface Props {
  active: ServiceLocationId | null;
  onSelect: (id: ServiceLocationId) => void;
  resetToken: number;
}

export default function RegionalMap({ active, onSelect, resetToken }: Props) {
  const { t } = useI18n();
  const copy = t.map;
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markers = useRef<Partial<Record<ServiceLocationId, L.Marker>>>({});
  const [tileError, setTileError] = useState(false);

  useEffect(() => {
    if (!container.current) return;
    const map = L.map(container.current, {
      scrollWheelZoom: false, dragging: !L.Browser.mobile, tapHold: false,
      zoomControl: false, minZoom: 8, maxZoom: 16,
    });
    mapRef.current = map;
    L.control.zoom({ position: "bottomright", zoomInTitle: copy.zoom_in, zoomOutTitle: copy.zoom_out }).addTo(map);
    map.fitBounds([[41.77, 20.85], [42.015, 21.14]], { padding: [30, 35], animate: false });
    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    tiles.on("tileerror", () => setTileError(true));
    tiles.on("tileload", () => setTileError(false));
    serviceLocations.forEach((place, i) => {
      const marker = L.marker([place.lat, place.lng], {
        icon: L.divIcon({ className: "eco-map-pin", html: `<span>${String(i + 1).padStart(2, "0")}</span>`, iconSize: [32, 32], iconAnchor: [16, 16] }),
        title: copy.places[place.id], alt: copy.places[place.id], keyboard: true,
      }).addTo(map);
      const label = document.createElement("span");
      label.textContent = copy.places[place.id];
      marker.bindTooltip(label, { permanent: true, direction: place.direction, offset: [place.direction === "left" ? -18 : 18, 0], className: "eco-map-label" });
      marker.on("click", () => onSelect(place.id));
      markers.current[place.id] = marker;
    });
    const observer = new ResizeObserver(() => { map.invalidateSize({ pan: false }); });
    observer.observe(container.current);
    return () => { observer.disconnect(); map.remove(); mapRef.current = null; markers.current = {}; };
  }, [copy, onSelect]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    serviceLocations.forEach(place => {
      markers.current[place.id]?.getElement()?.classList.toggle("is-active", place.id === active);
    });
    const place = serviceLocations.find(place => place.id === active);
    if (place) map.setView([place.lat, place.lng], 12, { animate: false });
  }, [active, copy]);

  useEffect(() => {
    if (resetToken > 0) mapRef.current?.fitBounds([[41.77, 20.85], [42.015, 21.14]], { padding: [30, 35], animate: false });
  }, [resetToken]);

  return <div className="relative h-full">
    <div ref={container} className="eco-regional-map h-full w-full" role="region" aria-label={copy.map_alt} />
    {tileError && <p role="status" className="absolute left-3 top-3 z-[1000] max-w-xs rounded-lg bg-white p-3 text-sm text-black shadow">{copy.unavailable} <a href="https://www.openstreetmap.org/#map=11/41.895/20.99" target="_blank" rel="noreferrer" className="underline">{copy.open_map}</a></p>}
  </div>;
}
