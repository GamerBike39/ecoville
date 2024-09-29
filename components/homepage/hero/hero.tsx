"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Hexagon, Leaf } from "lucide-react";
import Image from "next/image";

interface MenuItem {
  label: string;
  target: string;
  offset?: number;
}

interface MenuItemProps extends MenuItem {
  onClick: (target: string, offset?: number) => void;
}

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const menuItems: MenuItem[] = [
    { label: "Projet", target: "#project" },
    { label: "Histoire", target: "#histoire", offset: -80 },
    { label: "Signature", target: "#architecture" },
    { label: "Activités", target: "#tourisme", offset: 100 },
    { label: "Restauration", target: "#cuisine" },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("h1", { opacity: 0, scale: 0.8, y: 50, duration: 0.8 })
        .from("p", { opacity: 0, y: 30, duration: 0.5 }, "-=0.5")
        .from(
          "li",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.3,
          },
          "-=0.3"
        )
        .from(
          "img",
          { opacity: 0, filter: "sepia(100%)", duration: 0.5 },
          "-=0.1"
        );
    },
    { scope: containerRef }
  );

  const handleMenuClick = (target: string, offset: number = 0): void => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: target, offsetY: offset },
    });
  };

  const MenuItem: React.FC<MenuItemProps> = ({
    label,
    target,
    offset,
    onClick,
  }) => (
    <li
      className="flex items-center gap-2 relative group w-fit cursor-pointer"
      onClick={() => onClick(target, offset)}
    >
      <span className="absolute -z-10 bottom-0 w-full h-[3px] bg-gradient-to-t scale-x-0 from-green-400 to-emerald-500 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 origin-left transition-all duration-300"></span>
      <Hexagon className="group-hover:fill-green-400 group-hover:stroke-green-400 group-hover:rotate-45 transition duration-500" />
      {label}
    </li>
  );

  return (
    <section
      ref={containerRef}
      className="pb-20 max-lg:flex-col flex items-center justify-center"
    >
      <div className="h-full w-1/2 flex flex-col items-center justify-start">
        <div className="relative">
          <Leaf
            className="fill-white opacity-5 absolute top-0 right-0 -z-10"
            size={400}
          />
          <h1 className="text-fluid-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-green-400 to-emerald-500">
            Écoville
          </h1>
          <p className="text-fluid-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-green-700 to-emerald-800">
            Découvrez le futur aujourd&apos;hui
          </p>
          <ul className="grid grid-cols-2 gap-5 mt-10 *:text-fluid-xl">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} onClick={handleMenuClick} />
            ))}
          </ul>
        </div>
      </div>
      <div className="relative parralelogram w-full lg:w-1/2 h-full aspect-square">
        <Image
          src="/bg/bg_home.webp"
          alt="image"
          className="object-cover min-h-svh w-full"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
