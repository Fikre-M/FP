import React, { useState, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";
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
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { skills as skillsData } from "../../data/skills";
import { Skill } from "../../types";
import { LoadingSkeleton, EmptyState, Button, ErrorState } from "../UI";

// Icon mapping with proper typing
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLaptopCode: FaLaptopCode,
  FaServer: FaServer,
  FaCodeBranch: FaCodeBranch,
  FaDatabase: FaDatabase,
  FaCloudUploadAlt: FaCloudUploadAlt,
  FaMobile: FaMobile,
  FaCogs: FaCogs,
  FaShieldAlt: FaShieldAlt,
};

const iconGradients: Record<string, string> = {
  FaLaptopCode: "from-blue-500 to-blue-600",
  FaServer: "from-green-400 to-green-500",
  FaCodeBranch: "from-yellow-400 to-yellow-500",
  FaDatabase: "from-purple-500 to-purple-600",
  FaCloudUploadAlt: "from-orange-500 to-orange-600",
  FaMobile: "from-pink-500 to-pink-600",
  FaCogs: "from-gray-400 to-gray-500",
  FaShieldAlt: "from-red-500 to-red-600",
};

interface SkillCardProps {
  skill: Skill;
  index: number;
  isHovered: boolean;
  isAnimated: boolean;
  isExpanded: boolean;
  onHover: (skillId: string) => void;
  onLeave: () => void;
  onToggleExpand: (skillId: string) => void;
}

interface SkillsProps {
  skills?: Skill[];
  loading?: boolean;
  error?: string;
  onRetry?: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  index,
  isHovered,
  isAnimated,
  isExpanded,
  onHover,
  onLeave,
  onToggleExpand,
}) => {
  const handleMouseEnter = useCallback(() => {
    onHover(skill.id);
  }, [skill.id, onHover]);

  const handleToggleExpand = useCallback(() => {
    onToggleExpand(skill.id);
  }, [skill.id, onToggleExpand]);

  // Get the icon component and styling
  const IconComponent = iconMap[skill.icon];
  const iconGradient = iconGradients[skill.icon] || "from-gray-400 to-gray-500";

  // Determine proficiency level text and color
  const getProficiencyInfo = (level: number) => {
    if (level >= 90) return { text: "Expert", color: "text-green-400" };
    if (level >= 80) return { text: "Advanced", color: "text-blue-400" };
    if (level >= 70) return { text: "Intermediate", color: "text-yellow-400" };
    return { text: "Beginner", color: "text-orange-400" };
  };

  const proficiencyInfo = getProficiencyInfo(skill.level);

  return (
    <article
      className={`
        flex flex-col bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 
        shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
        cursor-pointer border border-gray-600 h-full transform group
        ${isHovered ? "ring-2 ring-blue-500 shadow-blue-500/25 scale-105" : ""}
        ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
      `}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${skill.title} skill details`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggleExpand();
        }
      }}
    >
      {/* Icon Section */}
      <div className="flex justify-center mb-4">
        <div
          className={`
            p-4 rounded-full bg-gradient-to-br ${iconGradient} 
            transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
            ${isHovered ? "shadow-lg shadow-current/25" : ""}
          `}
        >
          {IconComponent && (
            <IconComponent 
              className="text-white text-3xl" 
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-300 transition-colors duration-300">
        {skill.title}
      </h3>

      {/* Proficiency Level */}
      <div className="mb-4">
        <span className={`text-sm font-medium ${proficiencyInfo.color}`}>
          {proficiencyInfo.text}
        </span>
      </div>

      {/* Description */}
      <div className="flex-1 flex flex-col mt-2">
        <p 
          className={`
            text-gray-300 text-sm leading-relaxed transition-all duration-300
            ${isExpanded ? "" : "line-clamp-3"}
          `}
        >
          {skill.description}
        </p>

        {/* Expand/Collapse Button */}
        {skill.description.length > 100 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleExpand}
            className="mt-3 self-start text-blue-400 hover:text-blue-300 p-0 h-auto"
            rightIcon={isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          >
            {isExpanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div 
        className={`
          absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
        `}
        aria-hidden="true"
      />
    </article>
  );
};

const Skills: React.FC<SkillsProps> = ({
  skills = skillsData,
  loading = false,
  error,
  onRetry
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "level">("name");
  const [filterLevel, setFilterLevel] = useState<"all" | "beginner" | "intermediate" | "advanced" | "expert">("all");

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Handle skill interactions
  const handleSkillHover = useCallback((skillId: string) => {
    setHoveredSkill(skillId);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  const handleToggleExpand = useCallback((skillId: string) => {
    setExpandedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillId)) {
        newSet.delete(skillId);
      } else {
        newSet.add(skillId);
      }
      return newSet;
    });
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSortBy("name");
    setFilterLevel("all");
  }, []);

  // Filter and sort skills
  const filteredAndSortedSkills = useMemo(() => {
    let filtered = skills.filter(skill => {
      const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = filterLevel === "all" || 
        (filterLevel === "expert" && skill.level >= 90) ||
        (filterLevel === "advanced" && skill.level >= 80 && skill.level < 90) ||
        (filterLevel === "intermediate" && skill.level >= 70 && skill.level < 80) ||
        (filterLevel === "beginner" && skill.level < 70);

      return matchesSearch && matchesLevel;
    });

    // Sort skills
    filtered.sort((a, b) => {
      if (sortBy === "level") {
        return b.level - a.level;
      }
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [skills, searchTerm, sortBy, filterLevel]);

  if (loading) {
    return (
      <section className="w-full py-10" aria-label="Loading skills">
        <div className="max-w-6xl mx-auto px-4">
          <LoadingSkeleton variant="text" width="w-48" height="h-8" className="mx-auto mb-8" />
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <LoadingSkeleton variant="avatar" className="mx-auto" />
                  <LoadingSkeleton variant="text" width="w-3/4" className="mx-auto" />
                  <LoadingSkeleton variant="text" count={3} />
                  <LoadingSkeleton variant="button" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-10" aria-label="Error loading skills">
        <div className="max-w-6xl mx-auto px-4">
          <ErrorState
            title="Failed to load skills"
            message={error}
            onRetry={onRetry}
            className="mt-20"
          />
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={ref}
      className="w-full py-10"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 id="skills-heading" className="text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="mx-auto h-1 w-24 bg-blue-500 rounded" aria-hidden="true" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various development domains.
          </p>
        </header>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4">
            {/* Search Input */}
            <div className="relative">
              <label htmlFor="skills-search" className="sr-only">
                Search skills
              </label>
              <input
                id="skills-search"
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  px-4 py-2 pl-10 pr-10 bg-gray-700 text-white rounded-lg 
                  border border-gray-600 focus:outline-none focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-64 
                  transition-all duration-200
                "
              />
              <Search 
                className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" 
                aria-hidden="true" 
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="
                    absolute right-3 top-2.5 text-gray-400 hover:text-white
                    focus:outline-none focus:text-white
                  "
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "level")}
              className="
                px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                transition-all duration-200
              "
              aria-label="Sort skills by"
            >
              <option value="name">Sort by Name</option>
              <option value="level">Sort by Proficiency</option>
            </select>

            {/* Filter Dropdown */}
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value as typeof filterLevel)}
              className="
                px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                transition-all duration-200
              "
              aria-label="Filter by proficiency level"
            >
              <option value="all">All Levels</option>
              <option value="expert">Expert (90%+)</option>
              <option value="advanced">Advanced (80-89%)</option>
              <option value="intermediate">Intermediate (70-79%)</option>
              <option value="beginner">Beginner (&lt;70%)</option>
            </select>
          </div>

          {/* Active Filters */}
          {(searchTerm || sortBy !== "name" || filterLevel !== "all") && (
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-400">Active filters:</span>
              {searchTerm && (
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                  "{searchTerm}"
                </span>
              )}
              {sortBy !== "name" && (
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                  Sort: {sortBy}
                </span>
              )}
              {filterLevel !== "all" && (
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                  {filterLevel}
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                leftIcon={<X className="w-3 h-3" />}
                className="text-xs"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Skills Grid */}
        <main className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10">
          {filteredAndSortedSkills.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedSkills.map((skill, index) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  index={index}
                  isHovered={hoveredSkill === skill.id}
                  isAnimated={inView}
                  isExpanded={expandedSkills.has(skill.id)}
                  onHover={handleSkillHover}
                  onLeave={handleSkillLeave}
                  onToggleExpand={handleToggleExpand}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              variant="search"
              title="No skills found"
              message="Try adjusting your search terms or filters to find what you're looking for."
              actionLabel="Clear filters"
              onAction={handleClearFilters}
            />
          )}
        </main>

        {/* Skills Count */}
        {filteredAndSortedSkills.length > 0 && (
          <footer className="text-center mt-6 text-gray-400">
            <span className="sr-only">Results: </span>
            Showing {filteredAndSortedSkills.length} of {skills.length} skills
          </footer>
        )}
      </div>
    </section>
  );
};

export default Skills;