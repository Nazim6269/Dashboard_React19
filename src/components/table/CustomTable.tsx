import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

export interface Data {
  id: number | string;
  name: string;
  email: string;
  session?: string;
  experience?: string;
  subject?: string;
}

const CustomTable = ({ data }: { data: Data[] }) => {
  const { theme } = useTheme();
  return (
    <div className="">
      <table
        className={`${
          theme === "dark"
            ? "bg-dark-secondary text-gray-200 border border-primary-500"
            : "bg-white  border border-gray-300"
        } min-w-full  rounded-lg shadow-md`}
      >
        {data[0].experience ? (
          <>
            <thead>
              <tr
                className={`${
                  theme === "dark"
                    ? "bg-primary-400 text-gray-300"
                    : "bg-gray-200 text-gray-700 "
                } `}
              >
                {data.length > 0 &&
                  Object.keys(data[0])
                    .slice(0, 5)
                    .map((item: string) => (
                      <th
                        key={item}
                        className={`${
                          theme === "dark"
                            ? "border border-primary-500"
                            : "border"
                        } px-4 py-2 `}
                      >
                        {item}
                      </th>
                    ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-primary-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    {item.id}
                  </td>

                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    <Link to={`/teachers/${item.id}`}>{item.name}</Link>
                  </td>

                  <td
                    className={`${
                      theme === "dark"
                        ? "border border-primary-500 "
                        : "border border-black"
                    } px-4 py-2  text-center text-blue-500 underline`}
                  >
                    {item.email}
                  </td>
                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    {item.subject}
                  </td>
                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    {item.experience}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <>
            <thead>
              <tr
                className={`${
                  theme === "dark"
                    ? "hover:bg-primary-500"
                    : "hover:bg-gray-100"
                }`}
              >
                {data.length > 0 &&
                  Object.keys(data[0])
                    .slice(0, 4)
                    .map((item: string) => (
                      <th
                        key={item}
                        className={`${
                          theme === "dark"
                            ? "border bg-primary-400 border-primary-500"
                            : "border bg-gray-200 text-gray-700"
                        } px-4 py-2 `}
                      >
                        {item}
                      </th>
                    ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-primary-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    {item.id}
                  </td>
                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    <Link to={`/students/${item.id}`}>{item.name}</Link>
                  </td>
                  <td
                    className={`${
                      theme === "dark" ? "border border-primary-500 " : "border"
                    } px-4 py-2  text-center`}
                  >
                    {item.session}
                  </td>
                  <td
                    className={`${
                      theme === "dark"
                        ? "border border-primary-500 "
                        : "border border-black"
                    } px-4 py-2  text-center text-blue-500 underline`}
                  >
                    {item.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default CustomTable;
