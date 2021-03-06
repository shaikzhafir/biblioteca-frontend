import { Link } from "react-router-dom";
import stylesUrl from "./Navbar.css";
import { getUserId } from "~/utils/session.server";
import { useLoaderData } from "remix";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

const Navbar = ({ userId }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              La Biblioteca
            </Link>
            {userId ? (
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
              {userId ? (
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
