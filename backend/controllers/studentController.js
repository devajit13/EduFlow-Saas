const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// =====================================
// Create Student
// =====================================
const createStudent = async (req, res) => {
  try {
    const { name, email, phone, className, rollNo } = req.body;

    if (!name || !email || !phone || !className || !rollNo) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingStudent = await prisma.student.findUnique({
      where: { email },
    });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    const student = await prisma.student.create({
      data: {
        name,
        email,
        phone,
        className,
        rollNo,
        schoolId: user.schoolId,
      },
    });

    res.status(201).json({
      success: true,
      student,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =====================================
// Get Students
// =====================================
const getStudents = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    const students = await prisma.student.findMany({
      where: {
        schoolId: user.schoolId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      students,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =====================================
// Update Student
// =====================================
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, phone, className, rollNo, status } = req.body;

    const student = await prisma.student.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        className,
        rollNo,
        status,
      },
    });

    res.json({
      success: true,
      student,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update student",
    });
  }
};

// =====================================
// Delete Student
// =====================================
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.student.delete({
      where: {
        id,
      },
    });

    res.json({
      success: true,
      message: "Student deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete student",
    });
  }
};

module.exports = {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};