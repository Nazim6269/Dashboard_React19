import { useCallback, useState } from "react";
import { useTheme } from "../../context/theme-context";
import { students } from "../../data/data";
import CustomSearch from "../CustomSearch";
import CustomTable from "../table/CustomTable";

const Students = () => {
  const { theme } = useTheme();
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = useCallback((searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase().trim();
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredStudents(filtered);
  }, []);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-secondary"
      } w-full min-h-screen px-3 py-5`}
    >
      <div className="w-1/3 mb-4">
        <CustomSearch onSearch={handleSearch} />
      </div>
      <CustomTable data={filteredStudents} />
    </div>
  );
};

export default Students;
