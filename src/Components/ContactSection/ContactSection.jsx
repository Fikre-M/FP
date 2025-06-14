// import React from "react";

// export default function ContactSection() {

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gra-900 px-4 py-8">
//             <div className="bg-gray-700 rounded-xl shadow-2xl p-8 w-full max-w-5xl flex flex-col md:flex-row">
//             {/* Text Section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 md:mr-8">
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                 Contact Address
//                 </h2>
//                 <p className="text-gray-300 mb-4">
//                 Email:{" "}
//                 <a href="mailto:your@email.com" className="underline">
//                     fikreddu@email.com
//                 </a>
//                 </p>
//                 <p>+332-xxx-xxxx</p>
//                 <br />

//                 <h2 className="text-3xl font-bold text-white mb-4">
//                 SOCIAL INFO
//                 </h2>
//                 <div className="flex gap-6">
//                 {/* GitHub */}
//                 <a
//                     href="https://github.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="GitHub"
//                     className="text-white hover:text-gray-400"
//                 >
//                     <svg
//                     className="h-7 w-7"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     >
//                     <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 22.296 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
//                     </svg>
//                 </a>
//                 {/* LinkedIn */}
//                 <a
//                     href="https://linkedin.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="LinkedIn"
//                     className="text-white hover:text-blue-400"
//                 >
//                     <svg
//                     className="h-7 w-7"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     >
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.602v5.594z" />
//                     </svg>
//                 </a>
//                 </div>
//             </div>
//             {/* Contact Box */}
//             <div className="w-full md:w-1/2 flex justify-end">
//                 <div className="w-full">
//                 <h3 className="text-xl font-semibold text-white mb-4">
//                     Send a Message
//                 </h3>
//                 <form>
//                     <input
//                     className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
//                     type="text"
//                     placeholder="Your Name"
//                     />
//                     <input
//                     className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
//                     type="email"
//                     placeholder="Your Email"
//                     />
//                     <textarea
//                     className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
//                     placeholder="Your Message"
//                     rows={4}
//                     ></textarea>
//                     <button
//                     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                     type="submit"
//                     >
//                     Send
//                     </button>
//                 </form>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// }


import React from "react";

export default function ContactSection() {
  return (
    <>
      {/* Title outside the main container */}
      <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full">
        Contact
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
      </h2>
      {/* Main container */}
      <div className="bg-gray-700 rounded-xl shadow-2xl p-8 w-full max-w-5xl mx-auto flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Contact Me</h3>
          <p className="text-gray-300 mb-4">
            Email:{" "}
            <a href="mailto:your@email.com" className="underline">
              your@email.com
            </a>
          </p>
          <div className="flex gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-white hover:text-gray-400"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 22.296 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-white hover:text-blue-400"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.602v5.594z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Contact Box */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="w-full">
            <h3 className="text-xl font-semibold text-white mb-4">
              Send a Message
            </h3>
            <form>
              <input
                className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
                placeholder="Your Message"
                rows={4}
              ></textarea>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
