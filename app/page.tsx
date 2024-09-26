import { Archi } from "@/components/architecture/archi";
import { Governance } from "@/components/governance/governance";
import Hero from "@/components/hero/hero";
import { History } from "@/components/history/history";
import { Project } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <History />
      <Archi />
      <Governance />
    </>
  );
}
