// import { Link } from "react-router-dom";
// import se2Image from "../../assets/se2.jpg";

// export default function ThreeBoxes() {
//   return (
//     <>
//       <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full">
//         About
//         <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
//       </h2>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Big box spanning 2 columns */}
//           <Link
//             to="/big-page"
//             className="col-span-1 md:col-span-2 bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6"
//           >
//             <div className="flex items-center space-x-7">
//               {/* Circular image */}
//               <img
//                 src={se2Image}
//                 alt="Fikre"
//                 className="w-72 h-72 rounded-full object-cover flex-shrink-0"
//               />

//               {/* Text content */}
//               <div>
//                 <h2 className="text-2xl font-semibold text-white mb-2">
//                   About
//                 </h2>
//                 <p className="text-gray-300">
//                   This is the description for the big box. It is twice the size
//                   of the smaller boxes and contains more detailed information.
//                 </p>
//               </div>
//             </div>
//           </Link>

//         </div>
//       </div>
//     </>
//   );
// }


import { Link } from "react-router-dom";
import se2Image from "../../assets/se2.jpg";

export default function ThreeBoxes() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-12 relative text-white w-full">
        About
        <span className="block mx-auto mt-3 h-1 w-24 bg-blue-500 rounded"></span>
      </h2>

      {/* Full width, responsive flex row */}
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

        {/* Container on the right, full width on mobile, half on desktop */}
        <div className="w-full md:w-1/1 flex items-center justify-center mb-8">
          <Link
            to="/big-page"
            className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6 w-full max-w-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">About</h2>
            <p className="text-gray-300">
              Hello! My name is Fikremariam but you can call me FIKRE. 
              I'm originally from Ethiopia and currently reside in New
              York, US. As a full-stack developer with a unique background in
              teaching and research, I've developed a strong passion for IT and
              web development. In my free time, I enjoy connecting with nature,
              traveling, capturing moments through photography, exploring music,
              and sampling new cuisines.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
