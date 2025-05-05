import { Link } from "react-router-dom";

export default function ThreeBoxes() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Big box spanning 2 columns */}
        <Link
          to="/big-page"
          className="col-span-1 md:col-span-2 bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6"
        >
          <div className="flex items-center space-x-6">
            {/* Circular image */}
            <img
              src="https://via.placeholder.com/150"
              alt="Fikre"
              className="w-32 h-32 rounded-full object-cover flex-shrink-0"
            />

            {/* Text content */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">About</h2>
              <p className="text-gray-300">
                This is the description for the big box. It is twice the size of
                the smaller boxes and contains more detailed information.
              </p>
            </div>
          </div>
        </Link>

        {/* Two smaller boxes stacked vertically */}
        <div className="flex flex-col gap-6">
          <Link
            to="/small-page-1"
            className=" bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/400x200"
              alt="#"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Projects</h3>
            </div>
          </Link>

          <Link
            to="/small-page-2"
            className=" bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/400x200"
              alt="#"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Credentials</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
