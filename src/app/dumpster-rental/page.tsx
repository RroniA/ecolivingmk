"use client";

import ServicePage from "@/components/ServicePage";
import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><path d="M18 2v4h4"/>
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
  </svg>,
];

export default function DumpsterRentalPage() {
  const { t } = useI18n();
  const d = t.dumpster_rental;

  const features = d.features.map((f, i) => ({
    icon: icons[i],
    title: f.title,
    description: f.description,
  }));

  return (
    <ServicePage
      tag={d.tag}
      title={d.title}
      subtitle={d.subtitle}
      blurb={d.blurb}
      featuresHeading={d.features_heading}
      features={features}
      imageSrc="/images/dumpster-rental.jpg"
      ctaHeading={d.cta_heading}
      ctaBody={d.cta_body}
    />
  );
}