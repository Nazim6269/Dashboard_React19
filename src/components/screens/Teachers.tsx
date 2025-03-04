import { useCallback, useState } from "react";
import { useTheme } from "../../context/theme-context";
import { teachers } from "../../data/data";
import CustomSearch from "../CustomSearch";
import CustomTable from "../table/CustomTable";

const Teachers = () => {
  const { theme } = useTheme();
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  const handleSearch = useCallback((searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase().trim();
    console.log(lowercasedTerm, "term");
    const filtered = teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredTeachers(filtered);
  }, []);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-secondary"
      } w-full px-3 min-h-screen py-5`}
    >
      <div className="w-1/3 mb-4">
        <CustomSearch onSearch={handleSearch} />
      </div>
      <CustomTable data={filteredTeachers} />
    </div>
  );
};

export default Teachers;
