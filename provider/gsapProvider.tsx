"use client";

import React, { useRef, ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ReactLenis } from "lenis/react";

interface GSAPProviderProps {
  children: ReactNode;
}
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function GSAPProvider({ children }: GSAPProviderProps) {
  // Enregistrez les plugins GSAP une seule fois au niveau du module
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
