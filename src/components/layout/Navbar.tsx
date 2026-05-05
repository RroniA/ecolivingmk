"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const serviceLinks = [
  { label: "Garbage Pickup", href: "/garbage-pickup" },
  { label: "Dumpster Rental", href: "/dumpster-rental" },
  { label: "House Demolition", href: "/house-demolition" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed w-full z-50 top-3 px-4"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="max-w-[1100px] mx-auto rounded-2xl"
        style={{
          pointerEvents: "auto",
          backgroundColor: "rgba(244, 243, 234, 0.55)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          isolation: "isolate",
        }}
      >
        <div className="flex flex-wrap items-center justify-between px-5 py-2.5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="EcoLiving"
              className="w-9 h-9 object-contain"
            />
            <span
              className="text-[15px] font-semibold tracking-tight text-[#1a1a17]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              EcoLiving™
            </span>
          </Link>

          {/* Right side: CTA + language switcher + hamburger */}
          <div className="flex items-center gap-2 md:order-2">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: "#1a1a17",
                color: "#f4f3ea",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b6e400";
                e.currentTarget.style.color = "#1a1a17";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a17";
                e.currentTarget.style.color = "#f4f3ea";
              }}
            >
              Get a Quote
            </Link>
            <LanguageSwitcher />

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#7a7a6e] hover:bg-black/[0.06] hover:text-[#1a1a17] transition-colors"
              aria-controls="navbar-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Nav links */}
          <div
            id="navbar-menu"
            className={`${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-3 md:mt-0 md:flex-row md:items-center md:gap-1 border-t border-black/[0.06] md:border-0 pt-3 md:pt-0">

              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-black/[0.06]"
                  style={{ fontFamily: "var(--font-body)", color: pathname === "/" ? "#1a1a17" : "#7a7a6e" }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-black/[0.06]"
                  style={{ fontFamily: "var(--font-body)", color: pathname === "/about" ? "#1a1a17" : "#7a7a6e" }}
                >
                  About Us
                </Link>
              </li>

              {/* Services dropdown */}
              <li className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-black/[0.06]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: pathname.includes("garbage") || pathname.includes("dumpster") || pathname.includes("demolition") ? "#1a1a17" : "#7a7a6e",
                  }}
                >
                  Services
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200"
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`${servicesOpen ? "block" : "hidden"} md:absolute md:top-full md:left-0 md:mt-1 w-48 rounded-xl overflow-hidden md:shadow-lg`}
                  style={{
                    backgroundColor: "rgba(244, 243, 234, 0.95)",
                    backdropFilter: "blur(32px)",
                    WebkitBackdropFilter: "blur(32px)",
                    border: "1px solid rgba(26,26,23,0.08)",
                  }}
                >
                  <ul className="p-1.5">
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                          className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-black/[0.06]"
                          style={{ fontFamily: "var(--font-body)", color: pathname === link.href ? "#1a1a17" : "#7a7a6e" }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-black/[0.06]"
                  style={{ fontFamily: "var(--font-body)", color: pathname === "/contact" ? "#1a1a17" : "#7a7a6e" }}
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}