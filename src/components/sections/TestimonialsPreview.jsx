export default function TestimonialsPreview() {
  const testimonials = [
    {
      quote:
        "Approved testimonial placeholder. Replace with a short, trust-building Google review or participant quote.",
      name: "Client name",
      context: "Psychosocial Recovery Coaching",
    },
    {
      quote:
        "Approved testimonial placeholder. Replace with a Becoming Method or training testimonial.",
      name: "Organisation / Participant",
      context: "Trauma-Informed Education",
    },
    {
      quote:
        "Approved testimonial placeholder. Replace with a support coordination review.",
      name: "Client name",
      context: "Support Coordination",
    },
  ]

  return (
    <section className="site-section bg-[var(--color-bg)] px-6 py-24 lg:px-12">
      <div className="bg-orb-green left-[-80px] top-[10%] h-56 w-56 -z-10" />
      <div className="bg-orb-orange right-[-60px] bottom-[5%] h-56 w-56 -z-10" />

      <div className="site-container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="section-pill">Testimonials</div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-brand-green)] md:text-5xl">
              Stories and reflections that build trust.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              Social proof will help this page convert much better once approved
              testimonials are added in across both participant support and
              trauma-informed training.
            </p>
          </div>

          <a
            href="/testimonials"
            className="btn-secondary border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-accent-orange-soft)]"
          >
            View all testimonials
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-5 text-4xl leading-none text-[var(--color-brand-orange)]">
                “
              </div>

              <p className="text-base leading-8 text-[var(--color-text-soft)]">
                {item.quote}
              </p>

              <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                <p className="font-medium text-[var(--color-brand-green)]">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}