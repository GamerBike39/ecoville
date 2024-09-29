"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { HoverLinkEffect } from "../micro-components/HoverLinkEffect";

const menuItems = [
  { href: "#project", label: "Projet" },
  { href: "#histoire", label: "Histoire" },
  { href: "#architecture", label: "Signature" },
  { href: "#tourisme", label: "Activités" },
  { href: "#cuisine", label: "Restauration" },
];

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (menuOverlayRef.current) {
      gsap.set(menuOverlayRef.current, { yPercent: -100, display: "none" });
      gsap.set(menuItemsRef.current, { y: 50, opacity: 0 });
    }
  }, []);

  const { contextSafe } = useGSAP({ scope: menuOverlayRef.current! });

  const toggleMenu = contextSafe(() => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(menuOverlayRef.current, {
        yPercent: 0,
        display: "flex",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(menuItemsRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(menuOverlayRef.current, {
        yPercent: -100,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.inOut",
      });
    }
  });

  return (
    <header className="relative z-50">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[101] px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
      >
        {isOpen ? "Fermer" : "Menu"}
      </button>
      <nav
        ref={menuOverlayRef}
        className="fixed hidden inset-0 z-[100] bg-white min-h-svh w-full  justify-center items-center"
      >
        <div
          ref={logoRef}
          className="container flex max-lg:flex-col gap-10 justify-between max-w-6xl"
        >
          <div className="relative">
            <Leaf
              className="fill-white opacity-5 absolute top-0 right-0 -z-10"
              size={400}
            />
            <h1 className="text-fluid-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-green-400 to-emerald-500">
              Écoville
            </h1>
            <p className="text-fluid-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-green-700 to-emerald-800">
              Découvrez le futur aujourd&apos;hui
            </p>
          </div>
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={(el) => (menuItemsRef!.current[index]! = el! as any)}
                className="text-4xl md:text-6xl font-bold"
              >
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="hover:text-green-600 transition-colors relative group pb-2 flex items-center gap-2 w-fit"
                >
                  <HoverLinkEffect />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
