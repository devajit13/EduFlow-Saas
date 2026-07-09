const express = require("express");

const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");

const {
  dashboard,
} = require("../controllers/adminController");

// Protected Dashboard Route
router.get("/dashboard", authenticateToken, dashboard);

module.exports = router;