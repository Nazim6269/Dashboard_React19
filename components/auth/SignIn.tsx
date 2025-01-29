import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary-500 text-white rounded-md hover:cursor-pointer focus:outline-none"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-1.5">
          Don't have an account?
          <Link to={"/sign-up"} className="hover:underline text-primary-500">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
