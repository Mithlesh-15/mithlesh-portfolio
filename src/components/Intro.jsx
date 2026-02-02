import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextEffect } from "../lib/motion/components/text-effect";

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const path = document.querySelector("#curveClip path");

    const tl = gsap.timeline({ delay: 4.2 });

    tl.to(path, {
      attr: {
        d: "M0,0 H1 V0 Q0.5,0 0,0 Z",
      },
      duration: 1,
      ease: "expo.inOut",
      onComplete: () => {
        introRef.current.style.display = "none";
        document.body.style.overflow = "auto";
      },
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed top-0 left-0 bg-gray-950 text-white w-screen h-screen flex flex-col justify-center items-center px-4 z-50 overflow-hidden"
      style={{ clipPath: "url(#curveClip)" }}
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V1 Q0.5,1.15 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="flex flex-col items-center">
        <div className="w-full -mb-1.5 md:-mb-3 lg:-mb-4 xl:-mb-5 flex justify-start">
          <TextEffect
            preset="fade-in-blur"
            speedReveal={0.85}
            speedSegment={0.7}
            delay={2.7}
            className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
          >
            Welcome To
          </TextEffect>
        </div>

        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-none">
          <TextEffect
            per="char"
            as="h3"
            preset="blur"
            speedReveal={0.15}
            speedSegment={0.7}
            delay={0.65}
          >
            MITHLESH
          </TextEffect>
        </div>

        <div className="w-full flex justify-end -mt-1 md:-mt-3 lg:-mt-4">
          <TextEffect
            preset="fade-in-blur"
            speedReveal={0.85}
            speedSegment={0.7}
            delay={2.7}
            className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
          >
            Portfolio
          </TextEffect>
        </div>
      </div>
    </div>
  );
}

export default Intro;
