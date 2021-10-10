import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { loginUser } from "../../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });

  const emailRegex = /\S+@\S+\.\S+/;

  useEffect(() => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    const response = loginUser({ email, password });
  };

  return (
    <Container>
      <Modal>
        <Head>Welcome to TaskStar!</Head>
        <Form onSubmit={handleLogin}>
          <InputCover>
            <Label for="email">Email</Label>
            <InputBox style={{ borderColor: validEmail ? "lightgray" : "red" }}>
              <Icon
                icon="carbon:email"
                width="20"
                color={!validEmail ? "red" : "#212020"}
              />
              <Input
                id="email"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => setValidateEmail(true)}
              />
            </InputBox>
            {!validEmail && <HelperText>{error.email}</HelperText>}
          </InputCover>
          <InputCover>
            <Label for="password">Password</Label>
            <InputBox
              style={{ borderColor: validPassword ? "lightgray" : "red" }}
            >
              <Icon
                icon="bi:shield-lock"
                width="20"
                color={!validPassword ? "red" : "#212020"}
              />
              <Input
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => setValidatePassword(true)}
              />
            </InputBox>
            {!validPassword && <HelperText>{error.password}</HelperText>}
          </InputCover>
          <Button
            type="submit"
            disabled={!validEmail || !validPassword}
            onClick={() => {
              setValidatePassword(true);
              setValidateEmail(true);
            }}
          >
            Login
          </Button>
        </Form>
      </Modal>
      <Signup>
        Don't have an account? <Button>Register</Button>
      </Signup>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Modal = styled.div`
  height: 65vh;
  width: 35vw;
  margin-top: -90px;
  border-radius: 5px;
  /* box-shadow: rgba(255, 255, 255, 0.16) 0px 10px 36px 0px,
    rgba(255, 255, 255, 0.06) 0px 0px 0px 1px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  background: wheat;
`;

const Head = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: #212020;
  margin-bottom: 15px;
`;
const Signup = styled.div`
  color: wheat;
  position: absolute;
  top: 4vh;
  right: 2vw;
  background: none;
  font-size: smaller;
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: none;
  cursor: pointer;
  background-color: wheat;
  border: 3px solid #6e4529;
  color: #6e4529;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const InputCover = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: column;
`;
const Input = styled.input`
  /* padding: 10px 15px; */
  height: 100%;
  border: none;
  margin-left: 10px;
  flex: 1;
  border-radius: 4px;
  outline: none;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

const InputBox = styled.div`
  display: flex;
  height: 40px;
  width: 320px;
  align-items: center;
  border-radius: 4px;
  padding-left: 10px;
  background-color: white;
  border: 1px solid lightgray;
`;
const HelperText = styled.span`
  font-size: 12px;
  margin-top: 1px;
  color: red;
`;
