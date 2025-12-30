import { useState, useCallback, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../Logo/Logo";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const [activeSection, setActiveSection] = useState("about");

  // Track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Add offset for fixed header
      const headerHeight = 80; // Adjust this value based on your header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
    }
  }, []);

  const isActive = useCallback(
    (linkId) => activeSection === linkId,
    [activeSection]
  );

  return (
    <footer className="bg-[#141F2E] shadow-md mt-12">
      {/* Mobile: Logo slightly right of center with social icons below */}
      <div className="flex md:hidden flex-col items-center py-4">
        <div className="flex justify-center w-full pl-8">
          <a
            href="#about"
            className="block text-white w-48 mb-4"
            onClick={(e) => handleNavClick(e, "about")}
          >
            <Logo />
          </a>
        </div>

        {/* Social Icons for Mobile ONLY - visible on small screens, hidden on md and up */}
        <div className="flex md:hidden space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/fikremariam-kassa-28916062/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Fikre-M"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright for Mobile */}
        <p className="text-white text-sm">© 2025 All rights reserved</p>
      </div>

      {/* Desktop: Logo left, nav right - NO social icons */}
      <nav className="container mx-auto px-4 py-4 hidden md:flex items-center justify-between">
        <a
          href="#about"
          className="text-white w-48"
          onClick={(e) => handleNavClick(e, "about")}
        >
          <Logo />
        </a>

        <ul className="flex space-x-8 text-white text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`hover:text-blue-600 transition-colors duration-200 ${
                  isActive(link.id) ? "text-blue-600" : ""
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright for Desktop */}
      <div className="hidden md:block text-center text-white text-sm py-3 border-t border-gray-700">
        © 2025 All rights reserved
      </div>
    </footer>
  );
}
