import {
  useActionData,
  json,
  Link,
  useSearchParams,
  redirect,
  Form,
} from "remix";
import { login, createUserSession } from "~/utils/session.server";

const badRequest = (data) => {
  json(data, { status: 400 });
};

export const action = async ({ request }) => {
  let form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = "/books";

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    throw json({ status: 404 });
  }
  const user = await login({ username, password });
  console.log({ user });
  if (!user) {
    throw json({ status: 404 });
  }

  return createUserSession(user.id, redirectTo);
};

export default function Login() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <>
      <nav className="navbar my-3 navbar-expand-lg navbar-light">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              La Biblioteca
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>login here</h1>
        <Form method="post">
          {/* <input
              type="hidden"
              name="redirectTo"
              value={searchParams.get("redirectTo") ?? undefined}
            /> */}
          {/* <fieldset>
              <legend className="sr-only">Login or Register?</legend>
              <label>
                <input type="radio" name="loginType" value="login" defaultChecked />{" "}
                Login
              </label>
              <label>
                <input type="radio" name="loginType" value="register" /> Register
              </label>
            </fieldset> */}
          <div>
            <label htmlFor="username-input">Username</label>
            <input type="text" id="username-input" name="username" required />
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}
