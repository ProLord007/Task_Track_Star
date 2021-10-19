import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Head,
  LoginButton,
  Modal,
  Rule,
  Google,
} from "../../Styles/auth/login";
import { googleAuth, loginUser } from "../../services/auth";
import { setToken, setUserData } from "../../slices/userSlice";
import CustomInput from "../../Components/auth/Input";
import { getOrgData } from "../../services/organizations";
import { setAllData } from "../../slices/orgsSlice";
import { isLoading } from "../../slices/miscSlice";

const Login = ({ size }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

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
    dispatch(isLoading(true));
    try {
      const response = await loginUser({ email, password });
      dispatch(setUserData(response));
      const res = await getOrgData({ org_id: JSON.parse(response).org_id });
      if (res) {
        dispatch(isLoading(false));
        console.log(res);
      }
      dispatch(setAllData(JSON.parse(res)));
      dispatch(setToken(JSON.parse(response).token));
      // history.push("/dashboard");
    } catch (e) {
      console.log(e);
      dispatch(isLoading(false));
    }
  };
  const responseGoogle = async (res) => {
    dispatch(isLoading(true));
    try {
      const response = await googleAuth({ token: res.tokenId });
      console.log(response);
      dispatch(setUserData(response));
      dispatch(isLoading(false));
      // history.push("/dashboard");
    } catch (e) {
      console.log(e);
      dispatch(isLoading(false));
    }
  };
  return (
    <Modal
      size={size}
      initial={{
        y: 1000,
        opacity: 0,
        transition: { type: "spring", damping: 15 },
      }}
      exit={{ y: 1000 }}
      animate={{ y: 0, opacity: 1 }}
    >
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
          whileHover={{
            scale: [1, 1.05, 1],
            transition: { repeat: Infinity, duration: 0.5 },
          }}
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
          clientId="307894135123-ufb7fmgsh0sqm56uqh126c12i651om7l.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          // onFailure={responseGoogle}
          theme="light"
          disabled={process.env.NODE_ENV === "development"}
        />
      </Form>
    </Modal>
  );
};

export default Login;
