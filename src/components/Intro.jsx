import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextEffect } from "../lib/motion/components/text-effect";

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const totalTime = 4.2;

    const tl = gsap.timeline({ delay: totalTime });

    tl.to(introRef.current, {
      y: "-100%",
      duration: 1.4,
      ease: "power4.inOut",
      onComplete: () => {
        introRef.current.style.display = "none";
        document.body.style.overflow = "auto";
      },
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed top-0 left-0 bg-black text-white w-screen h-screen flex flex-col justify-center items-center px-4 z-50"
    >
      <div className="flex flex-col items-center">
        <div className="w-full -mb-1.3 md:-mb-3.75 lg:-mb-5 xl:-mb-9 flex justify-start">
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
