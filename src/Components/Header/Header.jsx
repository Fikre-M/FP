// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Logo from '../Logo/Logo';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="bg-#141F2E shadow-md mb-4">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         {/* <div className="text-2xl font-bold text-blue-600">
//           <Link to="/">azAge</Link>
//         </div> */}
//         {/* Logo */}
//         <Link to="/">
//           <div className="text-white dark:text-white w-48">
//             <Logo />
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-white-700 text-lg font-medium">
//           <li>
//             <Link to="/" className="hover:text-blue-600">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-600">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/works" className="hover:text-blue-600">
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/works" className="hover:text-blue-600">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-600">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
//           <li>
//             <Link
//               to="/"
//               className="block py-2 text-gray-700 hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="block py-2 text-gray-700 hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/works"
//               className="block py-2 text-gray-700 hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Works
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="block py-2 text-gray-700 hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Let's talk
//             </Link>
//           </li>
//         </ul>
//       )}
//     </header>
//   );
// }

// Header.jsx
import { useState } from 'react'
import Logo from '../Logo/Logo';

// Section IDs you will use in the page below
const navLinks = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#141F2E] shadow-md mb-4">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        <a href="#home">
          <div className="text-white w-48">
            <Logo />
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* ...svg here... */}
          {/* (Unchanged from your version) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path /* X icon */ /* ...snip... */ />
            ) : (
              <path /* Hamburger icon */ /* ...snip... */ />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
