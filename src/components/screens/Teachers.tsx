import { useTheme } from "../../context/theme-context";
import { teachers } from "../../data/data";
import CustomTable from "../table/CustomTable";

const Teachers = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-secondary"
      } w-full px-3 min-h-screen py-5`}
    >
      <CustomTable data={teachers} />
    </div>
  );
};

export default Teachers;
