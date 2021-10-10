import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Container, Signup } from "../Styles/auth/login";
import Login from "../Containers/auth/Login";
import Register from "../Containers/auth/Register";

const Auth = () => {
  const history = useHistory();
  const params = useParams();

  return (
    <Container>
      {params.component === "login" && (
        <>
          <Login />
          <Signup>
            Don't have an account?
            <Button onClick={() => history.push("/auth/register")}>
              Register
            </Button>
          </Signup>
        </>
      )}
      {params.component === "register" && (
        <>
          <Register />
          <Signup>
            Already have an account?
            <Button onClick={() => history.push("/auth/login")}>Login</Button>
          </Signup>
        </>
      )}
    </Container>
  );
};

export default Auth;
