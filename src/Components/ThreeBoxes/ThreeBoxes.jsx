import { Link } from "react-router-dom";
import se2Image from "../../assets/se2.jpg";

export default function ThreeBoxes() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full">
        About
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
      </h2>

      {/* Main container */}
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-5xl mx-auto">
        {/* About Section */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch min-h-[400px]">
          {/* Image on the left, centered on mobile */}
          <div className="flex justify-center md:justify-end items-center w-full md:w-1/3 md:pl-12 mb-8 md:mb-0">
            <div className="rounded-full border-4 border-double border-blue-500 w-60 h-60 md:w-72 md:h-72 overflow-hidden shadow-lg">
              <img
                src={se2Image}
                alt="Fikre"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          {/* Container on the right */}
          <div className="w-full md:w-1/1 flex items-center justify-center mb-8">
            <Link
              to="/big-page"
              className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6 w-full max-w-2xl border-4 border-double border-blue-500"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">About</h2>
              <p className="text-gray-300">
                Hello! My name is Fikremariam but you can call me FIKRE. I'm
                originally from Ethiopia and currently reside in New York, US.
                As a full-stack developer with a unique background in teaching
                and research, I've developed a strong passion for IT and web
                development. In my free time, I enjoy connecting with nature,
                traveling, capturing moments through photography, exploring
                music, and sampling new cuisines.
              </p>
            </Link>
          </div>
        </div>

        {/* Experience and Education Sections */}
        <div className="w-full flex flex-col md:flex-row gap-6 mt-8">
          {/* Experience Container */}
          <div className="flex-1 bg-gray-700 rounded-lg shadow-md p-6 border-4 border-double border-blue-500">
            <h3 className="text-xl font-semibold text-white mb-2">
              Experience
            </h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Software Engineer at Company A (2020–2023)</li>
              <li>Frontend Developer at Company B (2018–2020)</li>
              <li>Intern at Company C (2017–2018)</li>
            </ul>
          </div>
          {/* Education Container */}
          <div className="flex-1 bg-gray-700 rounded-lg shadow-md p-6 border-4 border-double border-blue-500">
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>B.Sc. in Computer Science, University X</li>
              <li>High School Diploma, School Y</li>
            </ul>
          </div>
        </div>

        {/* Social, Let's Work Together, and Credentials Sections */}
        <div className="w-full flex flex-col md:flex-row gap-6 mt-8">
          {/* Social Container (smaller) */}
          <div className="flex-1 md:max-w-xs bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center border-4 border-double border-blue-500">
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* Let's Work Together Container */}
          <div className="flex-1 bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center border-4 border-double border-blue-500">
            <h3 className="text-lg font-semibold text-white mb-2">
              Let's Work Together
            </h3>
            <p className="text-gray-300 text-center">
              Interested in collaborating? Reach out to discuss your project or
              idea!
            </p>
          </div>
          {/* Credentials Container */}
          <div className="flex-1 bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center border-4 border-double border-blue-500">
            <h3 className="text-lg font-semibold text-white mb-2">
              Credentials
            </h3>
            <p className="text-gray-300 text-center">
              View certifications, awards, and other professional credentials
              here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
