import React from "react";

export default function Projects() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-#000000">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-5xl">

          <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-blue-100 rounded-lg p-14 flex flex-col items-center shadow">
              <span className="text-3xl mb-2">💻</span>
              <h3 className="font-semibold text-lg">Programming</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                JavaScript, Python, Java
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center shadow">
              <span className="text-3xl mb-2">🎨</span>
              <h3 className="font-semibold text-lg">Design</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                UI/UX, Figma, Photoshop
              </p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 flex flex-col items-center shadow">
              <span className="text-3xl mb-2">🌐</span>
              <h3 className="font-semibold text-lg">Web</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                React, Tailwind, Next.js
              </p>
            </div>

            <div className="bg-purple-100 rounded-lg p-14 flex flex-col items-center shadow">
              <span className="text-3xl mb-2">🗣️</span>
              <h3 className="font-semibold text-lg">Communication</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Public Speaking, Writing
              </p>
            </div>
            <div className="bg-purple-100 rounded-lg p-14 flex flex-col items-center shadow">
              <span className="text-3xl mb-2">🗣️</span>
              <h3 className="font-semibold text-lg">Communication</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Public Speaking, Writing
              </p>
            </div>
            <div className="bg-purple-100 rounded-lg p-14 flex flex-col items-center shadow">
              <span className="text-3xl mb-2">🗣️</span>
              <h3 className="font-semibold text-lg">Communication</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Public Speaking, Writing
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
