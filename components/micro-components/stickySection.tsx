import { Feature } from "@/content/types/contentType";
import { cn } from "@/lib/utils";
import { ArrowRight, Hexagon, Quote } from "lucide-react";
import Link from "next/link";
import { InsetAnimImage } from "./InsetAnimImage";

type StickySectionProps = {
  features: Feature[];
};

export const StickySection = ({ features }: StickySectionProps) => {
  return (
    <div className="w-full relative space-y-28 lg:space-y-52 bg-neutral-700">
      {features.map((feature, index) => (
        <div
          id={`feature-g${index}`}
          key={index}
          className={cn(
            "feature max-lg:space-y-10 max-lg:py-10 lg:flex items-center px-2 lg:px-10 py-10 min-h-svh lg:sticky lg:top-0 bg-neutral-700",
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          )}
        >
          <div className="text w-full lg:w-1/2 flex items-center justify-center gap-10 flex-col">
            <div>
              {feature.icon}
              <p className="text-fluid-3xl max-w-xl leading-none text-white font-bold pt-2 mx-auto w-fit text-center text-balance">
                {feature.title}
              </p>
              <p className="mt-3 text-xl text-slate-200 pt-2 max-w-2xl px-2 text-balance mx-auto max-lg:text-center">
                {feature.description}
              </p>

              {feature.cta && (
                <>
                  <p className="mt-3 text-md text-green-300 font-bold italic pt-2 max-w-2xl px-2 text-balance mx-auto w-fit max-lg:text-center">
                    <Quote className="inline-block w-4 h-4 mr-2 fill-white/10 -scale-x-100 -translate-y-2" />
                    {feature.cta.desc}
                    <Quote className="inline-block size-3 ml-2 fill-white/10 translate-y-2" />
                  </p>
                </>
              )}
            </div>
            {feature.cta && (
              <div>
                <Link
                  href={`#feature-g${index}`}
                  className="text-lg text-center hover:scale-105 active:scale-95 transition-all text-white font-bold bg-green-700 hover:bg-green-600 py-2 px-3 rounded-xl flex items-center gap-2 group"
                >
                  {feature.cta.buttonText}{" "}
                  <ArrowRight className="inline-block w-0 group-hover:w-5 transition-all" />
                </Link>
              </div>
            )}
            <span className="mx-auto h-[1px] w-56 lg:w-96 bg-neutral-800  flex justify-center items-center relative">
              <Hexagon className="fill-white stroke-none" size={30} />
            </span>
          </div>
          <div className="img relative max-lg:w-full w-1/2 h-[80svh] aspect-square perspective">
            <InsetAnimImage
              src={feature.image!}
              alt={feature.title}
              index={index}
              // fill
              // loading="lazy"
              className="object-cover max-lg:w-full rounded-[70px]  aspect-square"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
