const { z } = require("zod");

const registerSchema = z.object({
  schoolName: z.string().min(3),
  adminName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().min(10),
  address: z.string().min(5),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

module.exports = {
  registerSchema,
  loginSchema,
};