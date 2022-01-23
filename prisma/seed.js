const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getAllBooks().map((book) => {
      return db.book.create({ data: book });
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
