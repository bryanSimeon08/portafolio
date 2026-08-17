"use client";

import type { RefObject } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress({
  targetRef,
}: {
  targetRef: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed top-24 right-4 bottom-24 z-40 hidden w-px lg:block"
      aria-hidden="true"
    >
      <div className="h-full w-full bg-border" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-0 w-full bg-accent"
      />
    </div>
  );
}
