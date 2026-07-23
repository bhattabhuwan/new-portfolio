import { SplineSceneBasic } from "@/components/ui/demo";
import { SiteHeader } from "@/components/portfolio/site-header";
import {
  AboutSection,
  // BlogSection,
  // CertificatesSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio/sections";

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(125,211,252,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_100%_40%,rgba(168,85,247,0.12),transparent_28%)]" />

      <SiteHeader />
      <SplineSceneBasic className="pt-28" />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      {/* <CertificatesSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </main>
  );
}
