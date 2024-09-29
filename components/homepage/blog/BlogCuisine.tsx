"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ecovilleCulinaryData from "@/content/CulinaryData";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { HoverLinkEffect } from "@/components/micro-components/HoverLinkEffect";

export const BlogCuisine: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const { contextSafe } = useGSAP({ scope: scrollRef.current! });

  const handleScroll = contextSafe((direction: "left" | "right") => {
    const scrollAmount = 300; // Ajustez selon vos besoins
    const currentScroll = scrollRef.current!.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    gsap.to(scrollRef.current, {
      scrollLeft: targetScroll,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: checkScrollPosition,
    });
  });
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
      scrollElement.addEventListener("resize", checkScrollPosition);
      checkScrollPosition(); // Check initial state
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScrollPosition);
        scrollElement.removeEventListener("resize", checkScrollPosition);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.from(scrollRef.current, {
      scrollLeft: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  return (
    <section id="cuisine" className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h3 className="text-fluid-4xl font-bold mb-2">
          {ecovilleCulinaryData.title}
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          {ecovilleCulinaryData.content}
        </p>
        <Link
          href="/#cuisine"
          className="text-green-700 group relative gap-2 w-fit flex items-center pb-2"
        >
          <HoverLinkEffect />
          EXPLORER TOUS NOS RESTAURANTS <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8 group">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={ecovilleCulinaryData.highlightedRestaurant.image}
            alt={ecovilleCulinaryData.highlightedRestaurant.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL="/svg/placeholder.svg"
            className="rounded-xl object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div>
          <span className="text-sm text-gray-500 mb-2 block">
            Restaurant à la une
          </span>
          <h2 className="text-2xl font-bold mb-2">
            {ecovilleCulinaryData.highlightedRestaurant.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {ecovilleCulinaryData.highlightedRestaurant.description}
          </p>
          <Link
            href="/#cuisine"
            className="text-green-700 group relative gap-2 w-fit flex items-center pb-2"
          >
            <HoverLinkEffect />
            EN SAVOIR PLUS <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-scroll gap-8 pb-12 snap-x scrollbar_cuisine"
        >
          {ecovilleCulinaryData.articles.map((article, index) => (
            <div
              key={index}
              className="min-w-80 snap-mandatory min-h-[400px] flex flex-col xl:hover:shadow-lg p-2 rounded-xl group transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={article.image!}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/svg/placeholder.svg"
                  className="rounded-lg mb-4 object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <span className="text-xs text-gray-500 mt-1 mb-2 block">
                Article
              </span>
              <h3 className="text-xl font-bold mb-2 h-14">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.description}
              </p>
              <Link
                href="/#cuisine"
                className="text-green-700 group relative gap-2 w-fit flex items-center pb-2"
              >
                <HoverLinkEffect />
                LIRE L&apos;ARTICLE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll("left")}
          disabled={isLeftDisabled}
          aria-expanded={isLeftDisabled}
          className="absolute left-0 lg:-left-14 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2  shadow-md hexa disabled:bg-gray-400 hover:scale-105 transition-all"
        >
          <span className="sr-only">Voir les articles précédents</span>
          <ChevronLeft className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          disabled={isRightDisabled}
          aria-expanded={isRightDisabled}
          className={cn(
            "absolute right-0 lg:-right-14 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500  p-2 rounded-full shadow-md hexa disabled:bg-gray-400 hover:scale-105 transition-all"
          )}
        >
          <span className="sr-only">Voir les articles suivants</span>
          <ChevronRight className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
      </div>
    </section>
  );
};
