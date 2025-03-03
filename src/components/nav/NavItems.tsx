import { Link } from "react-router-dom";

const NavItems = ({
  title,
  theme,
  isCollapsed,
  icon,
  to,
}: {
  title: string;
  theme: string;
  isCollapsed?: boolean;
  icon?: React.ReactNode;
  to: string;
}) => {
  return (
    <Link to={to}>
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
