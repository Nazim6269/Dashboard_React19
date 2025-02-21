import { Link } from "react-router-dom";

import { useActionState } from "react";

const actionHandler = async (
  _prevState: unknown,
  formData: FormData
): Promise<string | null> => {
  const value = formData.get("email");
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return value as string | null;
};

const SignUp = () => {
  const [error, submitAction, isPending] = useActionState(actionHandler, null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            {error && <p>{error}</p>}
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 "
            />
          </div>

          <button
            disabled={isPending}
            type="submit"
            className={`${
              isPending ? "bg-gray-400 text-black" : "bg-primary-500"
            } w-full py-2  text-white rounded-md focus:outline-none`}
          >
            {isPending ? <p className="">Submitting...</p> : <p>Sign Up</p>}
          </button>
        </form>

        <p className="text-center mt-1.5">
          Already have an account?
          <Link to={"/sign-in"} className="hover:underline text-primary-500">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
