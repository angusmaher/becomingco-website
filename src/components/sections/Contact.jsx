export default function Contact() {
  return (
    <section id="contact" className="site-section bg-white px-6 py-24 lg:px-12">
      <div className="bg-orb-green left-[8%] bottom-[6%] h-52 w-52 -z-10" />
      <div className="bg-orb-orange right-[5%] top-[10%] h-56 w-56 -z-10" />

      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <div className="section-pill bg-[var(--color-bg-soft)]">Contact</div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-brand-green)] md:text-5xl">
            Get in touch with Becoming Co.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
            Whether you’re seeking support, looking to refer someone, or
            enquiring about trauma-informed training, the best place to start is
            a simple enquiry.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-accent-green-soft),var(--color-accent-orange-soft))] p-8 shadow-[var(--shadow-soft)] md:p-10">
            <div className="space-y-7 text-[var(--color-text-soft)]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Phone
                </p>
                <p className="mt-2 text-lg font-medium text-[var(--color-brand-green)]">
                  0448 250 458
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Email
                </p>
                <p className="mt-2 text-lg font-medium text-[var(--color-brand-green)]">
                  laura@becomingco.au
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Hours
                </p>
                <p className="mt-2 text-lg font-medium text-[var(--color-brand-green)]">
                  Monday–Friday, 9–5pm
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Location
                </p>
                <p className="mt-2 text-lg font-medium text-[var(--color-brand-green)]">
                  Maroochydore, Sunshine Coast, QLD
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-8 shadow-[var(--shadow-soft)] md:p-10">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] shadow-sm ring-1 ring-[var(--color-border-soft)]">
              Send an enquiry
            </div>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="input-base" placeholder="Name" />
                <input className="input-base" placeholder="Phone" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input className="input-base" placeholder="Email" />
                <select className="input-base text-[var(--color-text-muted)]">
                  <option>Preferred contact method</option>
                  <option>Email</option>
                  <option>Text</option>
                  <option>Call</option>
                </select>
              </div>

              <select className="input-base text-[var(--color-text-muted)]">
                <option>I’d like to enquire about</option>
                <option>Psychosocial recovery coaching</option>
                <option>Support coordination</option>
                <option>Trauma-informed training</option>
                <option>Networking</option>
              </select>

              <textarea
                className="input-base min-h-[150px]"
                placeholder="How can we help?"
              />

              <button type="button" className="btn-primary w-full">
                Submit enquiry
              </button>

              <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                This form can later connect to GoHighLevel and email
                notifications so enquiries are captured and followed up quickly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}