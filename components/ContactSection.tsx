const contactEmail = "info@clinrs.ai";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-light text-slate-100 tracking-wide mb-4">
          Ready to get started?
        </h2>
        <p className="text-slate-400 font-light leading-relaxed max-w-xl mx-auto mb-8">
          Whether you&apos;re exploring the Digital Toolkit, need custom software built, or want
          to talk through a technology challenge — we&apos;d love to hear from you.
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded border border-sky-500 text-sky-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors duration-200 font-light text-base"
        >
          {contactEmail}
        </a>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600 font-light">
            Copyright &copy; {new Date().getFullYear()} ClinRS Software LLC. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs font-light text-slate-500 hover:text-slate-200 hover:underline transition-colors duration-200"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
