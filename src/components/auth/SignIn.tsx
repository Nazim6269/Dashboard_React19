import { Link } from "react-router-dom";
import { useActionState } from "react";

const actionHandler = async (prevState, formData: FormData) => {
  const value = formData.get("email");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return null;
};

const SignIn = () => {
  const [error, submitAction, isPending] = useActionState(actionHandler, null);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form action={submitAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <button
            disabled={isPending}
            type="submit"
            className={`${
              isPending ? "bg-gray-400 text-black" : "bg-primary-500"
            } w-full py-2  text-white rounded-md hover:cursor-pointer focus:outline-none`}
          >
            {isPending ? <p>Submitting...</p> : <p>Sign In</p>}
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
