import React, { useEffect, useRef } from "react";
import { Sparkles, Code2, Rocket, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Product thinking",
    body: "I build features by understanding users, not just writing components.",
    icon: Sparkles,
  },
  {
    title: "Clean architecture",
    body: "I prefer modular systems, clear boundaries, and code that stays readable as it grows.",
    icon: Code2,
  },
  {
    title: "Fast execution",
    body: "From idea to working feature with minimal friction and clean commits.",
    icon: Rocket,
  },
  {
    title: "Reliable code",
    body: "Predictable state, clear data flow, and fewer surprises in production.",
    icon: ShieldCheck,
  },
];

const metrics = [
  { label: "Projects Delivered", value: "3+" },
  { label: "Hackathon Wins", value: "3+" },
  { label: "Experience Level", value: "Fresher" },
];

function About() {
  const profileImage = "/component/about/photo.jpeg";

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef([]);
  const metricsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const highlightsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1.5,
        },
        opacity: 0,
        y: 50,
        letterSpacing: "0.1em",
      });

      // Paragraphs stagger animation
      gsap.from(paragraphsRef.current, {
        scrollTrigger: {
          trigger: paragraphsRef.current[0],
          start: "top 75%",
          end: "top 55%",
          scrub: 1.5,
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
      });

      // Metrics cards animation
      gsap.from(metricsRef.current, {
        scrollTrigger: {
          trigger: metricsRef.current[0],
          start: "bottom 100%",
          end: "top 80%",
          scrub: 2,
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        stagger: 0.15,
      });

      // Image container animation with parallax effect
      gsap.from(imageContainerRef.current, {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
        opacity: 0,
        x: 50,
        rotateY: 15,
      });

      // Image parallax on scroll
      gsap.to(imageContainerRef.current?.querySelector("img"), {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -40,
      });

      // Highlights cards animation
      gsap.from(highlightsRef.current, {
        scrollTrigger: {
          trigger: highlightsRef.current[0],
          start: "top 90%",
          end: "top 75%",
          scrub: 1,
        },
        opacity: 0,
        y: 80,
        scale: 0.95,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 lg:px-10 py-20 sm:py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-start">
          {/* LEFT */}
          <div className="space-y-7">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
              About Me
            </div>

            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
            >
              Simple interfaces.
              <br />
              Solid systems.
            </h2>

            <p
              ref={(el) => (paragraphsRef.current[0] = el)}
              className="text-slate-300 text-base sm:text-lg leading-relaxed"
            >
              I'm Mithlesh Kumar Dewangan, a full-stack developer who focuses on
              building clean, reliable web applications. I value clarity,
              consistency, and code that stays understandable over time.
            </p>

            <p
              ref={(el) => (paragraphsRef.current[1] = el)}
              className="text-slate-200/90 text-lg sm:text-xl italic"
              style={{ fontFamily: "EB Garamond, serif" }}
            >
              Software should feel invisible — fast, clear, and dependable.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <div
                  key={item.label}
                  ref={(el) => (metricsRef.current[index] = el)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold text-green-400">
                    {item.value}
                  </div>
                  <div className="text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5 hidden lg:block">
            <div
              ref={imageContainerRef}
              className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={profileImage}
                  alt="Mithlesh Kumar Dewangan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-sm text-slate-300">
                Personal portrait for portfolio and professional profile.
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="hidden lg:block mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, body, icon: Icon }, index) => (
            <div
              key={title}
              ref={(el) => (highlightsRef.current[index] = el)}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-green-500/40 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{title}</div>
                <span className="icon-wrapper flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
