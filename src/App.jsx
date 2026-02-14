import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Intro onComplete={() => setIntroDone(true)} />
      {introDone && <Navbar />}
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Azure Depths */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(110% 110% at 60% 100%, #000000 25%, #001747 100%)",
          }}
        />
        <Hero startAnimation={introDone} />
        <About />
        <Skills/>
      </div>
    </>
  );
}

export default App;
