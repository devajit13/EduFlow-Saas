const { prisma } = require("../services/authService");

async function dashboard(req, res) {
  try {
    // Find the school of the logged-in admin
    const school = await prisma.school.findUnique({
      where: {
        id: req.user.schoolId,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Dashboard loaded successfully",
      admin: {
        id: req.user.id,
        role: req.user.role,
        schoolId: req.user.schoolId,
      },
      school: school,
      statistics: {
        totalStudents: 0,
        totalTeachers: 0,
        totalClasses: 0,
        totalSubjects: 0,
        totalFees: 0,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  dashboard,
};