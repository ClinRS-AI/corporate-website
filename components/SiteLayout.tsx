import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-slate-950 text-slate-200">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
