import { tourismData } from "@/content/tourismData";
import { StickySection } from "../governance/stickySection";
import { ContentBorder } from "@/components/micro-components/ContentBorder";

export const Tourisme = () => {
  return (
    <section className="py-20 min-h-svh mt-40">
      <div className="flex max-lg:flex-col container max-w-7xl  h-full mb-10">
        <h3 className="text-fluid-2xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
          {tourismData.title}
        </h3>

        <ContentBorder>{tourismData.content}</ContentBorder>
      </div>
      <StickySection features={tourismData.features} />
    </section>
  );
};
