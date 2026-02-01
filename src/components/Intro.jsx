import React from "react";
import { TextEffect } from "../lib/motion/components/text-effect";

function Intro() {
  return (
    <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center px-4">
      <div className="flex flex-col items-center">
        {/* Welcome To - Reduced spacing */}
        <div className="w-full -mb-2.5 md:-mb-3.75 lg:-mb-5 xl:-mb-9 flex justify-start">
          <TextEffect
            per="char"
            preset="fade"
            speedReveal={0.5}
            className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
          >
            Welcome To
          </TextEffect>
        </div>

        {/* MITHLESH - Main heading with responsive sizing */}
        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-none">
          <TextEffect
            per="char"
            as="h3"
            preset="blur"
            speedReveal={0.2}
            speedSegment={0.7}
          >
            MITHLESH
          </TextEffect>
        </div>

        {/* Portfolio - Reduced spacing */}
        <div className="w-full flex justify-end -mt-2 md:-mt-3 lg:-mt-4">
          <TextEffect
            per="char"
            preset="fade"
            speedReveal={0.5}
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
