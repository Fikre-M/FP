import React from "react";

export default function Skill() {
    return ( 
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* Big Card */}
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
            {/* 4 Small Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
            {/* Top Left Card */}
            <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">💻</span>
                <h3 className="font-semibold text-lg">Programming</h3>
                <p className="text-gray-600 text-sm mt-2 text-center">
                JavaScript, Python, Java
                </p>
            </div>
            {/* Top Right Card */}
            <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">🎨</span>
                <h3 className="font-semibold text-lg">Design</h3>
                <p className="text-gray-600 text-sm mt-2 text-center">
                UI/UX, Figma, Photoshop
                </p>
            </div>
            {/* Bottom Left Card */}
            <div className="bg-yellow-100 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">🌐</span>
                <h3 className="font-semibold text-lg">Web</h3>
                <p className="text-gray-600 text-sm mt-2 text-center">
                React, Tailwind, Next.js
                </p>
            </div>
            {/* Bottom Right Card */}
            <div className="bg-purple-100 rounded-lg p-6 flex flex-col items-center shadow">
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
