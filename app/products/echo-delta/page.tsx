import type { Metadata } from "next";
import Link from "next/link";

import SpotlightSection from "../../../components/SpotlightSection";
import ContactSection from "../../../components/ContactSection";
import { assetPath } from "../../../lib/assetPath";

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

export default function EchoDeltaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${assetPath("/images/banner.jpg")}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,6,23,0.5) 0%, rgba(2,6,23,0.8) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full px-8 pb-16 pt-32 max-w-3xl">
          <Link
            href="/"
            className="inline-block mb-6 text-sm font-light text-slate-400 hover:text-sky-400 transition-colors duration-200"
          >
            ← ClinRS AI
          </Link>
          <p className="text-xs uppercase tracking-widest text-sky-400 font-light mb-3">
            Digital Toolkit — Instant Notifications
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-slate-100 tracking-wide leading-tight mb-4">
            Echo Delta
          </h1>
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            Real-time event notifications for clinical research platforms. The moment data changes
            in your CTMS, every connected system knows about it.
          </p>
        </div>
      </section>

      <SpotlightSection
        id="what-it-does"
        align="right"
        accent="sky"
        background={`url('${assetPath("/images/patient-centric-design-gemini.png")}') center/cover no-repeat`}
        title="Instant. Reliable. Automatic."
        description="Echo Delta monitors your clinical trial management system for data changes and immediately pushes structured event notifications to any downstream system that needs to know — no polling, no delay, no manual exports."
        bullets={[
          { text: "Event-driven architecture built for CTMS data workflows" },
          { text: "Configurable notification payloads per event type" },
          { text: "Delivery guarantees with automatic retry on failure" },
          { text: "Audit trail of every notification sent and acknowledged" },
        ]}
      />

      <SpotlightSection
        id="clinical-conductor"
        align="left"
        accent="emerald"
        background={`url('${assetPath("/images/security-core-gemini.png")}') center/cover no-repeat`}
        title="Built for Clinical Conductor"
        description="Echo Delta launches with native support for Clinical Conductor — the CTMS used by research teams who need accurate, real-time data across their technology stack. Additional platform integrations are on the roadmap."
        bullets={[
          { text: "Deep integration with Clinical Conductor's data model" },
          { text: "Supports subject, visit, query, and protocol change events" },
          { text: "Configurable per-site and per-study notification rules" },
          { text: "More platforms coming — contact us to discuss your CTMS" },
        ]}
      />

      <SpotlightSection
        id="use-cases"
        align="bottom"
        accent="indigo"
        background={`url('${assetPath("/images/ai-productivity-gemini.png")}') center/cover no-repeat`}
        title="What teams are doing with Echo Delta"
        description="Placeholder — update with real customer use cases and outcomes once available."
        columns={[
          {
            title: "Automated Downstream Workflows",
            description:
              "Trigger EDC updates, IRT adjustments, and safety system notifications automatically whenever subject or visit data changes in Clinical Conductor.",
          },
          {
            title: "Real-Time Reporting",
            description:
              "Keep dashboards, data warehouses, and operational reports current without scheduled batch jobs or manual data pulls.",
          },
          {
            title: "Cross-Site Coordination",
            description:
              "Notify coordinators, CROs, and sponsors the moment key protocol milestones are recorded — eliminating email chains and delayed communication.",
          },
        ]}
      />

      <ContactSection />
    </>
  );
}
