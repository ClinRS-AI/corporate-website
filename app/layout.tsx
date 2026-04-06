import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Roboto } from "next/font/google";

import SiteLayout from "../components/SiteLayout";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-roboto",
});

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
      <body className={roboto.variable}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
