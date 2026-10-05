"use client";

import { useI18n } from "@/lib/i18n";

export default function ContainerSizeGuide({ variant }: { variant: "pickup" | "rental" }) {
  const { t } = useI18n();
  const guide = t.container_guide;
  const rows = variant === "pickup" ? guide.pickup_rows : guide.rental_rows;

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#ddddd2]">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-tight">
          {guide.heading}
        </h2>
        <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-text-muted">{guide.intro}</p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-border" tabIndex={0} role="region" aria-label={guide.heading}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">{guide.heading}. {guide.dimensions_label}.</caption>
            <thead className="bg-bg-dark text-text-inverse">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">{guide.capacity_label}</th>
                <th scope="col" className="px-6 py-4 font-medium">{guide.dimensions_label}</th>
                <th scope="col" className="px-6 py-4 font-medium">{guide.use_label}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.capacity} className="border-t border-border">
                  <th scope="row" className="px-6 py-5 font-medium whitespace-nowrap">{row.capacity}</th>
                  <td className="px-6 py-5 whitespace-nowrap">{row.dimensions}</td>
                  <td className="px-6 py-5 text-text-muted">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted">{guide.note}</p>
      </div>
    </section>
  );
}
