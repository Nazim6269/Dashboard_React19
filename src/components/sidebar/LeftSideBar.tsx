import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  Code,
  ContactRound,
  FileText,
  Home,
  LogOut,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";
import NavItems from "../nav/NavItems";

const LeftSideBar = () => {
  const { theme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleLeftSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-secondary " : ""
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
          to="/"
        />
        <NavItems
          title="Teachers"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<ContactRound size={20} />}
          to="/teachers"
        />
        <NavItems
          title="Students"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<Users size={20} />}
          to="/students"
        />
        <NavItems
          title="Notices"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<BellRing size={20} />}
          to="#"
        />
        <NavItems
          title="Results"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<FileText size={20} />}
          to="#"
        />
        <NavItems
          title="Developer"
          theme={theme}
          isCollapsed={isCollapsed}
          icon={<Code size={20} />}
          to="/developer"
        />
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
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
