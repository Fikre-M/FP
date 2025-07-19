// src/components/AlternatingBigContainer.jsx
import React from "react";

// Sample data; replace avatar links and information as needed
const profiles = [
  {
    img: "/img1.jpg",
    name: "Jane Developer",
    desc: "Fullstack developer passionate about modern web technology and open source.",
    github: "https://github.com/janedev",
    linkedin: "https://linkedin.com/in/janedev",
  },
  {
    img: "/img2.jpg",
    name: "John Engineer",
    desc: "Backend specialist with a focus on cloud and APIs.",
    github: "https://github.com/johneng",
    linkedin: "https://linkedin.com/in/johneng",
  },
  {
    img: "/img3.jpg",
    name: "Sara Creator",
    desc: "Frontend engineer crafting engaging interfaces and user experiences.",
    github: "https://github.com/saracreate",
    linkedin: "https://linkedin.com/in/saracreate",
  },
  {
    img: "/img4.jpg",
    name: "Alex Logic",
    desc: "DevOps enthusiast with automation and CI/CD expertise.",
    github: "https://github.com/alexlogic",
    linkedin: "https://linkedin.com/in/alexlogic",
  },
  {
    img: "/img5.jpg",
    name: "Mona UX",
    desc: "UI/UX designer blending artistry with usability and code.",
    github: "https://github.com/monaux",
    linkedin: "https://linkedin.com/in/monaux",
  },
  {
    img: "/img6.jpg",
    name: "Luke Script",
    desc: "Software engineer and open-source contributor.",
    github: "https://github.com/lukescript",
    linkedin: "https://linkedin.com/in/lukescript",
  },
];

export default function AlternatingBigContainer() {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-lg p-6 space-y-8">
      {profiles.map((profile, idx) => {
        // Even index: image right, desc left; Odd index: image left, desc right
        const isImageRight = idx % 2 === 0;
        return (
          <div
            key={idx}
            className={`
              flex flex-col md:flex-row
              ${isImageRight ? "md:flex-row-reverse" : ""}
              items-center
              md:items-stretch
              gap-6
              p-4
              rounded-lg
              ${idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
            `}
          >
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <img
                src={profile.img}
                alt={profile.name}
                className="object-cover w-full h-full rounded-xl shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
              <p className="text-gray-700 mb-4">{profile.desc}</p>
              <div className="flex gap-5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
