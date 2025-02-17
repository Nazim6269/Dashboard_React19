import { useTheme } from "../context/theme-context";
import NotAvailable from "./NotAvailable";

interface Props {
  subjectOfInt: string[];
}

const SubOfInterest: React.FC<Props> = ({ subjectOfInt }) => {
  const { theme } = useTheme();
  if (!subjectOfInt.length) {
    return <NotAvailable />;
  }
  return (
    <ul
      className={`${
        theme === "dark" ? "bg-dark-secondary" : "bg-white"
      } mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3  rouneded-xl px-4 py-3`}
    >
      {subjectOfInt.map((subject: string) => (
        <>
          <li
            key={subject}
            className={`${
              theme === "dark" ? "text-gray-300" : "text-slate-950"
            }  px-4 mb-2 py-4 text-sm md:text-md font-medium border-1 border-primary-500 rounded-sm`}
          >
            {subject}
          </li>
        </>
      ))}
    </ul>
  );
};

export default SubOfInterest;
