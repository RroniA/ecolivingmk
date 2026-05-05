"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n";

function DotGrid() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const { t } = useI18n();
  const c = t.contact_page;

  return (
    <main className="bg-[#f4f3ea] text-[#1a1a17]">

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 text-[#1a1a17]/[0.055]"><DotGrid /></div>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, #f4f3ea 30%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp><SectionTag text={c.tag} /></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-['Geologica'] text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#1a1a17] max-w-3xl">
              {c.h1}
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-md font-['Jost'] text-[17px] leading-relaxed text-[#7a7a6e]">{c.subtitle}</p>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT BLOCKS */}
      <section className="px-6 md:px-12 lg:px-20 py-4 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ddddd2]">
            {/* Phone */}
            <FadeUp delay={0}>
              <a href="tel:+389XXXXXXXX" className="group flex flex-col gap-4 p-8 border border-[#ddddd2] hover:border-[#1a1a17] transition-colors h-full">
                <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">01 — {c.phone_label}</span>
                <p className="font-['Geologica'] text-[clamp(1.2rem,2.5vw,1.75rem)] font-light leading-tight text-[#1a1a17]">+389 XX XXX XXX</p>
                <p className="font-['Jost'] text-[14px] text-[#7a7a6e]">{c.phone_sub}</p>
                <span className="mt-auto font-['Jost'] text-[13px] text-[#b6e400] opacity-0 group-hover:opacity-100 transition-opacity">{c.open}</span>
              </a>
            </FadeUp>
            {/* Email */}
            <FadeUp delay={0.08}>
              <a href="mailto:support@ecoliving.mk" className="group flex flex-col gap-4 p-8 border border-[#ddddd2] hover:border-[#1a1a17] transition-colors h-full">
                <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">02 — {c.email_label}</span>
                <p className="font-['Geologica'] text-[clamp(1.2rem,2.5vw,1.75rem)] font-light leading-tight text-[#1a1a17]">support@ecoliving.mk</p>
                <p className="font-['Jost'] text-[14px] text-[#7a7a6e]">{c.email_sub}</p>
                <span className="mt-auto font-['Jost'] text-[13px] text-[#b6e400] opacity-0 group-hover:opacity-100 transition-opacity">{c.open}</span>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#ddddd2]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Form */}
            <FadeUp>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.form_label}</span>
                </div>
                <h2 className="font-['Geologica'] text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-tight tracking-tight text-[#1a1a17]">
                  {c.form_heading}
                </h2>
                <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e] max-w-sm">{c.form_sub}</p>

                <form className="mt-2 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_name}</label>
                    <input type="text" placeholder={c.field_name_placeholder} className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 font-['Jost'] text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_email}</label>
                      <input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 font-['Jost'] text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_phone}</label>
                      <input type="tel" placeholder="+389 xx xxx xxx" className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 font-['Jost'] text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_service}</label>
                    <select className="w-full rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 font-['Jost'] text-[15px] text-[#1a1a17] outline-none focus:border-[#1a1a17] transition-colors appearance-none">
                      <option value="">{c.field_service_placeholder}</option>
                      {c.service_options.map((opt, i) => (
                        <option key={i} value={opt.toLowerCase().replace(/\s+/g, "-")}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.field_message}</label>
                    <textarea rows={4} placeholder={c.field_message_placeholder} className="w-full resize-none rounded-lg border border-[#ddddd2] bg-white/60 px-4 py-3 font-['Jost'] text-[15px] text-[#1a1a17] placeholder:text-[#7a7a6e] outline-none focus:border-[#1a1a17] transition-colors" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="dark" className="self-start">{c.send}</Button>
                    <p className="font-['Jost'] text-[12px] text-[#7a7a6e]">{c.send_note}</p>
                  </div>
                </form>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.15}>
              <div className="flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b6e400]" />
                  <span className="font-['Jost'] text-[11px] uppercase tracking-widest text-[#7a7a6e]">{c.map_label}</span>
                </div>
                <h2 className="font-['Geologica'] text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-tight tracking-tight text-[#1a1a17]">
                  {c.map_heading}
                </h2>
                <p className="font-['Jost'] text-[15px] leading-relaxed text-[#7a7a6e]">{c.map_body}</p>
                <div className="mt-2 flex-1 min-h-[360px] overflow-hidden rounded-2xl border border-[#ddddd2]">
                  <iframe
                    title="Eco Living location — Gostivar, North Macedonia"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23740.123456789!2d20.8958!3d41.7994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350ca2b9ad7e6f7%3A0x1234567890abcdef!2sGostivar%2C%20North%20Macedonia!5e0!3m2!1sen!2smk!4v1700000000000!5m2!1sen!2smk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "360px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* SOCIAL STRIP */}
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#1a1a17] border-t border-[#2a2a25]">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <FadeUp>
            <p className="font-['Jost'] text-[14px] text-[#7a7a6e]">{c.social_text}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-['Jost'] text-[13px] text-[#f4f3ea] hover:text-[#b6e400] transition-colors uppercase tracking-widest">
                {c.facebook}
              </a>
              <span className="text-[#2a2a25]">|</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-['Jost'] text-[13px] text-[#f4f3ea] hover:text-[#b6e400] transition-colors uppercase tracking-widest">
                {c.instagram}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}