import {
  EnvelopeSimple,
  FileArrowDown,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/content";

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Estudios", href: "#estudios" },
];

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubLogo },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinLogo },
  { label: "Instagram", href: profile.instagram, icon: InstagramLogo },
  { label: "Email", href: `mailto:${profile.email}`, icon: EnvelopeSimple },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm text-foreground">
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center rounded-full p-2 text-muted transition-colors hover:text-foreground"
              >
                <social.icon weight="bold" className="size-4" />
              </a>
            ))}
          </div>
          <a
            href="/CV-Bryan-Simeon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:bg-accent/10"
          >
            <span className="hidden sm:inline">CV</span>
            <FileArrowDown weight="bold" className="size-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
