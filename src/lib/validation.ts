import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be maximum 30 characters")
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),
  email: z.string().email("Invalid email adress"),
  password: z
    .string()
    .or(z.number())
    .refine((val) => (typeof val === "string" ? val.length >= 8 : true), {
      message: "Password must be at least 8 characters long",
    }),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthdate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid birthdate format",
  }),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender must be either 'male', 'female', or 'other'",
  }),
  session: z.string().min(1, { message: "Session cannot be empty" }),
  image: z.string(),
  about: z
    .string()
    .max(500, { message: "About section cannot exceed 500 characters" }),
  agreement: z.string().optional(),
});
