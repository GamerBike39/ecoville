"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

export const InsetAnimImage = ({
  src,
  alt,
  className,
  index,
}: {
  src: string;
  alt: string;
  className?: string;
  index?: number;
}) => {
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      scale: 0.6,
      filter: "grayscale(50%)",
      rotateY: index! % 2 === 0 ? 10 : -10,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        // scrub: true,
      },
    });
  }, [imageRef]);

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={className}
      placeholder="blur"
      blurDataURL={src}
      loading="lazy"
    />
  );
};
