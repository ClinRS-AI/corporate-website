"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { assetPath } from "../lib/assetPath";

export default function BannerSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${assetPath("/images/banner.jpg")}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,6,23,0.65) 0%, rgba(2,6,23,0.55) 50%, rgba(2,6,23,0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        {/* Logo in circular container for contrast */}
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-gradient-to-br from-white to-sky-50 p-10 shadow-2xl ring-1 ring-sky-100/60">
            <Image
              src={assetPath("/logo.svg")}
              alt="ClinRS AI logo"
              width={220}
              height={190}
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-light text-slate-100 tracking-wide leading-snug mb-4">
          Simple tooling for better
          <br className="hidden sm:block" /> clinical research experiences
        </h1>

        <p className="text-slate-300 font-light mb-8 text-base leading-relaxed">
          ClinRS AI empowers health sciences teams using a digital platform to deliver high impact tools, custom software development, and technology consulting.
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded border border-sky-500 text-sky-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors duration-200 font-light"
        >
          Get in touch
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#digital-toolkit"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-400 transition-colors duration-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
