"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export const TitleProjects = ({
  title,
  delay,
}: {
  title: string;
  delay?: number;
}) => {
  const titleProject = useRef(null);

  useGSAP(() => {
    gsap.from(titleProject.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.inOut",
      delay: delay,
      scrollTrigger: {
        trigger: titleProject.current,
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  }, [titleProject]);

  return (
    <h3
      ref={titleProject}
      className="text-fluid-2xl font-bold border-b text-center mb-5"
    >
      {title}
    </h3>
  );
};
