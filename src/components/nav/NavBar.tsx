import { MenuIcon, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import Modal from "../modal/Modal";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-dark-secondary" : "bg-white"
      } p-4 shadow-md`}
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
        {/* Theme Toggle */}

        {/* Menu icon div */}
        <div className="flex sm:hidden">
          <MenuIcon
            className="text-primary-500"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        {isOpen && <Modal isCollapsed={isCollapsed} setOpen={setIsOpen} />}

        {/* auth div */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <div className="">
            <button
              onClick={toggleTheme}
              className={`${
                theme === "dark"
                  ? "bg-dark-secondary text-gray-200"
                  : "bg-gray-200 text-gray-800"
              } w-full flex items-center space-x-3 p-3 rounded-lg hover:text-white  hover:bg-primary-500  cursor-pointer`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              {!isCollapsed && (
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              )}
            </button>
          </div>
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
