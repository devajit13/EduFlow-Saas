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
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

module.exports = {
  createSchool,
  createUser,
  findUserByEmail,
  prisma,
};