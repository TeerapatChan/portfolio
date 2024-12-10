import { motion } from "framer-motion";
import Typography from "@/components/ui/typography";
import Card from "../card";
import { experience } from "../../constant";
import { childVariants, containerVariants } from "./animation";
import { useSectionAnimation } from "@/hooks/use-section-animation";

export default function ExperienceSection() {
  const { elementRef, isVisible } = useSectionAnimation();

  return (
    <motion.div
      className="flex w-full flex-col gap-4"
      ref={elementRef}
      initial="hidden"
      variants={containerVariants}
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div variants={childVariants}>
        <Typography variant="h2">Experience</Typography>
      </motion.div>
      <motion.div variants={childVariants}>
        <Card
          title={experience[0].title}
          date={experience[0].date}
          icon="experience/lmwn"
          width={80}
          subtitle={experience[0].subtitle}
        >
          <div>
            <Typography variant="body" className="text-neutral-400">
              - Designed and developed comprehensive test cases to ensure
              software quality and functionality.
            </Typography>
            <Typography variant="body" className="text-neutral-400">
              - Automated testing workflows using Jest and Playwright.
            </Typography>
          </div>
        </Card>
      </motion.div>
      <motion.div variants={childVariants}>
        <Card
          title={experience[1].title}
          date={experience[1].date}
          icon="experience/mcv"
          subtitle={experience[1].subtitle}
        >
          <div>
            <Typography variant="body" className="text-neutral-400">
              - Learning Management System (LMS) Platform for Chulalongkorn
              University students.
            </Typography>
            <Typography variant="body" className="text-neutral-400">
              - Implemented back-end services using Go, creating RESTful APIs.
            </Typography>
            <Typography variant="body" className="text-neutral-400">
              - Implemented and optimized the front-end using Next.js, creating
              responsive user interfaces.
            </Typography>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
