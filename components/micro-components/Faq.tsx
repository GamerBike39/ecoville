"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ item, isOpen, toggleOpen }) => {
  const answerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (answerRef.current) {
      gsap.to(answerRef.current, {
        height: isOpen ? "auto" : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "border-b border-gray-200 py-4 hover:bg-neutral-200 px-3 transition-all duration-300 rounded-xl",
        isOpen && "bg-neutral-100 hover:bg-neutral-100"
      )}
    >
      <button
        className="flex justify-between items-center w-full text-left "
        aria-controls="answer"
        aria-expanded={isOpen}
        onClick={toggleOpen}
      >
        <span className={cn("text-lg font-medium relative transition")}>
          <span
            className={cn(
              "absolute bottom-0 h-[2px] bg-green-400 w-full scale-x-0 origin-left transition-all duration-500 ease-in-out",
              isOpen ? "scale-x-100" : "scale-x-0"
            )}
          ></span>
          {item.question}
        </span>
        <span
          className={` relative flex justify-center items-center transform transition-transform duration-300 ${
            isOpen ? "rotate-180 " : ""
          }`}
        >
          <Hexagon
            className={cn(
              "absolute -z-10 -top-[1px]",
              isOpen ? "rotate-180 stroke-green-400 " : ""
            )}
            strokeOpacity={0.3}
            size={25}
          />
          ▼
        </span>
      </button>
      <div ref={answerRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="pt-2 pb-4 text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative max-w-3xl mx-auto mt-20 pt-20 pb-32 min-h-[50svh] grid place-content-center container"
    >
      <svg
        width="225"
        height="212"
        viewBox="0 0 225 212"
        fill="none"
        className="max-lg:hidden absolute -z-10 top-0 -left-60 opacity-5"
      >
        <path
          d="M167.75 210H57.25L2 106L57.25 2H167.75L223 106L167.75 210Z"
          stroke="black"
          strokeWidth="3"
        />
        <path
          d="M104.537 129.98C104.537 127.179 104.855 125.014 105.492 123.486C106.256 121.831 107.593 120.239 109.503 118.711L140.063 95.791V82.612C140.063 75.8633 138.153 71.0247 134.333 68.096C130.64 65.1673 124.656 63.703 116.379 63.703C106.574 63.703 98.1703 64.7217 91.167 66.759V81.466H82.381C80.5983 76.5 79.707 71.534 79.707 66.568V60.647C83.3997 58.4823 88.684 56.636 95.56 55.108C102.436 53.4527 109.503 52.625 116.761 52.625C129.24 52.625 138.217 55.2353 143.692 60.456C149.167 65.5493 151.905 73.1893 151.905 83.376C151.905 89.3607 151.141 94.1993 149.613 97.892C148.212 101.585 145.347 104.959 141.018 108.015L120.008 123.486C118.48 124.759 117.461 125.905 116.952 126.924C116.57 127.943 116.379 129.598 116.379 131.89V142.586H104.537V129.98ZM104.155 156.147H116.57V172H104.155V156.147Z"
          fill="black"
        />
      </svg>

      <h2 className="text-fluid-3xl font-bold mb-6">Foire aux questions</h2>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </section>
  );
};

export default FAQ;
