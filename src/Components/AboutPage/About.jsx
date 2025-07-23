import { useState, useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import se2Image from "../../assets/f3.jpg";
import CirtfImage from "../../assets/fmCirtf.jpg";
import NewImage from "../../assets/wes.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Track visibility for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  // Handle card hover events
  const handleCardHover = useCallback((cardId) => {
    setHoveredCard(cardId);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // Social links data
  const socialLinks = useMemo(
    () => [
      {
        id: "github",
        href: "https://github.com/Fikre-M",
        icon: FaGithub,
        label: "GitHub",
      },
      {
        id: "linkedin",
        href: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
        icon: FaLinkedin,
        label: "LinkedIn",
      },
    ],
    []
  );

  // Credentials data
  const credentials = useMemo(
    () => [
      {
        id: "cert1",
        src: CirtfImage,
        alt: "Certification 1",
      },
      {
        id: "cert2",
        src: NewImage,
        alt: "New Credential",
      },
    ],
    []
  );

  // Experience data
  const experienceItems = useMemo(
    () => [
      "Frontend Developer at Evangadi Bootcamp. For more experience, see the project section.",
      "Teaching and Research (2013–2018)",
    ],
    []
  );

  // Education data
  const educationItems = useMemo(
    () => [
      "M.Sc. in Paleoanthropology, Addis Ababa University",
      "B.A. in History & Heritage Management, Dire Dawa University",
    ],
    []
  );

  // Handle social link clicks
  const handleSocialClick = useCallback((href, label) => {
    window.open(href, "_blank", "noopener noreferrer");
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-80"
      }`}
      style={{ scrollMarginTop: "80px" }} // Offset for fixed header
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About
          </h2>
          <div className="mx-auto h-1 w-16 sm:w-24 bg-blue-700 rounded"></div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Profile Image + Bio */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start">
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="rounded-full border-4 border-double border-blue-500 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 overflow-hidden shadow-2xl">
                <img
                  src={se2Image}
                  alt="Fikre"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full opacity-80"></div>
            </div>

            {/* Bio Text */}
            <div className="max-w-md text-center lg:text-left">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Hi! I'm Fikremariam, originally from Ethiopia, now based in New
                York. With a background in teaching and research, I've found my
                calling as a full-stack developer, leveraging my passion for IT
                and web development. When I'm not coding, you can find me
                outdoors, traveling, snapping photos, jamming to music, or
                trying out new flavors.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Info Cards */}
          <div className="w-full lg:w-7/12">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700">
              {/* Top Row: Experience and Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Experience Card */}
                <div
                  className={`bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-600 ${
                    hoveredCard === "experience"
                      ? "ring-2 ring-blue-500 shadow-blue-500/25"
                      : ""
                  }`}
                  onMouseEnter={() => handleCardHover("experience")}
                  onMouseLeave={handleCardLeave}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Experience
                  </h3>
                  <ul className="text-gray-300 space-y-3">
                    {experienceItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1.5">•</span>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education Card */}
                <div
                  className={`bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-600 ${
                    hoveredCard === "education"
                      ? "ring-2 ring-blue-500 shadow-blue-500/25"
                      : ""
                  }`}
                  onMouseEnter={() => handleCardHover("education")}
                  onMouseLeave={handleCardLeave}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Education
                  </h3>
                  <ul className="text-gray-300 space-y-3">
                    {educationItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1.5">•</span>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row: Social, Collaboration, Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Social Card */}
                <div
                  className={`bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-600 ${
                    hoveredCard === "social"
                      ? "ring-2 ring-blue-500 shadow-blue-500/25"
                      : ""
                  }`}
                  onMouseEnter={() => handleCardHover("social")}
                  onMouseLeave={handleCardLeave}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Connect
                  </h3>
                  <div className="flex space-x-6">
                    {socialLinks.map(({ id, href, icon: Icon, label }) => (
                      <button
                        key={id}
                        onClick={() => handleSocialClick(href, label)}
                        className="text-blue-400 hover:text-blue-300 text-2xl sm:text-3xl transition-all duration-200 hover:scale-110"
                        aria-label={label}
                      >
                        <Icon />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Collaboration Card */}
                <div
                  className={`bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-600 ${
                    hoveredCard === "collaborate"
                      ? "ring-2 ring-blue-500 shadow-blue-500/25"
                      : ""
                  }`}
                  onMouseEnter={() => handleCardHover("collaborate")}
                  onMouseLeave={handleCardLeave}
                >
                  <h3 className="text-lg font-semibold text-white mb-3 text-center">
                    Let's Work Together
                  </h3>
                  <p className="text-gray-300 text-center text-sm leading-relaxed">
                    Interested in collaborating? Reach out to discuss your
                    project or idea!
                  </p>
                </div>

                {/* Credentials Card */}
                <div
                  className={`bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-600 sm:col-span-2 lg:col-span-1 ${
                    hoveredCard === "credentials"
                      ? "ring-2 ring-blue-500 shadow-blue-500/25"
                      : ""
                  }`}
                  onMouseEnter={() => handleCardHover("credentials")}
                  onMouseLeave={handleCardLeave}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Credentials
                  </h3>
                  <div className="flex gap-3">
                    {credentials.map(({ id, src, alt }) => (
                      <Zoom key={id}>
                        <img
                          src={src}
                          alt={alt}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                          style={{
                            cursor: "zoom-in",
                          }}
                        />
                      </Zoom>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
