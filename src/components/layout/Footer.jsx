export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#f8f5f1]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-[#e8f1eb] blur-3xl opacity-60" />
        <div className="absolute right-[8%] bottom-[10%] h-48 w-48 rounded-full bg-[#f3e2d8] blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Becoming Co.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Trauma-informed support, recovery-focused care, and education that
              feels human, hopeful and grounded.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/_becomingco_/"
                className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580735924495"
                className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/laura-dickson-17b485259/"
                className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <a href="#about" className="transition hover:text-slate-900">
                About
              </a>
              <a href="#services" className="transition hover:text-slate-900">
                Services
              </a>
              <a
                href="#practitioners"
                className="transition hover:text-slate-900"
              >
                Practitioners
              </a>
              <a href="#faq" className="transition hover:text-slate-900">
                FAQ
              </a>
              <a href="#contact" className="transition hover:text-slate-900">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div>
                <p className="text-slate-500">Phone</p>
                <p className="mt-1 font-medium text-slate-900">0468 064 100</p>
              </div>

              <div>
                <p className="text-slate-500">Email</p>
                <p className="mt-1 font-medium text-slate-900">
                  hello@becomingco.au
                </p>
              </div>

              <div>
                <p className="text-slate-500">Hours</p>
                <p className="mt-1 font-medium text-slate-900">
                  Monday to Friday, 8:00am–5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Becoming Co. All rights reserved.</p>
          <a href="#top" className="transition hover:text-slate-900">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}