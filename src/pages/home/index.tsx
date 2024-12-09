import { Container } from "@/components/ui/container";
import HeroSection from "./components/section/hero-section";
import EducationSection from "./components/section/education-section";
import ExperienceSection from "./components/section/experience-section";
import SkillSection from "./components/section/skill-section";

export default function Home() {
  return (
    <Container className="font-parkinsans z-10 max-w-[1000px] flex-col items-center gap-4 md:w-4/5 md:gap-8">
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
