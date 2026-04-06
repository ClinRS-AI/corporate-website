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
        background="linear-gradient(135deg, #0c4a6e 0%, #020617 50%, #0c4a6e 100%)"
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
        background="linear-gradient(135deg, #020617 0%, #022c22 50%, #020617 100%)"
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
        background="linear-gradient(135deg, #1e1b4b 0%, #020617 50%, #1e1b4b 100%)"
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
