import type { Metadata } from "next";
import Image from "next/image";
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
      "Generates standard webhook outputs in response to events in your CTMS as they occur. Flexible authentication methods to support a variety of downstream systems.",
    image: "/images/event-architecture-gemini-web.png",
  },
  {
    title: "Configurable Payloads",
    description:
      "Choose what each notification carries. Include full pre- and post-change data for downstream systems that need context, or send lightweight ID-only payloads for systems that fetch their own records.",
    image: "/images/configurable-payloads-gemini-web.png",
  },
  {
    title: "Guaranteed Delivery",
    description:
      "Automatic retry on failure ensures no notification is silently dropped. Every event sent and every acknowledgment received is recorded, giving you a complete audit trail for compliance and debugging.",
    image: "/images/guaranteed-delivery-gemini-web.png",
  },
];

const conductorBullets = [
  "Supports additions, updates, and deletions of patient data",
  "Includes pre- and post-change data in notifications, or limits to IDs only",
  "Simplifies configuration with hands-off ongoing management",
];

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
            <div className="relative h-72 lg:h-full min-h-[280px] rounded-lg overflow-hidden border border-slate-700/60">
              <Image
                src="/images/echo-delta-home-screenshot.png"
                alt="Echo Delta monitoring dashboard showing audit backlog, pending dispatches, errors, and patient snapshots"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="sr-only">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video bg-slate-950">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
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
                  data, but it lacks real-time notification capabilities for patient data. Echo Delta
                  enhances Clinical Conductor by providing these capabilities.
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
              <p className="text-xs text-slate-400 font-light leading-relaxed mt-8">
                Clinical Conductor is a trademark of Bio-Optronics, Inc., now part of Advarra.
                ClinRS AI and Echo Delta are not affiliated with, endorsed by, or sponsored by
                Bio-Optronics or Advarra.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-slate-700/60">
              <Image
                src="/images/nurse-computer-gemini-web.png"
                alt="Clinical research nurse working at a computer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="border-l-4 border-indigo-400 pl-5 mb-10">
            <h2 className="text-3xl font-light text-slate-100 mb-3">How It Works</h2>
            <p className="text-base text-slate-400 font-light leading-relaxed max-w-2xl">
              Echo Delta monitors the Clinical Conductor audit trail, detecting
              any changes to patient data and triggering the appropriate notifications.
            </p>
          </div>
          <div className="relative aspect-[16/7] w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900">
            <Image
              src="/images/echo-delta-architecture.png"
              alt="Echo Delta architecture diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
