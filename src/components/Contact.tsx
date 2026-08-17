import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/content";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contacto" className="py-16 lg:py-24">
      <SectionHeading index="04" title="Contacto" />

      <p className="max-w-[52ch] leading-relaxed text-muted">
        ¿Tienes algo que construir? Escríbeme, con gusto lo conversamos.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-6 inline-flex items-center gap-3 text-xl text-accent transition-colors hover:text-foreground"
      >
        <EnvelopeSimple weight="bold" className="size-5 shrink-0" />
        {profile.email}
      </a>

      <div className="mt-20 flex flex-col items-start gap-2 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
        <span>
          {profile.name} · {profile.location}
        </span>
        <span>© {year}</span>
      </div>
    </section>
  );
}
