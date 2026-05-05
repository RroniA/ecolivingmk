"use client";

import ServicePage from "@/components/ServicePage";
import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
];

export default function HouseDemolitionPage() {
  const { t } = useI18n();
  const d = t.house_demolition;

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
      imageSrc="/images/house-demolition.jpg"
      ctaHeading={d.cta_heading}
      ctaBody={d.cta_body}
    />
  );
}