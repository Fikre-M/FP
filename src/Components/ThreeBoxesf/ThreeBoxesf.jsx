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
            <h3 className="text-xl font-semibold text-white">Works</h3>
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





