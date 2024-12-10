import { Container } from "@/components/ui/container";
import { useState } from "react";
import StartAnimation from "./components/start-animation";
import Background from "@/components/background";
import Home from "./components/home";

export default function GetStarted() {
  const [getStarted, setGetStarted] = useState(false);
  const [hide, setHide] = useState(false);
  return (
    <>
      {!hide ? (
        <>
          <Background />
          <Container className="z-10 flex-col items-center gap-4">
            <StartAnimation
              getStarted={getStarted}
              setGetStarted={setGetStarted}
              setHide={setHide}
            />
          </Container>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}
