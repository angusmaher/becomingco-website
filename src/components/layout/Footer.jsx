export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="bg-orb-green left-[8%] top-[18%] h-44 w-44 -z-10" />
      <div className="bg-orb-orange right-[8%] bottom-[10%] h-48 w-48 -z-10" />

      <div className="site-container px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-brand-green)]">
              Becoming Co.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-text-soft)]">
              Trauma-informed support, recovery-focused care, and education that
              feels human, hopeful and grounded.
            </p>

            <p className="mt-5 text-sm leading-7 text-[var(--color-text-soft)]">
              Maroochydore, Sunshine Coast, QLD
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--color-text-soft)]">
              <a href="#about" className="transition hover:text-[var(--color-brand-green)]">
                About
              </a>
              <a href="#services" className="transition hover:text-[var(--color-brand-green)]">
                Services
              </a>
              <a href="#practitioners" className="transition hover:text-[var(--color-brand-green)]">
                Practitioners
              </a>
              <a href="#faq" className="transition hover:text-[var(--color-brand-green)]">
                FAQ
              </a>
              <a href="#contact" className="transition hover:text-[var(--color-brand-green)]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm text-[var(--color-text-soft)]">
              <div>
                <p className="text-[var(--color-text-muted)]">Phone</p>
                <p className="mt-1 font-medium text-[var(--color-brand-green)]">
                  0448 250 458
                </p>
              </div>

              <div>
                <p className="text-[var(--color-text-muted)]">Email</p>
                <p className="mt-1 font-medium text-[var(--color-brand-green)]">
                  laura@becomingco.au
                </p>
              </div>

              <div>
                <p className="text-[var(--color-text-muted)]">Hours</p>
                <p className="mt-1 font-medium text-[var(--color-brand-green)]">
                  Monday–Friday, 9–5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Becoming Co. All rights reserved.</p>
          <a href="#top" className="transition hover:text-[var(--color-brand-green)]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}