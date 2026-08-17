"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import MaskedHeading from "./MaskedHeading";
import { profile } from "@/lib/content";

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubLogo },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinLogo },
  { label: "Instagram", href: profile.instagram, icon: InstagramLogo },
  { label: "Email", href: `mailto:${profile.email}`, icon: EnvelopeSimple },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      {!reduce && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-40 right-16 hidden grid-cols-2 gap-6 xl:grid 2xl:right-28"
          style={{ width: 340 }}
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.4 + i * 0.4,
                delay: i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="flex aspect-square items-center justify-center rounded-3xl border border-border-strong bg-surface text-foreground shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] transition-colors hover:border-accent hover:bg-accent/10"
            >
              <social.icon weight="bold" className="size-9" />
            </motion.a>
          ))}
        </motion.div>
      )}

      <div className="w-full max-w-3xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="font-mono text-base font-semibold tracking-[0.2em] text-accent uppercase sm:text-lg">
            {profile.role}
          </span>
        </motion.div>

        <div className="mt-4 w-full">
          {reduce ? (
            <h1 className="text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.05] font-semibold tracking-tight text-foreground">
              {profile.name}
            </h1>
          ) : (
            <MaskedHeading
              text={profile.name}
              tag="h1"
              mediaType="video"
              src="/profile-video.mp4"
              reveal="rise"
              trigger="mount"
              duration={1.1}
              stagger={0.1}
              align="left"
              weight={600}
              tracking={-0.02}
              lineHeight={1.02}
              textScale={0.16}
              fillScale={1.35}
              drift={24}
              parallax={20}
              brightness={1.3}
              saturation={1.3}
            />
          )}
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.7 }}
          className="mt-7 max-w-[48ch] text-lg leading-relaxed text-muted"
        >
          Fullstack developer enfocado en sistemas confiables: arquitecturas en
          tiempo real, integraciones complejas y bases de datos que no fallan
          bajo carga.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.85 }}
          className="mt-8 flex items-center gap-3 xl:hidden"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center rounded-full border border-border-strong p-2.5 text-foreground transition-colors hover:border-accent hover:bg-accent/10"
            >
              <social.icon weight="bold" className="size-4" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
