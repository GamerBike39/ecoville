"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";

type ColorType = "green" | "red" | "yellow" | "blue" | "purple" | "indigo";

interface HexagonButtonProps {
  text: string;
  color: ColorType;
  href?: string;
  intern?: boolean;
}

const HexagonButton: React.FC<HexagonButtonProps> = ({
  text,
  color,
  href,
  intern,
}) => (
  <div
    onClick={() => {
      gsap.to(window, { duration: 1, scrollTo: href });
    }}
    className={cn(
      "relative hexagon transition-all duration-500 hover:scale-105 w-fit cursor-pointer",
      {
        "before:bg-green-400/80 hover:before:bg-green-500": color === "green",
        "before:bg-red-400/80 hover:before:bg-red-500": color === "red",
        "before:bg-yellow-400/80 hover:before:bg-yellow-500":
          color === "yellow",
        "before:bg-blue-400/80 hover:before:bg-blue-500": color === "blue",
        "before:bg-purple-400/80 hover:before:bg-purple-500":
          color === "purple",
        "before:bg-indigo-400/80 hover:before:bg-indigo-500":
          color === "indigo",
      }
    )}
  >
    {/* {intern && ( */}
    <div className="text-fluid-base font-bold text-white h-full relative z-10 cursor-pointer">
      {text}
    </div>
    {/* )} */}
  </div>
);

interface HexagonRowProps {
  items: HexagonButtonProps[];
}

const HexagonRow: React.FC<HexagonRowProps> = ({ items }) => (
  <div className="flex gap-8 lg:gap-20">
    {items.map((item, index) => (
      <HexagonButton key={index} {...item} />
    ))}
  </div>
);

const menuItems: HexagonButtonProps[][] = [
  [
    { text: "Le projet", color: "blue", href: "#project" },
    { text: "Loisirs", color: "green" },
    { text: "Industrie", color: "yellow" },
  ],
  [
    { text: "Habitats", color: "red" },
    { text: "Énergie", color: "purple" },
    { text: "Activités", color: "indigo" },
  ],
];

interface HeroProps {
  title: string;
  subtitle: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, tagline }) => {
  return (
    <section className="relative min-h-svh hero bg-hero bg-no-repeat bg-cover bg-scroll">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="min-h-[150svh] container max-xl:max-w-4xl max-w-7xl">
        <div className="container sticky top-1/2 -translate-y-1/2 pb-20">
          <div className="w-full flex max-lg:flex-col lg:gap-32 gap-48">
            <div className="bigHexagon before:bg-white/80 relative grid place-content-center">
              <h1 className="text-fluid-4xl mx-auto first-letter:uppercase">
                {title}
              </h1>
              <div>
                <p className="text-fluid-base font-bold px-5 text-center text-green-950 mx-auto text-balance max-w-sm">
                  {subtitle}
                </p>
                <p className="text-fluid-base font-extrabold px-5 text-center text-green-950 mx-auto text-balance max-w-sm">
                  {tagline}
                </p>
              </div>
            </div>
            <div className="space-y-14 lg:space-y-28 w-fit">
              <HexagonRow items={menuItems[0]} />
              <div className="translate-x-14 lg:translate-x-16 w-fit">
                <HexagonRow items={menuItems[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
