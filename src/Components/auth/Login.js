import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import {
  Form,
  Head,
  LoginButton,
  Modal,
  Rule,
  Google,
} from "../../Styles/auth/login";
import { googleAuth, loginUser } from "../../services/auth";
import { setUserData } from "../../slices/userSlice";
import CustomInput from "./Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const emailRegex = /\S+@\S+\.\S+/;
    let emailError = "";
    let emailValid = emailRegex.test(email);
    if (validateEmail) {
      emailError = emailValid ? "" : "Please enter a valid email";
      setValidEmail(emailValid);
    }

    let passwordError = "";
    let passwordValid = password.length >= 6;
    if (validatePassword) {
      passwordError = passwordValid
        ? ""
        : "Password must be at least 6 characters";
      setValidPassword(passwordValid);
    }
    setError({ email: emailError, password: passwordError });
  }, [email, password, validateEmail, validatePassword]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      dispatch(setUserData(response));
      history.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };
  const responseGoogle = async (res) => {
    try {
      const response = await googleAuth({ token: res.tokenId });
      dispatch(setUserData(response));
      history.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal>
      <Head>Welcome to TaskStar!</Head>
      <Form onSubmit={handleLogin} autoComplete="off">
        <CustomInput
          valid={validEmail}
          error={error.email}
          set={setEmail}
          validate={setValidateEmail}
          type="email"
          label="Email"
          icon="carbon:email"
        />
        <CustomInput
          valid={validPassword}
          error={error.password}
          set={setPassword}
          validate={setValidatePassword}
          type="password"
          label="Password"
          icon="bi:shield-lock"
        />
        <LoginButton
          type="submit"
          disabled={!validEmail || !validPassword}
          onClick={() => {
            setValidatePassword(true);
            setValidateEmail(true);
          }}
        >
          Login
        </LoginButton>
        <Rule />
        <Google
          clientId={
            "307894135123-ufb7fmgsh0sqm56uqh126c12i651om7l.apps.googleusercontent.com"
          }
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          theme="light"
        />
      </Form>
    </Modal>
  );
};

export default Login;
