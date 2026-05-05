"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

import en from "@/messages/en.json";
import sq from "@/messages/sq.json";
import mk from "@/messages/mk.json";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export type Locale = "en" | "sq" | "mk";

const messages = { en, sq, mk } as const;

type Messages = typeof en;

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Messages;
}

/* ─────────────────────────────────────────────
   Context
───────────────────────────────────────────── */
const I18nContext = createContext<I18nContextValue | null>(null);

/* ─────────────────────────────────────────────
   Provider — wrap layout.tsx children with this
───────────────────────────────────────────── */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: messages[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

/* ─────────────────────────────────────────────
   Hook — use in any component
───────────────────────────────────────────── */
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}