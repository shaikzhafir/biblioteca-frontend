import { Link } from "react-router-dom";
import stylesUrl from "../styles/index.css";
import { Outlet } from "react-router-dom";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

const IndexRoute = () => (
  <>
    <div className="container mt-5 text-center">
      <h1>Donde Esta La Biblioteca?</h1>
      <Link to="/books">My Books</Link>
    </div>
  </>
);

export default IndexRoute;
