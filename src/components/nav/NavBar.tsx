import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800 ">
          <Link to="/">
            <p className="text-3xl text-primary-500">
              {" "}
              Dashboard<span className="text-slate-900">Zool</span>
            </p>
          </Link>
        </div>

        <form className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border focus:border-primary-400 bg-gray-100 "
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary-500 text-white rounded-md "
          >
            Search
          </button>
        </form>

        <div className="flex items-center space-x-4">
          <Link
            to="/sign-in"
            className="text-gray-800 border-1 border-primary-500 rounded-sm px-2 py-1 "
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="text-gray-800 border-1 border-primary-500 rounded-sm px-2 py-1 "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
