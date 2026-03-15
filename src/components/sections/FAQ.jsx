export default function FAQ() {
  const faqs = [
    {
      question: "Who does Becoming Co. support?",
      answer:
        "Becoming Co. supports NDIS participants seeking psychosocial recovery coaching or support coordination, and also works with professionals, teams and organisations through trauma-informed education and training.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can begin by filling out the intake form or submitting an enquiry through the website. Once connected to GoHighLevel, this can create a contact record, notify the team, and begin the follow-up process.",
    },
    {
      question: "What areas of support are offered?",
      answer:
        "Support may include emotional regulation, self-care routines, life skills, social and relational skills, routines, NDIS navigation, capacity building, and goal-focused recovery support.",
    },
    {
      question: "Do you offer trauma-informed training for teams?",
      answer:
        "Yes. Becoming Co. offers trauma-informed education and professional development for services, organisations and teams through The Becoming Method.",
    },
  ]

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#fcfaf7] px-6 py-24 lg:px-12"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full bg-[#e8f1eb] blur-3xl opacity-70" />
        <div className="absolute right-[8%] bottom-[10%] h-48 w-48 rounded-full bg-[#f3e2d8] blur-3xl opacity-65" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-[#d8e3dc] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600 shadow-sm">
            FAQ
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Common questions, answered clearly.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A simple overview of how support begins, who it’s for, and what
            Becoming Co. can help with.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-slate-900">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}