export default function Practitioners() {
  const practitioners = [
    {
      name: "Laura",
      role: "Founder & Practitioner",
      bio: "Laura bio placeholder. Add final copy here covering her qualifications, lived and learned experience, trauma-informed approach, values, and the kinds of participants or organisations she supports.",
    },
    {
      name: "Ella",
      role: "Practitioner",
      bio: "Ella combines lived and learned experience with a compassionate and determined approach to recovery. She has experience across child safety, psychosocial and physical disability, and is committed to empowering each person’s unique journey through trauma-informed, person-centred support.",
    },
  ]

  return (
    <section id="practitioners" className="site-section bg-white px-6 py-24 lg:px-12">
      <div className="bg-orb-green left-[5%] top-[12%] h-44 w-44 -z-10" />
      <div className="bg-orb-orange right-[8%] bottom-[8%] h-52 w-52 -z-10" />

      <div className="site-container">
        <div className="max-w-3xl">
          <div className="section-pill">Meet your practitioners</div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-brand-green)] md:text-5xl">
            Support grounded in compassion, advocacy and care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
            Becoming Co. is built on safe, relational and trauma-informed
            practice. Every client relationship is approached with empathy,
            clarity and a genuine commitment to growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {practitioners.map((person, index) => (
            <div
              key={person.name}
              className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]"
            >
              <div
                className={`flex min-h-[280px] items-center justify-center p-8 ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,var(--color-accent-green-soft),var(--color-accent-orange-soft))]"
                    : "bg-[linear-gradient(135deg,var(--color-accent-orange-soft),var(--color-accent-green-soft))]"
                }`}
              >
                <div className="rounded-[1.5rem] border border-dashed border-[var(--color-brand-orange)] bg-white/85 px-8 py-20 text-center text-sm text-[var(--color-text-muted)] shadow-sm">
                  {person.name} image placeholder
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="inline-flex rounded-full bg-[var(--color-accent-orange-soft)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-orange)] shadow-sm">
                  {person.role}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-[var(--color-brand-green)] md:text-3xl">
                  {person.name}
                </h3>

                <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
                  {person.bio}
                </p>

                <a
                  href="#contact"
                  className="btn-secondary mt-8 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-accent-orange-soft)]"
                >
                  Enquire about {person.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}