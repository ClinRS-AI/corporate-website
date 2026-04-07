"use client";

import { useState } from "react";
import Link from "next/link";

import { assetPath } from "../lib/assetPath";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [{ label: "Home", href: "/" }];

/** SVG wordmark: use native img so Next/Image wrapper does not fight SVG sizing (dev warning). */
function WordmarkLogo({ priority }: { priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static SVG; next/image triggers false aspect warnings for SVGs
    <img
      src={assetPath("/images/clinrsai-name-logo-light.svg")}
      alt="ClinRS AI"
      width={120}
      height={30}
      decoding="async"
      className="block h-auto w-[120px] max-w-full"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-2 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
          <WordmarkLogo priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-sky-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-sm px-4 py-2 rounded border border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white transition-colors duration-200"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-slate-300 hover:text-white p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-slate-900 border-r border-slate-800 flex flex-col p-8 gap-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                className="self-end text-slate-400 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <WordmarkLogo />

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-300 hover:text-sky-400 font-light transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="mt-2 px-4 py-2 text-center rounded border border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white transition-colors duration-200 font-light"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
