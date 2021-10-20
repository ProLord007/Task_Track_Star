import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Container, Image, Signup } from "../Styles/auth/login";
import Login from "../Containers/auth/Login";
import Register from "../Containers/auth/Register";
import { AnimatePresence } from "framer-motion";

const Auth = () => {
  const history = useHistory();
  const params = useParams();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });
  return (
    <Container>
      {windowSize > 786 && (
        <Image
          src="/TaskStarLogo.png"
          alt=""
          animate={{ opacity: 1, rotateZ: 360, transition: { duration: 0.5 } }}
          initial={{ opacity: 0 }}
        />
      )}
      {params.component === "login" && (
        <AnimatePresence>
          <Login size={windowSize} />
          <Signup
            size={windowSize}
            exit={{ x: 500 }}
            initial={{ x: 1000, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", damping: 15 },
            }}
          >
            Don't have an account?
            <Button
              onClick={() => history.push("/auth/register")}
              animate={{
                scale: [1.05, 1],
                transition: { repeat: Infinity, duration: 0.5 },
              }}
            >
              Register
            </Button>
          </Signup>
        </AnimatePresence>
      )}
      {params.component === "register" && (
        <AnimatePresence>
          <Register size={windowSize} />
          <Signup
            size={windowSize}
            exit={{ x: 500 }}
            initial={{ x: 1000, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", damping: 15 },
            }}
          >
            Already have an account?
            <Button
              onClick={() => history.push("/auth/login")}
              animate={{
                scale: [1.05, 1],
                transition: { repeat: Infinity, duration: 0.5 },
              }}
            >
              Login
            </Button>
          </Signup>
        </AnimatePresence>
      )}
    </Container>
  );
};

export default Auth;
