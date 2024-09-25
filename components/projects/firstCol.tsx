import ecovilleProjectData from "@/content/projectData";

const { title, subtitle, whyEcoville } = ecovilleProjectData;

export const FirstCol = () => {
  return (
    <div className=" py-10 mb-5  lg:min-h-svh  lg:h-svh lg:sticky  top-0 xl:w-1/3">
      <div className="flex flex-col max-lg:justify-start justify-center h-full py-4 pl-3 w-fit gap-10">
        <div className="max-w-xl container">
          <h1 className="text-fluid-xl 2xl:text-6xl leading-none font-extrabold ">
            {title}
          </h1>
          <h2 className="max-w-sm text-fluid-sm text-balance  mt-4">
            {subtitle}
          </h2>
        </div>
        {/* whyEcoville */}
        <div className="max-w-sm px-3 flex h-fit ">
          <div
            className={`border rounded-2xl p-4 shadow-lg bg-card transition-all`}
          >
            <h3 className="text-fluid-xl text-blue-950 font-bold">
              {whyEcoville.title}
            </h3>
            <div className={`overflow-hidden `}>
              <p className="text-fluid-base text-muted-foreground pt-2">
                {whyEcoville.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
