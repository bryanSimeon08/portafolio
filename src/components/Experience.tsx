import { ExperienceStack } from "./ExperienceStack";
import { ProjectsRow } from "./ProjectsRow";
import { SectionHeading } from "./SectionHeading";
import { experienceMeta } from "@/lib/content";

export function Experience() {
  return (
    <section id="experiencia" className="py-16 lg:py-24">
      <SectionHeading index="01" title="Experiencia" />

      {/* Maxillaris */}
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {experienceMeta.role} en {experienceMeta.company}
            </h3>
            <span className="font-mono text-xs text-muted-2">
              {experienceMeta.type}
            </span>
          </div>
          <span className="font-mono text-xs text-muted-2">
            {experienceMeta.period}
          </span>
        </div>

        <p className="mt-5 max-w-[62ch] leading-relaxed text-muted">
          {experienceMeta.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {experienceMeta.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ExperienceStack />
      </div>

      {/* Proyectos propios */}
      <div className="mt-16">
        <h3 className="font-mono text-xs tracking-wide text-muted-2 uppercase">
          Otros proyectos
        </h3>
        <div className="mt-6">
          <ProjectsRow />
        </div>
      </div>
    </section>
  );
}
