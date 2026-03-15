export default function Services() {
  const participantSupports = [
    "Psychosocial Recovery Coaching",
    "Support Coordination",
    "NDIS navigation",
    "Emotional regulation",
    "Self-care routines",
    "Social and relational skills",
    "Mind and body awareness",
    "Skills for independence",
    "Capacity building",
    "Tools for crisis",
  ]

  const trainingSupports = [
    "Trauma-informed professional development",
    "Education for teams and organisations",
    "Human-centred training delivery",
    "Practical and relational learning",
  ]

  return (
    <section id="services" className="site-section bg-[var(--color-bg)] px-6 py-24 lg:px-12">
      <div className="bg-orb-green left-[-60px] bottom-[10%] h-52 w-52 -z-10" />
      <div className="bg-orb-orange right-[-60px] top-[10%] h-56 w-56 -z-10" />

      <div className="site-container">
        <div className="max-w-3xl">
          <div className="section-pill">Services</div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-brand-green)] md:text-5xl">
            Two clear pathways of support.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
            Becoming Co. supports individuals through NDIS-focused services,
            while also delivering trauma-informed education for professionals,
            organisations and community spaces.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="card-soft p-8 md:p-10">
            <div className="inline-flex rounded-full bg-[var(--color-accent-green-soft)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-green)]">
              For participants
            </div>

            <h3 className="mt-5 text-2xl font-semibold leading-snug text-[var(--color-brand-green)] md:text-3xl">
              Psychosocial Recovery Coaching & Support Coordination
            </h3>

            <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-brand-orange)]" />

            <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
              Becoming Co. offers trauma-informed, person-centred support for
              people wanting to build confidence, strengthen daily life skills,
              improve emotional wellbeing, and move towards greater
              independence. Support is shaped around each person’s goals, needs
              and capacity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {participantSupports.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2 text-sm text-[var(--color-text-soft)] transition hover:border-[var(--color-brand-orange)] hover:bg-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Enquire about support
            </a>
          </div>

          <div className="card-soft p-8 md:p-10">
            <div className="inline-flex rounded-full bg-[var(--color-accent-orange-soft)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-orange)]">
              For professionals & teams
            </div>

            <h3 className="mt-5 text-2xl font-semibold leading-snug text-[var(--color-brand-green)] md:text-3xl">
              Trauma-Informed Education
            </h3>

            <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-brand-orange)]" />

            <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
              Through The Becoming Method, Becoming Co. provides training and
              education designed to help professionals and organisations better
              understand trauma-informed practice in a way that feels practical,
              grounded and deeply human.
            </p>

            <div className="mt-8 space-y-3">
              {trainingSupports.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-4 text-sm text-[var(--color-text-soft)] transition hover:border-[var(--color-brand-orange)] hover:bg-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-secondary mt-8 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-accent-orange-soft)]">
              Enquire about training
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}