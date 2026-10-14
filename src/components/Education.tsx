import { SectionHeading } from "./SectionHeading";
import { certifications, education, languages } from "@/lib/content";

export function Education() {
  return (
    <section id="estudios" className="py-16 lg:py-24">
      <SectionHeading index="03" title="Estudios y certificaciones" />

      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-10">
        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted-2 uppercase">
            Educación
          </h3>
          <div className="mt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="text-lg font-semibold tracking-tight">
                {education.degree}
              </h4>
              <span className="font-mono text-xs text-muted-2">
                {education.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              {education.institution} · {education.location}
            </p>
            <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
              {education.status}
            </span>
          </div>

          <h3 className="mt-12 font-mono text-xs tracking-wide text-muted-2 uppercase">
            Idiomas
          </h3>
          <div className="mt-5 flex flex-col gap-2">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between gap-4"
              >
                <h4 className="text-sm font-medium text-foreground">
                  {lang.name}
                </h4>
                <span className="font-mono text-xs text-muted-2">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted-2 uppercase">
            Certificaciones
          </h3>
          <div className="mt-5 flex flex-col">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
              >
                <div>
                  <h4 className="text-sm font-medium text-foreground">
                    {cert.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{cert.org}</p>
                </div>
                <span className="font-mono text-xs text-muted-2">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
