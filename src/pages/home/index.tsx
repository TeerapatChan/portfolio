import Background from "@/components/background";
import { Container } from "@/components/ui/container";
import HeroSection from "./components/section/hero-section";
import EducationSection from "./components/section/education-section";
import Typography from "@/components/ui/typography";
import Card from "./components/card";
import { experience, expertise, programmingLanguages } from "./constant";
import ExperienceSection from "./components/section/experience-section";

export default function Home() {
  return (
    <>
      {/* <Background /> */}
      <Container className="z-10 max-w-[1000px] flex-col items-center gap-4 md:w-4/5 md:gap-8">
        <HeroSection />
        <div className="mt-4 flex w-full flex-col gap-4 border-t-[1px] border-dashed border-neutral-800"></div>
        <EducationSection />
        <div className="mt-4 flex w-full flex-col gap-4 border-t-[1px] border-dashed border-neutral-800"></div>
        <ExperienceSection />
        <div className="mt-4 flex w-full flex-col gap-4 border-t-[1px] border-dashed border-neutral-800"></div>
        <Typography variant="h2">Programming Languages</Typography>
        <div className="flex flex-row flex-wrap gap-4">
          {/* {Array.from(programmingLanguages.keys()).map((skill) => (
            <SkillCard key={skill} name={skill} skills={programmingLanguages} />
          ))} */}
        </div>
      </Container>
    </>
  );
}
