import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const { signupWithGoogle, signinEmailPass } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogging, setIsLogging] = useState(false);

  //signup with google
  const handleGoogleSignup = () => {
    setIsLogging(true);
    signupWithGoogle()
      .then(() => {
        toast.success("Account created successfully");
        navigate(location.state || "/");
        setIsLogging(false);
      })
      .catch((e) => {
        toast.error(e.message);
        setIsLogging(false);
      });
  };

  // sign in with email and password
  const handleSignin = (e) => {
    e.preventDefault();
    setIsLogging(true);
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    signinEmailPass(formData.email, formData.password)
      .then(() => {
        toast.success("logged in successfully");
        navigate(location.state || "/");
        setIsLogging(false);
      })
      .catch((e) => {
        toast.error(e.message);
        setIsLogging(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 bg-[url(https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png)] bg-no-repeat bg-cover">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>

        {/* Email and Password Form */}
        <form onSubmit={handleSignin} className="space-y-2">
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

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="">
            <Link
              to={"/auth/reset"}
              className="text-xs text-blue-500 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLogging && (
              <span className="loading loading-bars loading-xs"></span>
            )}
            Login
          </button>
        </form>

        {/* divider */}
        <div className="divider">or</div>

        {/* Social Login */}
        <div className="space-y-2">
          <button
            onClick={handleGoogleSignup}
            type="button"
            className="w-auto flex items-center justify-center  text-gray-500 btn btn-sm mx-auto rounded-full"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.14 0 5.91 1.17 8.1 3.08l6.15-6.15C34.79 3.59 29.76 1.5 24 1.5 14.62 1.5 6.84 7.44 3.42 15.54l7.28 5.64C12.75 13.51 17.93 9.5 24 9.5z"
              />
              <path
                fill="#FBBC05"
                d="M46.56 24.62c0-1.27-.1-2.5-.3-3.7H24v7.02h12.78c-.55 2.92-2.18 5.4-4.62 7.08l7.27 5.63c4.22-3.88 6.65-9.6 6.65-15.03z"
              />
              <path
                fill="#34A853"
                d="M9.42 28.82C8.68 26.9 8.29 24.89 8.29 22.85c0-2.04.39-4.05 1.13-5.97L2.14 11.24C.78 14.11.03 17.41.03 20.85c0 3.44.75 6.74 2.11 9.61l7.28-5.64z"
              />
              <path
                fill="#4285F4"
                d="M24 46c5.76 0 10.6-1.89 14.1-5.13l-7.28-5.63C28.95 36.67 26.55 37.5 24 37.5c-6.07 0-11.25-4.01-13.3-9.36l-7.28 5.63C6.85 42.56 14.62 46 24 46z"
              />
            </svg>
            Login with Google
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to={"/auth/register"}>
              {" "}
              <span className="text-blue-500 hover:underline">
                Register here
              </span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
