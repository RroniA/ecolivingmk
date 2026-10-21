"use client";

import ServicePage from "@/components/ServicePage";
import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M5 17v3M19 17v3"/><path d="M5 11a2 2 0 0 0-4 0v6h22v-6a2 2 0 0 0-4 0v2H5z"/>
  </svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 3h14v13H1zM15 8h4l4 4v4h-8"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/>
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
];

export default function BulkyWasteCollectionPage() {
  const { t } = useI18n();
  const d = t.bulky_waste_collection;

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
      preparation={d.preparation}
      imageSrc="/images/bulky-waste-collection.webp"
      imageAlt={d.image_alt}
      ctaHeading={d.cta_heading}
      ctaBody={d.cta_body}
    />
  );
}
