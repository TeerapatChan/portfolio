import Background from "@/components/background";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { motion } from "framer-motion";
import { Cat, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const MotionSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-8">
      <img
        src="/images/me.png"
        alt="Profile"
        className="h-40 w-40 rounded-full border-2 border-white md:h-48 md:w-48 lg:h-60 lg:w-60"
      />
      <MotionSection className="text-center">
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
      </MotionSection>

      <MotionSection className="text-center">
        <Typography variant="h3">Full-time Cat Lover</Typography>
        <Typography variant="h3">Part-time Software Engineer</Typography>
      </MotionSection>

      <MotionSection className="flex flex-row">
        <Cat color="white" className="h-full w-12 md:w-14 lg:w-16" />
        <Laptop color="white" className="h-full w-12 md:w-14 lg:w-16" />
      </MotionSection>

      {/* <MotionSection className="flex flex-row gap-4">
        <Link to="/about">
          <Button>About Me</Button>
        </Link>
        <Link to="/projects">
          <Button>Projects</Button>
        </Link>
      </MotionSection> */}
    </div>
  );
}
