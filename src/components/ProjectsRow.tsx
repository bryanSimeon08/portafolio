"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/lib/content";

export function ProjectsRow() {
  const reduce = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const directionRef = useRef(1);

  useEffect(() => {
    if (reduce) return;
    const el = scrollerRef.current;
    if (!el) return;

    let raf: number;
    const speed = 0.6;

    const loop = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (!pausedRef.current && max > 0) {
        let next = el.scrollLeft + speed * directionRef.current;
        if (next >= max) {
          next = max;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <div
      ref={scrollerRef}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onPointerDown={() => (pausedRef.current = true)}
      className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] sm:mx-0 sm:px-0"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ y: -6, borderColor: "var(--accent)" }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:w-[320px] sm:p-7"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h4 className="text-lg font-semibold tracking-tight">
              {project.name}
            </h4>
            <span className="font-mono text-xs text-muted-2">
              {project.period}
            </span>
          </div>
          <span className="font-mono text-xs text-accent">{project.type}</span>

          <ul className="flex flex-col gap-2">
            {project.bullets.slice(0, 3).map((bullet) => (
              <li
                key={bullet}
                className="text-sm leading-relaxed text-muted line-clamp-3"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-4 text-sm">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent transition-colors hover:text-foreground"
              >
                Ver en vivo
                <ArrowUpRight weight="bold" className="size-3.5" />
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio de ${project.name}`}
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              Repo
              <GithubLogo weight="bold" className="size-3.5" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
