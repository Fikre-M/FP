import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  // Memoized skills data
  const skills = useMemo(
    () => [
      {
        id: "frontend",
        icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />,
        title: "Front End",
        description:
          "Skilled in crafting engaging web experiences with HTML, CSS, JavaScript, Bootstrap, and React, delivering visually appealing, interactive, and user-friendly applications.",
      },
      {
        id: "backend",
        icon: <FaServer className="text-green-400 text-5xl mb-4" />,
        title: "Back End",
        description:
          "Expertise in Node.js and Express.js for building scalable server-side applications, leveraging non-blocking I/O and streamlined API development.",
      },
      {
        id: "version-control",
        icon: <FaCodeBranch className="text-yellow-400 text-5xl mb-4" />,
        title: "Version Control",
        description:
          "Skilled in using Git and GitHub for efficient version control, collaboration, and code management, leveraging local tracking, branching, and cloud-based hosting for seamless team workflow.",
      },
      {
        id: "databases",
        icon: <FaDatabase className="text-purple-500 text-5xl mb-4" />,
        title: "Databases",
        description:
          "Proficient in managing data with MySQL (relational databases) and MongoDB (NoSQL databases), leveraging structured and flexible schema designs for efficient data storage and retrieval.",
      },
      {
        id: "additional",
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
    ],
    []
  );

  // Track visibility for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Trigger staggered animations for skill cards
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => new Set([...prev, index]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [skills]);

  // Handle card hover events
  const handleSkillHover = useCallback((skillId) => {
    setHoveredSkill(skillId);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  // Handle skill card click for potential future functionality
  const handleSkillClick = useCallback((skill) => {
    console.log(`Clicked on ${skill.title}`);
    // Future functionality could be added here
  }, []);

  // Check if a skill card should be animated
  const isSkillAnimated = useCallback(
    (index) => {
      return animatedSkills.has(index);
    },
    [animatedSkills]
  );

  return (
    <div
      id="skills"
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-80"
      }`}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-10 mt-15">
        My Skills
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-700 rounded"></span>
      </h2>
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-5xl mx-auto mt-12">
        {/* Responsive grid for first 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.slice(0, 4).map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              isHovered={hoveredSkill === skill.id}
              isAnimated={isSkillAnimated(index)}
              onHover={handleSkillHover}
              onLeave={handleSkillLeave}
              onClick={handleSkillClick}
            />
          ))}
        </div>
        {/* Centered bottom card */}
        <div className="flex justify-center mt-8">
          <div className="w-full sm:w-2/3 md:w-1/2">
            <SkillCard
              skill={skills[4]}
              isHovered={hoveredSkill === skills[4].id}
              isAnimated={isSkillAnimated(4)}
              onHover={handleSkillHover}
              onLeave={handleSkillLeave}
              onClick={handleSkillClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  skill,
  isHovered,
  isAnimated,
  onHover,
  onLeave,
  onClick,
}) {
  const handleMouseEnter = useCallback(() => {
    onHover(skill.id);
  }, [skill.id, onHover]);

  const handleClick = useCallback(() => {
    onClick(skill);
  }, [skill, onClick]);

  return (
    <div
      className={`flex flex-col items-center bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-600 h-full transform ${
        isHovered ? "ring-2 ring-blue-500 shadow-blue-500/25" : ""
      } ${
        isAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      onClick={handleClick}
    >
      <div
        className={`transition-transform duration-300 ${
          isHovered ? "scale-110" : ""
        }`}
      >
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
      <div className="text-gray-300 text-center">{skill.description}</div>
    </div>
  );
}
