const contactEmail = "hello@clinrs.ai";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-light text-slate-100 tracking-wide">General Inquiries</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              For partnership inquiries, questions, or demos, reach out and
              we&apos;ll get back to you.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center text-sky-400 hover:text-sky-300 hover:underline transition-colors duration-200 text-sm"
            >
              {contactEmail}
            </a>
            <div className="pt-2">
              <a
                href="#"
                className="text-sm font-light text-slate-500 hover:text-slate-200 hover:underline transition-colors duration-200"
              >
                Back to top
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light text-slate-100 tracking-wide">Send a message</h3>
            <form className="grid gap-3" aria-label="Contact form placeholder (no submission yet)">
              <label className="space-y-1">
                <span className="block text-xs text-slate-400 font-light">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 font-light"
                />
              </label>
              <label className="space-y-1">
                <span className="block text-xs text-slate-400 font-light">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full rounded border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 font-light"
                />
              </label>
              <label className="space-y-1">
                <span className="block text-xs text-slate-400 font-light">Message</span>
                <textarea
                  name="message"
                  placeholder="Tell us what you need..."
                  rows={4}
                  className="w-full resize-none rounded border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 font-light"
                />
              </label>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="mt-1 w-full rounded border border-slate-700 px-4 py-2 text-sm font-light text-slate-500 cursor-not-allowed"
              >
                Submit (placeholder)
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600 font-light">
            Copyright &copy; {new Date().getFullYear()} ClinRS Software LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
