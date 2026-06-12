import type { Metadata } from "next";
import Link from "next/link";

import ContactSection from "../../../components/ContactSection";

export const metadata: Metadata = {
  title: "Echo Delta",
  description:
    "Echo Delta delivers real-time event notifications for clinical research platforms — keeping every connected system in sync the moment data changes in Clinical Conductor.",
  openGraph: {
    title: "Echo Delta | Instant Notifications for Clinical Research",
    description:
      "Echo Delta delivers real-time event notifications for clinical research platforms — keeping every connected system in sync the moment data changes in Clinical Conductor.",
  },
};

const features = [
  {
    title: "Event-Driven Architecture",
    description:
      "Built around the event patterns that CTMS workflows actually produce — subject enrollments, visit completions, query resolutions, and more — so notifications are structured and meaningful, not just raw data dumps.",
    placeholder: "Architecture diagram",
  },
  {
    title: "Configurable Payloads",
    description:
      "Choose what each notification carries. Include full pre- and post-change data for downstream systems that need context, or send lightweight ID-only payloads for systems that fetch their own records.",
    placeholder: "Configuration screenshot",
  },
  {
    title: "Guaranteed Delivery",
    description:
      "Automatic retry on failure ensures no notification is silently dropped. Every event sent and every acknowledgment received is recorded, giving you a complete audit trail for compliance and debugging.",
    placeholder: "Notification log screenshot",
  },
];

const conductorBullets = [
  "Supports additions, updates, and deletions of patient data",
  "Include pre- and post-change data in notifications, or limit to IDs only",
  "Simple configuration with hands-off ongoing management",
];

function GraphicPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-slate-800/60 border border-slate-700/60 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 ${className ?? ""}`}
      aria-label={label}
    >
      <svg
        className="w-8 h-8 text-slate-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-1a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
        />
      </svg>
      <span className="text-slate-500 text-xs font-light tracking-wide">{label}</span>
    </div>
  );
}

export default function EchoDeltaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm font-light text-slate-400 hover:text-sky-400 transition-colors duration-200 mb-8"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                ClinRS AI
              </Link>
              <p className="text-xs uppercase tracking-widest text-sky-400 font-light mb-3">
                Digital Toolkit &nbsp;&middot;&nbsp; Instant Notifications
              </p>
              <h1 className="text-4xl sm:text-5xl font-light text-slate-100 tracking-wide leading-tight mb-5">
                Echo Delta
              </h1>
              <p className="text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-md">
                Real-time event notifications for clinical research platforms. The moment data
                changes in your CTMS, every connected system knows about it.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-sky-500 text-sky-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors duration-200 font-light"
              >
                Get in touch
              </Link>
            </div>
            <GraphicPlaceholder label="Product screenshot" className="h-72 lg:h-full min-h-[280px]" />
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col"
              >
                <GraphicPlaceholder label={feature.placeholder} className="aspect-video" />
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-base font-normal text-slate-200">{feature.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Clinical Conductor */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="border-l-4 border-emerald-500 pl-5 mb-8">
                <h2 className="text-3xl font-light text-slate-100 mb-3">
                  Built for Clinical Conductor
                </h2>
                <p className="text-base text-slate-400 font-light leading-relaxed">
                  Echo Delta launches with native support for Clinical Conductor — the CTMS used
                  by research teams who need accurate, real-time data across their technology
                  stack. Clinical Conductor is a powerful tool for managing clinical research
                  data, but it lacks real-time notification capabilities for patient data.
                </p>
              </div>
              <ul className="space-y-3">
                {conductorBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base text-slate-400 font-light">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <GraphicPlaceholder label="Product screenshot" className="aspect-[4/3] w-full" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="border-l-4 border-indigo-400 pl-5 mb-10">
            <h2 className="text-3xl font-light text-slate-100 mb-3">How It Works</h2>
            <p className="text-base text-slate-400 font-light leading-relaxed max-w-2xl">
              Echo Delta monitors the Clinical Conductor audit trail in near real-time, detecting
              any changes to patient data and immediately triggering the appropriate notifications.
            </p>
          </div>
          <GraphicPlaceholder label="Architecture diagram" className="aspect-[16/7] w-full" />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
