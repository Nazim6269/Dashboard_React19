import NotAvailable from "./NotAvailable";

interface Props {
  subjectOfInt: string[];
}

const SubOfInterest: React.FC<Props> = ({ subjectOfInt }) => {
  if (!subjectOfInt.length) {
    return <NotAvailable />;
  }
  return (
    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-white rouneded-xl px-4 py-3">
      {subjectOfInt.map((subject: string) => (
        <>
          <li
            key={subject}
            className="px-4 mb-2 py-4 text-sm md:text-md font-medium text-slate-950 border-1 border-primary-500 rounded-sm"
          >
            {subject}
          </li>
        </>
      ))}
    </ul>
  );
};

export default SubOfInterest;
