import React from "react";
import { Mail, FileText } from "lucide-react";
import { TextLoop } from "../lib/motion/components/text-loop";

function Hero() {
  return (
    <>
      <div className="relative text-white w-screen h-screen flex flex-col justify-center items-center pb-24">
        <div className="flex flex-col items-center">
          <div className="w-full text-green-500 -mb-0.5 md:-mb-0.5 lg:-mb-0.5 xl:-mb-1 flex justify-start text-xl  md:text-xl lg:text-2xl xl:text-3xl">
            Hey I'm
          </div>
          <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Mithlesh Kumar Dewangan
          </div>
          <div className="w-full flex justify-end mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <div className="flex items-center gap-3">
              <TextLoop
                className="overflow-y-clip text-green-500"
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
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-green-500/60">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Contact Me
            </button>
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-900 font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-slate-300">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
