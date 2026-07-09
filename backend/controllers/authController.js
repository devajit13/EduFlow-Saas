const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  registerSchema,
  loginSchema,
} = require("../validators/authValidator");

const {
  createSchool,
  createUser,
  findUserByEmail,
} = require("../services/authService");

// ==========================
// REGISTER
// ==========================
async function register(req, res) {
  try {
    console.log("========== REGISTER START ==========");

    // 1. Request Body
    console.log("1. Request Body:");
    console.log(req.body);

    // 2. Validate
    const data = registerSchema.parse(req.body);
    console.log("2. Validation Passed");

    // 3. Existing User Check
    const existingUser = await findUserByEmail(data.email);
    console.log("3. Existing User Checked");

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // 4. Create School
    console.log("4. Creating School...");

    const school = await createSchool({
      name: data.schoolName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });

    console.log("5. School Created");
    console.log(school);

    // 5. Hash Password
    console.log("6. Hashing Password...");

    const hashedPassword = await bcrypt.hash(data.password, 10);

    console.log("7. Password Hashed");

    // 6. Create User
    console.log("8. Creating User...");

    const user = await createUser({
      name: data.adminName,
      email: data.email,
      password: hashedPassword,
      role: "ADMIN",
      schoolId: school.id,
    });

    console.log("9. User Created");
    console.log(user);

    return res.status(201).json({
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
    console.error("========== REGISTER ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// ==========================
// LOGIN
// ==========================
async function login(req, res) {
  try {
    console.log("========== LOGIN START ==========");
    console.log(req.body);

    const data = loginSchema.parse(req.body);

    const user = await findUserByEmail(data.email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("========== LOGIN ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  register,
  login,
};