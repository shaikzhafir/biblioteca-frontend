// this is for layout only

import { Link, useSearchParams } from "react-router-dom";
import stylesUrl from "../components/Navbar.css";
import { getUserId } from "~/utils/session.server";
import { useLoaderData, Outlet } from "remix";
import { logout } from "~/utils/session.server";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let action = async ({ request }) => {
  return logout(request);
};

export let loader = async ({ request }) => {
  console.log(`request from nav`);
  let userId = await getUserId(request);
  const data = {
    userId,
  };
  return data;
};

const BooksLayout = () => {
  const [searchParams] = useSearchParams();
  const data = useLoaderData();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              La Biblioteca
            </Link>
            {data.userId ? (
              <ul className="navbar-custom my-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/books/list">
                    List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/books/add">
                    Add
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          <ul className="navbar-custom my-3 navbar-nav-scroll">
            <li className="nav-item">
              {data.userId ? (
                <form method="post" action="/logout">
                  <input
                    type="hidden"
                    name="redirectTo"
                    value={searchParams.get("redirectTo") ?? undefined}
                  />
                  <button className="nav-link" type="submit">
                    Logout
                  </button>
                </form>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default BooksLayout;
