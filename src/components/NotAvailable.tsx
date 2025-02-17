import { useTheme } from "../context/theme-context";

const NotAvailable = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-secondary text-gray-400" : "bg-white"
      } px-5 py-4 max-w-xl text-md font-semibold`}
    >
      Not Available
    </div>
  );
};

export default NotAvailable;
