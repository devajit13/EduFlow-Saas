const { z } = require("zod");

const registerSchema = z.object({
  schoolName: z
    .string()
    .min(3, "School name must be at least 3 characters"),

  adminName: z
    .string()
    .min(3, "Admin name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  address: z
    .string()
    .min(5, "Address is required")
});

module.exports = {
  registerSchema
};