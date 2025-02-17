import { useTheme } from "../../context/theme-context";

const CustomCard = ({ name, amount }: { name: string; amount: number }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-secondary text-gray-200" : "bg-white"
      } max-w-48  h-34 font-semibold px-2 flex flex-col justify-center items-center rounded-xl`}
    >
      <p className="text-2xl ">{name}</p>
      <p className="text-4xl text-gray-600"> {amount}</p>
    </div>
  );
};

export default CustomCard;
