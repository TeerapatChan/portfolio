import { Container } from "@/components/ui/container";
import { H1, H2, H3, H4, P } from "@/components/ui/typography";
import resume from "@/assets/Resume.pdf";
import Background from "@/components/background";
import { FileDown } from "lucide-react";
import { frameworks, programmingLanguages, experience } from "./constant";
import { Button } from "@/components/ui/button";
import SkillCard from "./components/skill-card";
import { Card } from "./components/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Background />
      <Container className="flex-col items-center gap-8 z-10">
        <motion.div
          className="border-[1px] border-neutral-700 w-4/5 p-12 bg-background rounded-lg shadow-sm shadow-primary"
          initial={{ y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "keyframes", duration: 0.5 }}
        >
          <Header />
          <Education />
          <Skills />
          <Experience />
        </motion.div>
      </Container>
    </>
  );
}

function Header() {
  return (
    <div className="flex flex-row gap-4 w-full justify-between">
      <H1 gradient>ABOUT</H1>
      <Button className="h-fit">
        <div className="flex flex-row gap-1">
          <a href={resume} download="resume">
            <FileDown size={24} color="white" />
          </a>
          <p>Resume</p>
        </div>
      </Button>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <H2 gradient className="w-fit">
        Education
      </H2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-between">
          <H3 className="font-bold">Chulalongkorn University</H3>
          <H3>Aug 2021 - Present</H3>
        </div>
        <H4>B.Eng. Computer Engineering | GPAX 3.47</H4>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-between">
          <H3 className="font-bold">
            Naresuan University Secondary Demonstration School
          </H3>
          <H3>May 2018 - Feb 2021</H3>
        </div>
        <H4>SCIUS high school scholarship | GPAX: 3.83</H4>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full mt-4">
        <H2 gradient className="w-fit">
          Programming Languages
        </H2>
        <div className="flex flex-row gap-4 flex-wrap">
          {Array.from(programmingLanguages.keys()).map((skill) => (
            <SkillCard key={skill} name={skill} skills={programmingLanguages} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full mt-4">
        <H2 gradient className="w-fit">
          Framework & Library
        </H2>
        <div className="flex flex-row gap-4 flex-wrap">
          {Array.from(frameworks.keys()).map((skill) => (
            <SkillCard key={skill} name={skill} skills={frameworks} />
          ))}
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <H2 gradient className="w-fit">
        Experience
      </H2>
      <div className="grid grid-cols-2 gap-4">
        {experience.map((exp) => (
          <Card key={exp.title} {...exp} />
        ))}
      </div>
    </div>
  );
}
