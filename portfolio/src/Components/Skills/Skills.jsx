import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaDatabase,
  FaCloudUploadAlt,
  FaMobile,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import { skills as skillsData } from "../../data/skills";

// Icon mapping
const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaServer: FaServer,
  FaCodeBranch: FaCodeBranch,
  FaDatabase: FaDatabase,
  FaCloudUploadAlt: FaCloudUploadAlt,
  FaMobile: FaMobile,
  FaCogs: FaCogs,
  FaShieldAlt: FaShieldAlt,
};

const iconColors = {
  FaLaptopCode: "text-blue-600",
  FaServer: "text-green-400",
  FaCodeBranch: "text-yellow-400",
  FaDatabase: "text-purple-500",
  FaCloudUploadAlt: "text-orange-500",
  FaMobile: "text-pink-500",
  FaCogs: "text-gray-500",
  FaShieldAlt: "text-red-500",
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  // Use skills from data file
  const skills = skillsData;

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
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-6xl mx-auto mt-12">
        {/* Responsive grid for all skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
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

  // Get the icon component and color
  const IconComponent = iconMap[skill.icon];
  const iconColor = iconColors[skill.icon] || "text-gray-500";

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
        {IconComponent && <IconComponent className={`${iconColor} text-5xl mb-4`} />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
      <div className="text-gray-300 text-center">{skill.description}</div>
      
      {/* Progress bar for skill level */}
      <div className="w-full mt-4">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${
              isAnimated ? 'w-full' : 'w-0'
            }`}
            style={{ 
              width: isAnimated ? `${skill.level}%` : '0%',
              background: `linear-gradient(90deg, ${iconColor.replace('text-', '#')} 0%, ${iconColor.replace('text-', '#')}80 100%)`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
