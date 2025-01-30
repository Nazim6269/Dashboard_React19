import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReactCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <Calendar
          onChange={(val) => setValue(val as Value)}
          value={value}
          className="!border-none"
        />
      </div>
    </div>
  );
};

export default ReactCalendar;
