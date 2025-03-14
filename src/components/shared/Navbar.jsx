import { NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successful");
        navigate("/auth/login");
      })
      .catch((e) => toast.error(e.message));
  };

  const navMenus = (
    <>
      <NavLink className="px-4 py-1" to={"/"}>
        Home
      </NavLink>
      <NavLink className="px-4 py-1" to={"/books"}>
        All Books
      </NavLink>
      <NavLink className="px-4 py-1" to={"/add/book"}>
        Add Books
      </NavLink>
      <NavLink className="px-4 py-1" to={"/user/borrowed"}>
        Borrowed Books
      </NavLink>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 resPadding center shadow-md sticky top-0 left-0 w-full z-20">
        <div className="navbar-start">
          {/* mobile menus */}
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* mobile menus */}
            <div
              tabIndex={0}
              className="navMenu menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenus}
            </div>
          </div>

          {/* website logo */}
          <a className="btn btn-ghost text-xl">Librario</a>
        </div>

        {/* desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <div className="navMenu menu menu-horizontal px-1">{navMenus}</div>
        </div>

        {/* login button and user profile image and info */}
        <div className="navbar-end gap-4">
          {!user ? (
            <>
              <NavLink to={"/auth/login"}>
                <button className="font-semibold  hover:text-blue-500">
                  Login
                </button>
              </NavLink>
              <NavLink to={"/auth/register"}>
                <button className="font-bold hover:text-blue-500">
                  Signup
                </button>
              </NavLink>
            </>
          ) : (
            <>
              {/* user profile and profile menu */}
              <div className="dropdown dropdown-end">
                {/* user profile image */}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="user image" src={user?.photoURL} />
                  </div>
                </div>
                {/* user profile menus */}
                <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
                >
                  <div className="justify-between text-center py-4">
                    <div className="w-12 rounded-full mx-auto mb-2">
                      <img
                        className="rounded-full"
                        alt="user image"
                        src={user?.photoURL}
                      />
                    </div>
                    <h2 className="font-bold"> {user?.displayName}</h2>
                    <h4 className="text-xs"> {user?.email}</h4>
                  </div>
                  <li>
                    <div className="justify-between">
                      <p className="flex items-center gap-2">
                        <CiUser />
                        Profile
                      </p>
                      <p className="badge-md flex items-center justify-center bg-blue-100 rounded-full text-xs">
                        New
                      </p>
                    </div>
                  </li>
                  <li>
                    <a className="flex items-center">
                      <CiSettings />
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center"
                    >
                      <CiLogout />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
