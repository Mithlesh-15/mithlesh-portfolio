import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { TextLoop } from "../lib/motion/components/text-loop";

function Hero({ startAnimation = false }) {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (!startAnimation) {
          gsap.set([".hero-greet", ".hero-name", ".hero-roles"], {
            y: 20,
            opacity: 0,
          });
          gsap.set(".hero-tagline", { y: 16, opacity: 0 });
          gsap.set(".hero-actions > *", { y: 18, opacity: 0 });
          gsap.set(".hero-social > *", { y: 10, opacity: 0 });
          return;
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.6 },
        });

        tl.fromTo(
          [".hero-greet", ".hero-name", ".hero-roles"],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05 }
        )
          .fromTo(
            ".hero-tagline",
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.15"
          )
          .fromTo(
            ".hero-actions > *",
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.35,
              ease: "power3.out",
              clearProps: "transform",
            },
            "-=0.2"
          )
          .fromTo(
            ".hero-social > *",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.06, duration: 0.4 },
            "-=0.15"
          );
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef, dependencies: [startAnimation] }
  );

  return (
    <>
      <div
        ref={rootRef}
        className="relative text-white w-screen min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <div className="flex flex-col items-center text-center max-w-3xl">
          <div className="hero-greet w-full text-green-500 -mb-0.5 md:-mb-0.5 lg:-mb-0.5 xl:-mb-1 flex justify-start text-xl md:text-xl lg:text-2xl xl:text-3xl">
            Hey I'm
          </div>
          <div className="hero-name text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Mithlesh Kumar Dewangan
          </div>
          <div className="hero-roles w-full flex justify-end mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <div className="flex items-center justify-center gap-3 flex-wrap mt-1">
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
          <p
            className="hero-tagline mt-4 text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold italic"
            style={{
              fontFamily: "EB Garamond",
              serif: true,
              fontStyle: "italic",
            }}
          >
            I build clean, fast, and scalable web applications.
          </p>
          <div className="hero-actions flex flex-wrap gap-3 sm:gap-4 mt-6">
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-green-500/60">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Contact Me
            </button>
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-900 font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-slate-300">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Resume
            </button>
          </div>
          <div className="hero-social mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/Mithlesh-15"
              target="_blank"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-300 hover:text-green-500 hover:bg-white/5 transition-colors duration-300"
            >
              <Github className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/mithlesh-kumar-dewangan-li15"
              target="_blank"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-300 hover:text-green-500 hover:bg-white/5 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="https://x.com/mithlesh__15?s=09"
              target="_blank"
              aria-label="Twitter"
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-300 hover:text-green-500 hover:bg-white/5 transition-colors duration-300"
            >
              <Twitter className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
