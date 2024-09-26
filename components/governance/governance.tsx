import governanceData from "@/content/governanceData";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";

export const Governance = () => {
  const { title, content, features } = governanceData;

  return (
    <section className="py-20 min-h-svh">
      <div className="flex max-lg:flex-col container max-w-7xl justify-center items-center h-full mb-10">
        <h3 className="text-fluid-4xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
          {title}
        </h3>
        <div className="flex flex-col items-center justify-center">
          <div className="relative max-lg:flex-col flex gap-6 container">
            <p className="max-w-lg ml-auto mt-10 first-letter:font-bold first-letter:text-xl border-l border-foreground pl-5 h-fit ">
              {content}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "max-lg:space-y-10 max-lg:py-10 lg:flex min-h-svh py-4 bg-neutral-700 lg:sticky top-0",
              index % 2 === 0 ? "flex-row-reverse" : "flex-row",
              index === 0 && "z-10",
              index === 1 && "z-20",
              index === 2 && "z-30",
              index === 3 && "z-40"
            )}
          >
            <div className="lg:w-1/2 flex items-center justify-center flex-col">
              {/* icon */}
              {feature.icon}
              {/* text */}
              <p className="text-fluid-2xl text-white font-bold pt-2">
                {feature.title}
              </p>
              <p className="text-xl text-slate-200 pt-2 max-w-lg px-2">
                {feature.description}
              </p>
              <span className="mx-auto h-[1px] w-96 bg-neutral-800 mt-20 flex justify-center items-center relative">
                <Hexagon className="fill-white stroke-none" size={70} />
              </span>
            </div>
            <Image
              src={feature.image!}
              alt={feature.title}
              width={930}
              height={930}
              loading="lazy"
              className="object-cover max-lg:w-full w-1/2 h-full  rounded-[70px] p-10 aspect-square"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
