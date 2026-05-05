"use client";

import { useI18n, type Locale } from "@/lib/i18n";

const langs: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "sq", label: "SQ" },
  { code: "mk", label: "МК" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1">
      {langs.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(lang.code)}
            className={`font-['Jost'] text-[11px] uppercase tracking-widest transition-colors duration-200 ${
              locale === lang.code
                ? "text-[#1a1a17] font-semibold"
                : "text-[#7a7a6e] hover:text-[#1a1a17]"
            }`}
          >
            {lang.label}
          </button>
          {i < langs.length - 1 && (
            <span className="text-[#ddddd2] text-[10px]">/</span>
          )}
        </span>
      ))}
    </div>
  );
}