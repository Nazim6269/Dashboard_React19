import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo div */}
        <div className="font-bold text-gray-800 ">
          <Link to="/">
            <p className="text-2xl xsm:text-3xl text-primary-500">
              {" "}
              Dashboard<span className="text-gray-500">Zool</span>
            </p>
          </Link>
        </div>

        {/* search div */}
        <form className="hidden sm:flex sm:items-center sm:space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-md border focus:border-primary-400 bg-gray-100 "
          />
        </form>

        {/* Menu icon div */}
        <div className="flex sm:hidden">
          <MenuIcon />
        </div>

        {/* auth div */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <Link
            to="/sign-in"
            className="text-gray-800 border-1 border-primary-500 rounded-sm px-2 py-1 "
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="text-gray-800 border-1 border-primary-500 rounded-sm px-2 py-1 "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
