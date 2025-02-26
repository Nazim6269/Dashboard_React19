import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTheme } from "@/context/theme-context";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { FormFieldType } from "./RegisterForm";

//custom props are defined here
interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  iconSrc?: string;
  iconAlt?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: string;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

// custom renedred field component
const RenderedItem = ({ field, props }: { field: any; props: CustomProps }) => {
  const { theme } = useTheme();
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div>
          <FormControl>
            <Input
              {...field}
              className="shad-input border-1 "
              placeholder={props.placeholder}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div>
            <Checkbox checked={field.value} />{" "}
            <label className="checkbox-label">{props.label}</label>
          </div>
        </FormControl>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            country={"bd"}
            placeholder={props.placeholder}
            value={field.value}
            onChange={field.onChange}
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
          />
        </FormControl>
      );
    default:
      break;
  }
};

// Custom Form Field

const CustomFormField = (props: CustomProps) => {
  const { label, control, name, fieldType } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          {/* Custom Input */}
          <RenderedItem field={field} props={props} />

          {/* message */}
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
