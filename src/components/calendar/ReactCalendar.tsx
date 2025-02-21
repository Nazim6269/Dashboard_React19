import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useTheme } from "../../context/theme-context";
const CalendarContainer = styled.div<{ thememode: string }>`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin: 20px 0 20px 0;
  background-color: ${({ thememode }) =>
    thememode === "dark" ? "#171b24" : "#fff"};
  padding: 16px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .react-calendar {
    width: auto;
    background-color: ${({ thememode }) =>
      thememode === "dark" ? "#171b24" : "#fff"};
    color: ${({ thememode }) => (thememode === "dark" ? "#e0e0e0" : "#222")};
    border-radius: 8px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    border: none;
  }

  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  /* .react-calendar__month-view__days__day--weekend {
    color: #d10000;
   } */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #6f48eb;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #6f48eb;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #6f48eb;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #6f48eb;
    color: white;
  }
`;
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReactCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  const { theme } = useTheme();

  return (
    <CalendarContainer thememode={theme}>
      <Calendar onChange={(val) => setValue(val as Value)} value={value} />
    </CalendarContainer>
  );
};

export default ReactCalendar;
