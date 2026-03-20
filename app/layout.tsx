import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteLayout from "../components/SiteLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClinRS AI",
    template: "%s | ClinRS AI",
  },
  description:
    "ClinRS AI supports clinical research teams with streamlined tooling and better patient experiences.",
  metadataBase: new URL("https://clinrs.ai"),
  openGraph: {
    type: "website",
    title: "ClinRS AI",
    description:
      "ClinRS AI supports clinical research teams with streamlined tooling and better patient experiences.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

