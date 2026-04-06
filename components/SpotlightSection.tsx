"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

type Align = "left" | "right" | "bottom";
type Accent = "sky" | "emerald" | "indigo";

interface Column {
  title: string;
  description: string;
}

interface Bullet {
  text: string;
}

type SpotlightSectionProps = {
  id: string;
  accent: Accent;
  /**
   * CSS background value.
   * For images: "url('/images/pic02.jpg') center/cover no-repeat"
   * For gradients: "linear-gradient(...)"
   */
  background: string;
  title: string;
  description: string;
} & (
  | { align: "bottom"; columns: Column[]; bullets?: never }
  | { align: "left" | "right"; bullets?: Bullet[]; columns?: never }
);

const accentBorder: Record<Accent, string> = {
  sky: "border-l-sky-500",
  emerald: "border-l-emerald-500",
  indigo: "border-l-indigo-400",
};

const accentDot: Record<Accent, string> = {
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
  indigo: "bg-indigo-400",
};

export default function SpotlightSection({
  id,
  align,
  accent,
  background,
  title,
  description,
  bullets,
  columns,
}: SpotlightSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: background drifts at ~20% of scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Subtle scale pulse as section passes through view
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.0, 1.06]);

  const isInView = useInView(contentRef, { once: true, margin: "-60px" });

  const initialAnim =
    align === "right"
      ? { opacity: 0, x: 70 }
      : align === "left"
        ? { opacity: 0, x: -70 }
        : { opacity: 0, y: 40 };

  const animateAnim =
    align === "bottom" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <section id={id} ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale, background }}
        className="absolute inset-[-20%]"
      />
      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/50" />

      {/* Bottom-aligned: full-width panel with column grid */}
      {align === "bottom" && columns ? (
        <motion.div
          ref={contentRef}
          initial={initialAnim}
          animate={isInView ? animateAnim : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm border-t border-slate-700/40 px-8 py-10"
        >
          <div className={`border-l-4 pl-5 mb-6 ${accentBorder[accent]}`}>
            <h2 className="text-2xl font-light text-slate-100">{title}</h2>
            <p className="mt-1 text-sm text-slate-400 font-light">{description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-normal text-slate-200 mb-1">{col.title}</h4>
                <p className="text-sm text-slate-400 font-light">{col.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        /* Left/right-aligned: side panel */
        <motion.div
          ref={contentRef}
          initial={initialAnim}
          animate={isInView ? animateAnim : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute top-0 bottom-0 ${
            align === "right" ? "right-0" : "left-0"
          } w-full sm:w-2/5 bg-slate-900/90 backdrop-blur-sm flex items-center px-8 py-20`}
        >
          <div className={`border-l-4 pl-5 max-w-xs ${accentBorder[accent]}`}>
            <h2 className="text-2xl font-light text-slate-100 mb-3">{title}</h2>
            <p className="text-sm text-slate-400 font-light mb-4 leading-relaxed">
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b.text} className="flex gap-2 text-sm text-slate-400 font-light">
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentDot[accent]}`}
                    />
                    {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
