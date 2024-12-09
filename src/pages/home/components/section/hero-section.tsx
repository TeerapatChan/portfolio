import Typography from "@/components/ui/typography";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "./animation";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { elementRef, isVisible } = useSectionAnimation();

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-4 rounded-lg border-[1px] border-neutral-800 p-4 text-center md:flex-row md:p-6"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={elementRef}
    >
      <div className="w-1/2 min-w-[200px] md:w-full">
        <motion.img
          src="/images/me.png"
          alt="Profile"
          className="w-full rounded-lg"
          variants={childVariants}
        />
      </div>
      <motion.div
        className="flex w-full flex-col gap-4 p-4"
        variants={childVariants}
      >
        <Typography variant="h3">Hi, I'm Benz </Typography>
        <div className="flex w-full flex-col">
          <Typography
            variant="h1"
            gradient="custom"
            className="from-secondary to-sky-400"
          >
            TEERAPAT
          </Typography>
          <Typography
            variant="h1"
            gradient="custom"
            className="from-secondary to-sky-400"
          >
            CHANTARAMANEE
          </Typography>
        </div>
        <Typography variant="body" className="text-neutral-400">
          Passionate Software Engineer, specializing in full-stack development
          and scalable web applications.
        </Typography>
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <Button>Contact Me</Button>
          <Button>Projects</Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
