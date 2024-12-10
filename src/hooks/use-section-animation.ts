import { useEffect, useRef, useState } from "react";
import useOnScreen from "./use-on-screen";

export function useSectionAnimation(threshold: number = 0.3) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const visible = useOnScreen(elementRef, { threshold });

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
    }
  }, [visible]);

  return { isVisible, elementRef };
}
