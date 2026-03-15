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
    <section
      id="practitioners"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-12"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[12%] h-44 w-44 rounded-full bg-[#edf4ee] blur-3xl opacity-70" />
        <div className="absolute right-[8%] bottom-[8%] h-52 w-52 rounded-full bg-[#f4e6dc] blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-[#d8e3dc] bg-[#f8fbf8] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600">
            Meet your practitioners
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Support grounded in compassion, advocacy and care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Becoming Co. is built on safe, relational and trauma-informed
            practice. Every client relationship is approached with empathy,
            clarity and a genuine commitment to growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {practitioners.map((person, index) => (
            <div
              key={person.name}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fcfaf7] shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div
                className={`flex min-h-[280px] items-center justify-center p-8 ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#edf5ef,#f5e8de)]"
                    : "bg-[linear-gradient(135deg,#f6ebe2,#edf5ef)]"
                }`}
              >
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white/80 px-8 py-20 text-center text-sm text-slate-500 shadow-sm">
                  {person.name} image placeholder
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-500 shadow-sm ring-1 ring-slate-100">
                  {person.role}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-slate-900 md:text-3xl">
                  {person.name}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {person.bio}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
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