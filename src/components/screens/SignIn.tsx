import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import LoginForm from "../auth/LoginForm";

// const actionHandler = async (
//   _prevState: unknown,
//   formData: FormData
// ): Promise<string | null> => {
//   const value = formData.get("email");
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return value as string | null;
// };

const SignIn = () => {
  const { theme } = useTheme();

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

        {/* Login form */}
        <LoginForm />

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
