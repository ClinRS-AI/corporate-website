import BannerSection from "../components/BannerSection";
import SpotlightSection from "../components/SpotlightSection";
import ContactSection from "../components/ContactSection";
import { assetPath } from "../lib/assetPath";

export default function HomePage() {
  return (
    <>
      <BannerSection />

      <SpotlightSection
        id="digital-toolkit"
        align="bottom"
        accent="sky"
        background={`url('${assetPath("/images/patient-centric-design-gemini.png")}') center/cover no-repeat`}
        title="The Digital Toolkit"
        description="A growing SaaS platform purpose-built for clinical research — giving teams and patients the tools they need in one place."
        columns={[
          {
            title: "Instant Notifications",
            description:
              "Automatically inform all other systems the moment data changes in your CTMS platform.",
            href: "/products/echo-delta/",
            linkLabel: "Explore Echo Delta",
          },
          {
            title: "Patient Portal",
            description:
              "A patient-facing portal for secure access to study information, upcoming visits, communication with research staff, and self-reported feedback.",
          },
          {
            title: "Patient Data Management",
            description:
              "Streamlined tools for managing patient data within CTMS solutions — reducing manual work and improving data accuracy across your organization.",
          },
        ]}
      />

      <SpotlightSection
        id="custom-development"
        align="right"
        accent="emerald"
        background={`url('${assetPath("/images/security-core-gemini.png")}') center/cover no-repeat`}
        title="Custom Development"
        description="Need something built to fit your organization's exact workflow? We design and develop custom software for clinical research — from standalone tools to full system integrations."
        bullets={[
          { text: "Standalone applications for your existing infrastructure" },
          { text: "Workflow tools that improve day-to-day research operations" },
          { text: "Integration software to connect disparate systems" },
          { text: "Deployable within the Digital Toolkit or self-hosted" },
        ]}
      />

      <SpotlightSection
        id="consulting"
        align="left"
        accent="indigo"
        background={`url('${assetPath("/images/ai-productivity-gemini.png")}') center/cover no-repeat`}
        title="Technology & Software Consulting"
        description="Tap into 20 years of SaaS development and IT experience in health sciences — from strategic planning to hands-on implementation guidance."
        bullets={[
          { text: "Technology assessment and roadmap planning" },
          { text: "Software architecture and platform strategy" },
          { text: "Vendor evaluation and integration advisory" },
          { text: "Deep expertise in security and compliance" },
        ]}
      />

      <ContactSection />
    </>
  );
}
