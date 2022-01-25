import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../TextField";
import { CardHeading, CardWrapper, CardButton } from "../styles/CardStyles";

function LoginForm({ error }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  // const navigation = useNavigation();
  const submitHandler = (e) => {
    console.log(details);
    e.preventDefault();

    //  navigation.navigate("/Home");
  };
  const validate = Yup.object().shape({
    username: Yup.string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required(),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  return (
    <Formik validationSchema={validate}>
      {(formik) => (
        <div>
          <CardWrapper>
            <CardHeading>Login</CardHeading>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <Form onSubmit={submitHandler}>
              <TextField
                className="input"
                label="Username"
                name="username"
                type="text"
                onChange={(e) =>
                  setDetails({
                    ...details,
                    username: e.target.value,
                  })
                }
              />
              <TextField
                className="input"
                label="Password"
                name="password"
                type="password"
                onChange={(e) =>
                  setDetails({
                    ...details,
                    password: e.target.value,
                  })
                }
              />
              <CardButton type="submit">Login</CardButton>
            </Form>
          </CardWrapper>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
