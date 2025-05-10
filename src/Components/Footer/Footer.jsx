import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo at top center */}
        <div className="text-2xl font-bold text-blue-600 mb-6">
          <Link to="/">Logo</Link>
        </div>

        {/* Optional content below logo */}
        <p className="text-center text-gray-600 max-w-md mb-8">
          {/* Your content here */}
        </p>

        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-12 text-gray-700 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/works" className="hover:text-blue-600">
                Works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Let's talk
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
