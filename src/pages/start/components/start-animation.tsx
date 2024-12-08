import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import Computer from "../../../../public/computer.json";
import { useNavigate } from "react-router-dom";

type StartAnimationProps = {
  getStarted: boolean;
  setGetStarted: (value: boolean) => void;
};

export default function StartAnimation({
  getStarted,
  setGetStarted,
}: StartAnimationProps) {
  const lottieRef = useRef<any>(null);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    lottieRef.current?.playSegments([0, 95], true);
    lottieRef.current?.setSpeed(0.4);
  }, []);

  const complete = () => {
    setTimeout(() => {
      setStarted(true);
    }, 1000);

    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  };

  const handleGetStarted = () => {
    setTimeout(() => {
      setGetStarted(true);
    }, 500);
    navigate("/home");
  };

  return (
    <AnimatePresence>
      {!getStarted && (
        <motion.div
          className="z-10 flex flex-col items-center justify-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <Lottie
              animationData={Computer}
              loop={false}
              lottieRef={lottieRef}
              onComplete={complete}
              className="self-center"
            />
            {started && (
              <TypeAnimation
                sequence={["Teerapat"]}
                className="absolute top-1/4 max-w-56 whitespace-pre-line text-center text-2xl text-border text-white sm:text-3xl"
                speed={1}
                deletionSpeed={10}
              />
            )}
            {completed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "text-md absolute top-1/2 rounded-lg border-[1px] border-white bg-background bg-opacity-50 px-3 py-1 text-white shadow-sm shadow-white hover:cursor-pointer sm:text-lg",
                )}
                onClick={handleGetStarted}
              >
                Get Started
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
