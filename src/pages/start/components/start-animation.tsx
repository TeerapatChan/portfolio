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
          className="flex flex-col items-center justify-center z-10"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center relative">
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
                className="text-3xl text-white top-1/4 absolute whitespace-pre-line text-center max-w-56 text-border"
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
                  "text-white p-1 w-44 rounded-lg border-[1px] border-white shadow-white shadow-sm text-lg absolute top-1/2 hover:cursor-pointer bg-background bg-opacity-50"
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
