import { ContentBorder } from "@/components/micro-components/ContentBorder";
import historyData from "@/content/historyData";
import { cn } from "@/lib/utils";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const History = () => {
  const { title, content, keyPoints, afterImg, beforeImg } = historyData;

  return (
    <section className="py-20 min-h-svh">
      <h3 className="text-fluid-2xl lg:text-fluid-4xl 3xl:text-fluid-5xl container leading-none font-bold mb-6">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-center container">
        <div className="relative max-lg:flex-col flex gap-6">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={beforeImg}
                alt="Image d'écoville avant la rénovation"
                className="cursor-pointer"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={afterImg}
                alt="Image d'écoville après la rénovation"
                className="cursor-pointer"
              />
            }
          />
          <div className="mt-20">
            <ContentBorder>{content}</ContentBorder>
            <div className="grid  md:grid-cols-2 max-w-lg mt-10">
              {keyPoints.map((keyPoint, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col gap-2 py-2 px-4  hover:bg-slate-50 transition",
                    index % 2 === 0 && "lg:border-r lg:border-black/10",
                    index === 0 && "lg:border-r border-b border-black/10",
                    index === 1 && "lg:border-l border-b border-black/10",
                    index === 2 && "max-lg:border-b border-black/10"
                  )}
                >
                  <h2 className="text-xl font-bold">{keyPoint.title}</h2>
                  <p className="">{keyPoint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
