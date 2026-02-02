import React, { useEffect } from "react";
import Intro from "./components/intro";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Intro />
     <div className="min-h-screen w-full relative">
  {/* Azure Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(110% 110% at 60% 100%, #000000 25%, #001747 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>
    </>
  );
}

export default App;
