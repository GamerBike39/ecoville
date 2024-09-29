import { tourismData } from "@/content/tourismData";
import { StickySection } from "../../micro-components/stickySection";
import { ContentBorder } from "@/components/micro-components/ContentBorder";
import { BoldText } from "@/components/micro-components/BoldText";

export const Tourisme = () => {
  return (
    <section id="tourisme" className="py-20 mt-10">
      <div className="flex max-lg:flex-col container max-w-7xl  h-full mb-10">
        <h3 className="text-fluid-2xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
          {tourismData.title}
        </h3>

        <ContentBorder className="max-lg:my-10">
          <BoldText content={tourismData.content} />
        </ContentBorder>
      </div>

      <StickySection features={tourismData.features} />
    </section>
  );
};
