import { Link } from "react-router-dom";

const NavItems = ({
  title,
  theme,
  isCollapsed,
  icon,
  ref,
}: {
  title: string;
  theme: string;
  isCollapsed: boolean;
  icon: React.ReactNode;
  ref: string;
}) => {
  return (
    <Link to={ref}>
      <div
        className={`${
          theme === "dark" ? "bg-dark-secondary text-gray-200" : ""
        } flex items-center space-x-3 p-3 rounded-lg hover:text-white  hover:bg-primary-500  cursor-pointer`}
      >
        {icon}
        {!isCollapsed && <span>{title}</span>}
      </div>
    </Link>
  );
};

export default NavItems;
