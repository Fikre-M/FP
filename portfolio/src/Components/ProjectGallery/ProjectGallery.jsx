import { useState, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// DATA: replace img paths and profile links as needed
const profilesData = [
  {
    id: 1,
    img: "/images/evangadi_forum.jpg",
    name: "Evangadi Forum",
    desc: "A responsive question and answer forum application built with Vite React and Node.js, featuring a MySQL database. This project provides a platform for users to engage in discussions and share ideas, showcasing a clean and intuitive design.",
    github: "https://github.com/Fikre-M/evangadi_forum",
    website: "https://evangadiforum.knoweledagebased.com/",
    category: "forum",
  },
  {
    id: 2,
    img: "/images/apple_bootstrap.jpg",
    name: "Apple Clone",
    desc: "A responsive Apple website clone built with Vite React and Node.js, featuring a MySQL database. This project showcases a sleek and modern interface, mirroring Apple's aesthetic.",
    github: "https://github.com/Fikre-M/apllee-clone",
    website: "https://startling-heliotrope-e68744.netlify.app/",
    category: "clone",
  },
  {
    id: 3,
    img: "/images/amazon.jpg",
    name: "Amazon Clone",
    desc: "A responsive Amazon website clone created with Vite React and Node.js, utilizing a firebase database. This project demonstrates a robust e-commerce platform with a user-friendly interface.",
    github: "https://github.com/Fikre-M/amazon_replica",
    website: "https://amazon-replica-fikre.netlify.app/",
    category: "clone",
  },
  {
    id: 4,
    img: "/images/netflix.jpg",
    name: "Netflix Clone",
    desc: "A responsive Netflix website clone developed using Vite React and Node.js. This project replicates the popular streaming service's user interface and experience.",
    github: "https://github.com/Fikre-M/Netflix",
    website: "https://edu-react-movie-app.knoweledagebased.com/",
    category: "clone",
  },
  {
    id: 5,
    img: "/images/fms.png",
    name: "My Portfolio",
    desc: "I built a personal portfolio website using Vite, React, and Tailwind CSS to deliver a fast, modern, and responsive platform that showcases my projects and skills. The site features a clean user interface designed to highlight my professional experience and technical expertise.",
    github: "https://github.com/Fikre-M/FP",
    website: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
    category: "portfolio",
  },
  {
    id: 6,
    img: "/images/clock_resized.jpg",
    name: "Digital Clock App",
    desc: "I developed an interactive Digital Clock application integrated with a chatbot using Vite and React to provide users with real-time timekeeping and conversational assistance within a single, modern web interface.",
    github: "https://github.com/Fikre-M/DigitalClockApp",
    website: "https://clock.rohaazage.com/",
    category: "app",
  },
];

function SocialIcon({ href, title, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`flex items-center justify-center w-9 h-9 rounded-full bg-gray-900/80 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${className}`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ profile, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isImageRight = index % 2 === 0;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`
        flex flex-col md:flex-row items-center md:items-stretch gap-16 py-8 
        ${isImageRight ? "md:flex-row-reverse" : ""} 
        ${index < profilesData.length - 1 ? "mb-10 border-b border-gray-700" : ""} 
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE with icons overlaid */}
      <div className="relative flex-shrink-0 mx-auto md:mx-0">
        <div
          className={`bg-gray-700 rounded-xl w-60 h-45 flex items-center justify-center relative overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
            isHovered
              ? "shadow-2xl -translate-y-3 scale-105 ring-2 ring-blue-500"
              : "hover:shadow-2xl hover:-translate-y-2"
          }`}
          style={{ height: "180px" }}
        >
          {!imageError ? (
            <img
              src={profile.img}
              alt={profile.name}
              className={`object-cover w-full h-full rounded-xl transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <div className="text-sm">Image not found</div>
              </div>
            </div>
          )}

          {/* Loading placeholder */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-600 animate-pulse rounded-xl flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}

          {/* ICONS overlay */}
          <div
            className={`absolute left-2 bottom-2 flex gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}
          >
            <SocialIcon href={profile.github} title="GitHub">
              <FaGithub className="w-5 h-5 text-white" />
            </SocialIcon>
          </div>
          <div
            className={`absolute right-2 bottom-2 flex gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}
          >
            <SocialIcon href={profile.website} title="Live Website">
              <FaExternalLinkAlt className="w-5 h-5 text-white" />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div
        className={`flex-1 bg-gray-700 rounded-2xl p-6 flex flex-col justify-center shadow-lg transition-all duration-500 cursor-pointer ${
          isHovered
            ? "shadow-2xl -translate-y-3 bg-gray-600"
            : "hover:shadow-2xl hover:-translate-y-2"
        }`}
      >
        <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
        <p className="text-gray-300 leading-relaxed">{profile.desc}</p>
        <div className="mt-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-200 bg-blue-600/30 rounded-full">
            {profile.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["all", ...new Set(profilesData.map((p) => p.category))];
    return cats;
  }, []);

  // Filter profiles based on category and search term
  const filteredProfiles = useMemo(() => {
    return profilesData.filter((profile) => {
      const matchesCategory =
        selectedCategory === "all" || profile.category === selectedCategory;
      const matchesSearch =
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.desc.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="w-full min-h-screen py-10">
      <h2 className="text-center text-4xl font-bold mb-8 relative text-white w-full mt-10">
        My Projects
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
      </h2>

      {/* Search and Filter Controls */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 pl-10 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 w-64"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, idx) => (
            <ProjectCard
              key={profile.id}
              profile={profile}
              index={idx}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No projects found</div>
            <div className="text-gray-500">
              Try adjusting your search or filter criteria
            </div>
          </div>
        )}
      </div>

      {/* Project Count */}
      <div className="text-center mt-6 text-gray-400">
        Showing {filteredProfiles.length} of {profilesData.length} projects
      </div>
    </div>
  );
}