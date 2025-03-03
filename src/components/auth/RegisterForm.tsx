import { Button } from "@/components/ui/button";
import { Form, FormControl } from "@/components/ui/form";
import { useTheme } from "@/context/theme-context";
import { UserFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { SelectItem } from "../ui/select";
import CustomFormField from "./CustomFormField";
import Dropzone from "./Dropzone";

export enum FormFieldType {
  INPUT = "input",
  TEXT_AREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export const RegisterForm = () => {
  const { theme } = useTheme();
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthdate: new Date("2000-01-01"),
      about: "",
      gender: "Male",
      agreement: false,
      session: "",
      image: "",
    },
  });

  const onSubmit = (data: z.infer<typeof UserFormValidation>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField
          label="Name"
          control={form.control}
          name="name"
          fieldType={FormFieldType.INPUT}
          placeholder="Nazim"
          errorMessage={form.formState.errors.name}
        />

        <CustomFormField
          label="Email"
          control={form.control}
          name="email"
          fieldType={FormFieldType.INPUT}
          placeholder="test@gmail.com"
          errorMessage={form.formState.errors.email}
        />

        <CustomFormField
          label="Password"
          control={form.control}
          name="password"
          fieldType={FormFieldType.INPUT}
          placeholder="12345"
          errorMessage={form.formState.errors.password}
        />

        <CustomFormField
          label="Phone"
          control={form.control}
          name="phone"
          fieldType={FormFieldType.PHONE_INPUT}
          placeholder="(+880) xxxx-xxxxxx"
          errorMessage={form.formState.errors.phone}
        />

        <CustomFormField
          label="Date of Birth"
          name="birthdate"
          control={form.control}
          fieldType={FormFieldType.DATE_PICKER}
          errorMessage={form.formState.errors.birthdate}
        />

        <CustomFormField
          label="Gender"
          name="gender"
          control={form.control}
          fieldType={FormFieldType.SKELETON}
          errorMessage={form.formState.errors.gender}
          renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="flex flex-col sm:flex sm:flex-row  sm:justify-between"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {["Male", "Female", "Other"].map((option, i) => (
                  <div key={option + i} className="radio-group ">
                    <RadioGroupItem
                      className={`${
                        theme === "dark" ? "text-gray-400 border-slate-700" : ""
                      }`}
                      value={option}
                      id={option}
                    />
                    <Label
                      htmlFor={option}
                      className={`${
                        theme === "dark" ? "text-gray-400" : ""
                      } ml-2`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          label="Session"
          name="session"
          placeholder="Select session"
          errorMessage={form.formState.errors.session}
        >
          {["2019-2020", "2020-2021", "2021-2022", "2022-2023"].map(
            (session: string, i: number) => {
              return (
                <SelectItem key={session + i} value={session}>
                  {session}
                </SelectItem>
              );
            }
          )}
        </CustomFormField>

        <CustomFormField
          label="Upload your Image"
          control={form.control}
          fieldType={FormFieldType.SKELETON}
          name="image"
          renderSkeleton={() => <Dropzone />}
          errorMessage={form.formState.errors.image}
        />

        <CustomFormField
          fieldType={FormFieldType.TEXT_AREA}
          control={form.control}
          name="about"
          label="About Yourself"
          placeholder="I'm a student of ..."
          errorMessage={form.formState.errors.about}
        />
        <CustomFormField
          fieldType={FormFieldType.CHECKBOX}
          control={form.control}
          name="agreement"
          label="I agree to these data"
          errorMessage={form.formState.errors.agreement}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-primary-500 text-gray-300 cursor-pointer font-semibold w-md mb-3"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
