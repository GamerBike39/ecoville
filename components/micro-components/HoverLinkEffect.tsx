import { Hexagon } from "lucide-react";

export const HoverLinkEffect = () => {
  return (
    <>
      <span className="absolute -z-10 bottom-0  w-full h-[2px] bg-gradient-to-t scale-x-0 from-green-400 to-emerald-500 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 origin-left transition-all duration-300"></span>
      <Hexagon className="group-hover:fill-green-400 group-hover:stroke-green-400 group-hover:rotate-45 transition duration-500" />
    </>
  );
};
