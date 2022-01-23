import { redirect } from "remix";
import { db } from "~/utils/db.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const author = form.get("author");

  const fields = { title, author };

  const book = await db.book.create({ data: fields });
  return redirect("/books");
};

export default function AddBookRoute() {
  return (
    <div className="container mt-5">
      <h3>Add a book you read</h3>
      <form method="POST">
        <div>
          <label type="text" name="title">
            Title: <input type="text" name="title" />
          </label>
        </div>
        <div>
          <label type="text" name="author">
            Author: <input type="text" name="author" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
