"use client";

import { useReducedMotion } from "motion/react";
import PixelBlast from "./PixelBlast";

export function BackgroundField() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-dvh w-full overflow-hidden"
      aria-hidden="true"
    >
      {!reduce && (
        <PixelBlast
          variant="square"
          color="#7fb8a3"
          pixelSize={4}
          patternScale={2.6}
          patternDensity={0.9}
          pixelSizeJitter={0.15}
          enableRipples={false}
          liquid={false}
          speed={0.35}
          edgeFade={0.35}
          transparent
        />
      )}
      <div className="stardust absolute inset-0" />
    </div>
  );
}
