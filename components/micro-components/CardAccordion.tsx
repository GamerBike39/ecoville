"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
      // padding: isOpen ? "1rem" : "1.5rem",
      duration: 0.5,
      scale: 1.01,
      ease: "power2.inOut",
    });
  });

  return (
    <div
      ref={cardRef}
      className={cn(
        `border rounded-3xl shadow-lg cursor-pointer relative aspect-square group overflow-hidden hover:outline-dotted outline-3 outline-black/30`,
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
          loading="lazy"
          className="object-cover object-center w-full h-full -z-20 rounded-2xl mix-blend-multiply"
        />
      )}
      <div className="absolute bottom-0 left-0 -z-10 w-full h-1/3 bg-gradient-to-t from-black from-5% to-transparent rounded-2xl" />

      <div className="w-full p-4 mt-auto flex flex-col justify-end h-full">
        <h3 className="mt-auto text-fluid-xl text-white font-bold">{title}</h3>
        <div
          ref={descriptionRef}
          className={`overflow-hidden ${
            animate ? "" : isOpen ? "h-auto" : "h-0"
          }`}
        >
          <p className="text-xl text-slate-200 pt-2 max-w-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
