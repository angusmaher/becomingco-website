export default function Training() {
  return (
    <section className="site-section bg-[var(--color-brand-green)] px-6 py-24 text-white lg:px-12">
      <div className="bg-orb-orange right-[8%] top-[10%] h-56 w-56 -z-10 opacity-30" />
      <div className="bg-orb-orange left-[10%] bottom-[5%] h-48 w-48 -z-10 opacity-20" />

      <div className="site-container grid gap-10 lg:grid-cols-2">
        <div>
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent-orange-soft)]">
            The Becoming Method
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Trauma-informed training that feels practical, relational and real.
          </h2>

          <div className="mt-6 h-1 w-24 rounded-full bg-[var(--color-brand-orange)]" />
        </div>

        <div>
          <p className="text-lg leading-8 text-white/80">
            Becoming Co. offers trauma-informed education for professionals,
            services, teams and organisations wanting to build safer, more
            compassionate and more effective ways of supporting people.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/80">
            This training is designed to feel human, grounded and useful in
            practice — not overly clinical, overwhelming or disconnected from
            real-world work.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-full bg-[var(--color-brand-orange)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Enquire about training
          </a>
        </div>
      </div>
    </section>
  )
}