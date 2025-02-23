import { useActionState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

const actionHandler = async (
  _prevState: unknown,
  formData: FormData
): Promise<string | null> => {
  const value = formData.get("email");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return value as string | null;
};

const SignIn = () => {
  const { theme } = useTheme();
  const [error, submitAction, isPending] = useActionState(actionHandler, null);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-gray-100"
      } flex w-full justify-center items-center min-h-screen`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-dark-secondary" : "bg-white"
        } w-full max-w-md p-8  shadow-lg rounded-lg`}
      >
        <h2
          className={`${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          } text-2xl font-bold text-center  mb-6`}
        >
          Sign In
        </h2>
        <form action={submitAction} className="space-y-4">
          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500"
            />
            {error && <p>{error}</p>}
          </div>

          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500"
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

        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } block text-center font-medium `}
        >
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
