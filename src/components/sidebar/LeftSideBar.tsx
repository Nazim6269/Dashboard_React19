import {
  ChevronLeft,
  ChevronRight,
  ContactRound,
  FileText,
  Home,
  LogOut,
  Moon,
  Settings,
  Sun,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  const toggleLeftSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div
      className={`hidden min-h-screen select-none  p-5 shadow-md sm:flex sm:flex-col transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Collapse Button */}
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-primary-500 ">Zoology</h1>
        )}
        <button
          onClick={toggleLeftSideBar}
          className="p-2 rounded-full bg-primary-500  text-white "
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 flex-grow">
        <Link to="/">
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer">
            <Home size={20} />
            {!isCollapsed && <span>Home</span>}
          </div>
        </Link>

        {/* Submenu Example */}
        <div>
          <div
            onClick={() => toggleSubMenu("reports")}
            className="flex items-center justify-between p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <FileText size={20} />
              {!isCollapsed && <span>Results</span>}
            </div>
            {!isCollapsed && <ChevronRight size={20} />}
          </div>

          {/* Submenu */}
          {openSubMenu === "reports" && !isCollapsed && (
            <div className="ml-6 space-y-2">
              <Link to="/reports/sales">
                <p className="p-2 text-gray-800  hover:text-blue-500 cursor-pointer">
                  First Year
                </p>
              </Link>
              <Link to="#">
                <p className="p-2 text-gray-800  hover:text-blue-500 cursor-pointer">
                  Second Year
                </p>
              </Link>
            </div>
          )}
        </div>

        <Link to="/teachers">
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer">
            <ContactRound size={20} />
            {!isCollapsed && <span>Teachers</span>}
          </div>
        </Link>

        <Link to="/students">
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer">
            <Users size={20} />
            {!isCollapsed && <span>Students</span>}
          </div>
        </Link>

        <Link to="/settings">
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer">
            <Settings size={20} />
            {!isCollapsed && <span>Settings</span>}
          </div>
        </Link>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-200 text-gray-800 "
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          {!isCollapsed && (
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          )}
        </button>

        {/* Logout Button */}
        <button className="w-full flex items-center space-x-3 p-3 rounded-lg mt-4 bg-primary-500 text-white ">
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
