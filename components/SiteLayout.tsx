import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  // A tiny inline noise texture to keep the page from feeling “flat/template”.
  const noiseDataUri =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E";

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.16),_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 mix-blend-multiply"
        style={{ backgroundImage: `url("${noiseDataUri}")` }}
      />
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="relative mb-8 h-2 w-full overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-500">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 blur-md bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-500"
          />
        </div>
      </div>
      <main className="mx-auto w-full max-w-3xl">{children}</main>
    </div>
  );
}

