import { Link } from "react-router-dom";
import se2Image from "../../assets/fff.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full">
        About
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-700 rounded"></span>
      </h2>

      {/* Two column responsive layout */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto">
        {/* LEFT: Image + About text */}
        <div className="md:w-5/12 w-full flex flex-col items-start md:items-start justify-start md:pr-8 mb-8 md:mb-0">
          <div className="rounded-full border-4 border-double border-blue-500 w-60 h-60 md:w-72 md:h-72 overflow-hidden shadow-lg mb-6 mx-auto md:mx-0">
            <img
              src={se2Image}
              alt="Fikre"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-gray-200 text-lg mt-2 text-left max-w-md">
            Hello! My name is Fikremariam but you can call me FIKRE. I'm
            originally from Ethiopia and currently reside in New York, US. As a
            full-stack developer with a unique background in teaching and
            research, I've developed a strong passion for IT and web
            development. In my free time, I enjoy connecting with nature,
            traveling, capturing moments through photography, exploring music,
            and sampling new cuisines.
          </p>
        </div>

        {/* RIGHT: Main content container – all sections inside */}
        <div className="md:w-7/12 w-full">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 h-full w-full flex flex-col justify-between">
            {/* Experience and Education Row */}
            <div className="w-full flex flex-col md:flex-row gap-6">
              {/* Experience */}
              <div
                className="flex-1 bg-gray-700 rounded-lg p-6 
                  shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Experience
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                    Frontend Developer at Evangadi Bootcamp. For more experianse
                    see the project section
                  </li>
                  <li>Teaching and Research (2013–2018)</li>
                </ul>
              </div>
              {/* Education */}
              <div
                className="flex-1 bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
              {/* <div
                className="flex-1 bg-gray-700 rounded-lg p-6 border-4 border-double border-blue-500
                  shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              > */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Education
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>M.Sc. in Paleoanthropolgy, Addis Ababa University</li>
                  <li>B.A. in History, Dire Dawa University</li>
                </ul>
              </div>
            </div>

            {/* Social, Let's Work Together, Credentials Row -- now all here and equal sizing */}
            <div className="w-full flex flex-col md:flex-row gap-6 mt-8">
              {/* Social (with icons) */}
              <div className="flex-1 min-w-[170px] bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Social
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Fikre-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-2xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fikremariam-kassa-28916062/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              {/* Let's Work Together */}
              <div className="flex-1 min-w-[170px] bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 text-left">
                  Interested in collaborating? Reach out to discuss your project
                  or idea!
                </p>
              </div>
              {/* Credentials */}
              <div className="flex-1 min-w-[170px] bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Credentials
                </h3>
                <p className="text-gray-300 text-center">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
