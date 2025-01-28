import { NavLink } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";

const Forget = () => {
  const { resetPassword } = useAuthContext();
  const [isSending, setIsSending] = useState(false);
  const handleForget = (e) => {
    e.preventDefault();
    setIsSending(true);
    resetPassword(e.target.email.value)
      .then(() => {
        setIsSending(false);
        Swal.fire({
          title: "Email Sent",
          text: "We have sent you a password reset lint on your email. Follow the step to reset your password",
          icon: "success",
        });
      })
      .catch(() => {
        toast.error("Something went wrong. Try again");
        setIsSending(false);
      });
  };
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
        <form onSubmit={handleForget} className="space-y-4">
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
            className="flex items-center gap-2 justify-center w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isSending && (
              <span className="loading loading-bars loading-xs"></span>
            )}
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
