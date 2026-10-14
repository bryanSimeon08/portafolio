import { ExperienceStack } from "./ExperienceStack";
import { ProjectsRow } from "./ProjectsRow";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/lib/content";

export function Experience() {
  return (
    <section id="experiencia" className="py-16 lg:py-24">
      <SectionHeading index="01" title="Experiencia" />

      <div className="flex flex-col gap-16">
        {experiences.map((job) => (
          <div key={job.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {job.role} en {job.company}
                </h3>
                {job.type && (
                  <span className="font-mono text-xs text-accent">
                    {job.type}
                  </span>
                )}
              </div>
              <span className="font-mono text-xs text-muted-2">
                {job.period}
              </span>
            </div>

            <p className="mt-5 max-w-[62ch] leading-relaxed text-muted">
              {job.summary}
            </p>

            {job.stack.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {job.achievements.length > 0 && (
              <div className="mt-10">
                <ExperienceStack achievements={job.achievements} />
              </div>
            )}
          </div>
        ))}
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
