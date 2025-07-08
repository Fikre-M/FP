import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaLaptopCode className="text-blue-400 text-5xl mb-4" />,
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
    icon: <FaDatabase className="text-purple-400 text-5xl mb-4" />,
    title: "Databases",
    description:
      "Skilled in using Git and GitHub for efficient version control, collaboration, and code management, leveraging local tracking, branching, and cloud-based hosting for seamless team workflow.",
  },
];

export default function Skills() {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Top row: Front End and Back End */}
        {skills.slice(0, 2).map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-300 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        {/* Bottom row: Version Control and Databases */}
        {skills.slice(2).map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-300 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

