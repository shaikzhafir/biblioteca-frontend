import { LiveReload, Outlet, Links, Scripts, useLoaderData } from "remix";
import boostrapStyles from "bootstrap/dist/css/bootstrap.css";
import globalStylesUrl from "./styles/globals.css";

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
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
