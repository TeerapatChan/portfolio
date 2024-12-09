import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0 },
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options,
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
}
