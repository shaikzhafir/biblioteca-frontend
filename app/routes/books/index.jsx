import { Link, LoaderFunction } from "react-router-dom";
import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export let loader = async () => {
  const data = {
    books: await db.book.findMany(),
  };
  return data;
};

export default function BooksRoute() {
  const data = useLoaderData();

  return (
    <div className="container mt-5">
      <h2>Books are here</h2>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <Link to="./add">Add a book</Link>
      <br></br>
      <Link to="./list">List of books</Link>
    </div>
  );
}
