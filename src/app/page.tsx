import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Experience } from "@/components/Experience";
import { Technologies } from "@/components/Technologies";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Nav />
      <main className="mx-auto max-w-4xl px-6">
        <Experience />
        <Technologies />
        <Education />
        <Contact />
      </main>
    </>
  );
}
