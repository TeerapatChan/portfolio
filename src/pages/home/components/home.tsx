import { Container } from "@/components/ui/container";
import HeroSection from "./section/hero-section";
import EducationSection from "./section/education-section";
import ExperienceSection from "./section/experience-section";
import SkillSection from "./section/skill-section";

export default function Home() {
  return (
    <Container className="font-parkinsans z-10 max-w-[1200px] flex-col items-center gap-4 md:w-4/5 md:gap-8">
      <HeroSection />
      <div className="mt-4 flex w-full flex-col gap-4 border-t-[1px] border-dashed border-neutral-800"></div>
      <ExperienceSection />
      <div className="mt-4 flex w-full flex-col gap-4 border-t-[1px] border-dashed border-neutral-800"></div>
      <SkillSection />
      <div className="mt-4 flex w-full flex-col gap-4 border-t-[1px] border-dashed border-neutral-800"></div>
      <EducationSection />
    </Container>
  );
}
