import { Link } from "react-router-dom";

export default function Boxes() {
    return (
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left small box */}
            <Link
            to="/small-page-1"
            className="bg-blue-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center h-64"
            >
            <h3 className="text-xl font-semibold text-white">Projects</h3>
            </Link>

            {/* Big box in the middle, spans 2 columns */}
            <Link
            to="/big-page"
            className="col-span-1 md:col-span-2 bg-indigo-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center justify-center h-64 p-6 text-center"
            >
            <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
            <p className="text-gray-300">
                This is the description for the big box. It is centered and contains
                more detailed information.
            </p>
            </Link>

            {/* Right small box */}
            <Link
            to="/small-page-2"
            className="bg-green-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center h-64"
            >
            <h3 className="text-xl font-semibold text-white">Credentials</h3>
            </Link>
        </div>
        </div>
    );
    }







    // import React from "react";
    
    // export default function Skill() {
    //     return (
    //       <div className="flex justify-center items-center min-h-screen bg-#000000">
    //         <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-5xl">
    
    //           <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
    //           <div className="grid grid-cols-3 gap-8">
    //             <div className="bg-blue-100 rounded-lg p-14 flex flex-col items-center shadow">
    //               <span className="text-3xl mb-2">💻</span>
    //               <h3 className="font-semibold text-lg">Programming</h3>
    //               <p className="text-gray-600 text-sm mt-2 text-center">
    //                 JavaScript, Python, Java
    //               </p>
    //             </div>
    
    //             <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center shadow">
    //               <span className="text-3xl mb-2">🎨</span>
    //               <h3 className="font-semibold text-lg">Design</h3>
    //               <p className="text-gray-600 text-sm mt-2 text-center">
    //                 UI/UX, Figma, Photoshop
    //               </p>
    //             </div>
    //             <div className="bg-yellow-100 rounded-lg p-6 flex flex-col items-center shadow">
    //               <span className="text-3xl mb-2">🌐</span>
    //               <h3 className="font-semibold text-lg">Web</h3>
    //               <p className="text-gray-600 text-sm mt-2 text-center">
    //                 React, Tailwind, Next.js
    //               </p>
    //             </div>
    
    //             <div className="bg-purple-100 rounded-lg p-14 flex flex-col items-center shadow">
    //               <span className="text-3xl mb-2">🗣️</span>
    //               <h3 className="font-semibold text-lg">Communication</h3>
    //               <p className="text-gray-600 text-sm mt-2 text-center">
    //                 Public Speaking, Writing
    //               </p>
    //             </div>
    //             <div className="bg-purple-100 rounded-lg p-14 flex flex-col items-center shadow">
    //               <span className="text-3xl mb-2">🗣️</span>
    //               <h3 className="font-semibold text-lg">Communication</h3>
    //               <p className="text-gray-600 text-sm mt-2 text-center">
    //                 Public Speaking, Writing
    //               </p>
    //             </div>
    //             <div className="bg-purple-100 rounded-lg p-14 flex flex-col items-center shadow">
    //               <span className="text-3xl mb-2">🗣️</span>
    //               <h3 className="font-semibold text-lg">Communication</h3>
    //               <p className="text-gray-600 text-sm mt-2 text-center">
    //                 Public Speaking, Writing
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    // }
    