import historyData from "@/content/historyData";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const History = () => {
  const { title, content, keyPoints, afterImg, beforeImg } = historyData;

  return (
    <section className="py-20 min-h-svh">
      <h3 className="text-fluid-4xl lg:text-fluid-6xl tracking-wider container leading-none font-bold mb-6">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-center container">
        <div className="relative max-lg:flex-col flex gap-6">
          <ReactCompareSlider
            // className="aspect-video"
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
          <div>
            <p className="max-w-lg mt-20 first-letter:font-bold first-letter:text-xl border-l border-foreground pl-5 h-fit ">
              {content}
            </p>
            <div className="grid  md:grid-cols-2 max-w-lg mt-10">
              {keyPoints.map((keyPoint, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 border p-2 hover:bg-slate-50 transition "
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
