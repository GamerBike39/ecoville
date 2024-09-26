import ecovilleProjectData from "@/content/projectData";
import { ProjectCard } from "./cardProject";
import { TitleProjects } from "./titleProjects";

const { features, whyJoin } = ecovilleProjectData;

export const SecondCol = () => {
  return (
    <div className="xl:w-2/3 relative flex max-lg:flex-col gap-10 overflow-hidden">
      {/* features */}
      <div className="lg:w-1/3 px-3 lg:pr-10 py-10 lg:border-r">
        <TitleProjects title="Particularités" />
        <div className="grid grid-cols-1 gap-6 lg:gap-64 perspective">
          {features.map(({ title, description, image }, index) => (
            <ProjectCard
              key={index}
              title={title}
              description={description}
              image={image}
              direction="left"
            />
          ))}
        </div>
      </div>

      {/* whyJoin */}
      <div className="lg:w-1/2 px-3 py-10 overflow-hidden">
        <TitleProjects title="Valeurs" delay={0.3} />
        <div className="grid grid-cols-1 gap-6 lg:gap-96  perspective">
          {whyJoin.reasons.map(({ title, description, image }, index) => (
            <ProjectCard
              key={index}
              title={title}
              description={description}
              image={image}
              direction="right"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
