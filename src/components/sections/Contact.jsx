export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-12"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] bottom-[6%] h-52 w-52 rounded-full bg-[#edf4ee] blur-3xl opacity-70" />
        <div className="absolute right-[5%] top-[10%] h-56 w-56 rounded-full bg-[#f5e8de] blur-3xl opacity-65" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex rounded-full border border-[#d8e3dc] bg-[#f8fbf8] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600">
            Contact
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Get in touch with Becoming Co.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you’re seeking support, looking to refer someone, or
            enquiring about trauma-informed training, the best place to start is
            a simple enquiry.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#edf5ef,#f6e9df)] p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-10">
            <div className="space-y-7 text-slate-700">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Phone
                </p>
                <p className="mt-2 text-lg font-medium text-slate-900">
                  0468 064 100
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-lg font-medium text-slate-900">
                  hello@becomingco.au
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Hours
                </p>
                <p className="mt-2 text-lg font-medium text-slate-900">
                  Monday to Friday, 8:00am–5:00pm
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Socials
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/_becomingco_/"
                    className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61580735924495"
                    className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laura-dickson-17b485259/"
                    className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-700 transition hover:bg-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#fcfaf7] p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-10">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-500 shadow-sm ring-1 ring-slate-100">
              Send an enquiry
            </div>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                  placeholder="Name"
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                  placeholder="Phone"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                  placeholder="Email"
                />
                <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 outline-none focus:border-slate-300">
                  <option>Preferred contact method</option>
                  <option>Email</option>
                  <option>Text</option>
                  <option>Call</option>
                </select>
              </div>

              <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 outline-none focus:border-slate-300">
                <option>I’d like to enquire about</option>
                <option>Psychosocial recovery coaching</option>
                <option>Support coordination</option>
                <option>Trauma-informed training</option>
                <option>Networking</option>
              </select>

              <textarea
                className="min-h-[150px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-300"
                placeholder="How can we help?"
              />

              <button
                type="button"
                className="w-full rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Submit enquiry
              </button>

              <p className="text-sm leading-6 text-slate-500">
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