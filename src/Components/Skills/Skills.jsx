// src/components/Skills.jsx
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

export default function Skills() {
    return (
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Skill 1 */}

          {/* <div className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg">
            <FaReact className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">React</h3>
            <p className="text-gray-300 text-center">
                Building interactive UIs with React and hooks.
            </p>
            </div> */}
          <div
            className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg
                hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <FaReact className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">React</h3>
            <p className="text-gray-300 text-center">
              Building interactive UIs with React and hooks.
            </p>
          </div>

          {/* Skill 2 */}
          <div
            className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg
                hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <FaNodeJs className="text-green-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Node.js</h3>
            <p className="text-gray-300 text-center">
              Backend APIs and real-time apps with Node.js.
            </p>
          </div>
          {/* Skill 3 */}
          <div
            className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg
                hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <FaPython className="text-yellow-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Python</h3>
            <p className="text-gray-300 text-center">
              Scripting, automation, and AI with Python.
            </p>
          </div>
          {/* Skill 4 */}
          <div
            className="flex flex-col items-center bg-gray-700 rounded-xl p-6 shadow-lg
                hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <FaDatabase className="text-purple-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Databases</h3>
            <p className="text-gray-300 text-center">
              SQL/NoSQL database design and management.
            </p>
          </div>
        </div>
      </div>
    );
}
