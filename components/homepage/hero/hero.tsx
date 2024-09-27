"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const heroTitle = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to([imageRef.current, textContainerRef.current], {
        scale: 2.5,
        opacity: 0,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      }).to(
        heroRef.current,
        {
          filter: "brightness(1)",
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

      tl.fromTo(
        heroTitle.current,
        {
          opacity: 0,
          yPercent: 25,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="wrapper relative w-full  min-h-[150svh] h-svh"
    >
      <div className="content  w-full min-h-[150svh]">
        <section
          ref={heroRef}
          className="section relative flex flex-col items-center justify-center hero bg-hero brightness-50   min-h-[150svh] bg-no-repeat bg-scroll bg-cover"
        >
          <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div ref={heroTitle} className="opacity-0 space-y-20">
            <h1 className="first-letter:uppercase text-6xl lg:text-8xl xl:text-[10vw] font-extrabold text-shadow text-white">
              <span className="text-green-300">éco</span>ville
            </h1>
            <div className=" w-full flex items-center justify-center gap-20 "></div>
          </div>
        </section>
      </div>
      <div className="image-container perspective absolute inset-0 w-full min-h-svh overflow-hidden">
        <Image
          ref={imageRef}
          src="/bg/firstBg.webp"
          alt="image"
          className="object-cover min-h-svh w-screen"
          width={1920}
          height={1080}
        />
        <div
          ref={textContainerRef}
          className="absolute inset-0 left-0 text-white flex flex-col justify-center max-h-svh "
        >
          <div className="container">
            <div className="text-2xl lg:text-fluid-4xl 2xl:text-8xl leading-none font-extrabold">
              Construisons
            </div>
            <div className="text-[8vw] leading-none font-extrabold ">
              Aujourd&apos;hui
            </div>
          </div>
          <div className="translate-y-10 pr-20 text-fluid-4xl xl:text-[8vw]  leading-none font-extrabold flex justify-end">
            <div>Le Futur</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
