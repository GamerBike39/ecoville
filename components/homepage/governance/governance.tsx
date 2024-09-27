import governanceData from "@/content/governanceData";
import { StickySection } from "./stickySection";
import { ContentBorder } from "@/components/micro-components/ContentBorder";

export const Governance = () => {
  const { title, content, features } = governanceData;

  return (
    <section className="py-20 min-h-svh">
      <div className="flex max-lg:flex-col container max-w-7xl justify-center items-center h-full mb-10">
        <h3 className="text-fluid-2xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
          {title}
        </h3>
        <div className="flex flex-col items-center justify-center">
          <div className="relative max-lg:flex-col max-lg:my-10 flex gap-6 container">
            <ContentBorder>{content}</ContentBorder>
          </div>
        </div>
      </div>
      <StickySection features={features} />
    </section>
  );
};
