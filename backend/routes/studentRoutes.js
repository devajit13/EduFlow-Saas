const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const authMiddleware = require("../middleware/authMiddleware");

// Get all students
router.get("/", authMiddleware, getStudents);

// Create student
router.post("/", authMiddleware, createStudent);

// Update student
router.put("/:id", authMiddleware, updateStudent);

// Delete student
router.delete("/:id", authMiddleware, deleteStudent);

module.exports = router;