import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  Code,
  ContactRound,
  FileText,
  Home,
  LogOut,
  Moon,
  Sun,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";
import NavItems from "../nav/NavItems";

const LeftSideBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleLeftSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : ""
      } hidden min-h-screen select-none  p-5 shadow-md sm:flex sm:flex-col transition-all duration-300 ${
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
        <NavItems
          title="Home"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<Home size={20} />}
          ref="/"
        />
        <NavItems
          title="Teachers"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<ContactRound size={20} />}
          ref="/teachers"
        />
        <NavItems
          title="Students"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<Users size={20} />}
          ref="/students"
        />
        <NavItems
          title="Notices"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<BellRing size={20} />}
          ref="#"
        />
        <NavItems
          title="Results"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<FileText size={20} />}
          ref="#"
        />
        <NavItems
          title="Developer"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<Code size={20} />}
          ref="/developer"
        />
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Theme Toggle */}
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
