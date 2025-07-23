import { useState, useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import se2Image from "../../assets/grad.jpg";
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
      { threshold: 0.3 }
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
    <div
      id="about"
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-80"
      }`}
    >
      <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full">
        About
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-700 rounded"></span>
      </h2>

      {/* Two-column responsive layout */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto">
        {/* LEFT: Image + About text */}
        <div className="md:w-5/12 w-full flex flex-col items-start justify-start md:pr-8 mb-8 md:mb-0">
          <div className="rounded-full border-4 border-double border-blue-500 w-60 h-60 md:w-72 md:h-72 overflow-hidden shadow-lg mb-6 mx-auto md:mx-0">
            <img
              src={se2Image}
              alt="Fikre"
              className="w-full h-med object-cover rounded-full"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
          <p className="text-gray-200 text-lg mt-2 text-left max-w-md">
            {/* Hello! My name is Fikremariam but you can call me FIKRE. I'm
            originally from Ethiopia and currently reside in New York, US. As a
            full-stack developer with a unique background in teaching and
            research, I've developed a strong passion for IT and web
            development. In my free time, I enjoy connecting with nature,
            traveling, capturing moments through photography, exploring music,
            and sampling new cuisines.  */}
            Hi! I'm Fikremariam, originally from Ethiopia, now based in New
            York. With a background in teaching and research, I've found my
            calling as a full-stack developer, leveraging my passion for IT and
            web development. When I'm not coding, you can find me outdoors,
            traveling, snapping photos, jamming to music, or trying out new
            flavors.
          </p>
        </div>

        {/* RIGHT: Content containers */}
        <div className="md:w-7/12 w-full">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 h-full w-full flex flex-col justify-between">
            {/* Experience and Education Row */}
            <div className="w-full flex flex-col md:flex-row gap-6">
              {/* Experience */}
              <div
                className={`flex-1 bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer ${
                  hoveredCard === "experience" ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => handleCardHover("experience")}
                onMouseLeave={handleCardLeave}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Experience
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  {experienceItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Education */}
              <div
                className={`flex-1 bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer ${
                  hoveredCard === "education" ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => handleCardHover("education")}
                onMouseLeave={handleCardLeave}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Education
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  {educationItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Social | Let's Work Together | Credentials */}
            <div className="w-full flex flex-col md:flex-row gap-6 mt-8">
              {/* Social */}
              <div
                className={`flex-1 bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer ${
                  hoveredCard === "social" ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => handleCardHover("social")}
                onMouseLeave={handleCardLeave}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Social
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ id, href, icon: Icon, label }) => (
                    <button
                      key={id}
                      onClick={() => handleSocialClick(href, label)}
                      className="text-blue-500 hover:text-blue-700 text-2xl transition-colors duration-200"
                      aria-label={label}
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
              </div>
              {/* Let's Work Together */}
              <div
                className={`flex-1 bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer ${
                  hoveredCard === "collaborate" ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => handleCardHover("collaborate")}
                onMouseLeave={handleCardLeave}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 text-center">
                  Interested in collaborating? Reach out to discuss your project
                  or idea!
                </p>
              </div>
              {/* Credentials */}
              <div
                className={`flex-1 bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer ${
                  hoveredCard === "credentials" ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => handleCardHover("credentials")}
                onMouseLeave={handleCardLeave}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  Credentials
                </h3>
                <div className="flex gap-4 mt-4">
                  {credentials.map(({ id, src, alt }) => (
                    <Zoom key={id}>
                      <img
                        src={src}
                        alt={alt}
                        className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] object-cover rounded-full"
                        style={{
                          borderRadius: "1rem",
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
  );
}
