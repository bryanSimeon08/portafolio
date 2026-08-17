import { SectionHeading } from "./SectionHeading";
import { skillGroups, techStack } from "@/lib/content";

export function Technologies() {
  return (
    <section id="tecnologias" className="py-16 lg:py-24">
      <SectionHeading index="02" title="Tecnologías" />
      <p className="max-w-[58ch] leading-relaxed text-muted">
        No me apego a un solo stack. Esto es lo que uso según lo que pida
        el proyecto.
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent hover:text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
