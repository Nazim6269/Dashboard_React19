import { UserFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./RegisterForm";

const LoginForm = () => {
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isPending = false;
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField
          label="Email"
          name="email"
          control={form.control}
          errorMessage={form.formState.errors.email}
          fieldType={FormFieldType.INPUT}
          placeholder="test@gmail.com"
        />

        <CustomFormField
          label="Password"
          name="password"
          control={form.control}
          errorMessage={form.formState.errors.password}
          fieldType={FormFieldType.INPUT}
          placeholder="1234567"
        />

        <button
          type="submit"
          className={`${
            isPending ? "bg-gray-400 text-black" : "bg-primary-500"
          } w-full py-2  text-white rounded-md hover:cursor-pointer focus:outline-none`}
        >
          {isPending ? <p>Submitting...</p> : <p>Sign In</p>}
        </button>
      </form>
    </Form>
  );
};

export default LoginForm;
