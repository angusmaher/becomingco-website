export default function Hero() {
  return (
    <section id="top" className="site-section bg-[var(--color-bg)] px-6 py-20 lg:px-12 lg:py-28">
      <div className="bg-orb-green left-[-120px] top-[-80px] h-72 w-72 -z-10" />
      <div className="bg-orb-orange right-[-100px] top-[40px] h-80 w-80 -z-10" />
      <div className="bg-orb-green bottom-[-120px] left-[28%] h-72 w-72 -z-10" />

      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="section-pill">Welcome to your becoming</div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-brand-green)] md:text-6xl">
            Support that helps people feel safe, capable and hopeful again.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
            Becoming Co. supports NDIS participants through psychosocial
            recovery coaching and support coordination, while also delivering
            trauma-informed education for professionals and organisations.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            Gentle, person-centred support designed to build confidence,
            strengthen daily life skills, and create meaningful progress over
            time.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Start intake
            </a>

            <a href="#services" className="btn-secondary">
              Explore services
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-[var(--color-brand-green)]">
                Psychosocial Recovery Coaching
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-[var(--color-brand-green)]">
                Support Coordination
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-[var(--color-brand-green)]">
                Trauma-Informed Education
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-[var(--shadow-medium)] backdrop-blur">
            <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,var(--color-accent-green-soft),var(--color-accent-orange-soft))] p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    Participant intake
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[var(--color-brand-green)]">
                    Start with a simple enquiry
                  </h2>
                </div>

                <div className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] shadow-sm">
                  GHL ready
                </div>
              </div>

              <div className="space-y-4">
                <input className="input-base" placeholder="Full name" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="input-base" placeholder="Email" />
                  <input className="input-base" placeholder="Phone" />
                </div>

                <select className="input-base text-[var(--color-text-muted)]">
                  <option>Preferred contact method</option>
                  <option>Call</option>
                  <option>Text</option>
                  <option>Email</option>
                </select>

                <textarea
                  className="input-base min-h-[120px]"
                  placeholder="Tell us a little about what support you're looking for"
                />

                <button className="btn-primary w-full">Submit enquiry</button>

                <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                  This form can later connect to GoHighLevel for contact
                  creation, notifications, and follow-up automations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}