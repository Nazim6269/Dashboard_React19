import { students } from "../../data/data";

const heading = ["ID", "Student Name", "Session", "Gmail"];

interface Data {}

const CustomTable = ({ data }: { data: Data[] }) => {
  return (
    <div className="">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            {heading?.map((item: string) => (
              <th className="px-4 py-2 border">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border text-center">{student.id}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              <td className="px-4 py-2 border text-center">
                {student.session}
              </td>
              <td className="px-4 py-2 border text-blue-500 underline">
                {student.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
