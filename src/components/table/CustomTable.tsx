import { Link } from "react-router-dom";

interface Data {
  id: number | string;
  name: string;
  email: string;
  session?: string;
  experience?: string;
  subject?: string;
}

const CustomTable = ({ data }: { data: Data[] }) => {
  return (
    <div className="">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            {data.length > 0 &&
              Object.keys(data[0]).map((item: string) => (
                <th className="px-4 py-2 border">{item}</th>
              ))}
          </tr>
        </thead>
        {data[0].experience ? (
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border text-center">{item.id}</td>

                <td className="px-4 py-2 border">
                  <Link to={`/teachers/${item.id}`}>{item.name}</Link>
                </td>

                <td className="px-4 py-2 border text-center text-blue-500 underline">
                  {item.email}
                </td>
                <td className="px-4 py-2 border ">{item.subject}</td>
                <td className="px-4 py-2 border">{item.experience}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border text-center">{item.session}</td>
                <td className="px-4 py-2 border text-blue-500 underline">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default CustomTable;
