const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const authRoutes = require("./routes/auth");

const app = express();

// ================================
// Middlewares
// ================================
app.use(cors());
app.use(express.json());

// ================================
// Debug Middleware
// ================================
app.use((req, res, next) => {
  console.log("========== REQUEST ==========");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers["content-type"]);
  console.log("Body:", req.body);
  console.log("=============================");
  next();
});

// ================================
// Home Route
// ================================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EduFlow Backend Running",
  });
});

// ================================
// Debug Route
// ================================
app.get("/debug", async (req, res) => {
  try {
    const schools = await prisma.school.findMany();
    const users = await prisma.user.findMany();

    res.json({
      success: true,
      databaseUrl: process.env.DATABASE_URL,
      totalSchools: schools.length,
      totalUsers: users.length,
      schools,
      users,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================================
// Authentication Routes
// ================================
app.use("/api/auth", authRoutes);

// ================================
// Start Server
// ================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});