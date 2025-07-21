import React from "react";

// DATA: replace img paths and profile links as needed
const profiles = [
  {
    img: "../../../images/evangadi_forum.jpg",
    name: "Evangadi Forum",
    desc: "A responsive question and answer forum application built with Vite React and Node.js, featuring a MySQL database. This project provides a platform for users to engage in discussions and share ideas, showcasing a clean and intuitive design.",
    github: "https://github.com/Fikre-M/evangadi_forum",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
  },
  {
    img: "../../../images/apple_bootstrap.jpg",
    name: "Apple Clone",
    desc: "A responsive Apple website clone built with Vite React and Node.js, featuring a MySQL database. This project showcases a sleek and modern interface, mirroring Apple's aesthetic.",
    github: "https://github.com/Fikre-M/apllee-clone",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
  },
  {
    img: "../../../images/amazon.jpg",
    name: "Amazone Clone",
    desc: "A responsive Amazon website clone created with Vite React and Node.js, utilizing a firebase database. This project demonstrates a robust e-commerce platform with a user-friendly interface.",
    github: "https://github.com/Fikre-M/amazon_replica",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
  },
  {
    img: "../../../images/netflix.jpg",
    name: "Netflex Clone",
    desc: "A responsive Netflix website clone developed using Vite React and Node.js. This project replicates the popular streaming service's user interface and experience.",
    github: "https://github.com/Fikre-M/Netflix",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
  },
  {
    img: "../../../images/log_resized.jpg",
    name: "My Portfolio",
    desc: "I built a personal portfolio website using Vite, React, and Tailwind CSS to deliver a fast, modern, and responsive platform that showcases my projects and skills. The site features a clean user interface designed to highlight my professional experience and technical expertise.",
    github: "https://github.com/Fikre-M/FP",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
  },
  {
    img: "../../../images/clock_resized.jpg",
    name: "Digital Clock App",
    desc: "I developed an interactive Digital Clock application integrated with a chatbot using Vite and React to provide users with real-time timekeeping and conversational assistance within a single, modern web interface.",
    github: "https://github.com/Fikre-M/DigitalClockApp",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
  },
];

    function SocialIcon({ href, title, children, className = "" }) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={`flex items-center justify-center w-9 h-9 rounded-full bg-gray-900/80 hover:bg-blue-500 transition shadow ${className}`}
        >
        {children}
        </a>
    );
    }

    export default function AlternatingBigContainer() {
    return (
      <>
        <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full mt-10">
          My Projects
          <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
        </h2>

        <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto mt-12">
          {profiles.map((profile, idx) => {
            // True: image on right, desc on left; False: image on left, desc on right
            const isImageRight = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`
                flex flex-col md:flex-row items-center md:items-stretch gap-16 py-8 
                ${isImageRight ? "md:flex-row-reverse" : ""} 
                ${
                  idx < profiles.length - 1
                    ? "mb-10 border-b border-gray-700"
                    : ""
                }
                `}
              >
                {/* IMAGE with icons overlaid */}
                <div className="relative flex-shrink-0 mx-auto md:mx-0">
                  <div className="bg-gray-700 rounded-xl w-60 h-45 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <img
                      src={profile.img}
                      alt={profile.name}
                      className="object-cover w-full h-full rounded-xl"
                    />
                    {/* ICONS overlay: absolute at bottom-left and bottom-right, on top of image*/}
                    <div className="absolute left-2 bottom-2 flex gap-2">
                      <SocialIcon href={profile.github} title="GitHub">
                        {/* GitHub SVG */}
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-white"
                        >
                          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 22.296 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
                        </svg>
                      </SocialIcon>
                    </div>
                    <div className="absolute right-2 bottom-2 flex gap-2">
                      <SocialIcon href={profile.linkedin} title="LinkedIn">
                        {/* LinkedIn SVG */}
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-white"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.602v5.594z" />
                        </svg>
                      </SocialIcon>
                    </div>
                  </div>
                </div>
                {/* DESCRIPTION */}
                <div className="flex-1 bg-gray-700 rounded-2xl p-6 flex flex-col justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-gray-300">{profile.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}
