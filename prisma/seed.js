const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getAllBooks().map((book) => {
      return db.book.create({ data: book });
    })
  );
  await Promise.all(
    getAllUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();

function getAllBooks() {
  return [
    {
      title: "The Master and Margarita",
      author: "Mikhail Bulgakov",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      title: "Heaven",
      author: "Mieko Kawakami",
    },
  ];
}

function getAllUsers() {
  return [
    {
      username: "shaik",
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  ];
}
