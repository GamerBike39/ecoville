import architectureData from "@/content/architectData";

import { ContentBorder } from "@/components/micro-components/ContentBorder";
import { CardAccordion } from "@/components/micro-components/CardAccordion";

export const Archi = () => {
  const { title, content, features } = architectureData;

  return (
    <section className="py-20 min-h-svh">
      <h3 className="text-fluid-2xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-center container">
        <div className="relative max-lg:flex-col flex gap-6">
          <ContentBorder className="mt-10 lg:mt-20">{content}</ContentBorder>
          <div className="grid  md:grid-cols-2 max-w-2xl mt-10 gap-2">
            {features.map((feature, index) => (
              <CardAccordion
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                direction={index % 2 === 0 ? "left" : "right"}
                duration={index % 2 === 0 ? 0.3 : 0.5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
