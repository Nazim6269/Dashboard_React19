import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, FieldError } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
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
  errorMessage: FieldError | undefined;
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
              className={`${
                theme === "dark" ? "text-gray-400 border-slate-700" : ""
              } border-1 focus:border-1 focus:border-primary-500 focus-visible:ring-0 `}
              placeholder={props.placeholder}
            />
          </FormControl>
        </div>
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

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className={`${
                  theme === "dark" ? "text-gray-400 border-slate-700" : ""
                } border-1 shad-select-trigger`}
              >
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent
              className={`${theme === "dark" ? "text-gray-400" : ""} border-1`}
            >
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <div className={""}>
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              wrapperClassName="date-picker"
              className={`${
                theme === "dark" ? "text-gray-400" : ""
              }  border-1  py-1.5 px-4 rounded-md w-[100%] `}
            />
          </FormControl>
        </div>
      );

    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;

    case FormFieldType.TEXT_AREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className={`${
              theme === "dark" ? "text-gray-400 border-slate-700" : ""
            } border-1 shad-text-area focus-visible:ring-0 `}
            disabled={props.disabled}
          />
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div>
            <Checkbox
              checked={field.value ?? false}
              onCheckedChange={(checked) => field.onChange(checked)}
              className={`${
                theme === "dark" ? "text-gray-400 border-slate-700" : ""
              }`}
            />{" "}
            <label className={`${theme === "dark" ? "text-gray-400 " : ""}`}>
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};

// Custom Form Field

const CustomFormField = (props: CustomProps) => {
  const { label, control, name, fieldType, errorMessage } = props;
  const { theme } = useTheme();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className={`${theme === "dark" ? "text-gray-400" : ""}`}>
              {label}
            </FormLabel>
          )}
          {/* Custom Input */}
          <RenderedItem field={field} props={props} />

          {/* message */}
          <FormMessage className={cn(errorMessage && "text-red-500")} />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
