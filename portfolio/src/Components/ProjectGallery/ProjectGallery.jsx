// import React, { useState, useEffect, useMemo } from "react";

// // DATA: replace img paths and profile links as needed
// const profilesData = [
//   {
//     id: 1,
//     img: "../../../images/evangadi_forum.jpg",
//     name: "Evangadi Forum",
//     desc: "A responsive question and answer forum application built with Vite React and Node.js, featuring a MySQL database. This project provides a platform for users to engage in discussions and share ideas, showcasing a clean and intuitive design.",
//     github: "https://github.com/Fikre-M/evangadi_forum",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//     category: "forum",
//   },
//   {
//     id: 2,
//     img: "../../../images/apple_bootstrap.jpg",
//     name: "Apple Clone",
//     desc: "A responsive Apple website clone built with Vite React and Node.js, featuring a MySQL database. This project showcases a sleek and modern interface, mirroring Apple's aesthetic.",
//     github: "https://github.com/Fikre-M/apllee-clone",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//     category: "clone",
//   },
//   {
//     id: 3,
//     img: "../../../images/amazon.jpg",
//     name: "Amazone Clone",
//     desc: "A responsive Amazon website clone created with Vite React and Node.js, utilizing a firebase database. This project demonstrates a robust e-commerce platform with a user-friendly interface.",
//     github: "https://github.com/Fikre-M/amazon_replica",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//     category: "clone",
//   },
//   {
//     id: 4,
//     img: "../../../images/netflix.jpg",
//     name: "Netflex Clone",
//     desc: "A responsive Netflix website clone developed using Vite React and Node.js. This project replicates the popular streaming service's user interface and experience.",
//     github: "https://github.com/Fikre-M/Netflix",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//     category: "clone",
//   },
//   {
//     id: 5,
//     img: "../../../images/log_resized.jpg",
//     name: "My Portfolio",
//     desc: "I built a personal portfolio website using Vite, React, and Tailwind CSS to deliver a fast, modern, and responsive platform that showcases my projects and skills. The site features a clean user interface designed to highlight my professional experience and technical expertise.",
//     github: "https://github.com/Fikre-M/FP",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//     category: "portfolio",
//   },
//   {
//     id: 6,
//     img: "../../../images/clock_resized.jpg",
//     name: "Digital Clock App",
//     desc: "I developed an interactive Digital Clock application integrated with a chatbot using Vite and React to provide users with real-time timekeeping and conversational assistance within a single, modern web interface.",
//     github: "https://github.com/Fikre-M/DigitalClockApp",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//     category: "app",
//   },
// ];

// function SocialIcon({ href, title, children, className = "" }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       title={title}
//       className={`flex items-center justify-center w-9 h-9 rounded-full bg-gray-900/80 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {children}
//     </a>
//   );
// }

// function ProjectCard({ profile, index, onImageError }) {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const isImageRight = index % 2 === 0;

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   const handleImageError = () => {
//     setImageError(true);
//     onImageError(profile.id);
//   };

//   return (
//     <div
//       className={`
//         flex flex-col md:flex-row items-center md:items-stretch gap-16 py-8 
//         ${isImageRight ? "md:flex-row-reverse" : ""} 
//         ${
//           index < profilesData.length - 1
//             ? "mb-10 border-b border-gray-700"
//             : ""
//         } 
//       `}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* IMAGE with icons overlaid */}
//       <div className="relative flex-shrink-0 mx-auto md:mx-0">
//         <div
//           className={`bg-gray-700 rounded-xl w-60 h-45 flex items-center justify-center relative overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
//             isHovered
//               ? "shadow-2xl -translate-y-3 scale-105 ring-2 ring-blue-500"
//               : "hover:shadow-2xl hover:-translate-y-2"
//           }`}
//         >
//           {!imageError ? (
//             <img
//               src={profile.img}
//               alt={profile.name}
//               className={`object-cover w-full h-full rounded-xl transition-opacity duration-300 ${
//                 imageLoaded ? "opacity-100" : "opacity-0"
//               }`}
//               onLoad={handleImageLoad}
//               onError={handleImageError}
//             />
//           ) : (
//             <div className="flex items-center justify-center w-full h-full text-gray-400">
//               <div className="text-center">
//                 <div className="text-4xl mb-2">📷</div>
//                 <div className="text-sm">Image not found</div>
//               </div>
//             </div>
//           )}

//           {/* Loading placeholder */}
//           {!imageLoaded && !imageError && (
//             <div className="absolute inset-0 bg-gray-600 animate-pulse rounded-xl flex items-center justify-center">
//               <div className="text-gray-400">Loading...</div>
//             </div>
//           )}

//           {/* ICONS overlay */}
//           <div
//             className={`absolute left-2 bottom-2 flex gap-2 transition-opacity duration-300 ${
//               isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
//             }`}
//           >
//             <SocialIcon href={profile.github} title="GitHub">
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-5 h-5 text-white"
//               >
//                 <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 22.296 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
//               </svg>
//             </SocialIcon>
//           </div>
//           <div
//             className={`absolute right-2 bottom-2 flex gap-2 transition-opacity duration-300 ${
//               isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
//             }`}
//           >
//             <SocialIcon href={profile.linkedin} title="LinkedIn">
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-5 h-5 text-white"
//               >
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.602v5.594z" />
//               </svg>
//             </SocialIcon>
//           </div>
//         </div>
//       </div>

//       {/* DESCRIPTION */}
//       <div
//         className={`flex-1 bg-gray-700 rounded-2xl p-6 flex flex-col justify-center shadow-lg transition-all duration-500 cursor-pointer ${
//           isHovered
//             ? "shadow-2xl -translate-y-3 bg-gray-600"
//             : "hover:shadow-2xl hover:-translate-y-2"
//         }`}
//       >
//         <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
//         <p className="text-gray-300 leading-relaxed">{profile.desc}</p>
//         <div className="mt-4">
//           <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-200 bg-blue-600/30 rounded-full">
//             {profile.category}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function AlternatingBigContainer() {
//   const [profiles, setProfiles] = useState(profilesData);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [imageErrors, setImageErrors] = useState(new Set());

//   // Handle image load errors
//   const handleImageError = (profileId) => {
//     setImageErrors((prev) => new Set([...prev, profileId]));
//   };

//   // Get unique categories
//   const categories = useMemo(() => {
//     const cats = ["all", ...new Set(profiles.map((p) => p.category))];
//     return cats;
//   }, [profiles]);

//   // Filter profiles based on category and search term
//   const filteredProfiles = useMemo(() => {
//     return profiles.filter((profile) => {
//       const matchesCategory =
//         selectedCategory === "all" || profile.category === selectedCategory;
//       const matchesSearch =
//         profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         profile.desc.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [profiles, selectedCategory, searchTerm]);

//   // Log category changes for debugging
//   useEffect(() => {
//     console.log(
//       `Filtered to ${filteredProfiles.length} projects in category: ${selectedCategory}`
//     );
//   }, [selectedCategory, filteredProfiles.length]);

//   return (
//     <>
//       <h2 className="text-center text-4xl font-bold mb-8 relative text-white w-full mt-10">
//         My Projects
//         <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
//       </h2>

//       {/* Search and Filter Controls */}
//       <div className="max-w-5xl mx-auto mb-8">
//         <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
//           {/* Search Input */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="px-4 py-2 pl-10 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 w-64"
//             />
//             <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
//           </div>

//           {/* Category Filter */}
//           <div className="flex gap-2 flex-wrap justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
//                   selectedCategory === category
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                 }`}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto">
//         {filteredProfiles.length > 0 ? (
//           filteredProfiles.map((profile, idx) => (
//             <ProjectCard
//               key={profile.id}
//               profile={profile}
//               index={idx}
//               onImageError={handleImageError}
//             />
//           ))
//         ) : (
//           <div className="text-center py-16">
//             <div className="text-gray-400 text-xl mb-4">No projects found</div>
//             <div className="text-gray-500">
//               Try adjusting your search or filter criteria
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Project Count */}
//       <div className="text-center mt-6 text-gray-400">
//         Showing {filteredProfiles.length} of {profiles.length} projects
//       </div>
//     </>
//   );
// }





















import React, { useState, useEffect, useMemo } from "react";
import { FaStaylinked } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// DATA: replace img paths and profile links as needed
const profilesData = [
  {
    id: 1,
    img: "../../../images/evangadi_forum.jpg",
    name: "Evangadi Forum",
    desc: "A responsive question and answer forum application built with Vite React and Node.js, featuring a MySQL database. This project provides a platform for users to engage in discussions and share ideas, showcasing a clean and intuitive design.",
    github: "https://github.com/Fikre-M/evangadi_forum",
    linkedin: "https://evangadiforum.knoweledagebased.com/",
    category: "forum",
  },
  {
    id: 2,
    img: "../../../images/apple_bootstrap.jpg",
    name: "Apple Clone",
    desc: "A responsive Apple website clone built with Vite React and Node.js, featuring a MySQL database. This project showcases a sleek and modern interface, mirroring Apple's aesthetic.",
    github: "https://github.com/Fikre-M/apllee-clone",
    linkedin: "https://startling-heliotrope-e68744.netlify.app/",
    category: "clone",
  },
  {
    id: 3,
    img: "../../../images/amazon.jpg",
    name: "Amazon Clone",
    desc: "A responsive Amazon website clone created with Vite React and Node.js, utilizing a firebase database. This project demonstrates a robust e-commerce platform with a user-friendly interface.",
    github: "https://github.com/Fikre-M/amazon_replica",
    linkedin: "https://amazon-replica-fikre.netlify.app/",
    category: "clone",
  },
  {
    id: 4,
    img: "../../../images/netflix.jpg",
    name: "Netflix Clone",
    desc: "A responsive Netflix website clone developed using Vite React and Node.js. This project replicates the popular streaming service's user interface and experience.",
    github: "https://github.com/Fikre-M/Netflix",
    linkedin: "https://edu-react-movie-app.knoweledagebased.com/",
    category: "clone",
  },
  {
    id: 5,
    img: "../../../images/fms.png",
    name: "My Portfolio",
    desc: "I built a personal portfolio website using Vite, React, and Tailwind CSS to deliver a fast, modern, and responsive platform that showcases my projects and skills. The site features a clean user interface designed to highlight my professional experience and technical expertise.",
    github: "https://github.com/Fikre-M/FP",
    linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
    category: "portfolio",
  },
  {
    id: 6,
    img: "../../../images/clock_resized.jpg",
    name: "Digital Clock App",
    desc: "I developed an interactive Digital Clock application integrated with a chatbot using Vite and React to provide users with real-time timekeeping and conversational assistance within a single, modern web interface.",
    github: "https://github.com/Fikre-M/DigitalClockApp",
    linkedin: "https://clock.rohaazage.com/",
    category: "app",
  },
];

function SocialIcon({ href, title, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`flex items-center justify-center w-9 h-9 rounded-full bg-gray-900/80 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-75 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}

function ProjectCard({ profile, index, onImageError }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isImageRight = index % 2 === 0;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    onImageError(profile.id);
  };

  return (
    <div
      className={`
        flex flex-col md:flex-row items-center md:items-stretch gap-16 py-8 
        ${isImageRight ? "md:flex-row-reverse" : ""} 
        ${
          index < profilesData.length - 1
            ? "mb-10 border-b border-gray-700"
            : ""
        } 
        transition-all duration-300 ${isHovered ? "px-4" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE with icons overlaid */}
      <div className="relative flex-shrink-0 mx-auto md:mx-0">
        <div
          className={`bg-gray-700 rounded-xl w-60 h-45 flex items-center justify-center relative overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
            isHovered
              ? "shadow-2xl shadow-blue-500/25 -translate-y-3 scale-105 ring-4 ring-blue-500 ring-opacity-60"
              : "hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-40"
          }`}
          style={{
            height: "180px",
          }}
        >
          {!imageError ? (
            <img
              src={profile.img}
              alt={profile.name}
              className={`object-cover w-full h-full rounded-xl transition-all duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              } ${isHovered ? "brightness-110" : ""}`}
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

          {/* Glowing ring effect overlay */}
          {isHovered && (
            <div className="absolute inset-0 rounded-xl ring-4 ring-blue-400 ring-opacity-75 animate-pulse pointer-events-none"></div>
          )}

          {/* ICONS overlay */}
          <div
            className={`absolute left-2 bottom-2 flex gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100 scale-110" : "opacity-0 md:opacity-100"
            }`}
          >
            <SocialIcon href={profile.github} title="GitHub">
              <FaGithub className="w-5 h-5 text-white" />
            </SocialIcon>
          </div>
          <div
            className={`absolute right-2 bottom-2 flex gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100 scale-110" : "opacity-0 md:opacity-100"
            }`}
          >
            <SocialIcon href={profile.linkedin} title="Open Web Link">
              <FaStaylinked className="w-5 h-5 text-white" />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div
        className={`flex-1 bg-gray-700 rounded-2xl p-6 flex flex-col justify-center shadow-lg transition-all duration-500 cursor-pointer ${
          isHovered
            ? "shadow-2xl shadow-blue-500/25 -translate-y-3 bg-gray-600 ring-2 ring-blue-500 ring-opacity-50"
            : "hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-30"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
            isHovered ? "text-blue-300" : "text-white"
          }`}
        >
          {profile.name}
        </h3>
        <p
          className={`leading-relaxed transition-colors duration-300 ${
            isHovered ? "text-gray-200" : "text-gray-300"
          }`}
        >
          {profile.desc}
        </p>
        <div className="mt-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
              isHovered
                ? "text-blue-100 bg-blue-500/50 ring-1 ring-blue-400"
                : "text-blue-200 bg-blue-600/30"
            }`}
          >
            {profile.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AlternatingBigContainer() {
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [imageErrors, setImageErrors] = useState(new Set());

  // Handle image load errors
  const handleImageError = (profileId) => {
    setImageErrors((prev) => new Set([...prev, profileId]));
  };

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["all", ...new Set(profiles.map((p) => p.category))];
    return cats;
  }, [profiles]);

  // Filter profiles based on category and search term
  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesCategory =
        selectedCategory === "all" || profile.category === selectedCategory;
      const matchesSearch =
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.desc.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [profiles, selectedCategory, searchTerm]);

  // Log category changes for debugging
  useEffect(() => {
    console.log(
      `Filtered to ${filteredProfiles.length} projects in category: ${selectedCategory}`
    );
  }, [selectedCategory, filteredProfiles.length]);

  return (
    <div className="w-full  min-h-screen py-10">
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
              className="px-4 py-2 pl-10 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-64 transition-all duration-200"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white ring-2 ring-blue-400 ring-opacity-50 shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-30"
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
              onImageError={handleImageError}
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
        Showing {filteredProfiles.length} of {profiles.length} projects
      </div>
    </div>
  );
}




// import React from "react";

// // DATA: replace img paths and profile links as needed
// const profiles = [
//   {
//     img: "../../../images/evangadi_forum.jpg",
//     name: "Evangadi Forum",
//     desc: "A responsive question and answer forum application built with Vite React and Node.js, featuring a MySQL database. This project provides a platform for users to engage in discussions and share ideas, showcasing a clean and intuitive design.",
//     github: "https://github.com/Fikre-M/evangadi_forum",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//   },
//   {
//     img: "../../../images/apple_bootstrap.jpg",
//     name: "Apple Clone",
//     desc: "A responsive Apple website clone built with Vite React and Node.js, featuring a MySQL database. This project showcases a sleek and modern interface, mirroring Apple's aesthetic.",
//     github: "https://github.com/Fikre-M/apllee-clone",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//   },
//   {
//     img: "../../../images/amazon.jpg",
//     name: "Amazone Clone",
//     desc: "A responsive Amazon website clone created with Vite React and Node.js, utilizing a firebase database. This project demonstrates a robust e-commerce platform with a user-friendly interface.",
//     github: "https://github.com/Fikre-M/amazon_replica",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//   },
//   {
//     img: "../../../images/netflix.jpg",
//     name: "Netflex Clone",
//     desc: "A responsive Netflix website clone developed using Vite React and Node.js. This project replicates the popular streaming service's user interface and experience.",
//     github: "https://github.com/Fikre-M/Netflix",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//   },
//   {
//     img: "../../../images/log_resized.jpg",
//     name: "My Portfolio",
//     desc: "I built a personal portfolio website using Vite, React, and Tailwind CSS to deliver a fast, modern, and responsive platform that showcases my projects and skills. The site features a clean user interface designed to highlight my professional experience and technical expertise.",
//     github: "https://github.com/Fikre-M/FP",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//   },
//   {
//     img: "../../../images/clock_resized.jpg",
//     name: "Digital Clock App",
//     desc: "I developed an interactive Digital Clock application integrated with a chatbot using Vite and React to provide users with real-time timekeeping and conversational assistance within a single, modern web interface.",
//     github: "https://github.com/Fikre-M/DigitalClockApp",
//     linkedin: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
//   },
// ];

//     function SocialIcon({ href, title, children, className = "" }) {
//     return (
//         <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         title={title}
//         className={`flex items-center justify-center w-9 h-9 rounded-full bg-gray-900/80 hover:bg-blue-500 transition shadow ${className}`}
//         >
//         {children}
//         </a>
//     );
//     }

//     export default function AlternatingBigContainer() {
//     return (
//       <>
//         <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full mt-10">
//           My Projects
//           <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
//         </h2>

//         <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto mt-12">
//           {profiles.map((profile, idx) => {
//             // True: image on right, desc on left; False: image on left, desc on right
//             const isImageRight = idx % 2 === 0;
//             return (
//               <div
//                 key={idx}
//                 className={`
//                 flex flex-col md:flex-row items-center md:items-stretch gap-16 py-8 
//                 ${isImageRight ? "md:flex-row-reverse" : ""} 
//                 ${
//                   idx < profiles.length - 1
//                     ? "mb-10 border-b border-gray-700"
//                     : ""
//                 }
//                 `}
//               >
//                 {/* IMAGE with icons overlaid */}
//                 <div className="relative flex-shrink-0 mx-auto md:mx-0">
//                   <div className="bg-gray-700 rounded-xl w-60 h-45 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
//                     <img
//                       src={profile.img}
//                       alt={profile.name}
//                       className="object-cover w-full h-full rounded-xl"
//                     />
//                     {/* ICONS overlay: absolute at bottom-left and bottom-right, on top of image*/}
//                     <div className="absolute left-2 bottom-2 flex gap-2">
//                       <SocialIcon href={profile.github} title="GitHub">
//                         {/* GitHub SVG */}
//                         <svg
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           className="w-5 h-5 text-white"
//                         >
//                           <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 22.296 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
//                         </svg>
//                       </SocialIcon>
//                     </div>
//                     <div className="absolute right-2 bottom-2 flex gap-2">
//                       <SocialIcon href={profile.linkedin} title="LinkedIn">
//                         {/* LinkedIn SVG */}
//                         <svg
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           className="w-5 h-5 text-white"
//                         >
//                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.602v5.594z" />
//                         </svg>
//                       </SocialIcon>
//                     </div>
//                   </div>
//                 </div>
//                 {/* DESCRIPTION */}
//                 <div className="flex-1 bg-gray-700 rounded-2xl p-6 flex flex-col justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {profile.name}
//                   </h3>
//                   <p className="text-gray-300">{profile.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
// }
