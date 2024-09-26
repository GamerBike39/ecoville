import architectureData from "@/content/architectData";
import { ProjectCard } from "@/components/projects/cardProject";

export const Archi = () => {
  const { title, content, features } = architectureData;

  return (
    <section className="py-20 min-h-svh">
      <h3 className="text-fluid-4xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-center container">
        <div className="relative max-lg:flex-col flex gap-6">
          <p className="max-w-lg mt-20 first-letter:font-bold first-letter:text-xl border-l border-foreground pl-5 h-fit ">
            {content}
          </p>
          <div className="grid  md:grid-cols-2 max-w-2xl mt-10 gap-2">
            {features.map((feature, index) => (
              <ProjectCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
