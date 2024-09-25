import Hero from "@/components/hero/hero";
import { Project } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <Hero
        title="écoville"
        subtitle="La ville de demain"
        tagline="aujourd'hui"
      />
      <Project />
    </>
  );
}
