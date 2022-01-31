import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CardHeading, CardWrapper, CardButton } from "../styles/FormStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { success_login } from "../../redux/login";
import TextField from "../Globals/TextField";

const validate = Yup.object({
  username: Yup.string()
    .matches(/^([^0-9]*)$/, "username should not contain numbers")
    .required(),
  password: Yup.string()
    .required()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Geçersiz e-mail adresi").required(),
});

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const login = useSelector((state) => state.login);
  const navigation = useNavigate();
  console.log(login);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (user.username === username && user.password === password) {
  //     dispatch(success_login());
  //     navigation("/home");
  //   } else {
  //     alert("Username or password not correct.");
  //   }
  // }

  console.log(username, password);
  return (
    <div>
      <CardWrapper>
        <CardHeading>Login</CardHeading>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validate}
          onSubmit={(values) => {
            setUsername(values.username);
            setPassword(values.password);
            if (user.username === username && user.password === password) {
              dispatch(success_login());
              navigation("/");
            } else {
              <div>User not foundd.....</div>;
            }
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                className="input"
                label="Username"
                name="username"
                type="text"
                onChange={handleChange}
                values={values.username}
              />
              {errors.username ? errors.username : null}
              <TextField
                className="input"
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                values={values.email}
              />
              {errors.email ? errors.email : null}
              <TextField
                className="input"
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                values={values.password}
              />
              {errors.password ? errors.password : null}
              <CardButton type="submit">Login</CardButton>
            </Form>
          )}
        </Formik>
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
