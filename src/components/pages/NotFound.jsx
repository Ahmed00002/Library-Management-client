import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </h2>
        <p className="mb-6 text-gray-600">
          It looks like you took a wrong turn or the page has been removed.
        </p>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
