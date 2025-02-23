import { useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import Dropzone from "./Dropzone";

enum Status {
  teacher = "teacher",
  student = "student",
  stuff = "stuff",
}

interface InputTypes {
  name: string;
  status: Status;
}

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
  const { theme } = useTheme();
  const { register, handleSubmit } = useForm<InputTypes>();
  const [error, submitAction, isPending] = useActionState(actionHandler, null);
  const [phone, setPhone] = useState("");

  const onSubmit = (data) => console.log(data);

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
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* name input field */}
          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              name="text"
              className={`mt-1 block w-full px-4 py-2 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500 ${
                theme === "dark" ? "text-gray-400" : "text-black"
              }`}
            />
            {error && <p>{error}</p>}
          </div>
          {/* status filed */}
          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Status
            </label>

            <select
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium mt-1 w-full px-4 py-3 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500`}
            >
              <option
                value="Teacher"
                className={`${
                  theme === "dark" ? "text-gray-600" : "text-gray-700"
                } block text-sm font-medium `}
              >
                Teacher
              </option>
              <option
                value="Student"
                className={`${
                  theme === "dark" ? "text-gray-600" : "text-gray-700"
                } block text-sm font-medium `}
              >
                Student
              </option>
              <option
                value="Stuff"
                className={`${
                  theme === "dark" ? "text-gray-600" : "text-gray-700"
                } block text-sm font-medium `}
              >
                Stuff
              </option>
            </select>
          </div>
          {/* Phone number field */}
          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Phone
            </label>
            <PhoneInput
              country={"bd"}
              value={phone}
              containerStyle={{
                backgroundColor: `${theme === "dark" ? "#171b24" : ""}`,
                border: "1px solid #314158",
                borderRadius: "6px",
                padding: "2px",
              }}
              inputStyle={{
                backgroundColor: `${theme === "dark" ? "#171b24" : ""}`,
                border: "none",
                color: "#314158",
              }}
              buttonStyle={{
                backgroundColor: `${theme === "dark" ? "#171b24" : ""}`,
                border: "none",
              }}
              onChange={(phone) => setPhone(phone)}
            />
          </div>

          {/* email input field */}
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
              className={`mt-1 block w-full px-4 py-2 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500 ${
                theme === "dark" ? "text-gray-400" : "text-black"
              }`}
            />
            {error && <p>{error}</p>}
          </div>

          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Upload Your Image
            </label>
            <Dropzone />
          </div>

          {/* password input field */}
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
              className={`mt-1 block w-full px-4 py-2 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500 ${
                theme === "dark" ? "text-gray-400" : "text-black"
              }`}
            />
          </div>

          {/* confirm pass input field */}
          <div>
            <label
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } block text-sm font-medium `}
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              className={`mt-1 block w-full px-4 py-2 border border-slate-700  rounded-md focus:outline-none focus:border-primary-500 ${
                theme === "dark" ? "text-gray-400" : "text-black"
              }`}
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
