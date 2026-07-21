import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Essays on AI-first engineering, clinical research tooling, and building software responsibly in regulated environments.",
};

const articles = [
  {
    href: "/articles/code-is-not-the-documentation/",
    title: "Code Is Not the Documentation",
    dateISO: "2026-07-21",
    dateLabel: "July 21, 2026",
  },
  {
    href: "/articles/deep-dive-testing-genai/",
    title: "Testing in the Age of GenAI: Why the Pyramid Still Matters (But the Timeline Changed)",
    dateISO: "2026-05-07",
    dateLabel: "May 7, 2026",
  },
  {
    href: "/articles/from-skeptic-to-convert/",
    title: "From Skeptic to Convert: How 20 Years of Engineering Leadership Met the Power of GenAI",
    dateISO: "2026-04-10",
    dateLabel: "April 10, 2026",
  },
];

export default function ArticlesIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <h1 className="text-3xl sm:text-4xl font-light text-slate-100 tracking-wide mb-4">Articles</h1>
      <p className="text-slate-400 font-light leading-relaxed mb-12 max-w-xl">
        Long-form notes on AI-augmented engineering, compliance-aware delivery, and what it takes to ship in life
        sciences.
      </p>
      <ul className="space-y-8 border-t border-slate-800 pt-10">
        {articles.map((item) => (
          <li key={item.href}>
            <article>
              <p className="text-xs uppercase tracking-widest text-sky-400 font-light mb-2">
                <time dateTime={item.dateISO}>{item.dateLabel}</time>
              </p>
              <h2 className="text-xl sm:text-2xl font-light text-slate-100 tracking-wide mb-2">
                <Link
                  href={item.href}
                  className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </h2>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
