import { useState } from "react"
import logo from "../../assets/images/becomingco-logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Practitioners", href: "#practitioners" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(252,247,241,0.85)] backdrop-blur-xl">
      <div className="site-container flex items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Becoming Co."
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-[var(--color-brand-green)]">
              Becoming Co.
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
              Mental wellness
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-white hover:text-[var(--color-brand-green)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Enquire now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/80 text-[var(--color-brand-green)] transition hover:bg-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[rgba(252,247,241,0.95)] backdrop-blur md:hidden">
          <div className="site-container flex flex-col gap-2 px-6 py-4 lg:px-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-white hover:text-[var(--color-brand-green)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
               className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand-orange)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Enquire now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}