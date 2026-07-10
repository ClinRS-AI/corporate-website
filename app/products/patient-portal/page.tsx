import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactSection from "../../../components/ContactSection";

export const metadata: Metadata = {
  title: "Patient Portal",
  description:
    "Patient Portal gives your patients a secure, self-service way to review and correct their record — while your staff keep full control over what gets published.",
  openGraph: {
    title: "Patient Portal | Secure Patient Self-Service",
    description:
      "Patient Portal gives your patients a secure, self-service way to review and correct their record — while your staff keep full control over what gets published.",
  },
};

const features = [
  {
    title: "Secure Self-Service Record Access",
    description:
      "Patients see the live, current record your organization holds — but only the fields you've chosen to show, even the ones still blank — so they can fill in gaps, not just fix what's already there.",
    image: "/images/patient-portal-request.png",
    fit: "contain" as const,
  },
  {
    title: "Staff-Controlled Review Workflow",
    description:
      "Every proposed change goes to your staff for review, field by field, before it touches your data. Approve or reject each one individually, with a full audit trail behind every view and every decision.",
    image: "/images/patient-portal-approval.png",
    fit: "contain" as const,
  },
  {
    title: "Realtime CTMS Updates",
    description:
      "Approved fields write straight back to your CTMS the moment staff sign off — no manual re-entry, no batch jobs. If a write-back ever fails, staff and the patient both see it, instead of the change silently disappearing.",
    image: "/images/realtime-data-sync-web.png",
    fit: "contain" as const,
  },
  {
    title: "Review On the Go",
    description:
      "Fully responsive on phone, tablet, or desktop. Patients can check their record between appointments, and staff can review and approve pending changes from wherever they are.",
    image: "/images/mobile-ready-web.png",
    fit: "contain" as const,
  },
];

const trustItems = [
  {
    title: "No Local Copy of Your Data",
    description:
      "The record a patient sees is fetched live from your CTMS on every view — never cached or duplicated in the portal. The only patient data the portal stores is the change requests a patient submits, so staff have something to review.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    ),
  },
  {
    title: "Encrypted at Rest",
    description:
      "Proposed record changes are encrypted at rest using column level database encryption, not just in transit.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z"
      />
    ),
  },
  {
    title: "Full Audit Trail",
    description:
      "Every view of a patient's record and every change to it is logged, for patients, staff, and your compliance team alike.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "HIPAA-Aware by Design",
    description:
      "Built from the ground up to HIPAA-aware standards — encryption, access control, and audit logging on every PHI-touching action.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z"
      />
    ),
  },
];

export default function PatientPortalPage() {
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
                Digital Toolkit &nbsp;&middot;&nbsp; Patient Self-Service
              </p>
              <h1 className="text-4xl sm:text-5xl font-light text-slate-100 tracking-wide leading-tight mb-5">
                Patient Portal
              </h1>
              <p className="text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-md">
                A secure, self-service way for patients to review and correct their record —
                without pulling your staff away from research to do it for them.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-sky-500 text-sky-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors duration-200 font-light"
              >
                Get in touch
              </Link>
            </div>
            <div className="relative h-72 lg:h-full min-h-[280px] rounded-lg overflow-hidden border border-slate-700/60 bg-slate-950">
              <Image
                src="/images/patient-portal.png"
                alt="Patient Portal My Record page, showing record fields and a completeness indicator"
                fill
                className="object-contain p-6"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className={
                      feature.fit === "contain"
                        ? "object-contain p-4"
                        : "object-cover"
                    }
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

      {/* How It Works */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="border-l-4 border-indigo-400 pl-5 mb-10">
            <h2 className="text-3xl font-light text-slate-100 mb-3">How It Works</h2>
            <p className="text-base text-slate-400 font-light leading-relaxed max-w-2xl">
              Staff invite a patient with a one-time link. From there, everything a patient sees
              is read live from your CTMS — the portal never keeps its own copy of the record.
              Only the change a patient proposes is stored, so staff have something to review, and
              approved changes write straight back the moment staff sign off.
            </p>
          </div>
          <div className="relative aspect-[16/7] w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900">
            <Image
              src="/images/patient-portal-data-flow.png"
              alt="Diagram showing staff granting access, the patient viewing and correcting their record and submitting for review, staff review approving or rejecting each field individually, and the CTMS updating immediately — with the patient record read live from the CTMS and nothing cached in the portal"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* Trust & compliance */}
      <section className="py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="sr-only">Security &amp; Compliance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <svg
                  className="w-8 h-8 flex-shrink-0 text-sky-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
                <div>
                  <h3 className="text-base font-normal text-slate-200 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
