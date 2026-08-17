"use client";

import { useReducedMotion } from "motion/react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { achievements } from "@/lib/content";

const cardClass =
  "rounded-2xl border border-border bg-surface p-8 sm:p-10 flex flex-col justify-center gap-4";

function CardContent({ tag, title, description }: { tag: string; title: string; description: string }) {
  return (
    <>
      <span className="font-mono text-xs tracking-wide text-accent">{tag}</span>
      <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h4>
      <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>
    </>
  );
}

export function ExperienceStack() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex flex-col gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className={cardClass}>
            <CardContent {...achievement} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <ScrollStack
        itemDistance={70}
        itemStackDistance={26}
        stackPosition="18%"
        scaleEndPosition="8%"
        baseScale={0.84}
        blurAmount={0.6}
      >
        {achievements.map((achievement) => (
          <ScrollStackItem key={achievement.id} itemClassName={cardClass}>
            <CardContent {...achievement} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
      <div className="h-[30vh]" aria-hidden="true" />
    </div>
  );
}
