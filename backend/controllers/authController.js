const bcrypt = require("bcrypt");
const { registerSchema } = require("../validators/authValidator");

const {
  createSchool,
  createUser,
  findUserByEmail,
} = require("../services/authService");

async function register(req, res) {
  try {
    // Validate request
    const data = registerSchema.parse(req.body);

    // Check if email already exists
    const existingUser = await findUserByEmail(data.email);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Create school
    const school = await createSchool({
      name: data.schoolName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create admin user
    const user = await createUser({
      name: data.adminName,
      email: data.email,
      password: hashedPassword,
      role: "ADMIN",
      schoolId: school.id,
    });

    res.status(201).json({
      success: true,
      message: "School registered successfully",
      school,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);

    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  register,
};