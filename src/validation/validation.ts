import { z } from "zod";

export const updateUserSchema = z.object({
  firstName: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, {
      message: "First name must be at least 2 characters long",
    }),
  lastName: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, {
      message: "Last name must be at least 2 characters long",
    }),
  email: z
    .string()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Invalid email address",
    }),
});
