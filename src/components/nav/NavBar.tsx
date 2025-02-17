import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <nav
      className={`${theme === "dark" ? "bg-dark" : "bg-white"} p-4 shadow-md`}
    >
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

        {/* Menu icon div */}
        <div className="flex sm:hidden">
          <MenuIcon />
        </div>

        {/* auth div */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <Link
            to="/sign-in"
            className="text-white border-0 font-medium bg-primary-500 rounded-md px-5 py-2 "
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="text-white border-0 font-medium bg-primary-500 rounded-md px-5 py-2"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
