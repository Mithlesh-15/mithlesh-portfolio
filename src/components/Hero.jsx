import React from "react";

function Hero() {
  return (
    <>
      <div
        className="fixed top-0 left-0 text-white w-screen h-screen flex flex-col justify-center items-center px-4 z-50 overflow-hidden"
        style={{ clipPath: "url(#curveClip)" }}
      >
        <div className="flex flex-col items-center">
          <div className="w-full text-green-500 -mb-0.5 md:-mb-0.5 lg:-mb-0.5 xl:-mb-1 flex justify-start text-xl  md:text-xl lg:text-2xl xl:text-3xl">
            Hey I'm
          </div>

          <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Mithlesh Kumar Dewangan
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
