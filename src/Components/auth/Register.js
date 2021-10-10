import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Modal, Head, Form, LoginButton } from "../../Styles/auth/login";
import CustomInput from "./Input";
import { registerUser } from "../../services/auth";
import { setUserData } from "../../slices/userSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validConfirm, setValidConfirm] = useState(true);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateName, setValidateName] = useState(false);
  const [validateConfirm, setValidateConfirm] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
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

    let nameError = "";
    let nameValid = name.length > 0;
    if (validateName) {
      nameError = nameValid ? "" : "Please enter your Name";
      setValidName(nameValid);
    }

    let passwordError = "";
    let passwordValid = password.length >= 6;
    if (validatePassword) {
      passwordError = passwordValid
        ? ""
        : "Password must be at least 6 characters";
      setValidPassword(passwordValid);
    }

    let confirmError = "";
    let confirmValid =
      password === confirmPassword && confirmPassword.length > 6;
    if (validateConfirm) {
      confirmError = confirmValid
        ? ""
        : "Confirm Password must be same as Password";
      setValidConfirm(confirmValid);
    }
    setError({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirm: confirmError,
    });
  }, [
    email,
    name,
    password,
    confirmPassword,
    validateEmail,
    validatePassword,
    validateName,
    validateConfirm,
  ]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        email: email,
        full_name: name,
        password: password,
      });
      dispatch(setUserData(response));
      history.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <RegisterModal>
      <Head>Join Us</Head>
      <Form autoComplete="off" onSubmit={handleRegister}>
        <CustomInput
          valid={validName}
          error={error.name}
          set={setName}
          validate={setValidateName}
          type="text"
          label="Name"
          icon="bi:person"
        />
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
        <CustomInput
          valid={validConfirm}
          error={error.confirm}
          set={setConfirmPassword}
          validate={setValidateConfirm}
          type="password"
          label="Confirm Password"
          icon="bi:shield-lock"
        />
        <AuthButton
          type="submit"
          disabled={
            !validEmail || !validPassword || !validConfirm || !validName
          }
          onClick={() => {
            setValidatePassword(true);
            setValidateEmail(true);
            setValidateConfirm(true);
            setValidateName(true);
          }}
        >
          Register
        </AuthButton>
      </Form>
    </RegisterModal>
  );
};

export default Register;

const RegisterModal = styled(Modal)`
  min-height: 500px;
  margin-top: 0px;
`;

const AuthButton = styled(LoginButton)``;