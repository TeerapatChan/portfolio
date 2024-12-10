import Typography from "@/components/ui/typography";
import Card from "../card";
import { motion } from "framer-motion";
import { containerVariants } from "./animation";
import { useSectionAnimation } from "@/hooks/use-section-animation";

export default function EducationSection() {
  const { elementRef, isVisible } = useSectionAnimation();

  return (
    <motion.div
      className="flex w-full flex-col gap-4"
      ref={elementRef}
      variants={containerVariants}
      animate={isVisible ? "visible" : "hidden"}
    >
      <Typography variant="h2">Education</Typography>
      <Card
        title="Chulalongkorn University"
        date="2021 - Present"
        icon="education/chula"
      >
        <Typography variant="body" className="text-neutral-400">
          Bachelor of Engineering,
        </Typography>
        <Typography variant="body" className="text-neutral-400">
          Computer Engineering | GPAX 3.47
        </Typography>
      </Card>
      <Card
        title="Naresuan University Secondary Demonstration School"
        date="2018 - 2021"
        icon="education/nud"
      >
        <Typography variant="body" className="text-neutral-400">
          SCIUS high school scholarship | GPAX: 3.83
        </Typography>
      </Card>
    </motion.div>
  );
}
