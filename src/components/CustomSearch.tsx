import { useTheme } from "@/context/theme-context";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

const CustomSearch = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedValue = useDebounce(searchTerm, 2000);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Input
      value={searchTerm}
      onChange={handleChange}
      type="text"
      placeholder="Search"
      className={`${
        theme === "dark" ? "border-primary-500 text-gray-300" : ""
      } focus-visible:ring-0`}
    />
  );
};

export default CustomSearch;
