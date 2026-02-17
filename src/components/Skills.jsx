import React from "react";

function Skills() {
  const line1 = [
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
    { name: "React", link: "https://react.dev" },
  ];
  return (
    <section id="skills" className="w-full py-20 text-white">
      <div className="flex justify-center mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 inline-block border-b-4 pb-2">
          Skills & Technologies
        </h2>
      </div>
      <div className="w-full flex justify-center flex-col px-4 gap-10">
        <div className="text-black flex flex-wrap justify-center gap-6">
          {line1.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-lg px-8 py-3 flex items-center gap-3 shadow-sm transition-transform duration-200 hover:scale-110"
            >
              <img
                src="/components/about/photo.jpeg"
                alt={`${item.name} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain "
              />
              <span className="font-medium text-xl">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="text-black flex flex-wrap justify-center gap-6">
          {line1.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-lg px-8 py-3 flex items-center gap-3 shadow-sm transition-transform duration-200 hover:scale-110"
            >
              <img
                src="/components/about/photo.jpeg"
                alt={`${item.name} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain "
              />
              <span className="font-medium text-xl">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="text-black flex flex-wrap justify-center gap-6">
          {line1.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-lg px-8 py-3 flex items-center gap-3 shadow-sm transition-transform duration-200 hover:scale-110"
            >
              <img
                src="/components/about/photo.jpeg"
                alt={`${item.name} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain "
              />
              <span className="font-medium text-xl">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
