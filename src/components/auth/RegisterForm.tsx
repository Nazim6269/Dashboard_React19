import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";

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
  const form = useForm();
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          label="Name"
          control={form.control}
          name="name"
          fieldType={FormFieldType.INPUT}
          placeholder="Nazim"
        />

        <CustomFormField
          label="Email"
          control={form.control}
          name="email"
          fieldType={FormFieldType.INPUT}
          placeholder="test@gmail.com"
        />

        <CustomFormField
          label="Password"
          control={form.control}
          name="password"
          fieldType={FormFieldType.INPUT}
          placeholder="12345"
        />

        <CustomFormField
          label="Phone"
          control={form.control}
          name="phone"
          fieldType={FormFieldType.PHONE_INPUT}
          placeholder="(+880) xxxx-xxxxxx"
        />

        <CustomFormField
          label="Name"
          control={form.control}
          name="name"
          fieldType={FormFieldType.CHECKBOX}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
