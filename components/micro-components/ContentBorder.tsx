"use client";
import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type ContentBorderProps = {
  children: React.ReactNode;
  className?: string;
};

export const ContentBorder = ({ children, className }: ContentBorderProps) => {
  const hexagon = useRef(null);
  const verticalLine = useRef<HTMLSpanElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ReferenceHeight =
      verticalLine.current?.getBoundingClientRect().height;

    gsap.to(hexagon.current, {
      y: ReferenceHeight!,
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 50%",
        end: "bottom 5%",
        scrub: true,
      },
    });
  }, [hexagon, verticalLine]);

  return (
    <div ref={trigger} className={cn("relative h-fit", className)}>
      <Hexagon
        className="absolute -left-2 -top-1 z-10 opacity-10"
        fill="black"
        size={16}
      />
      <Hexagon
        ref={hexagon}
        className="absolute -left-2 -top-1 z-10"
        fill="white"
        size={16}
      />
      <span
        ref={verticalLine}
        className="absolute h-full w-[1px] bg-gradient-to-t from-foreground/20 to-transparent to-95% left-0"
      ></span>
      <p
        className={
          "max-w-lg  first-letter:font-bold first-letter:text-xl pl-5 h-fit w-fit  "
        }
      >
        {children}
      </p>
    </div>
  );
};
