import { NavLink } from "react-router-dom";

const Forget = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url(https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png)] bg-no-repeat bg-cover">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-600 text-center">
          Enter your registered email address below, and we’ll send you
          instructions to reset your password.
        </p>

        {/* Forgot Password Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center">
          <NavLink
            to={"/auth/login"}
            className="text-sm text-blue-500 hover:underline"
          >
            Back to Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Forget;
