import { Link, LoaderFunction } from "react-router-dom";
import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export let loader = async () => {
  const data = {
    books: await db.book.findMany(),
  };
  return data;
};

export default function ListBooksRoute() {
  const data = useLoaderData();

  return (
    <div className="container mt-5">
      <h2>List of books</h2>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <Link to="../books/add">Add a book</Link>
    </div>
  );
}
