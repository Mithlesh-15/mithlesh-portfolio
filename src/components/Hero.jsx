import React from "react";
import { TextLoop } from "../lib/motion/components/text-loop";

function Hero() {
  return (
    <>
      <div
        className="fixed top-0 left-0 text-white w-screen h-screen flex flex-col justify-center items-center px-4 z-50 overflow-hidden pb-10"
        style={{ clipPath: "url(#curveClip)" }}
      >
        <div className="flex flex-col items-center">
          <div className="w-full text-green-500 -mb-0.5 md:-mb-0.5 lg:-mb-0.5 xl:-mb-1 flex justify-start text-xl  md:text-xl lg:text-2xl xl:text-3xl">
            Hey I'm
          </div>

          <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Mithlesh Kumar Dewangan
          </div>
          <div className="w-full flex justify-end mt-2 text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
            <div className="flex items-center gap-3">
              <TextLoop
                className="overflow-y-clip"
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                }}
              >
                <span>Frontend</span>
                <span>Backend</span>
                <span>Full Stack</span>
              </TextLoop>

              <span>Developer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
