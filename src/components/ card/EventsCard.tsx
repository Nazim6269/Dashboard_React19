import { useTheme } from "../../context/theme-context";

const EventsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-secondary text-gray-200" : "bg-white"
      } shadow-md  h-34 px-4 py-3 flex flex-col rounded-sm`}
    >
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default EventsCard;
