// import React from "react";
import React, { useState, useEffect } from "react";

// 1. Your projects array (update local image paths as needed)
const projects = [
  {
    title: "Apple",
    emoji: "💻",
    description: "React, Node.js, MySQL",
    github: "https://github.com/",
    website: "https://yourwebsite.com/",
    details: "https://yourdetails.com/",
    image: "../../images/apple_bootstrap.jpg",
  },

  {
    title: "Programming",
    emoji: "💻",
    description: "JavaScript, Python, Java",
    github: "https://github.com/",
    website: "https://yourwebsite.com/",
    details: "https://yourdetails.com/",
    image: "../../images/evangadi_forum.jpg",
  },
  {
    title: "Programming",
    emoji: "💻",
    description: "JavaScript, Python, Java",
    github: "https://github.com/",
    website: "https://yourwebsite.com/",
    details: "https://yourdetails.com/",
    image: "../../images/amazon.jpg",
  },
  {
    title: "Programming",
    emoji: "💻",
    description: "JavaScript, Python, Java",
    github: "https://github.com/",
    website: "https://yourwebsite.com/",
    details: "https://yourdetails.com/",
    image: "../../images/netflix.jpg",
  },
  {
    title: "Programming",
    emoji: "💻",
    description: "JavaScript, Python, Java",
    github: "https://github.com/",
    website: "https://yourwebsite.com/",
    details: "https://yourdetails.com/",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Programming",
    emoji: "💻",
    description: "JavaScript, Python, Java",
    github: "https://github.com/",
    website: "https://yourwebsite.com/",
    details: "https://yourdetails.com/",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

    // 2. Custom hook for image loading/error state
function useImage(src) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;
    setLoaded(false);
    setError(false);
    const img = new window.Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { loaded, error };
}

// 3. Advanced Projects component

    export default function Projects() {
    return (
      <>
        <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full mt-10">
          My Projects
          <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
        </h2>

        <div className="flex justify-center items-center min-h-screen bg-black">
          <div className="bg-gray-700 rounded-xl shadow-2xl p-8 w-full max-w-5xl">
            {/* <h2 className="text-2xl font-bold mb-6 text-center text-white"></h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="relative bg-blue-100 rounded-lg p-14 flex flex-col items-center shadow transition-transform duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
                >
                  {/* Background image on hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  {/* Content */}
                  <span className="text-3xl mb-2 z-10">{project.emoji}</span>
                  <h3 className="font-semibold text-lg z-10">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 text-center z-10">
                    {project.description}
                  </p>

                  {/* Icon Links */}
                  <div className="flex gap-4 mt-4 z-10">
                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black"
                      title="GitHub"
                    >
                      {/* GitHub SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 22.296 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
                      </svg>
                    </a>
                    {/* Website */}
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black"
                      title="Website"
                    >
                      {/* Website SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7v7m0 0L10 21l-7-7L21 10z"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Clickable overlay for redirection */}
                  <a
                    href={project.details}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label="See details"
                    tabIndex={-1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}
