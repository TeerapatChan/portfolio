import { motion } from "framer-motion";
import { childVariants, containerVariants } from "./animation";
import { useSectionAnimation } from "@/hooks/use-section-animation";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import Typography from "@/components/ui/typography";
import { ContactForm } from "../contact";
import { Download } from "lucide-react";

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
        <div>
          <Typography variant="h4">Software Engineer,</Typography>
          <Typography variant="body" className="text-neutral-400">
            specializing in full-stack development and scalable web
            applications.
          </Typography>
        </div>
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <ContactForm />
          <a href="/resume.pdf" download>
            <Button>
              <Download size={16} className="mr-2" />
              Resume
            </Button>
          </a>
        </div>
      </motion.div>
      <Toaster />
    </motion.div>
  );
}
