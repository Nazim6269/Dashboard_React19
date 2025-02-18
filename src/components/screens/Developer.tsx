import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

const Developer = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`${theme === "dark" ? "bg-dark" : "bg-secondary"} p-6 w-full`}
    >
      {/* Info Section */}
      <div
        className={`${
          theme === "dark"
            ? "bg-dark-secondary text-gray-300 "
            : "bg-white border-x-4 border-red-500"
        } p-6 rounded-xl shadow-md flex flex-col items-center mb-4`}
      >
        <img
          src="/nazim.webp"
          alt="Developer Avatar"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-semibold mt-4">Nazim Uddin</h2>
        <p className="text-gray-400 ">Front-end Developer</p>
      </div>

      {/* Bio Section */}
      <div
        className={`${
          theme === "dark"
            ? "bg-dark-secondary text-gray-300 "
            : "bg-white border-x-4 shadow-md border-gray-500"
        } p-6 rounded-xl  flex flex-col items-center mb-4`}
      >
        <h3 className="text-lg font-semibold mb-4">Bio</h3>
        <p className="text-gray-400 ">
          Passionate developer with 3+ years of experience in Front-End
          development. Specializing in React, Next.js, and Tailwind CSS.
        </p>
      </div>

      {/* Skills Section */}
      <div
        className={`${
          theme === "dark"
            ? "bg-dark-secondary text-gray-300 "
            : "bg-white border-x-4 shadow-md border-pink-500"
        } p-6 rounded-xl  flex flex-col items-center mb-4`}
      >
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-400 ">
          <li>✅ React.js</li>
          <li>✅ Next.js</li>
          <li>✅ Tailwind CSS</li>
          <li>✅ TypeScript</li>
          <li>✅ Node.js</li>
          <li>✅ MongoDB</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div
        className={`${
          theme === "dark"
            ? "bg-dark-secondary text-gray-300 "
            : "bg-white border-x-4 shadow-md border-blue-500"
        } p-6 rounded-xl  flex flex-col items-center mb-4`}
      >
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <p className="text-gray-400 ">📧 nazimdev10022001@gmail.com</p>
        <p className="text-gray-400 ">📞 +880 1518-373269</p>
      </div>

      {/* Social Media Section */}
      <div
        className={`${
          theme === "dark"
            ? "bg-dark-secondary text-gray-300 "
            : "bg-white border-x-4 shadow-md border-yellow-500"
        } p-6 rounded-xl  flex flex-col items-center mb-4`}
      >
        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
        <div className="flex gap-4 text-gray-400 ">
          <Link
            to="https://github.com/Nazim6269"
            className="hover:text-gray-700 dark:hover:text-white"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/nazim-uddin-23a93a216/"
            className="hover:text-gray-700 dark:hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            to="https://x.com/Nazimuddin6269"
            className="hover:text-gray-700 dark:hover:text-white"
          >
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Developer;
