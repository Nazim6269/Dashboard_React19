import { useState } from "react";
import {
  Home,
  BarChart,
  Settings,
  Moon,
  Sun,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  FileText,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div
      className={`h-screen  bg-white p-5 shadow-md flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Collapse Button */}
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-primary-500 ">Dashboard</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-primary-500  text-white "
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
          <User size={24} className="text-white " />
        </div>
        {!isCollapsed && (
          <div>
            <p className="text-gray-800   font-semibold">John Doe</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 flex-grow">
        <Link to="/dashboard">
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
              {!isCollapsed && <span>Reports</span>}
            </div>
            {!isCollapsed && <ChevronRight size={20} />}
          </div>

          {/* Submenu */}
          {openSubMenu === "reports" && !isCollapsed && (
            <div className="ml-6 space-y-2">
              <Link to="/reports/sales">
                <p className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                  Sales Report
                </p>
              </Link>
              <Link to="#">
                <p className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                  Customer Report
                </p>
              </Link>
            </div>
          )}
        </div>

        <Link to="#">
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer">
            <BarChart size={20} />
            {!isCollapsed && <span>Analytics</span>}
          </div>
        </Link>

        <Link to="/orders">
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-800 hover:text-white  hover:bg-primary-500  cursor-pointer">
            <ShoppingCart size={20} />
            {!isCollapsed && <span>Orders</span>}
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

export default Sidebar;
