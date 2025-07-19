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
