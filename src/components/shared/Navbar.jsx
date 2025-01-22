import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* mobile menus */}
          <div className="dropdown">
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
          <NavLink to={"/auth/login"}>
            <button className="btn btn-md rounded-full bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white">
              Login/Signup
            </button>
          </NavLink>

          {/* user profile and profile menu */}
          <div className="dropdown dropdown-end">
            {/* user profile image */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {/* user profile menus */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
