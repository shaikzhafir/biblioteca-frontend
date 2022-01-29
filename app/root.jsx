import { LiveReload, Outlet, Links } from "remix";
import boostrapStyles from "bootstrap/dist/css/bootstrap.css";
import globalStylesUrl from "./styles/globals.css";
import navbarStyles from "./components/Navbar.css";
import Navbar from "./components/Navbar";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: boostrapStyles,
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: navbarStyles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>La biblioteca!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>

        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
