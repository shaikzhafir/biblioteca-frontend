import { Link, LoaderFunction } from "react-router-dom";
import { redirect, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { getUserId } from "~/utils/session.server";

export let loader = async ({ request }) => {
  let userId = await getUserId(request);
  if (!userId) {
    return redirect("/");
  }
  console.log(userId);
  const data = {
    books: await db.book.findMany(),
    userId: userId,
  };
  return data;
};

export default function ListBooksRoute() {
  const data = useLoaderData();
  console.log(data.userId);
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
