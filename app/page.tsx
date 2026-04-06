import BannerSection from "../components/BannerSection";
import SpotlightSection from "../components/SpotlightSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <BannerSection />

      <SpotlightSection
        id="patient-centric"
        align="bottom"
        accent="sky"
        background="url('/images/pic02.jpg') center/cover no-repeat"
        title="Patient-Centric Design"
        description="Clear layouts, readable information, intuitive design, and gentle guidance built around what patients need most."
        columns={[
          {
            title: "Own Your Data",
            description:
              "Enable patients to access and understand their own research data at any time.",
          },
          {
            title: "Direct Feedback",
            description:
              "Enable patients to provide meaningful feedback directly to researchers.",
          },
          {
            title: "Simplified Communication",
            description:
              "Streamline communication between patients and research teams.",
          },
        ]}
      />

      <SpotlightSection
        id="security"
        align="right"
        accent="emerald"
        background="url('/images/pic03.jpg') center/cover no-repeat"
        title="Security at its Core"
        description="Security and compliance are core pillars of our design and development process."
        bullets={[
          { text: "Data can be stored within existing systems" },
          {
            text: "Role-based security and least-privilege access patterns",
          },
          {
            text: "Integration with Single Sign-On (SSO) and other authentication providers",
          },
        ]}
      />

      <SpotlightSection
        id="ai-productivity"
        align="left"
        accent="indigo"
        background="url('/images/pic04.jpg') center/cover no-repeat"
        title="AI Powered Productivity"
        description="By leaning on AI productivity tools, we can provide enterprise grade software solutions at a fraction of the cost."
        bullets={[
          { text: "AI assisted development and deployment" },
          { text: "AI empowered software solutions" },
          { text: "Enterprise grade infrastructure and scalability" },
        ]}
      />

      <ContactSection />
    </>
  );
}
