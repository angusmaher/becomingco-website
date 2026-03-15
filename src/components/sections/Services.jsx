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
    <section
      id="services"
      className="relative overflow-hidden bg-[#fcfaf7] px-6 py-24 lg:px-12"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-60px] bottom-[10%] h-52 w-52 rounded-full bg-[#e7f1ea] blur-3xl opacity-70" />
        <div className="absolute right-[-60px] top-[10%] h-56 w-56 rounded-full bg-[#f3e2d8] blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-[#d8e3dc] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600 shadow-sm">
            Services
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Two clear pathways of support.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Becoming Co. supports individuals through NDIS-focused services,
            while also delivering trauma-informed education for professionals,
            organisations and community spaces.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-10">
            <div className="inline-flex rounded-full bg-[#edf5ef] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-600">
              For participants
            </div>

            <h3 className="mt-5 text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
              Psychosocial Recovery Coaching & Support Coordination
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
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
                  className="rounded-full border border-slate-200 bg-[#fcfaf7] px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Enquire about support
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-10">
            <div className="inline-flex rounded-full bg-[#f5e8de] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-600">
              For professionals & teams
            </div>

            <h3 className="mt-5 text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
              Trauma-Informed Education
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Through The Becoming Method, Becoming Co. provides training and
              education designed to help professionals and organisations better
              understand trauma-informed practice in a way that feels practical,
              grounded and deeply human.
            </p>

            <div className="mt-8 space-y-3">
              {trainingSupports.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#fcfaf7] px-4 py-4 text-sm text-slate-700 transition hover:bg-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Enquire about training
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}