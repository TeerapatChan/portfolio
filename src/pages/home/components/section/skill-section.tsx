import Typography from "@/components/ui/typography";
import { frameworks, programmingLanguages, tools } from "../../constant";
import SkillCard from "../skill-card";
import { motion } from "framer-motion";
import { useSectionAnimation } from "@/hooks/use-section-animation";
import { childVariants, containerVariants } from "./animation";

export default function SkillSection() {
  const { elementRef, isVisible } = useSectionAnimation(0.1);

  return (
    <motion.div
      className="flex w-full flex-col gap-4"
      ref={elementRef}
      variants={containerVariants}
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div variants={childVariants}>
        <Typography variant="h2">Skills</Typography>
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 rounded-lg border-[1px] border-neutral-800 p-3 md:p-4"
        variants={childVariants}
      >
        <Typography variant="h3">Programming Languages</Typography>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from(programmingLanguages).map(([title, icon]) => (
            <SkillCard key={title} title={title} icon={`language/${icon}`} />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 rounded-lg border-[1px] border-neutral-800 p-3 md:p-4"
        variants={childVariants}
      >
        <Typography variant="h3">Framework & Library</Typography>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from(frameworks).map(([title, icon]) => (
            <SkillCard key={title} title={title} icon={`framework/${icon}`} />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 rounded-lg border-[1px] border-neutral-800 p-3 md:p-4"
        variants={childVariants}
      >
        <Typography variant="h3">Framework & Library</Typography>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from(tools).map(([title, icon]) => (
            <SkillCard key={title} title={title} icon={`tool/${icon}`} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
