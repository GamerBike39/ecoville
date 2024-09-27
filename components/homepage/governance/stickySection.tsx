import { Feature } from "@/content/types/contentType";
import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";
import Image from "next/image";

type StickySectionProps = {
  features: Feature[];
};

export const StickySection = ({ features }: StickySectionProps) => {
  return (
    <div className="w-full relative window">
      {features.map((feature, index) => (
        <div
          id={`feature-g${index}`}
          key={index}
          className={cn(
            "feature max-lg:space-y-10 max-lg:py-10 lg:flex min-h-svh py-4 sticky top-0 bg-neutral-700",
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          )}
        >
          <div className="text w-full lg:w-1/2 flex items-center justify-center flex-col">
            {feature.icon}
            <p className="text-fluid-2xl text-white font-bold pt-2 mx-auto w-fit text-center">
              {feature.title}
            </p>
            <p className="text-xl text-slate-200 pt-2 max-w-lg px-2">
              {feature.description}
            </p>
            <span className="mx-auto h-[1px] w-56 lg:w-96 bg-neutral-800 mt-20 flex justify-center items-center relative">
              <Hexagon className="fill-white stroke-none" size={70} />
            </span>
          </div>
          <div className="p-5 img relative max-lg:w-full w-1/2 h-full aspect-square">
            <Image
              src={feature.image!}
              alt={feature.title}
              fill
              loading="lazy"
              className="object-cover max-lg:w-full rounded-[70px] p-10 aspect-square"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
