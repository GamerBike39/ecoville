import Hero from "@/components/homepage/hero/hero";
import { Project } from "@/components/homepage/projects/projects";
import { History } from "@/components/homepage/history/history";
import { Archi } from "@/components/homepage/architecture/archi";
import { Governance } from "@/components/homepage/governance/governance";
import { Tourisme } from "@/components/homepage/tourisme/tourisme";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <History />
      <Archi />
      {/* <Governance /> */}
      <Tourisme />
    </>
  );
}
