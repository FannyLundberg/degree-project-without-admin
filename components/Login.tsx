import { Field, Form, Formik } from "formik";
import { useState } from "react";

interface Values {
  username: string;
  password: string;
}

function Login() {
  const [wrongInput, setWrongInput] = useState(false);

  // Kontroll om användaren har angett rätt uppgifter
  function checkUser(values: Values) {
    let username: string = values.username;
    let password: string = values.password;

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("loggedIn", "true");
          location.href = "admin/loggedIn";
        } else {
          setWrongInput(true);
        }
      });
  }

  // Felmeddelande om användaren angett fel uppgifter
  let wrongCredentials = <></>;
  if (wrongInput) {
    wrongCredentials = <p>Felaktiga uppgifter, vänligen prova igen.</p>;
  }

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values: Values, { resetForm }) => {
          checkUser(values);
          resetForm({
            values: {
              username: "",
              password: "",
            },
          });
        }}
      >
        <Form>
          <Field
            id="username"
            name="username"
            placeholder="Användarnamn"
            type="text"
            required
            data-cy="usernameAdmin"
          />
          <Field
            id="password"
            name="password"
            placeholder="Lösenord"
            type="password"
            required
            data-cy="usernamePassword"
          />
          <button data-cy="loginSubmit" type="submit" aria-label="Logga in">
            Logga in
          </button>
        </Form>
      </Formik>
      {wrongCredentials}
    </>
  );
}

export default Login;
