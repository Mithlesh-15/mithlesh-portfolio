import React, { useEffect } from "react";
import Intro from "./components/intro";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Intro />
      <Navbar />
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Azure Depths */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(110% 110% at 60% 100%, #000000 25%, #001747 100%)",
          }}
        />
        <Hero />
        <Hero />
      </div>
    </>
  );
}

export default App;
