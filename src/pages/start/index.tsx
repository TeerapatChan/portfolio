import { Container } from "@/components/ui/container";
import { useState } from "react";
import StartAnimation from "./components/start-animation";
import Background from "@/components/background";

export default function GetStarted() {
  const [getStarted, setGetStarted] = useState(false);
  return (
    <>
      <Background />
      <Container className="flex-col items-center gap-4 z-10">
        <StartAnimation getStarted={getStarted} setGetStarted={setGetStarted} />
      </Container>
    </>
  );
}
