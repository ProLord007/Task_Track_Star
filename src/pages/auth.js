import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Container, Image, Signup } from "../Styles/auth/login";
import Login from "../Containers/auth/Login";
import Register from "../Containers/auth/Register";

const Auth = () => {
  const history = useHistory();
  const params = useParams();
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);
  window.addEventListener("resize", () => {
    setWindowSize(window.screen.availWidth);
  });
  return (
    <Container>
      {windowSize > 786 && <Image src="/TaskStarLogo.png" alt="" />}
      {params.component === "login" && (
        <>
          <Login size={windowSize} />
          <Signup size={windowSize}>
            Don't have an account?
            <Button onClick={() => history.push("/auth/register")}>
              Register
            </Button>
          </Signup>
        </>
      )}
      {params.component === "register" && (
        <>
          <Register size={windowSize} />
          <Signup size={windowSize}>
            Already have an account?
            <Button onClick={() => history.push("/auth/login")}>Login</Button>
          </Signup>
        </>
      )}
    </Container>
  );
};

export default Auth;
