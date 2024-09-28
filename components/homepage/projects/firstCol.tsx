import { BoldText } from "@/components/micro-components/BoldText";
import { ContentBorder } from "@/components/micro-components/ContentBorder";
import ecovilleProjectData from "@/content/projectData";

const { title, subtitle, whyEcoville } = ecovilleProjectData;

export const FirstCol = () => {
  return (
    <div className=" py-10 mb-5  lg:min-h-svh  lg:h-svh lg:sticky  top-20 xl:w-1/3">
      <div className="flex flex-col justify-start  h-full py-4 pl-3 w-fit gap-10">
        <div className="max-w-xl container">
          <h2 className="text-fluid-xl 2xl:text-6xl leading-none font-extrabold ">
            {title}
          </h2>
          <h2 className="max-w-sm text-fluid-sm text-balance  mt-4">
            {subtitle}
          </h2>
        </div>
        {/* whyEcoville */}
        <div className="max-w-sm px-3 flex h-fit ">
          <ContentBorder>
            <BoldText content={whyEcoville.content} />
          </ContentBorder>
        </div>
      </div>
    </div>
  );
};
