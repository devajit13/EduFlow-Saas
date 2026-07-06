const express = require("express");
const router = express.Router();

const { register } = require("../controllers/authController");

// Register School
router.post("/register", register);

module.exports = router;