import Image from "next/image";

const contactEmail = "hello@clinrs.ai";

export default function HomePage() {
  return (
    <div id="top" className="space-y-6">
      <section className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
              ClinRS AI
            </span>
            <h2 className="text-2xl font-semibold text-slate-900">
              Simple tooling for better clinical research experiences.
            </h2>
            <p className="text-sm text-slate-600">
              ClinRS AI helps research teams organize key workflows and supports clear,
              patient-friendly communication across studies.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Get in touch
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
              >
                Email us
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-sky-500/10 blur-xl" />
              <Image
                src="/logo.svg"
                alt="ClinRS AI logo"
                width={420}
                height={360}
                priority
                className="relative h-auto w-[280px] sm:w-[320px] md:w-[340px] drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm">
            <div className="border-t-4 border-t-sky-400 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">Custom design</h4>
              <p className="mt-2 text-sm text-slate-600">
                Patient Centric Design: clear layouts, readable information, and gentle guidance built around what
                patients need most.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" aria-hidden="true" />
                Patient-first content hierarchy
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" aria-hidden="true" />
                Consistent tone & spacing
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" aria-hidden="true" />
                Fewer steps to complete actions
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm">
            <div className="border-t-4 border-t-emerald-400 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">Security at its core</h4>
              <p className="mt-2 text-sm text-slate-600">
                Secure workflows by default—so sensitive information stays protected as teams collaborate across
                studies.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                Least-privilege access patterns
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                Audit-friendly activity tracking
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                Clear security boundaries
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm">
            <div className="border-t-4 border-t-indigo-400 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">AI Powered Productivity</h4>
              <p className="mt-2 text-sm text-slate-600">
                AI Powered Productivity: faster research operations with assistance that reduces manual effort while
                keeping humans in control.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden="true" />
                Assistive summaries & checklists
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden="true" />
                Faster triage of patient requests
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden="true" />
                High-speed performance for critical workflows
              </li>
            </ul>
          </article>
        </div>
      </section>

      <footer
        id="contact"
        className="scroll-mt-24 mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm"
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-100">General Inquiries</h3>
            <p className="text-sm text-slate-300">
              For partnership inquiries, questions, or demos, reach out and we’ll get back to you.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 rounded-lg text-sky-200 hover:text-sky-100 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {contactEmail}
            </a>

            <div className="pt-2">
              <a
                href="#top"
                className="text-sm font-medium text-slate-200 hover:text-white hover:underline"
              >
                Back to top
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-100">Send a message</h3>
            <form
              className="grid gap-3"
              aria-label="Contact form placeholder (no submission yet)"
            >
              <label className="space-y-1">
                <span className="block text-xs font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-800 bg-slate-950/30 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <label className="space-y-1">
                <span className="block text-xs font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-800 bg-slate-950/30 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <label className="space-y-1">
                <span className="block text-xs font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  placeholder="Tell us what you need..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/30 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <button
                type="button"
                disabled
                aria-disabled="true"
                className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-sky-600/20 px-4 py-2 text-sm font-medium text-slate-100 opacity-60"
              >
                Submit (placeholder)
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            Copyright © {new Date().getFullYear()} ClinRS Software LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

