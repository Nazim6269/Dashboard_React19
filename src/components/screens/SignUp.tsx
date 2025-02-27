import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import { RegisterForm } from "../auth/RegisterForm";

// enum Status {
//   teacher = "teacher",
//   student = "student",
//   stuff = "stuff",
// }

// interface InputTypes {
//   name: string;
//   status: Status;
// }

// const actionHandler = async (
//   _prevState: unknown,
//   formData: FormData
// ): Promise<string | null> => {
//   const value = formData.get("email");
//   await new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
//   return value as string | null;
// };

const SignUp = () => {
  const { theme } = useTheme();

  // const [] = useActionState(actionHandler, null);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark" : "bg-gray-100"
      } flex w-full py-5 justify-center items-center min-h-screen px-4 md:px-0`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-dark-secondary" : "bg-white"
        } w-full max-w-2xl p-8  shadow-lg rounded-lg`}
      >
        <h2
          className={`${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          } text-2xl font-bold text-center  mb-6`}
        >
          Register
        </h2>

        {/* Custom Register Form */}
        <RegisterForm />

        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } block text-center font-medium `}
        >
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
