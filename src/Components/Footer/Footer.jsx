import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-#141F2E text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo at top center */}
        {/* <div className="text-2xl font-bold text-blue-600 mb-6">
          <Link to="/">azAge</Link>
        </div> */}

        <Link to="/">
          <div className="text-white dark:text-white w-48">
            <Logo />
          </div>
        </Link>

        {/* Optional content below logo */}
        <p className="text-center text-gray-600 max-w-md mb-8">
          {/* Your content here */}
        </p>

        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-12 text-white-700 text-lg font-medium">
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
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
