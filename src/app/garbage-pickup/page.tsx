"use client";

import ServicePage from "@/components/ServicePage";
import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
  </svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
];

export default function GarbagePickupPage() {
  const { t } = useI18n();
  const d = t.garbage_pickup;

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
      imageSrc="/images/garbage-pickup.jpg"
      ctaHeading={d.cta_heading}
      ctaBody={d.cta_body}
    />
  );
}