"use client";

import ServicePage from "@/components/ServicePage";
import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21V7l7-4 7 4v14"/><path d="M3 21h18"/><path d="M9 9h1"/><path d="M14 9h1"/><path d="M9 13h1"/><path d="M14 13h1"/><path d="M9 21v-4h6v4"/>
  </svg>,
];

export default function SewerDrainageCleaningPage() {
  const { t } = useI18n();
  const d = t.sewer_drainage_cleaning;

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
      imageSrc="/images/sewer-drainage-cleaning.jpg"
      ctaHeading={d.cta_heading}
      ctaBody={d.cta_body}
    />
  );
}