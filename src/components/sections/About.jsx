export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-12"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[10%] h-40 w-40 rounded-full bg-[#edf4ee] blur-3xl opacity-70" />
        <div className="absolute right-[10%] bottom-[5%] h-48 w-48 rounded-full bg-[#f5e8de] blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-[#d8e3dc] bg-[#f8fbf8] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600">
              About Becoming Co.
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              A calm, hopeful and human approach to recovery.
            </h2>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#fcfaf7] p-8 shadow-sm md:p-10">
              <p className="text-lg leading-8 text-slate-600">
                Becoming Co. is a trauma-informed support service built around
                trust, safety, advocacy and capacity building. The focus is on
                helping participants strengthen independence, emotional
                regulation, routines, confidence and sustainable life skills.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The approach is gentle, person-centred and grounded in the
                belief that meaningful progress happens when people feel safe,
                supported and genuinely understood.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Mission
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Support people with care that feels safe, relational and
                    genuinely empowering.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Vision
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Create meaningful growth through compassionate,
                    trauma-informed practice.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Values
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
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