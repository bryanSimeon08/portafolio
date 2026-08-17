"use client";

import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Experience } from "@/components/Experience";
import { Technologies } from "@/components/Technologies";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <Hero />
      <Nav />
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-bg to-transparent sm:w-80 lg:w-96"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-bg to-transparent sm:w-80 lg:w-96"
          aria-hidden="true"
        />
        <main ref={mainRef} className="mx-auto max-w-4xl px-6">
          <Experience />
          <Technologies />
          <Education />
          <Contact />
        </main>
      </div>
      <ScrollProgress targetRef={mainRef} />
    </>
  );
}
