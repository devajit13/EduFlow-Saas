const { registerSchema } = require("../validators/authValidator");
const { createSchool } = require("../services/authService");

async function register(req, res) {
  try {
    // Validate request data
    const validatedData = registerSchema.parse(req.body);

    // Create school
    const school = await createSchool({
      name: validatedData.schoolName,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address,
    });

    res.status(201).json({
      success: true,
      message: "School registered successfully",
      school,
    });

  } catch (error) {

    // Validation errors
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  register,
};