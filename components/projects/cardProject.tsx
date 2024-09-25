"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, random } from "gsap";
import Image from "next/image";

export const ProjectCard = ({
  title,
  description,
  image,
  animate = true,
  direction = "left",
}: {
  title: string;
  description: string;
  image?: string;
  animate?: boolean;
  direction?: "left" | "right";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionRef = useRef(null);
  const cardRef = useRef(null);
  const cardImage = useRef(null);

  useGSAP(() => {
    gsap.set(descriptionRef.current, { height: 0 });

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      rotateZ: direction === "left" ? -5 : 5,
      rotateX: 20,
      duration: direction === "left" ? 0.5 : 0.4,
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

  const toggleAccordion = () => {
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
      //   ease: "sine.inOut",
    });

    gsap.from(cardRef.current, {
      // padding: isOpen ? "1rem" : "1.5rem",
      duration: 0.5,
      scale: 1.01,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`border rounded-3xl shadow-lg cursor-pointer relative aspect-square group overflow-hidden hover:outline-dotted outline-3 outline-black/30`}
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
      <div className="absolute -z-10 w-full h-full bg-gradient-to-t from-black from-5% to-transparent rounded-2xl" />

      <div className="w-full p-4 mt-auto flex flex-col justify-end h-full">
        <h3 className="mt-auto text-fluid-xl text-white">{title}</h3>
        <div
          ref={descriptionRef}
          className={`overflow-hidden ${
            animate ? "" : isOpen ? "h-auto" : "h-0"
          }`}
        >
          <p className="text-base text-slate-300 pt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
