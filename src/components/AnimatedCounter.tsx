import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      ref.current.textContent = `${value}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(currentValue) {
        if (ref.current) {
          ref.current.textContent = `${Math.floor(currentValue)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, suffix, duration]);

  return <span ref={ref} className={className}>{`0${suffix}`}</span>;
};

export default AnimatedCounter;
