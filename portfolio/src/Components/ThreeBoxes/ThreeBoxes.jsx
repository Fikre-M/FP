import { Link } from "react-router-dom";

export default function ThreeBoxes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Big box spanning 2 columns */}
        <Link
          to="/big-page"
          className="col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://via.placeholder.com/800x400"
            alt="Big box"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Big Box Title</h2>
            <p className="text-gray-700">
              This is the description for the big box. It is twice the size of
              the smaller boxes and contains more detailed information.
            </p>
          </div>
        </Link>

        {/* Two smaller boxes stacked vertically */}
        <div className="flex flex-col gap-6">
          <Link
            to="/small-page-1"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/400x200"
              alt="Small box 1"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Small Box 1</h3>
            </div>
          </Link>

          <Link
            to="/small-page-2"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/400x200"
              alt="Small box 2"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Small Box 2</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
