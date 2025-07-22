// import {
//   FaLaptopCode,
//   FaServer,
//   FaCodeBranch,
//   FaDatabase,
// } from "react-icons/fa";

// const skills = [
//   {
//     icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />,
//     title: "Front End",
//     description:
//       "Skilled in crafting engaging web experiences with HTML, CSS, JavaScript, Bootstrap, and React, delivering visually appealing, interactive, and user-friendly applications.",
//   },
//   {
//     icon: <FaServer className="text-green-400 text-5xl mb-4" />,
//     title: "Back End",
//     description:
//       "Expertise in Node.js and Express.js for building scalable server-side applications, leveraging non-blocking I/O and streamlined API development.",
//   },
//   {
//     icon: <FaCodeBranch className="text-yellow-400 text-5xl mb-4" />,
//     title: "Version Control",
//     description:
//       "Skilled in using Git and GitHub for efficient version control, collaboration, and code management, leveraging local tracking, branching, and cloud-based hosting for seamless team workflow.",
//   },
//   {
//     icon: <FaDatabase className="text-purple-500 text-5xl mb-4" />,
//     title: "Databases",
//     description:
//       "Proficient in managing data with MySQL (relational databases) and MongoDB (NoSQL databases), leveraging structured and flexible schema designs for efficient data storage and retrieval.",
//   },
// ];

// export default function Skills() {
//   return (
//     <>
//       <h2 className="text-3xl font-bold text-white text-center mb-10 mt-10">
//         My Skills
//         <span className="block mx-auto mt-3 h-1 w-24 bg-blue-700 rounded"></span>
//       </h2>
//       <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto mt-12">
//         {/* <h2 className="text-3xl font-bold text-white text-center mb-10 ">
//         My Skills
//         <span className="block mx-auto mt-3 h-1 w-24 bg-blue-700 rounded"></span>
//       </h2> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {/* Top row: Front End and Back End */}
//           {skills.slice(0, 2).map((skill) => (
//             <div
//               key={skill.title}
//               className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
//             >
//               {skill.icon}
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {skill.title}
//               </h3>
//               <p className="text-gray-300 text-center">{skill.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
//           {/* Bottom row: Version Control and Databases */}
//           {skills.slice(2).map((skill) => (
//             <div
//               key={skill.title}
//               className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
//             >
//               {skill.icon}
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {skill.title}
//               </h3>
//               <p className="text-gray-300 text-center">{skill.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";

const initialSkills = [
  {
    icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />,
    title: "Front End",
    description:
      "Skilled in crafting engaging web experiences with HTML, CSS, JavaScript, Bootstrap, and React, delivering visually appealing, interactive, and user-friendly applications.",
  },
  {
    icon: <FaServer className="text-green-400 text-5xl mb-4" />,
    title: "Back End",
    description:
      "Expertise in Node.js and Express.js for building scalable server-side applications, leveraging non-blocking I/O and streamlined API development.",
  },
  {
    icon: <FaCodeBranch className="text-yellow-400 text-5xl mb-4" />,
    title: "Version Control",
    description:
      "Skilled in using Git and GitHub for efficient version control, collaboration, and code management, leveraging local tracking, branching, and cloud-based hosting for seamless team workflow.",
  },
  {
    icon: <FaDatabase className="text-purple-500 text-5xl mb-4" />,
    title: "Databases",
    description:
      "Proficient in managing data with MySQL (relational databases) and MongoDB (NoSQL databases), leveraging structured and flexible schema designs for efficient data storage and retrieval.",
  },
  {
    icon: <FaCloudUploadAlt className="text-pink-500 text-5xl mb-4" />,
    title: "Additional Skills",
    description: (
      <div className="space-y-2">
        <span className="block font-medium">Deployment:</span>
        <span className="block">AWS, Netlify, Hostinger, Squarespace</span>
        <span className="block font-medium">Collaboration:</span>
        <span className="block">Slack, Alice</span>
        <span className="block font-medium">Professional Skills:</span>
        <span className="block">
          Problem Solving, Communication, Project Management, Adaptability
        </span>
      </div>
    ),
  },
];

export default function Skills() {
  const [skills] = useState(initialSkills);

  return (
    <>
      <h2 className="text-3xl font-bold text-white text-center mb-10 mt-10">
        My Skills
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-700 rounded"></span>
      </h2>
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-5xl mx-auto mt-12">
        {/* Responsive grid for first 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.slice(0, 4).map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
        {/* Centered bottom card */}
        <div className="flex justify-center mt-8">
          <div className="w-full sm:w-2/3 md:w-1/2">
            <SkillCard skill={skills[4]} />
          </div>
        </div>
      </div>
    </>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer h-full">
      {skill.icon}
      <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
      <div className="text-gray-300 text-center">{skill.description}</div>
    </div>
  );
}

