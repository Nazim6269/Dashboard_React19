import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <section className="p-6">
      {/* Info Section */}
      <div className="bg-white  p-6 rounded-xl border-x-4 border-red-500 shadow-md flex flex-col items-center">
        <img
          src="/nazim.webp"
          alt="Developer Avatar"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-semibold mt-4">Nazim Uddin</h2>
        <p className="text-gray-800 ">Front-end Developer</p>
      </div>

      {/* Bio Section */}
      <div className="mt-6 bg-white  p-6 rounded-xl border-x-4 border-gray-500 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Bio</h3>
        <p className="text-gray-800 ">
          Passionate developer with 3+ years of experience in Front-End
          development. Specializing in React, Next.js, and Tailwind CSS.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-6 bg-white  p-6 rounded-xl border-x-4 border-pink-500 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-800 ">
          <li>✅ React.js</li>
          <li>✅ Next.js</li>
          <li>✅ Tailwind CSS</li>
          <li>✅ TypeScript</li>
          <li>✅ Node.js</li>
          <li>✅ MongoDB</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-6 bg-white  p-6 rounded-xl border-x-4 border-blue-500 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <p className="text-gray-800 ">📧 nazimdev10022001@gmail.com</p>
        <p className="text-gray-800 ">📞 +880 1518-373269</p>
      </div>

      {/* Social Media Section */}
      <div className="mt-6 bg-white  p-6 rounded-xl border-x-4 border-yellow-500 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
        <div className="flex gap-4 text-gray-800 ">
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
