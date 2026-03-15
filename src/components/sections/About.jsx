export default function About() {
  return (
    <section id="about" className="site-section bg-white px-6 py-24 lg:px-12">
      <div className="bg-orb-green left-[8%] top-[10%] h-40 w-40 -z-10" />
      <div className="bg-orb-orange right-[10%] bottom-[5%] h-48 w-48 -z-10" />

      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-pill">About Becoming Co.</div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-brand-green)] md:text-5xl">
              A calm, hopeful and human approach to recovery.
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-[var(--color-brand-orange)]" />
          </div>

          <div>
            <div className="card-soft bg-[var(--color-surface)] p-8 md:p-10">
              <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                Becoming Co. is a trauma-informed support service built around
                trust, safety, advocacy and capacity building. The focus is on
                helping participants strengthen independence, emotional
                regulation, routines, confidence and sustainable life skills.
              </p>

              <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
                The approach is gentle, person-centred and grounded in the
                belief that meaningful progress happens when people feel safe,
                supported and genuinely understood.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-border-soft)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-brand-orange)]">
                    Mission
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">
                    Support people with care that feels safe, relational and
                    genuinely empowering.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-border-soft)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-brand-orange)]">
                    Vision
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">
                    Create meaningful growth through compassionate,
                    trauma-informed practice.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-border-soft)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-brand-orange)]">
                    Values
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">
                    Hope, advocacy, safety, clarity, dignity and person-centred
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}