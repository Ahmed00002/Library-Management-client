import { FaBook, FaUser, FaStar } from "react-icons/fa";

const FeaturedBook = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="center resPadding mx-auto ">
        <div className="space-y-2 mb-12">
          <h1 className="text-3xl font-medium text-gray-700">Upcoming Books</h1>
          <p className="text-sm">
            Explore our Upcoming Books collection! From Mystery to Sci-Fi, find
            highly anticipated releases and fresh voices. Stay ahead and
            discover your next favorite read—adventure awaits!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex justify-center items-center mb-4">
              <FaBook className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              The Great Gatsby
            </h3>
            <p className="text-gray-600 text-center mb-4">
              A classic novel by F. Scott Fitzgerald about the Jazz Age.
            </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <p className="text-gray-700">F. Scott Fitzgerald</p>
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <p className="text-gray-700">4.8</p>
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex justify-center items-center mb-4">
              <FaBook className="text-4xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              To Kill a Mockingbird
            </h3>
            <p className="text-gray-600 text-center mb-4">
              A compelling novel by Harper Lee about justice and race.
            </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <FaUser className="text-green-500" />
                <p className="text-gray-700">Harper Lee</p>
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <p className="text-gray-700">4.9</p>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex justify-center items-center mb-4">
              <FaBook className="text-4xl text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              1984
            </h3>
            <p className="text-gray-600 text-center mb-4">
              A dystopian novel by George Orwell about totalitarianism.
            </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <FaUser className="text-red-500" />
                <p className="text-gray-700">George Orwell</p>
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <p className="text-gray-700">4.7</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
