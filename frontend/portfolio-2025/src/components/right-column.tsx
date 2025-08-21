import { CertificateSection } from "./certificate-section";
import { ExperienceSection } from "./experience-section";
import { Footer } from "./footer";
import { AboutSection } from "./about-section";

export const RightColumn = () => {
  return (
    <div className="relative flex h-full w-full flex-col gap-y-30 pt-24 pb-20 lg:w-1/2">
      <AboutSection />
      <ExperienceSection />
      <CertificateSection />
      <Footer />
    </div>
  );
};
