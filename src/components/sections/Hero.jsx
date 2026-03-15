export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#fcfaf7] px-6 py-20 lg:px-12 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-[#dcebe1] blur-3xl opacity-80" />
        <div className="absolute right-[-100px] top-[40px] h-80 w-80 rounded-full bg-[#f2dfd3] blur-3xl opacity-70" />
        <div className="absolute bottom-[-120px] left-[28%] h-72 w-72 rounded-full bg-[#edf4ee] blur-3xl opacity-90" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex rounded-full border border-[#d8e3dc] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600 shadow-sm">
            Welcome to your becoming
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
            Support that helps people feel safe, capable and hopeful again.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Becoming Co. supports NDIS participants through psychosocial
            recovery coaching and support coordination, while also delivering
            trauma-informed education for professionals and organisations.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
            Gentle, person-centred support designed to build confidence,
            strengthen daily life skills, and create meaningful progress over
            time.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Start intake
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-900">
                Psychosocial Recovery Coaching
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-900">
                Support Coordination
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-900">
                Trauma-Informed Education
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur">
            <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,#edf5ef,#f6e9df)] p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Participant intake
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                    Start with a simple enquiry
                  </h2>
                </div>

                <div className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                  GHL ready
                </div>
              </div>

              <div className="space-y-4">
                <input
                  className="w-full rounded-2xl border border-white/80 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                  placeholder="Full name"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="w-full rounded-2xl border border-white/80 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                    placeholder="Email"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/80 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                    placeholder="Phone"
                  />
                </div>

                <select className="w-full rounded-2xl border border-white/80 bg-white px-4 py-3 text-slate-500 outline-none focus:border-slate-300">
                  <option>Preferred contact method</option>
                  <option>Call</option>
                  <option>Text</option>
                  <option>Email</option>
                </select>

                <textarea
                  className="min-h-[120px] w-full rounded-2xl border border-white/80 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                  placeholder="Tell us a little about what support you're looking for"
                />

                <button className="w-full rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95">
                  Submit enquiry
                </button>

                <p className="text-sm leading-6 text-slate-500">
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