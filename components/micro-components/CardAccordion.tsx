"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";

export const CardAccordion = ({
  title,
  description,
  image,
  animate = true,
  direction = "left",
  duration = 0.3,
  className,
}: {
  title: string;
  description: string;
  image?: string;
  animate?: boolean;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const descriptionRef = useRef(null);
  const cardRef = useRef(null);
  const cardImage = useRef(null);

  useGSAP(() => {
    gsap.set(descriptionRef.current, { height: 0 });

    gsap.from(cardRef.current, {
      opacity: 0.5,
      y: 50,
      rotateZ: direction === "left" ? -1 : 1,
      rotateX: 20,
      duration: duration,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 100%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        scrub: true,
      },
    });
  }, []);

  const { contextSafe } = useGSAP({ scope: cardRef.current! });

  const toggleAccordion = contextSafe(() => {
    setIsOpen(!isOpen);
    setIsClicked(true);
    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: isOpen ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      {
        height: isOpen ? 0 : "auto",
        opacity: isOpen ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    gsap.to(cardImage.current, {
      scale: isOpen ? 1 : 1.5,
      duration: 0.5,
      filter: isOpen ? "brightness(1)" : "brightness(0.5)",
      ease: "sine.inOut",
    });

    gsap.from(cardRef.current, {
      duration: 0.5,
      scale: 1.01,
      ease: "power2.inOut",
    });
  });

  return (
    <div
      ref={cardRef}
      className={cn(
        `relative border rounded-3xl shadow-lg cursor-pointer  aspect-square group overflow-hidden hover:shadow-xl group`,
        className
      )}
      onClick={toggleAccordion}
    >
      {image && (
        <Image
          ref={cardImage}
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/svg/placeholder.svg"
          className="object-cover object-center w-full h-full -z-10 rounded-2xl mix-blend-multiply"
        />
      )}
      <div className="absolute bottom-0 left-0 -z-10 w-full h-1/3 bg-gradient-to-t from-black from-10% to-transparent rounded-2xl" />

      <div className="w-full p-4 mt-auto flex flex-col justify-end h-full">
        <h3 className="mt-auto text-fluid-lg leading-tight text-white font-bold flex items-center gap-2">
          {title}{" "}
          {!isClicked && (
            <MousePointerClick className="w-4 h-4 opacity-0 group-hover:opacity-100" />
          )}
        </h3>
        <div
          ref={descriptionRef}
          className={`overflow-hidden ${
            animate ? "" : isOpen ? "h-auto" : "h-0"
          }`}
        >
          <p className="text-lg text-slate-50 pt-2 max-w-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
