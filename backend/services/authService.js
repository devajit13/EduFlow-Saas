const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create School
async function createSchool(data) {
  return await prisma.school.create({
    data,
  });
}

// Create User
async function createUser(data) {
  return await prisma.user.create({
    data,
  });
}

// Find User By Email
async function findUserByEmail(email) {
  console.log("================================");
  console.log("Searching user with email:");
  console.log(email);

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  console.log("Database returned:");
  console.log(user);
  console.log("================================");

  return user;
}

module.exports = {
  prisma,
  createSchool,
  createUser,
  findUserByEmail,
};