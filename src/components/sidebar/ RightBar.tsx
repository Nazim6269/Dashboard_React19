import EventsCard from "../ card/EventsCard";
import { useTheme } from "../../context/theme-context";
import ReactCalendar from "../calendar/ReactCalendar";

const RightBar = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-secondary"
      } flex flex-col px-4 py-6  space-y-2`}
    >
      <ReactCalendar />
      <div className="flex flex-col space-y-2">
        <EventsCard title="Golden Jubilee" description="A great day in ..." />
        <EventsCard title="Silver Jubilee" description="A great day in ..." />
        <EventsCard title="Platinum Jubilee" description="A great day in ..." />
      </div>
    </div>
  );
};

export default RightBar;
