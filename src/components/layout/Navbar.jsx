import { useState } from "react"

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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fcfaf7]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="group flex flex-col">
          <span className="text-lg font-semibold tracking-wide text-slate-900 transition group-hover:text-slate-700">
            Becoming Co.
          </span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
            Recovery • Coordination • Education
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Enquire now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-800 transition hover:bg-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-[#fcfaf7]/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 lg:px-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Enquire now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}