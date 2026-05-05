import type { Metadata } from "next"
import "./globals.css"
import SmoothScroll from "@/lib/lenis"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Geologica, Jost } from "next/font/google"
import { I18nProvider } from "@/lib/i18n"

const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
})

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Eco Living",
  description: "Quality, affordable, and reliable waste collection services.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geologica.variable} ${jost.variable}`}>
        <I18nProvider>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  )
}