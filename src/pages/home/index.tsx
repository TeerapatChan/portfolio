import Background from "@/components/background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H1, H3 } from "@/components/ui/typography";
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

export default function Home() {
  return (
    <>
      <Background />
      <Container className="flex-col items-center gap-8 z-10">
        <MotionSection className="text-center">
          <H1 gradient className="from-secondary to-sky-400">
            TEERAPAT
          </H1>
          <H1 gradient className="from-secondary to-sky-400">
            CHANTARAMANEE
          </H1>
        </MotionSection>

        <MotionSection className="text-center">
          <H3>Full-time Cat Lover</H3>
          <H3>Part-time Software Engineer</H3>
        </MotionSection>

        <MotionSection className="flex flex-row">
          <Cat size={64} color="white" />
          <Laptop size={64} color="white" />
        </MotionSection>

        <MotionSection className="flex flex-row gap-4">
          <Link to="/about">
            <Button>About Me</Button>
          </Link>
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>
        </MotionSection>
      </Container>
    </>
  );
}
