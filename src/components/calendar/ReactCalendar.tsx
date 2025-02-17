import { useState } from "react";
import Calendar from "react-calendar";
import { useTheme } from "../../context/theme-context";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReactCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-secondary" : "bg-white"
      } p-4 flex w-full justify-center items-center  shadow-md rounded-lg`}
    >
      <Calendar
        onChange={(val) => setValue(val as Value)}
        value={value}
        className="!border-non"
      />
    </div>
  );
};

export default ReactCalendar;
