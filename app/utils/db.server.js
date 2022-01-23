const { PrismaClient } = require("@prisma/client");

let db;
let localDb;
let prisma;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!localDb) {
    console.log("im running from localDb");
    localDb = new PrismaClient();
  }
  db = localDb;
}

export { db };
