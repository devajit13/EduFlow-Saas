const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createSchool(data) {
  return prisma.school.create({
    data,
  });
}

async function createUser(data) {
  return prisma.user.create({
    data,
  });
}

async function findUserByEmail(email) {
  console.log("================================");
  console.log("Searching user with email:");
  console.log(email);

  const user = await prisma.user.findUnique({
    where: {
      email,
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