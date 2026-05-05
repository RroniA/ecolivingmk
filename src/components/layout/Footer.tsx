"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a17" }}>

      {/* Newsletter */}
      <div style={{ borderBottom: "1px solid rgba(244,243,234,0.08)" }}>
        <div className="mx-auto w-full max-w-screen-xl px-6 py-8 md:flex md:items-center md:justify-between gap-6">
          <h3
            className="text-lg font-semibold mb-4 md:mb-0"
            style={{ color: "#f4f3ea", fontFamily: "var(--font-display)" }}
          >
            Get Latest Updates and Special Offers
          </h3>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 md:w-64 px-4 py-2 rounded-lg text-sm outline-none"
              style={{
                backgroundColor: "rgba(244,243,234,0.08)",
                border: "1px solid rgba(244,243,234,0.12)",
                color: "#f4f3ea",
                fontFamily: "var(--font-body)",
              }}
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-sm font-medium"
              style={{ backgroundColor: "#b6e400", color: "#1a1a17", fontFamily: "var(--font-body)" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10">
        <div className="md:flex md:justify-between gap-8">

          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <Link
              href="/"
              className="flex items-center gap-2 mb-3"
              style={{ color: "#f4f3ea", fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600 }}
            >
              EcoLiving™
            </Link>
            <p className="text-sm" style={{ color: "rgba(244,243,234,0.45)", fontFamily: "var(--font-body)" }}>
              Green Today. Green For Life.
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">

            {/* Quick Links */}
            <div>
              <h4
                className="mb-5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(244,243,234,0.4)", fontFamily: "var(--font-body)" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
                <li><Link href="/" className="text-sm" style={{ color: "rgba(244,243,234,0.6)" }}>Home</Link></li>
                <li><Link href="/about" className="text-sm" style={{ color: "rgba(244,243,234,0.6)" }}>About</Link></li>
                <li><Link href="/contact" className="text-sm" style={{ color: "rgba(244,243,234,0.6)" }}>Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="mb-5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(244,243,234,0.4)", fontFamily: "var(--font-body)" }}
              >
                Services
              </h4>
              <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
                <li><Link href="/garbage-pickup" className="text-sm" style={{ color: "rgba(244,243,234,0.6)" }}>Garbage Pickup</Link></li>
                <li><Link href="/dumpster-rental" className="text-sm" style={{ color: "rgba(244,243,234,0.6)" }}>Dumpster Rental</Link></li>
                <li><Link href="/house-demolition" className="text-sm" style={{ color: "rgba(244,243,234,0.6)" }}>House Demolition</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="mb-5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(244,243,234,0.4)", fontFamily: "var(--font-body)" }}
              >
                Contact Info
              </h4>
              <p className="text-xs mb-1" style={{ color: "rgba(244,243,234,0.4)", fontFamily: "var(--font-body)" }}>
                Need help? Email us
              </p>
              
              {/* THE FIX: Opening <a tag added here */}
              <a
                href="mailto:support@ecoliving.mk"
                className="text-sm font-medium block mb-5"
                style={{ color: "#f4f3ea", fontFamily: "var(--font-body)" }}
              >
                support@ecoliving.mk
              </a>
              <div className="flex gap-3">
                
                {/* THE FIX: Opening <a tag added here */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "rgba(244,243,234,0.08)", color: "rgba(244,243,234,0.6)", fontFamily: "var(--font-body)" }}
                >
                  Facebook
                </a>
                
                {/* THE FIX: Opening <a tag added here */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "rgba(244,243,234,0.08)", color: "rgba(244,243,234,0.6)", fontFamily: "var(--font-body)" }}
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderTop: "1px solid rgba(244,243,234,0.08)" }}
        >
          <span className="text-sm" style={{ color: "rgba(244,243,234,0.35)", fontFamily: "var(--font-body)" }}>
            © 2024 Eco Living. All rights reserved.
          </span>
          <span className="text-xs" style={{ color: "rgba(244,243,234,0.2)", fontFamily: "var(--font-body)" }}>
            ecoliving.mk
          </span>
        </div>

      </div>
    </footer>
  );
}