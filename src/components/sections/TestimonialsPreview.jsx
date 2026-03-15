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
    <section
      className="relative overflow-hidden bg-[#fcfaf7] px-6 py-24 lg:px-12"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-[10%] h-56 w-56 rounded-full bg-[#e7f1ea] blur-3xl opacity-70" />
        <div className="absolute right-[-60px] bottom-[5%] h-56 w-56 rounded-full bg-[#f3e2d8] blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#d8e3dc] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600 shadow-sm">
              Testimonials
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Stories and reflections that build trust.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Social proof will help this page convert much better once approved
              testimonials are added in across both participant support and
              trauma-informed training.
            </p>
          </div>

          <a
            href="/testimonials"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
          >
            View all testimonials
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-5 text-3xl leading-none text-[#c9b2a3]">“</div>

              <p className="text-base leading-8 text-slate-700">
                {item.quote}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}