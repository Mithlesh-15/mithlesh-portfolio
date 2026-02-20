import React from "react";

function Skills() {
  const line1 = [
    {
      name: "HTML",
      logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      link: "https://www.w3schools.com/html/",
    },

    {
      name: "CSS",
      logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      link: "https://www.w3schools.com/css/",
    },

    {
      name: "JavaScript",
      logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      link: "https://www.w3schools.com/js/",
    },

    {
      name: "Typescript",
      logo: "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000",
      link: "https://www.typescriptlang.org/",
    },

    {
      name: "React",
      logo: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
      link: "https://react.dev/",
    },

    {
      name: "Node.js",
      logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      link: "https://nodejs.org/en",
    },

    {
      name: "Express.js",
      logo: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
      link: "https://expressjs.com/",
    },

    // repeat element for infinite scroll

    {
      name: "HTML",
      logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      link: "https://www.w3schools.com/html/",
    },

    {
      name: "CSS",
      logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      link: "https://www.w3schools.com/css/",
    },

    {
      name: "JavaScript",
      logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      link: "https://www.w3schools.com/js/",
    },

    {
      name: "Typescript",
      logo: "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000",
      link: "https://www.typescriptlang.org/",
    },

    {
      name: "React",
      logo: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
      link: "https://react.dev/",
    },

    {
      name: "Node.js",
      logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      link: "https://nodejs.org/en",
    },

    {
      name: "Express.js",
      logo: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
      link: "https://expressjs.com/",
    },
  ];
  const line2 = [
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      link: "https://www.mongodb.com/",
    },
    {
      name: "PostgreSQL",
      logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Firebase",
      logo: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
      link: "https://firebase.google.com/",
    },
    {
      name: "Supabase",
      logo: "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
      link: "https://supabase.com/",
    },
    {
      name: "Git",
      logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      logo: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      logo: "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000",
      link: "https://www.postman.com/",
    },

    // repeat element for infinite scroll

    {
      name: "MongoDB",
      logo: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      link: "https://www.mongodb.com/",
    },
    {
      name: "PostgreSQL",
      logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Firebase",
      logo: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
      link: "https://firebase.google.com/",
    },
    {
      name: "Supabase",
      logo: "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
      link: "https://supabase.com/",
    },
    {
      name: "Git",
      logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      logo: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      logo: "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000",
      link: "https://www.postman.com/",
    },
  ];
  const line3 = [
    {
      name: "Next.js",
      logo: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
      link: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      logo: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Redux",
      logo: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
      link: "https://redux.js.org/",
    },
    {
      name: "React Native",
      logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      link: "https://reactnative.dev/",
    },
    {
      name: "Expo",
      logo: "https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=000000",
      link: "https://expo.dev/",
    },
    {
      name: "Flutter",
      logo: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
      link: "https://flutter.dev/",
    },
    {
      name: "Dart",
      logo: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
      link: "https://dart.dev/",
    },

    // repeat element for infinite scroll

    {
      name: "Next.js",
      logo: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
      link: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      logo: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Redux",
      logo: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
      link: "https://redux.js.org/",
    },
    {
      name: "React Native",
      logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      link: "https://reactnative.dev/",
    },
    {
      name: "Expo",
      logo: "https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=000000",
      link: "https://expo.dev/",
    },
    {
      name: "Flutter",
      logo: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
      link: "https://flutter.dev/",
    },
    {
      name: "Dart",
      logo: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
      link: "https://dart.dev/",
    },
  ];
  const renderSkillLine = (line, direction) => (
    <div className="skills-marquee w-full overflow-hidden">
      <div
        className={`skills-marquee-track ${
          direction === "right" ? "skills-marquee-right" : "skills-marquee-left"
        } text-black flex gap-3 sm:gap-4 lg:gap-6 w-max`}
      >
      {line.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-sm transition-transform duration-200 hover:scale-105 shrink-0"
        >
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
          />
          <span className="font-bold text-sm sm:text-base lg:text-xl whitespace-nowrap">
            {item.name}
          </span>
        </a>
      ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="w-full py-12 sm:py-16 lg:py-20 text-white"
    >
      <div className="w-full flex justify-center">
        <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 inline-block border-b-4 pb-2">
          Skills & Technologies
        </h2>
      </div>
      <div className="w-full flex flex-col gap-5 sm:gap-8 lg:gap-10">
        {renderSkillLine(line1, "right")}
        {renderSkillLine(line2, "left")}
        {renderSkillLine(line3, "right")}
      </div>
    </section>
  );
}

export default Skills;
