import { useTheme } from "../../context/theme-context";
import { students } from "../../data/data";
import CustomTable from "../table/CustomTable";

const Students = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-secondary"
      } w-full px-3 py-5`}
    >
      <CustomTable data={students} />
    </div>
  );
};

export default Students;
